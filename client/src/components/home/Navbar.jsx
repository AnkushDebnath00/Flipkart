import React from 'react'

// data
import { navData } from '../../constants/data'

// components
import { Box, Typography } from '@mui/material'


function Navbar() {
    return (
        <Box className=' overflow-x-scroll xl:overflow-x-hidden items-center space-x-4 w-full mx-auto mt-4 bg-white pb-4 shadow-md'>
            <Box className='xl:px-[40px] flex flex-row justify-start md:justify-evenly'>
                {
                    navData.map((data) => {
                        return (
                            <Box key={data.text} className='flex-shrink-0 mx-3 flex justify-center flex-col'>
                                <img src={`${data.url}`} alt="navImage" className=' max-h-20 max-w-20 contain w-[64px] block mx-auto' />
                                <Typography className='text-[13px] text-center font-medium'>
                                    {data.text}
                                </Typography>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default Navbar