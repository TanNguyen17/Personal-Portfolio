'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"

const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Header = () => {
    return (
        <header>
            <motion.div
                variants={container(0)}
                initial="hidden"
                animate="visible"
            >
                <h3 className='text-2xl text-green'>Hi, my name is</h3>
                <h1 className='text-5xl text-white my-2'>Manh Tan Nguyen</h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'A RMIT University Student',
                        800, // wait 1s before replacing "Mice" with "Hamsters"
                        'A Tech Enthusiast',
                        800,
                        'An Innovator',
                        800,
                    ]}
                    wrapper="span"
                    speed={60}
                    // style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                    className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] from-15% to-[#64ffda]'
                />
            </motion.div>
            <div
                className='flex flex-col items-center md:flex-row w-full gap-4 mr-0 md:mr-4 mt-4'
            >
                <motion.div
                    className='w-full md:w-2/3 text-lg text-slate-300'
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                >
                    <p className=''>
                        Welcome to my portfolio. Here, you can find a collection of my projects and experiences—from innovative AI applications in mental well-being to sustainable tech solutions designed to empower our communities.
                    </p>
                    <p className=''>
                        Each project reflects my commitment to creative problem-solving, curiosity, and a desire to make technology accessible and meaningful. I invite you to explore, learn about my journey, and see how I’m pushing boundaries to create a more connected, resilient world.
                    </p>
                </motion.div>
                {/* <Avatar>
                    <AvatarImage src="/personal_cut.png" width={200} sizes='lg' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar> */}
                <motion.div
                    className='rounded-lg flex flex-col items-centerw-fit lg:w-1/3 h-1/3 z-40 bg-green-20 border-2 border-green'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Image
                        src='/personal_cut.png'
                        alt='personal portrait'
                        width={0}
                        height={0}
                        sizes="40vw"
                        // style={{ width: '40%', height: '50%' }}
                        className='bg-no-repeat bg-center w-auto h-3/4 object-fit z-0'
                    />
                </motion.div>
            </div>
        </header>
    )
}

export default Header