'use strict';

const addBtn = document.querySelector('.body__add-btn');
const list = document.querySelector('.list');

const getTaskTitle = () => {
    const newTask = prompt('Введите новое задание');
    return newTask;
}

function createTask() {
    const newTask = getTaskTitle();
    if (newTask === null || newTask === '') {
        return;
    } else if (newTask.match(/^[ ]+$/)) {
        return;
    } else if (newTask === "exit") {
        return;
    } else if (newTask === 'del') {
        list.removeChild(list.lastElementChild);
    } else if (newTask === 'clear') {
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
    } else {
        const newLi = document.createElement('li');
        newLi.classList.add('list__title');
        const liText = document.createTextNode(newTask);
        newLi.appendChild(liText);
        list.appendChild(newLi);
        createTask();
    }
}
addBtn.addEventListener('click', () => {
    createTask();
})

