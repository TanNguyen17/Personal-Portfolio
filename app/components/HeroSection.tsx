import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-6xl font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm{" "}</span>
                    Tan
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsums asfsdf asdf asdf sdfsafzxvkjwnpfjpsag
                    saognosangosdgnsdg
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                        Contact Me
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className="rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative">
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <Image
                        src={"/personal_image.jpg"}
                        alt='Personal Image'
                        width={250}
                        height={400}
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection