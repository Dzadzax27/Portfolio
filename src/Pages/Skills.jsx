import Form from "../Components/Form";
import React,{ useState } from 'react';

function Skills ()
{
    const [isDivVisible1, setDivVisible1] = useState(false);
    const [isDivVisible2, setDivVisible2] = useState(false);
    const [isDivVisible3, setDivVisible3] = useState(false);
    const [isDivVisible4, setDivVisible4] = useState(false);

    const [isHovered,setHovered]=useState(false);
    const handleButtonClickOne = () => {
        setDivVisible1(!isDivVisible1);
      };
    const handleButtonClickTwo = () => {
        setDivVisible2(!isDivVisible2);
      };
    const handleButtonClickThree = () => {
        setDivVisible3(!isDivVisible3);
      };
      const handleButtonClickFour = () => {
        setDivVisible4(!isDivVisible4);
      };
    const handleMouseHover=()=>{
        setHovered(true);
    }
    const handleMouseLeave=()=>
    {
        setHovered(false);
    }
    const MessageOnHover=()=>{
        <div>Click to see more</div>
    }
    return <div><Form></Form>
    <div className="Main">
    <button className="proLanguages" onClick={handleButtonClickOne}  onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}>Programming languages:  </button>
      {isHovered && <div className="hovered">Click to see more</div>}
    <button className="Languages" onClick={handleButtonClickTwo}  onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}>Languages</button>
    <button className="Framework" onClick={handleButtonClickThree}>Software framework: </button>
    <button className="Enviroment" onClick={handleButtonClickFour}>Development environment: </button>
    <div className="VLine"></div>
    <hr className="HLine"></hr>
   
    {isDivVisible1 && (<div id="aboutProLanguages"  >jfffnaofoanfoafnoid 
    <img className="X1" src="https://www.pngall.com/wp-content/uploads/5/Black-X-Letter-PNG-Clipart.png" onClick={handleButtonClickOne}></img></div>)}
    {isDivVisible2 && (<div id="aboutLanguages"  >jfffnaofoanfoafnoid
    <img className="X2" src="https://www.pngall.com/wp-content/uploads/5/Black-X-Letter-PNG-Clipart.png" onClick={handleButtonClickTwo}></img></div>)}
    {isDivVisible3 && (<div id="aboutFramework"  >jfffnaofoanfoafnoid
    <img className="X3" src="https://www.pngall.com/wp-content/uploads/5/Black-X-Letter-PNG-Clipart.png" onClick={handleButtonClickThree}></img></div>)}
    {isDivVisible4 && (<div id="aboutEnvironment"  >jfffnaofoanfoafnoid
    <img className="X4" src="https://www.pngall.com/wp-content/uploads/5/Black-X-Letter-PNG-Clipart.png" onClick={handleButtonClickFour}></img></div>)}
    </div>
    
    </div>
}

export default Skills;