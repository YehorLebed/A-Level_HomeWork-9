async function getAllMessagesFromServer() {
    const response = await fetch('http:/localhost:3000/messages');
    const data = await response.json();
    return data;
}

async function getMessageFromServerFromId(id) {
    const response = await fetch(`http:/localhost:3000/messages?_start=${id}&_limit=10`);
    const data = await response.json();
    return data;
}

async function sendMessageToServer(data) {
    const response = await fetch(`http:/localhost:3000/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}