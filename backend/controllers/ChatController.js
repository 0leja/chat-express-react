const ChatController = {
    sendMessage(ws, req) {
        ws.onconnection = message => {
            console.log('Connect');
        }
    }
}

module.exports = {ChatController}