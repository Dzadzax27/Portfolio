import { Link } from "react-router-dom";



function Form ()
{
    
    return ( <form className='Forma'>
    <label id='Name'> Sadžida Džiho</label>
    <div className="Buttons">
    <button className="btnHome"><Link className="Edu" to="/">Home</Link></button>
    <button className="btn1" ><Link className="Edu" to="/Education">Education</Link></button>
    <button className="btn2"><Link className="Edu" to="/Skills">Skills</Link></button>
    <button className="btn3"><Link className="Edu" to="/Hobbies">Hobbies</Link></button></div>
    </form>)
}
export default Form;