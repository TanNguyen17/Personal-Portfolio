import React from 'react'
import Header from './Header'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const LeftSide = () => {
    return (

        <div>
            <Header />
            <div className='flex flex-row'>
                <a><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/manh-tan-nguyen-6373b3275/"><LinkedInIcon /></a>
                <a href="https://www.facebook.com/profile.php?id=100013745418228" ><FacebookIcon /></a>
            </div>
        </div>
    )
}

export default LeftSide