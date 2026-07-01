'use client'
import React from 'react'
import Header from './Header'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from "framer-motion"

const fadeUp = (delay: number) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }
    }
})

const LeftSide = () => {
    return (
        <div className='flex flex-col justify-between h-full gap-4 lg:gap-6 px-2'>
            <Header />
            <motion.div
                className='flex items-center gap-5 mt-auto pt-4'
                variants={fadeUp(0.5)}
                initial="hidden"
                animate="visible"
            >
                <a
                    href="https://drive.google.com/file/d/1teHUE7eKPtwIqWjo3d3kIIiEafhm-q3r/view?usp=drive_link"
                    target='_blank'
                    rel="noreferrer"
                >
                    <button className='font-space text-sm font-medium text-navy-blue bg-blue px-6 py-2.5 rounded-lg hover:bg-blue/80 transition-colors duration-300 shadow-md shadow-blue/10'>
                        View Resume
                    </button>
                </a>
                <div className="flex items-center gap-1">
                    <a href='https://github.com/TanNguyen17' target='_blank' rel="noreferrer"
                        className='text-lightest-slate/60 hover:text-blue p-2 rounded-lg hover:bg-white/5 transition-all duration-300'>
                        <GitHubIcon fontSize="medium" />
                    </a>
                    <a href="https://www.linkedin.com/in/manh-tan-nguyen-6373b3275/" target='_blank' rel="noreferrer"
                        className='text-lightest-slate/60 hover:text-blue p-2 rounded-lg hover:bg-white/5 transition-all duration-300'>
                        <LinkedInIcon fontSize="medium" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100013745418228" target='_blank' rel="noreferrer"
                        className='text-lightest-slate/60 hover:text-blue p-2 rounded-lg hover:bg-white/5 transition-all duration-300'>
                        <FacebookIcon fontSize="medium" />
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default LeftSide