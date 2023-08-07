import { Link } from "react-router-dom";
import React,{ useState } from 'react';


function Form ()
{
  
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
          setMenuOpen(!menuOpen);
        };
    return ( <div className="Navbar"><button className="Toggle" onClick={toggleMenu}>
    <img className="Menu" src="https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png"></img>
    </button><form className={`Forma ${menuOpen ? 'active' : ''}`}>
    <label id='Name'> Sadžida Džiho</label>
    </form>
    <div className={`Buttons ${menuOpen ? 'active' : ''}`} >
    <Link className="Edu" to="/"><button className="btnHome">Home</button></Link>
    <Link className="Edu" to="/Education"><button className="btn1" >Education</button></Link>
    <Link className="Edu" to="/Skills"><button className="btn2">Skills</button></Link>
    <Link className="Edu" to="/Hobbies"><button className="btn3">Hobbies</button></Link></div>
    </div>)
}
export default Form;