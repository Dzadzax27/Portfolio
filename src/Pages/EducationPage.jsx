import React, { Component } from 'react';
import Form from "../Components/Form";
import "./Pages.css"

function Education()
{
    return <div><Form></Form>
    <div className='Main'>
    <div className='Line' ></div>
    <div className='Circle1'/><div className='HighSchool'><div className='TitleHS'>Druga gimnazija Mostar</div><br/>
    I have finished a four-year high school at Druga Gimnazija Mostar in Mostar, specializing in Mathematics and Informatics.</div>
    <div className='HighSchoolYear'>2017-2021</div>
    
    <div className='Circle2'/><div className='Uni'><div className='UniHS'>Faculty of Information Technologies</div><br/>
    I am currently a third-year student at the Faculty of Information Technologies in Mostar, majoring in Software Engineering.</div>
    <div className='UniYear'>2021-2025</div>
    </div>
    </div>
}
export default Education;