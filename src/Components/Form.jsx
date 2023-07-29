import { Link } from "react-router-dom";



function Form ()
{
    
    return ( <form className='Forma'>
    <label id='Name'> Sadžida Džiho</label>
    <div className="Buttons"><button className="btn1" ><Link className="Edu" to="/Education">Education</Link></button>
    <button className="btn2">btn2</button>
    <button className="btn3">btn3</button></div>
    </form>)
}
export default Form;