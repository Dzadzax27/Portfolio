import { Link } from "react-router-dom";
import React,{ useState } from 'react';


function Form ()
{
  
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
          setMenuOpen(!menuOpen);
        };
    return ( <div><button className="Toggle" onClick={toggleMenu}>
    <img className="Menu" src="https://assets.stickpng.com/images/588a64f5d06f6719692a2d13.png"></img>
    </button>
    <form className={`Forma ${menuOpen ? 'active' : ''}`}>
    <label id='Name'> Sadžida Džiho</label>
    
    <div className={`Buttons ${menuOpen ? '' : 'nonactive'}`} >
    <button className="btnHome"><Link className="Edu" to="/">Home</Link></button>
    <button className="btn1" ><Link className="Edu" to="/Education">Education</Link></button>
    <button className="btn2"><Link className="Edu" to="/Skills">Skills</Link></button>
    <button className="btn3"><Link className="Edu" to="/Hobbies">Hobbies</Link></button></div>
    </form></div>)
}
export default Form;