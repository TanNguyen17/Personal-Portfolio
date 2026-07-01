"use client"
import React from 'react'
import { motion } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ContactInfo = () => {
    return (
        <motion.section
            id="contact"
            className='mb-20 scroll-mt-20'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
        >
            <h2 className='font-syne text-sm uppercase tracking-widest text-blue mb-8 flex items-center gap-3'>
                <span className="h-px w-8 bg-blue/40" />
                Get In Touch
            </h2>

            <div className='flex flex-col gap-4 font-space text-base text-lightest-slate leading-relaxed max-w-lg'>
                <p>
                    I am always open to new opportunities and interesting conversations.
                    Whether you have a question, a project idea, or just want to say hello — feel free to reach out!
                </p>

                <div className="flex flex-col gap-3 mt-2">
                    <a
                        href="mailto:tannm2005@gmail.com"
                        className="group inline-flex items-center gap-2 text-white hover:text-blue transition-colors font-medium"
                    >
                        TanNM2005@gmail.com
                        <ArrowOutwardIcon style={{ fontSize: 14 }} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <a
                        href="tel:+84859493676"
                        className="group inline-flex items-center gap-2 text-white hover:text-blue transition-colors font-medium"
                    >
                        +84 859 493 676
                        <ArrowOutwardIcon style={{ fontSize: 14 }} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <p className="text-lightest-slate/60 text-sm">
                        District 7, Ho Chi Minh City
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-white/5">
                <p className="font-space text-xs text-lightest-slate/40">
                    Designed & Built by Manh Tan Nguyen
                </p>
            </div>
        </motion.section>
    )
}

export default ContactInfo