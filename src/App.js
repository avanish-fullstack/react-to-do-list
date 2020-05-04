import React , { useState} from 'react';
import './App.css';
import Lists from "./Lists";
import Details from './Details';
import { Router } from '@reach/router';
import ErrorBoundary from './ErrorBoundary';
import  GlobalContext from "./GlobalContext";

function App() {
  
 const [lists, setlists] = useState([
  {id: 1 , name: "list1" , description : "This is list1"},
  {id: 2 , name: "list2" , description : "This is list2"},
  {id: 3 , name: "list3" , description : "This is list3"},
  {id: 4 , name: "list4" , description : "This is list4"}
 ]);


 function handleDelete(itemId) {
   let updatedList = lists.filter(list => list.id !==  itemId);
    setlists(updatedList); 
 }

 const currentId = 0;

  return (
    <ErrorBoundary> 
     <GlobalContext.Provider value= {{name: "kumar", age: 33}}>         
     <Router>    
       <Lists path="/"  lists={lists} />
        <Details path="/:id"  id={currentId} items={lists} delete={() => handleDelete} />             
    </Router>  
    </GlobalContext.Provider>
    </ErrorBoundary>
       
  );
}

export default App;
