import { NavLink } from "react-router-dom"
import { actors } from "../data"
import './App.css';

function Actors(props) {
    return (
        <span>
            <strong>{props.title}</strong>
            <p>{props.description}</p>
        </span>
    )
  }
  
const One = () => {
    return ( 
    <div>
        <Actors title={actors[2].title} description={actors[2].description}/>
        <NavLink className={"home"} to={'/'}>Home</NavLink>
    </div> )
}
export default One