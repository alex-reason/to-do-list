const addButton = document.querySelector('#add-button');
const listBox = document.querySelector('#list');
const itemToAdd = document.querySelector('#add-item');
const resetButton = document.querySelector('#reset-button');

const createText = () => {
    if (itemToAdd.value){
        const newListItem = document.createElement('div');
        newListItem.classList.add('list');
        let listItem = `
                <div class="list-item">
                    <label>
                        <input type="checkbox" />
                        <span class="checkbox">
                        </span>
                    </label>
                    <p>${itemToAdd.value}</p>
                       
                </div>`;
        newListItem.innerHTML = listItem;
        listBox.appendChild(newListItem);
        itemToAdd.value = "";
    } 
}

addButton.addEventListener('click', () => {
   createText();
});

itemToAdd.addEventListener('keypress', function (event) {inputEnter(event,addButton)});

function inputEnter(event,btn) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
}

resetButton.addEventListener('click', () => {
    listBox.innerHTML = "";
})