import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
    return (
        <section id='about' className='text-slate-400 mb-10'>
            <div className='flex flex-row gap-2 mb-4 font-bold'>
                <h1 className='text-3xl text-green'>01. </h1>
                <h1 className='text-3xl text-white'>About Me</h1>
            </div>
            <p className='mb-4'>
                I am a tech enthusiast with a huge passion for exploring the intricacies of information technology and understanding how its components cooperate with each other to create powerful products.
                My journey in IT has been driven by a deep curiosity and a desire to create impactful solutions that <span className=' text-green decoration-green underlined'>empower individuals and communities.</span>
            </p>

            <p className='mb-4  '>
                From developing digital products that promote mental well-being, green living lifestyle to exploring innovative, sustainable approaches to everyday challenges, I am constantly inspired by the ways technology can enhance our lives.
                My recent work includes Mindary, an app that leverages AI to support emotional health, tracking users moods and providing insights to foster resilience. Projects like these fuel my commitment to <a className=' text-green decoration-green underlined_1'>crafting meaningful, user-centered experiences.</a>
            </p>
            <p>
                Beyond technology, I believe in the power of diverse perspectives, creative problem-solving, and a continuous drive to learn. Whether it's a new challenge in tech or a quiet moment in nature, I am always seeking inspiration to shape ideas that <a className='text-green decoration-green underlined'>make a difference.</a>
            </p>
        </section>
    )
}

export default AboutMe