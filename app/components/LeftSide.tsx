import React from 'react'
import Header from './Header'
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const LeftSide = () => {
    return (

        <div className='max-h-screen'>
            <Header />
            <div>

            </div>
            <div className='flex flex-row text-slate-400 gap-4 mt-6 justify-center md:justify-start'>
                <a href="" target='_blank'>
                    <Button variant="contained" startIcon={<CloudDownloadIcon />} className='text-green border-green bg-green-20 transition hover:scale-125  duration-500 ease-in-out'>
                        View CV
                    </Button>
                </a>
                <a href='' target='_blank' className='hover:text-green transition-color ease-in-out duration-150 py-1'><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/manh-tan-nguyen-6373b3275/" target='_blank' className='hover:text-green transition-color ease-in-out duration-150 py-1'><LinkedInIcon /></a>
                <a href="https://www.facebook.com/profile.php?id=100013745418228" target='_blank' className='hover:text-green transition-color ease-in-out duration-150 py-1'><FacebookIcon /></a>
            </div>
        </div>
    )
}

export default LeftSide