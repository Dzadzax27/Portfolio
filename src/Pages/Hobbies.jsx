import React, { Component } from 'react';
import Form from "../Components/Form";
import "./Pages.css"

function Hobbies()
{
    return <div>
    <Form></Form>    
    <div className='Main'></div>
    <div className='Hobbies'>
    <div className='Sport'><div className='Title'>Sport</div>
    <br></br>
    Throughout my life, I have been actively involved in numerous sports, each teaching me invaluable lessons
     about teamwork and personal growth. While I enjoyed playing various sports,
      chess held a special place in my heart, becoming a significant part of my life for 12 years, 
      during which I achieved numerous awards and recognition.
    Even today, chess remains one of my cherished hobbies, providing me with 
    mental stimulation and strategic thinking. Moreover, I engage in table tennis, 
    volleyball, and running to stay physically active and maintain a well-balanced lifestyle.
    </div>
    <div className='volunteerism'><div className='Title'>Volunteerism</div><br></br>
    Through my involvement with non-profit organizations, I have had the privilege of serving as a coordinator for various activities that aimed to make a positive impact on the community. These activities were
     focused on working with young people, fostering a sense of camaraderie, and collectively engaging in charitable endeavors.

    As a coordinator, I embraced the responsibility of organizing and leading the efforts, 
    ensuring smooth collaboration among the team members. Together, we embarked on projects that touched
    the lives of others and brought about meaningful change. 
    </div>
    <div className='Awards'><div className='Title'>Awards</div>
    <ul>
    <li>Cadet Chess Women Champion of Federation Bosnia and Herzegovina for an astounding 6 times.</li>
    <li>Cadet Chess Women Champion of Bosnia and Herzegovina</li>
    <li>Junior Chess Women Champion of Bosnia and Herzegovina</li>
    <li>Participation in the European Chess Cadet Championship in chess</li>
    </ul>
    
    </div>
    </div>
    </div>
}
export default Hobbies;