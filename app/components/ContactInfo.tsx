"use client"
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItemText } from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge"


const ContactInfo = () => {
    return (
        <div className='flex flex-col my-4 md:mt-6'>
            <div className='flex flex-row gap-2 mb-6 font-bold'>
                <h1 className='text-3xl text-green'>04. </h1>
                <h1 className='text-3xl text-white'>Contact Info</h1>
            </div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
            >
                <List className='p-0 text-xl'>
                    <a href="mailto:tannm2005@gmail.com">
                        <ListItem className='px-0'>
                            <ListItemIcon>
                                <Badge variant='outline' className='p-2 rounded-sm border-none text-green bg-green-20 hover:bg-green hover:text-black' >
                                    <EmailIcon />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary="TanNM2005@gmail.com" className='text-2xl text-white align-middle' />
                        </ListItem>
                    </a>
                    <a href="tel:+849493676">
                        <ListItem className='px-0'>
                            <ListItemIcon>
                                <Badge variant='outline' className='p-2 rounded-sm border-none text-green bg-green-20 hover:bg-green hover:text-black' >
                                    <PhoneIcon />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary="+84 859 493 676" className='text-2xl text-white align-middle' />
                        </ListItem>
                    </a>
                    <ListItem className='px-0'>
                        <ListItemIcon>
                            <Badge variant='outline' className='p-2 rounded-sm border-none text-green bg-green-20 hover:bg-green hover:text-black' >
                                <HomeIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary="District 7, Ho Chi Minh City" className='text-2xl text-white align-middle' />
                    </ListItem>
                </List>
            </motion.div>
        </div>
    )
}

export default ContactInfo