import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// import { useState } from 'react';

// const App = () => {
//   const [item, setItem] = useState('');
//   const [itemList, setItemList] = useState([]);

//   const AddItem = () => {
//     setItemList([item].concat(itemList));
//     console.log(itemList);
//     setItem('');

//   }
//   const apagaItem = () => {
//     setItemList([itemList].splice(0,0));
    
//     alert("Lista Apagada!");
//   }
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1> Itens </h1>
//       <input type="text" placeholder="Item" value={item}  onChange={e => setItem(e.target.value)} />
//       <button type="button" onClick={AddItem}>Adicionar Item</button>
//       <button type="button" onClick={apagaItem} style={{backgroundColor:"red"}}>Apaga lista</button>
//       <ul style={{ textAlign: "left" }}>
//         {itemList.map((item) => <li key={item}>{item}<hr></hr></li>)}
//       </ul>
//     </div>
//   );
// }
ReactDOM.render(
  <App />,
  document.getElementById("root"));

