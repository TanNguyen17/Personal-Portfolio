import React from 'react'

const AboutMe = () => {
    return (
        <section id='about' className='text-slate-400 mb-10'>
            <div className='flex flex-row gap-2 mb-4 font-bold'>
                <h1 className='text-3xl text-green'>01. </h1>
                <h1 className='text-3xl text-white'>About Me</h1>
            </div>
            <p className='mb-4'>
                Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development.
                Fast-forward to today, and I&aposve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
            </p>
            <p className='mb-4'>
                My main focus these days is building accessible user interfaces for our customers at Klaviyo.
                I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood.
                In my free time, I&apos;ve also released an online video course that covers everything you need to know to build a web app with the Spotify API.
            </p>
            <p>
                When I&aposm not at the computer, I&aposm usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
            </p>
        </section>
    )
}

export default AboutMe