const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

const PORT = 3000;
const LOG_FILE = "webhook_logs.txt";

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/webhook", (req, res) => {
    const timestamp = new Date().toISOString();
    const logEntry = {
        timestamp,
        method: req.method,
        url: req.originalUrl,
        requestHeaders: req.headers,
        requestBody: req.body,
        responseHeaders: { "Content-Type": "text/plain" },
        responseBody: "Webhook received successfully"
    };

    const logLine = JSON.stringify(logEntry, null, 2) + "\n---\n";
    fs.appendFileSync(LOG_FILE, logLine);
    console.log(`[${timestamp}] Webhook captured and logged.`);

    res.set(logEntry.responseHeaders).status(200).send(logEntry.responseBody);
});

app.listen(PORT, () => {
    console.log(`🚀 Webhook listener running at http://localhost:${PORT}/webhook`);
});
