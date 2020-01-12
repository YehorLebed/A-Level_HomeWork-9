// ### Server functions ###
async function getDataFromServer(name) {
    if (typeof name != 'string') return;

    const response = await fetch(`http://localhost:3000/${name}`);
    const data = await response.json();

    return data;
}

async function sendDataToServer(data, name) {
    console.log(data);
    const response = await fetch(`http://localhost:3000/${name}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const result = await response.json();
}

async function modifyDataOnServer(data, name) {
    console.log(data)
    const response = await fetch(`http://localhost:3000/${name}/${data['id']}`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify(data)
    })
    const result = await response.json();
}

async function deleteDataFromServer(data, name) {
    const response = await fetch(`http://localhost:3000/${name}/${data[0]}`, {
        method: 'DELETE',
        body: ''
    })
    const result = await response.json();
    return result;
}
// ################


function commitChange(row, method) {
    const dataRow = row.querySelectorAll('input');
    const dataColumns = row.querySelectorAll('td');
    let currentData = {};

    if (method == 'modify') {
        console.log('modify')
        currentData = JSON.parse(localStorage.getItem('saveRow'));
        const saveData = localStorage.getItem('saveRow');

        let i = 0;
        for (let key of Object.keys(currentData)) {
            if (key == "id") {
                currentData[key] = row.firstChild.innerText;
                continue;
            }
            currentData[key] = dataRow[i].value;
            i++;
        }
        if (JSON.stringify(currentData) !== saveData) modifyDataOnServer(currentData, 'users');

    } else {
        console.log('add')
        const dataFormat = JSON.parse(localStorage.getItem('dataKeys'));
        let i = 0;
        for (let key of Object.keys(dataFormat)) {
            if (dataFormat[key] == "id") {
                currentData[dataFormat[key]] = row.firstChild.innerText;
                continue;
            }
            currentData[dataFormat[key]] = dataRow[i].value;
            i++;
        }
        sendDataToServer(currentData, 'users').then(() => renderTable())
    }

    localStorage.setItem('saveRow', JSON.stringify(currentData));
    showOptionButtons(false, row.lastChild);
    showInputs(false, row);
    localStorage.removeItem('saveRow');
}


// ### Creation functions ###
function createTable(data) {
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');

    const dataKeys = {};
    let i = 0;
    for (let key of Object.keys(data[0])) {
        dataKeys[i++] = key;
    }
    localStorage.setItem('dataKeys', JSON.stringify(dataKeys));

    const tableHead = document.createElement('thead');
    tableHead.appendChild(createTableRow(data[0], 'th'));

    const tableBody = document.createElement('tbody');
    for (let i = 0; i < data.length; i++) {
        tableBody.appendChild(createTableRow(data[i], 'td'));
        counter();
    }


    table.appendChild(tableHead);
    table.appendChild(tableBody);
    app.appendChild(table);
    app.appendChild(createButton('add'));
}
// create a table row
function createTableRow(data, columnType) {
    if (columnType != 'td' && columnType != 'th') columnType = 'td';

    const row = document.createElement('tr');

    if (columnType == 'td') {
        for (let key of Object.keys(data)) {
            const col = document.createElement('td');
            col.innerText = data[key];
            row.appendChild(col);
        }

        const btnColumn = document.createElement('td');
        btnColumn.appendChild(createButton('change'));
        btnColumn.appendChild(createButton('delete'));
        btnColumn.appendChild(createButton('accept'));
        btnColumn.appendChild(createButton('cancel'));
        row.appendChild(btnColumn);
    } else {
        for (let key of Object.keys(data)) {
            const col = document.createElement(`th`);
            col.innerText = key;
            row.appendChild(col);
        }

        const btnColumn = document.createElement('th');
        btnColumn.innerText = 'modify'
        row.appendChild(btnColumn);
    }
    return row;
}

// create a button
function createButton(btnType) {
    const btn = document.createElement('button');
    btn.setAttribute('data-type', btnType);
    btn.classList.add('btn');
    btn.style.backgroundImage = `url("images/${btnType}.svg")`;

    switch (btnType) {
        case 'accept':
            btn.classList.add('btn-success');
            btn.onclick = event => btnAcceptFunc(event);
            btn.style.display = 'none';
            break;
        case 'add':
            btn.classList.add('btn-primary');
            btn.onclick = event => btnAddFunc(event);
            break;
        case 'cancel':
            btn.classList.add('btn-danger');
            btn.onclick = event => btnCancelFunc(event);
            btn.style.display = 'none';
            break;
        case 'change':
            btn.classList.add('btn-dark');
            btn.onclick = event => btnChangeFunc(event)
            break;
        case 'delete':
            btn.classList.add('btn-danger');
            btn.onclick = event => btnDeleteFunc(event);
            break;
    }
    return btn;
}
// ##############


// ### Special functions ###

function showOptionButtons(_showOptionButtons, buttonsСol) {
    let showButtons;
    let buttons = buttonsСol.querySelectorAll('button');
    if (_showOptionButtons) {
        showButtons = buttonsСol.querySelectorAll(`
            button[data-type="accept"],
            button[data-type="cancel"]
        `);
        document.querySelector('button[data-type="add"]').style.display = 'none';
    } else {
        showButtons = buttonsСol.querySelectorAll(`
            button[data-type="change"],
            button[data-type="delete"]
        `);
        document.querySelector('button[data-type="add"]').style.display = 'inline-block';
    }
    showButtons = Array.from(showButtons)
    buttons.forEach((button) => {
        showButtons.includes(button)
            ? button.style.display = 'inline-block'
            : button.style.display = 'none';
    })
}

function saveRowToLocalStorage(row) {
    const dataColumns = row.querySelectorAll('td');
    const dataKeys = JSON.parse(localStorage.getItem('dataKeys'));
    const saveData = {};

    for (let i = 0; i < dataColumns.length - 1; i++) {
        saveData[dataKeys[i]] = dataColumns[i].innerText;
    }
    localStorage.setItem('saveRow', JSON.stringify(saveData))
}

function showInputs(_showInputs, row) {
    const dataColumns = row.querySelectorAll('td');
    if (_showInputs) {
        const acceptButton = row.querySelector('button[data-type="accept"]');
        console.log(acceptButton);
        for (let i = 1; i < dataColumns.length - 1; i++) {
            const input = document.createElement('input');

            input.setAttribute('type', 'text');
            input.value = dataColumns[i].innerText;

            input.onkeypress = (event) => {
                if (event.code === 'Enter') acceptButton.onclick();
            }
            dataColumns[i].innerText = '';
            dataColumns[i].appendChild(input);
        }

    } else {
        const saveData = JSON.parse(localStorage.getItem('saveRow'));
        let i = 1;
        for (let key of Object.keys(saveData)) {
            if (key === 'id') continue
            const input = dataColumns[i].querySelector('input');
            dataColumns[i].removeChild(input);
            dataColumns[i++].innerText = saveData[key];
        }
    }
}
// #########################


// ### Buttons functions ###
function btnAcceptFunc() {
    const table = document.querySelector('table');
    table.removeAttribute('data-modify');

    const currentBtn = event.currentTarget;
    const btnCol = currentBtn.parentNode;
    const row = btnCol.parentNode;
    commitChange(row, 'modify');
}

function btnAddToServerFunc() {
    const table = document.querySelector('table');
    table.removeAttribute('data-modify');

    const currentBtn = event.currentTarget;
    const btnCol = currentBtn.parentNode;
    const row = btnCol.parentNode;
    const acceptButton = row.querySelector('button[data-type="accept"]');
    acceptButton.onclick = event => btnAcceptFunc();
    commitChange(row, 'add');
}

function btnCancelFunc(event) {
    const table = document.querySelector('table');
    table.removeAttribute('data-modify');

    const cancelBtn = event.currentTarget;
    const btnCol = cancelBtn.parentNode;
    const row = btnCol.parentNode;
    const dataColumns = row.querySelectorAll('td');

    showOptionButtons(false, btnCol);
    showInputs(false, row)
    localStorage.removeItem('saveRow');
}

function btnChangeFunc(event) {
    const table = document.querySelector('table');
    if (!table.hasAttribute('data-modify')) {
        table.setAttribute('data-modify', 'modify')
    } else return;

    const currentBtn = event.currentTarget;
    const btnCol = currentBtn.parentNode;
    const row = btnCol.parentNode;
    const dataColumns = row.querySelectorAll('td');

    showOptionButtons(true, btnCol);
    saveRowToLocalStorage(row);
    showInputs(true, row);
}

function btnDeleteFunc(event) {
    const eventTarget = event.currentTarget;
    const row = eventTarget.parentNode.parentNode;
    const dataRow = row.querySelectorAll('td');

    const dataToDelete = {};
    for (let i = 0; i < dataRow.length - 1; i++) {
        dataToDelete[i] = dataRow[i].innerText;
    }
    const tBody = row.parentNode;
    tBody.removeChild(row);
    deleteDataFromServer(dataToDelete, 'users').then(() => renderTable())
}

function btnAddFunc() {
    const table = document.querySelector('table');
    if (!table.hasAttribute('data-modify')) {
        table.setAttribute('data-modify', 'modify')
    } else return;

    const row = createTableRow(JSON.parse(localStorage.getItem('dataKeys')), 'td');
    row.firstChild.innerText = counter();
    table.appendChild(row);
    const acceptButton = row.querySelector('button[data-type="accept"]');
    acceptButton.onclick = event => btnAddToServerFunc();

    saveRowToLocalStorage(row);
    showOptionButtons(true, row.lastChild);
    showInputs(true, row);
    localStorage.removeItem('')
}
// #################

function renderTable() {
    const app = document.getElementById('app');
    if (app.querySelector('table')) app.innerHTML = '';

    getDataFromServer('users').then(data => createTable(data));
}

function counterInit(startValue) {
    let count = startValue;
    return function () {
        return count++;
    }
}

const counter = counterInit(1);
window.onload = () => {
    renderTable();
}

// fix
function findMaxIndex() {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr')
    let maxIndex;
    for (let i = 0; i < rows.length; i++) {
        index.push(rows[i].firstChild.innerText);
    }
    console.log(index);
}