const addButton = document.querySelector('#add-button');
const listBox = document.querySelector('#list');
const itemToAdd = document.querySelector('#add-item');
const resetButton = document.querySelector('#reset-button');

addButton.addEventListener('click', () => {
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
});

resetButton.addEventListener('click', () => {
    listBox.innerHTML = "";
})