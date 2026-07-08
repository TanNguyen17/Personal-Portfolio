"use client"
import React from 'react'
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.section
            id='about'
            className='mb-20 scroll-mt-20'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
        >
            <h2 className='font-syne text-sm uppercase tracking-widest text-blue mb-6 flex items-center gap-3'>
                <span className="h-px w-8 bg-blue/40" />
                About Me
            </h2>

            <div className='flex flex-col gap-4 font-space text-base text-lightest-slate leading-relaxed'>
                <p>
                    I am a tech enthusiast with a profound passion for exploring the intricacies of information technology and understanding how complex systems cooperate to create powerful products.
                    My journey in IT is driven by relentless curiosity and a desire to build solutions that{' '}
                    <span className='text-white font-medium'>empower individuals and communities.</span>
                </p>

                <p>
                    From developing digital products that promote mental well-being and green living, to exploring sustainable approaches to everyday challenges, I am constantly inspired by the ways technology can enhance our lives.
                    My recent work includes{' '}
                    <span className="text-blue font-medium">Mindary</span>, an app leveraging AI to support emotional health, tracking moods, and providing insights to foster resilience.
                </p>

                <p>
                    Beyond technology, I believe in the power of diverse perspectives, creative problem-solving, and continuous learning. Whether it is a new architectural challenge or a quiet moment in nature, I am always seeking inspiration to shape ideas that{' '}
                    <span className='text-white font-medium'>make a tangible difference.</span>
                </p>
            </div>
        </motion.section>
    )
}

export default AboutMe