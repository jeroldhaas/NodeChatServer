function Message(ts, u, b) {
    this.timestamp = ts || Date.now()
    this.username = u || "nobody"
    this.body = b || ""
}

function Chat() {
    this.messages = []
}