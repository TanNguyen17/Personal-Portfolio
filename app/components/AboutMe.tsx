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

            <div className='flex flex-col gap-5 font-space text-base text-lightest-slate leading-relaxed'>
                <p>
                    I am a software engineer driven by a lifelong love for learning and a deep curiosity about how complex systems work.
                    For me, technology is more than just writing code - it is a powerful tool to build innovative solutions that solve real-world problems, <span className='text-white font-medium'>empower individuals, and make a positive social impact.</span>
                </p>

                <p>
                    My primary technical focus is on backend development, system security, and clean engineering practices.
                    I love solving architectural challenges and building reliable systems, always keeping the end-user in mind to make sure the software is both robust and easy to use.
                </p>

                <p>
                    I thrive in collaborative, forward-thinking environments where I can learn new concepts, tackle challenging architectures, and lead team initiatives.
                    Whether designing high-throughput microservices or learning a new tech stack, my ultimate goal remains constant: to use technology as a force for good, driving <span className='text-white font-medium'>meaningful change one line of code at a time.</span>
                </p>
            </div>
        </motion.section>
    )
}

export default AboutMe