import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <h3 className=' ext-xl text-green'>Hi, my name is</h3>
            <h1 className='text-5xl text-white mt-3'>Manh Tan Nguyen</h1>
            <h3 className='text-xl text-white mt-3'>A RMIT University Student</h3>
            <div className='flex flex-col items-center md:flex-row w-full gap-4 mr-0 md:mr-4 mt-4'>
                <div className='w-full md:w-2/3'>
                    <p className='text-base text-slate-400'>
                        Welcome to my portfolio. Here, you can find a collection of my projects and experiences—from innovative AI applications in mental well-being to sustainable tech solutions designed to empower our communities.
                    </p>
                    <p className='text-base text-slate-400'>
                        Each project reflects my commitment to creative problem-solving, curiosity, and a desire to make technology accessible and meaningful. I invite you to explore, learn about my journey, and see how I’m pushing boundaries to create a more connected, resilient world.
                    </p>
                </div>
                {/* <Avatar>
                    <AvatarImage src="/personal_cut.png" width={200} sizes='lg' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar> */}
                <div className='rounded-lg flex flex-col items-centerw-fit lg:w-1/3 h-1/3 z-40 bg-green-20 border-2 border-green'>
                    <Image
                        src='/personal_cut.png'
                        alt='personal portrait'
                        width={0}
                        height={0}
                        sizes="40vw"
                        // style={{ width: '40%', height: '50%' }}
                        className='bg-no-repeat bg-center w-auto h-3/4 object-fit z-0'
                    />
                </div>
            </div>
        </header>
    )
}

export default Header