import React from 'react';
import gif from './Images/gif.gif'
import Common from './Common';

const About = () => {
    return (
        <>
        <Common name='About Us' sub='We will offer you personalized recipe recommendations, advanced search functionality, and features for meal planning, scheduling, and shopping list generation' imgsrc={gif} visit='/contact' btname='Contact Now'/>
        </>
    )
}

export default About