
import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";




function App() {
  const[listofitems, setlistofitems] = useState ([]);
  const[name, setName]= useState("");
  const[description, setDescription]= useState("");
  const[image, setImage]= useState("");    
  useEffect(()  => {
  Axios.get("http://localhost:3001/getItems").then((response) => {
    setlistofitems(response.data);
  })

}, []);

const CreateItem = () => {
  Axios.post("http://localhost:3001/CreateItems", {
    name,
    description,
    image,
  }).then((response) => {
    setlistofitems([...listofitems, {
      name,
      description,
      image,

    }])
  });
};

const UpdateDescription = (id) => {
  const newDesc = prompt("Enter new description : ");
  Axios.put("http://localhost:3001/UpdateItems", {newDesc: newDesc, id: id}).then(() =>{
    setlistofitems(listofitems.map((item) =>{
      return item._id === id ? {_id: id, name: item.name, description: newDesc, image: item.image} : item
    }))
  })};

  const DeleteItem = (id, name) => {
    if(window.confirm(`Are you sure you want to delete ${name}`)){

fetch("http://localhost:3001/deleteItem", {
  method: "POST",
  crossDomain: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({
    id : id,
  }),
})
.then((res) => res.json())
.then((data) => {
  alert(data.data);
})
    }else{

    }
  };








  return (
    <div className="App">
      
<div className="CreateItem">
  <h1>Welcome to the online store!</h1>
  <h1>Add items</h1>
  <input type="text" placeholder="Name..."
   onChange={(event) => {setName(event.target.value);}}
   />
  <input type="text" placeholder="Description..."
  onChange={(event) => {setDescription(event.target.value);}}/>
  <input type="text" placeholder="Image..."
  onChange={(event) => {setImage(event.target.value);}}/>
  <button onClick={CreateItem}> Create Item </button>
  
</div>
      <div className="ItemDisplay">
      {listofitems.map((item) => {
          return (
            <div className="ItemContainer">
            <div className="ItemDisplay2">
              <h1>Name: {item.name}</h1>
              <h1>Description: {item.description}</h1>
              <h1>Image: {item.image}</h1>
            </div>
            <button onClick={() => {
              UpdateDescription(item._id);
            }} 
            >Update</button>
            <button onClick={() =>{
               DeleteItem(item._id, item.name);
            }}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
