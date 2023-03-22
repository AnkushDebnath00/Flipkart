import React from 'react'
// data
import { logoUrl, subUrl } from '../../constants/data';
// components
import Search from './Search';
import CustomButtons from './CustomButtons';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';




function Header() {
    return (
        <AppBar position="sticky" className='bg-[#2874f0] h-[112px] md:h-[56px] flex flex-col justify-center items-center'>
            <Toolbar className='justify-between md:justify-center w-[100%] h-[56px]'>
                <Box className='flex flex-row justify-center items-center'>
                    <Box className='flex flex-col'>
                        <img src={logoUrl} alt="Flipkart" className='w-[75px] min-w-[75px]' />
                        <Box className='flex flex-row'>
                            <Typography className='text-[.7rem] italic text-white md:text-[#ffe500] block'>
                                Explore <Typography component='span' className='text-[.7rem] italic font-semibold text-[#ffe500] md:text-[#ffe500]'>Plus</Typography>
                            </Typography>
                            <img src={subUrl} alt="plus" className='h-2' />
                        </Box>
                    </Box>
                </Box>
                <Box className='hidden md:flex'>
                    <Search mob={true} />
                </Box>
                <Box>
                    <CustomButtons />
                </Box>
            </Toolbar>
            <Toolbar className='flex md:hidden'>
                <Search mob={false} />
            </Toolbar>
        </AppBar>
    )
}

export default Header