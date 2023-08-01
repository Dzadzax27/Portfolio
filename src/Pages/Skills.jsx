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
    return <div><Form></Form>
    <div className="Main">
    <button className="proLanguages" onClick={handleButtonClickOne}  onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}>Programming languages:  </button>
      {isHovered && <div className="hovered">Click to see more</div>}
    <button className="Languages" onClick={handleButtonClickTwo}  onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}>Languages</button>
    <button className="Framework" onClick={handleButtonClickThree} onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}>Software framework: </button>
    <button className="Enviroment" onClick={handleButtonClickFour} onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}>Development environment: </button>
    
   
    {isDivVisible1 && (<div id="aboutProLanguages"  ><div className="Text1">During my faculty education, I have gained
     extensive knowledge about various programming languages, enriching my skills as a developer. In courses such as 
     Programming I and Programming II, I delved into the world of structural and object-oriented programming paradigms,
      utilizing C++ as our primary language. Additionally, in Programming III during my second year, 
      I successfully completed projects using <label id="C">C#</label>.
    My exposure to diverse programming languages extends beyond <label id="C">C++</label>. I have also encountered <label id="C">
        JavaScript, CSS, HTML, and SQL </label>, 
    further broadening my skillset in web development and database management.
    Through these experiences, I have developed a strong foundation in programming concepts and 
    acquired practical expertise that fuels my passion for the tech industry. </div>
    <img className="X1" src="https://www.pngall.com/wp-content/uploads/5/Black-X-Letter-PNG-Clipart.png" onClick={handleButtonClickOne}></img></div>)}
    {isDivVisible2 && (<div id="aboutLanguages"  >
    <div className="Text1"><label id="C">Bosnian language </label>  is my native language, and from a young age of 9,
     I started learning <label id="C">English</label>. Over the years, my dedication and commitment have allowed me to reach the 
     level of an Upper Intermediate English speaker. Throughout High School,
     I also had the opportunity to learn the basics of the <label id="C">Turkish language</label>, and now I have achieved a
      conversational level of proficiency. </div>
    <img className="X2" src="https://www.pngall.com/wp-content/uploads/5/Black-X-Letter-PNG-Clipart.png" onClick={handleButtonClickTwo}></img></div>)}
    {isDivVisible3 && (<div id="aboutFramework"  ><div className="Text1">
    While working on projects during Programming III, I had the opportunity to utilize the <label id="C">.NET framework</label>,
     which provided valuable insights and enhanced my understanding of backend development. 
     Subsequently, I ventured into learning JavaScript, and as my knowledge expanded,
     I set my sights on mastering <label id="C">React.js</label> to bolster my frontend development expertise. 
    As a testament to this endeavor, one of my projects is the creation of this very web page.
    </div>
    <img className="X3" src="https://www.pngall.com/wp-content/uploads/5/Black-X-Letter-PNG-Clipart.png" onClick={handleButtonClickThree}></img></div>)}
    {isDivVisible4 && (<div id="aboutEnvironment"  >
    <div className="Text1">
    <label id="C">Visual Studio</label> and <label id="C">Visual Studio Code</label> stand as my primary and most utilized development environments.
    Their extensive features and user-friendly interfaces have significantly contributed to my productivity as a programmer.
    In the subject Database I, I had the opportunity to work with  <label id="C">Microsoft Access</label>,
    where I acquired foundational skills to effectively handle databases. This experience allowed me to grasp the essentials of database management and data manipulation.
    Moreover, I possess basic skills in <label id="C">Unity</label>, a powerful game development platform. 

    </div>
    <img className="X4" src="https://www.pngall.com/wp-content/uploads/5/Black-X-Letter-PNG-Clipart.png" onClick={handleButtonClickFour}></img></div>)}
    </div>
    
    </div>
}

export default Skills;