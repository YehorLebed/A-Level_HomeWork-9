const CurrentId = createId(0);

window.onload = () => {
    defineUser();
    const response = getAllMessagesFromServer();
    response.then((data) => {
        createChat();
        Array.isArray(data) ? showMessagges(data) : showMessage(data);
        getMessagesAtInterval(1000);
    })
}


// ### --- FUNCTIONS WORK WITH USER --- ###
function defineUser() {
    // prompt с авторизацией пользователя
    let author = {};
    if (getUser()) {
        author = getUser();
        if (confirm(`Ваше имя ${author.name}?`)) return;
    }
    do {
        author.name = prompt(`Введите ваше имя:`, '');
        if (typeof author.name === 'string')
            author.name = author.name.trim();
    }
    while (!author.name || author.name === '')
    setUser(author);
}

function getUser() {
    // Получает имя пользователя из localStorage
    return JSON.parse(localStorage.getItem("author"));
}

function setUser(author) {
    // Записывает имя пользователя в localStorage
    localStorage.setItem("author", JSON.stringify(author));
}

function createId(id) {
    let currentId = id;
    return {
        setId: function (id) { currentId < id ? currentId = id : currentId },
        getId: function () { return currentId }
    }
}

// ### --- FUNCTION WORK WITH DOM --- ###
function createChat() {
    // Рендеринг чата
    const app = document.getElementById('app');
    app.innerHTML = "";

    const appMessageWindow = document.createElement('div');
    appMessageWindow.setAttribute('id', 'app-message-window');

    const appInputWindow = document.createElement('div');
    appInputWindow.setAttribute('id', 'app-input-window');

    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'textarea');
    textarea.onkeypress = (event) => {
        if (!(!event.shiftKey && event.key == 'Enter')) return;
        if (!textarea.value.trim() == '') {
            event.preventDefault();
            const message = createMessageObject();
            sendMessageToServer(message);
        }
        textarea.value = '';
    }

    const button = document.createElement('button');
    button.setAttribute('id', 'send');
    button.innerText = 'Send';
    button.onclick = () => {
        if (textarea.value.trim() == '') return;
        const message = createMessageObject();
        textarea.value = '';
        sendMessageToServer(message);
    }
    appInputWindow.appendChild(textarea);
    appInputWindow.appendChild(button);

    app.appendChild(appMessageWindow);
    app.appendChild(appInputWindow);
}

function showMessage(message) {
    // Отображает ОДНО сообщение
    const appMessageWindow = document.getElementById('app-message-window');
    CurrentId.setId(message.id);
    appMessageWindow.appendChild(createMessage(message));
}

function showMessagges(messages) {
    // отображает НЕСКОЛЬКО сообщений
    const appMessageWindow = document.getElementById('app-message-window');
    messages.forEach(message => {
        CurrentId.setId(message.id);
        appMessageWindow.appendChild(createMessage(message));
    });
    appMessageWindow.scrollTop = appMessageWindow.scrollHeight;
}

function createMessage(messageObj) {
    // Создание сообщения
    const messageType = defineMessageType(messageObj);
    const message = document.createElement('div');
    message.classList.add('message', messageType);

    const messageAuthor = document.createElement('div');
    messageAuthor.classList.add('message__author');
    messageAuthor.innerText = messageObj.author;

    const messageText = document.createElement('div');
    messageText.classList.add('message__text');
    messageText.innerText = messageObj.text;

    const messageDate = document.createElement('div');
    messageDate.classList.add('message__date');
    messageDate.innerText = convertTimestampToDateString(messageObj.timestamp);

    message.appendChild(messageAuthor);
    message.appendChild(messageText);
    message.appendChild(messageDate);

    return message;
}


// ### --- FUNCTIONS OTHER --- ###
function defineMessageType(messageObj) {
    // Определяет тип сообщения входящее/исходящее
    const user = getUser();
    let messageType;
    user.name === messageObj.author ?
        messageType = 'message-outcoming' :
        messageType = 'message-incoming';
    return messageType;
}

function convertTimestampToDateString(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
}

function getMessagesAtInterval(interval) {
    // Запрашивает сообщения с сервара с указаным интервалом
    setInterval(() => {
        try {
            const response = getMessageFromServerFromId(CurrentId.getId());
            response.then((data) => {
                Array.isArray(data) ? showMessagges(data) : showMessage(data);
            });
        } catch (error) {
            
        }
    }, interval);
}


// #### --- FUNCTIONS WORK WITH SERVER --- ####
function createMessageObject() {
    // Обрабатываем сообщение в textarea И отправляем на сервер
    const messageObj = {};

    const user = getUser();
    messageObj.author = user.name;

    const textarea = document.getElementById('textarea');
    const text = textarea.value.trim();
    messageObj.text = text;

    messageObj.timestamp = Date.now();

    return messageObj;
}