import React from "react";
import {Link} from "@reach/router";

const Lists = (props) => { 
   
    return props.lists.map(list => {
       return(
           <React.Fragment >
               <Link to= {`/${list.id}`}>
                <h3>{list.name}</h3>
             </Link>           
           </React.Fragment> );
                  
    });
       
}

export default Lists;