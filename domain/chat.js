function Message(ts, b) {
    this.timestamp = ts || Date.now()
    this.body = b || ""
}

function Chat() {
    this.messages = []
}