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
    <br></br></div>
    <div className='volunteerism'><div className='Title'>Volunteerism</div></div>
    <div className='Awards'><div className='Title'>Awards</div></div>
    </div>
    </div>
}
export default Hobbies;