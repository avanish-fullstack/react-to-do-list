import React , {Fragment, useContext} from "react";
import { useParams , Link } from "@reach/router";
import GlobalContext from  "./GlobalContext";

const Details = (props) => {

let params = useParams() || 1;
const selectedItem = props.items.find(x=>  x.id === parseInt(params.id) );

const globalData = useContext(GlobalContext);
console.log(globalData);


return(
        <Fragment>
        <p>Global Data - {globalData.name} - { selectedItem.id} - {selectedItem.description}</p> 
        <button onClick={() => props.delete(selectedItem.id)}>Delete</button>
        <Link to="/">
        <button>Back</button>
        </Link>
        </Fragment>
);
} 

export default Details;