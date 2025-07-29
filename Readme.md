# 📬 Webhook Logger

A simple Node.js application that captures incoming webhooks, logs the complete request/response details, and exposes a public URL using `ngrok`. Ideal for testing platforms like **Juspay**, **Razorpay**, **Stripe**, etc.

---

## 🚀 Features

- Logs:
  - Request headers & body
  - Response headers & body
  - URL, method, and timestamp
- Outputs all webhook data to `webhook_logs.txt`
- Easily testable via ngrok tunnel

---

## 📁 Project Structure

```
webhook-logger/
├── server.js              # Main webhook server
├── webhook_logs.txt       # Webhook logs
├── package.json
├── package-lock.json
└── node_modules/
```

---

## 🛠 Setup Instructions

### 1. Clone / Download

```bash
cd /your/project/path
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Webhook Server

```bash
npm start
```

> Server will run on `http://localhost:3000/webhook`

---

## 🌍 Expose Locally via Ngrok

### 1. Install ngrok (if not already)

```bash
brew install --cask ngrok
```

### 2. Authenticate ngrok (first-time only)

```bash
ngrok config add-authtoken <your_token>
```

> Get your token from https://dashboard.ngrok.com/get-started/your-authtoken

### 3. Start ngrok Tunnel

```bash
ngrok http 3000
```

You’ll get a public URL like:

```
https://abcd1234.ngrok-free.app/webhook
```

Use this in **Juspay** or any external service to test webhooks.

---

## 📂 Webhook Logs Format (`webhook_logs.txt`)

```json
{
  "timestamp": "2025-07-29T15:30:45.789Z",
  "method": "POST",
  "url": "/webhook",
  "requestHeaders": { ... },
  "requestBody": { ... },
  "responseHeaders": { ... },
  "responseBody": "Webhook received successfully"
}
---
```

---

## 🔧 Scripts

```bash
npm start        # Starts the webhook server
npm run dev      # (Optional) Use with nodemon for live reload (after installing nodemon)
```

---

## 📌 Notes

- Only `POST` requests are handled (used by most webhook services)
- All logs are appended to `webhook_logs.txt` for persistent capture
- Make sure your local server is running when ngrok is active

---

## 🙌 Credits

Built with ❤️ by **Sarish RV**  
Feel free to extend or contribute!
