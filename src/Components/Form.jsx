import { Link } from "react-router-dom";



function Form ()
{
    
    return ( <form className='Forma'>
    <label id='Name'> Sadžida Džiho</label>
    <button className="Toggle">
        <img className="Menu" src="https://assets.stickpng.com/images/588a64f5d06f6719692a2d13.png"></img>
        </button>
    <div className="Buttons" >
    <button className="btnHome"><Link className="Edu" to="/">Home</Link></button>
    <button className="btn1" ><Link className="Edu" to="/Education">Education</Link></button>
    <button className="btn2"><Link className="Edu" to="/Skills">Skills</Link></button>
    <button className="btn3"><Link className="Edu" to="/Hobbies">Hobbies</Link></button></div>
    </form>)
}
export default Form;