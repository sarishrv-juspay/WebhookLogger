# 📬 Webhook Logger

A simple Node.js application that captures incoming webhooks, logs the complete request/response details, and exposes a public URL using **Cloudflare Tunnel**. Perfect for testing platforms like **Juspay**, **Razorpay**, **Stripe**, and others in your local development environment.

---

## 🚀 Features

- ✅ Logs complete request and response:
  - Request headers & body
  - Response headers & body
  - HTTP method, URL, and timestamp
- 📦 Logs are persisted in `webhook_logs.txt`
- 🌐 Instantly share local server via Cloudflare Tunnel (no account required)
- 🔄 Optional live-reload using `nodemon`

---

## 📁 Project Structure

```

webhook-logger/
├── server.js             # Main Express server that handles webhooks
├── webhook\_logs.txt      # Output log file for captured webhooks
├── package.json          # Project dependencies and scripts
├── package-lock.json
└── node\_modules/

````

---

## 🛠 Setup Instructions

### 1️⃣ Clone or Download the Repo

```bash
git clone https://github.com/your-username/webhook-logger.git
cd webhook-logger
````

Or if you already have the code:

```bash
cd /your/project/path
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Webhook Server

```bash
npm start
```

> This runs the server at:
> `http://localhost:3000/webhook`

---

## 🌍 Expose Webhook Using Cloudflare Tunnel

### ✅ Step 1: Install `cloudflared`

If you're on macOS with Homebrew:

```bash
brew install cloudflared
```

Or download from: [https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install)

### ✅ Step 2: Start a Public Tunnel

```bash
cloudflared tunnel --url http://localhost:3000
```

After a few seconds, you’ll see output like:

```
https://your-random-subdomain.trycloudflare.com
```

> Use `https://your-random-subdomain.trycloudflare.com/webhook` as the webhook URL in **Juspay**, **Stripe**, or any external service.

---

## 📂 Webhook Logs Format

Logs are written into `webhook_logs.txt` in the following format:

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

## 🔧 Available Scripts

```bash
npm start        # Start server (production mode)
npm run dev      # Start with live-reload (requires nodemon)
```

> To install `nodemon` globally:

```bash
npm install -g nodemon
```

---

## 🧪 Test Locally

### Using curl:

```bash
curl -X POST https://your-public-url.trycloudflare.com/webhook \
  -H "Content-Type: application/json" \
  -d '{"event":"test.event","message":"Hello from CLI"}'
```

### You should see:

```bash
Webhook received successfully
```

And an entry in `webhook_logs.txt`.

---

## ⚠️ Notes

* Only `POST` requests are supported (as most webhooks use POST)
* Every Cloudflare tunnel generates a **new random URL** unless configured via a named tunnel
* Server must be **actively running** to receive requests

---

## 🐞 Debugging Tips

* Confirm the server is running: `http://localhost:3000/webhook`
* Use the CLI output of `cloudflared` to get the tunnel status
* Check `webhook_logs.txt` for every incoming request
* Use `console.log()` in `server.js` for extra debugging if needed

---

## 🙌 Credits

Built with ❤️ by **Sarish RV**

> Contributions welcome!
> Feel free to extend or modify this for your custom webhook workflows.