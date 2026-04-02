require("dotenv").config();

const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SOS server is running");
});

console.log("SID loaded:", !!process.env.TWILIO_ACCOUNT_SID);
console.log("TOKEN loaded:", !!process.env.TWILIO_AUTH_TOKEN);
console.log("PHONE loaded:", !!process.env.TWILIO_PHONE_NUMBER);

if (
  !process.env.TWILIO_ACCOUNT_SID ||
  !process.env.TWILIO_AUTH_TOKEN ||
  !process.env.TWILIO_PHONE_NUMBER
) {
  console.error("Twilio environment variables are missing.");
  process.exit(1);
}

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

function isValidIndianNumber(phone) {
  return /^\+91\d{10}$/.test(phone);
}

app.post("/send-sos", async (req, res) => {
  const { to, message } = req.body;

  console.log("Incoming body:", req.body);

  if (!to || !message) {
    return res.status(400).json({
      success: false,
      error: 'Missing "to" or "message"'
    });
  }

  if (!isValidIndianNumber(to)) {
    return res.status(400).json({
      success: false,
      error: "Invalid phone number format. Use +91XXXXXXXXXX"
    });
  }

  try {
    const sms = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to
    });

    console.log("Twilio message created:");
    console.log("SID:", sms.sid);
    console.log("To:", sms.to);
    console.log("Status:", sms.status);
    console.log("ErrorCode:", sms.errorCode);
    console.log("ErrorMessage:", sms.errorMessage);

    res.json({
      success: true,
      sid: sms.sid,
      to: sms.to,
      status: sms.status,
      errorCode: sms.errorCode,
      errorMessage: sms.errorMessage
    });
  } catch (err) {
    console.error("Twilio error full:", err);

    res.status(500).json({
      success: false,
      error: err.message,
      code: err.code || null,
      moreInfo: err.moreInfo || null
    });
  }
});

app.get("/message-status/:sid", async (req, res) => {
  const { sid } = req.params;

  try {
    const msg = await client.messages(sid).fetch();

    res.json({
      success: true,
      sid: msg.sid,
      to: msg.to,
      status: msg.status,
      errorCode: msg.errorCode,
      errorMessage: msg.errorMessage,
      dateCreated: msg.dateCreated,
      dateSent: msg.dateSent,
      dateUpdated: msg.dateUpdated
    });
  } catch (err) {
    console.error("Fetch status error:", err);

    res.status(500).json({
      success: false,
      error: err.message,
      code: err.code || null
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});