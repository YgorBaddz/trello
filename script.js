const btnCreateList = document.getElementById('btn-create-list'),
btnResetList = document.getElementById('btn-reset-list'),
desk = document.getElementById('desk'),
inputListName = document.getElementById('list-name');
let counter = 1;

let addList = (event) => {
    event.preventDefault();
    let list = document.createElement('li');
    list.classList.add('list');

    let h2 = document.createElement('h2');
    let editors = document.createElement('div');

    let cardList = document.createElement('div');
    cardList.classList.add('card-list');
    Array.from(cardList);

    let addCard = document.createElement('a');
    addCard.classList.add('add-card');
    addCard.innerText = 'Add Card +';
    addCard.addEventListener('click', listEditor);

    let changeIco = document.createElement('img');
    changeIco.setAttribute('src', 'https://img.icons8.com/material-rounded/48/edit--v1.png');
    changeIco.classList.add('edit-list');
    changeIco.addEventListener('click', listEditor);
    
    let deleteIco = document.createElement('img');
    deleteIco.setAttribute('src', 'https://img.icons8.com/material-rounded/48/cancel--v1.png');
    deleteIco.classList.add('delete-list');
    deleteIco.addEventListener('click', listEditor);
    
    let listName = document.getElementById('list-name').value;

    if(listName === '') {
        listName = `No name ${counter++}`;
    }

    h2.innerText = listName;
    list.append(h2);
    list.append(editors);
    editors.append(changeIco);
    editors.append(deleteIco);
    list.append(addCard);
    list.append(cardList);
    desk.append(list);

    btnResetList.addEventListener('click', (event) => {
        list.remove(desk);
        counter = 1;
    });
};

btnCreateList.addEventListener('click', addList);

function listEditor(event) {
    // let editList = event;
    let obj = event.target;
    if (obj.classList.contains('edit-list')) {
        let list = obj.closest('.list');
        let h2 = list.querySelector('h2');
        h2.setAttribute('contenteditable', 'true');
        h2.focus();
        h2.innerText = '';
    }
    if(obj.classList.contains('delete-list')) {
        let list = obj.closest('.list');
        list.remove(obj);
    }

    if(obj.classList.contains('add-card')) {
        let cardText = document.createElement('textarea');
        cardText.classList.add('card-text');
        let cardList = obj.closest('.list').querySelector('.card-list');
        cardList.append(cardText);
        
        let deleteIco = document.createElement('img');
        deleteIco.setAttribute('src', 'https://img.icons8.com/material-rounded/48/cancel--v1.png');
        deleteIco.classList.add('delete-text');
        deleteIco.addEventListener('click', (e) => {
            if(e.target) cardList.removeChild(cardText);
            e.target.style.display = 'none';
        })
        cardList.append(deleteIco);
    }
    
    if(obj.classList.contains('delete-text')) {
        let text = obj.closest('.card-list').querySelector('.card-text');
        text.remove(obj);
        let delIco = obj.closest('.card-list').querySelector('.delete-text');
        delIco.remove(obj);
    }
}