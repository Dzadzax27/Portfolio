import { Link } from "react-router-dom";
import React,{ useState } from 'react';


function Form ()
{
  
    const [menuOpen, setMenuOpen] = useState(true);
    const toggleMenu = () => {
          setMenuOpen(!menuOpen);
        };
    return ( <div className="Navbar"><button className="Toggle"  onClick={toggleMenu}>
    <img className="Menu" src="https://cdn-icons-png.flaticon.com/512/56/56763.png"></img>
    </button><form className="Forma">
    <label id='Name'> Sadžida Džiho</label>
    </form>
    <div className={`Buttons ${menuOpen ? 'active' : ''}`} >
    <Link onClick={toggleMenu} className="Edu" to="/"><button  className="btnHome">Home</button></Link>
    <Link className="Edu" to="/Education" onClick={toggleMenu}><button  className="btn1" >Education</button></Link>
    <Link className="Edu" to="/Skills"><button onClick={toggleMenu} className="btn2">Skills</button></Link>
    <Link className="Edu" to="/Hobbies"><button onClick={toggleMenu}  className="btn3">Hobbies</button></Link></div>
    
    </div>)
}
export default Form;