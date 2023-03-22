import React from 'react'

// data
import { bannerData } from '../../constants/data';

// components
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Banner() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <Carousel swipeable={true}
            draggable={false}
            showDots={false}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            responsive={responsive}
            className='mt-2 w-[99%] mx-auto'
        >
            {
                bannerData.map((data) => {
                    return (
                        <img key={data.id} src={data.url} alt="bannerImage" className='w-full contain' />
                    )
                })
            }

        </Carousel>
    )
}

export default Banner