const itemList = document.getElementById('item-list');
const addItemButton = document.getElementById('add-item-button');
const DeleteItemButton = document.getElementById('delete-item-button');
const EditButton = document.getElementById('edit-item-button');
const SearchButton = document.getElementById('search-item-button');

async function fetchItems() {

    const response = await fetch('/items');
    const data = await response.json();

    
    itemList.innerHTML = '';
    data.forEach(item => {



        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div>
                <h3>${item.name}</h3>
                <p>ID: ${item.id}</p>
                <p>Description: ${item.description}</p>
                <button onclick="editItem(${item.id})">Edit</button>
                <button onclick="removeItem(${item.id})">Remove</button>
            </div>
        `;
        itemList.appendChild(itemElement);
    });
}

fetchItems();

async function addItem(id) {
   
}

function editItem(id) {
}


function removeItem(id) {
   
}


function SearchItem(id){

}


addItemButton.addEventListener('click', addItem);

DeleteItemButton.addEventListener('click',removeItem);

EditButton.addEventListener('click',editItem);

SearchButton.addEventListener('click', SearchItem);





