import React from 'react'
import {
    Box,
    IconButton,
    useBreakpointValue,
    Image,
} from '@chakra-ui/react'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// Settings for the slider
const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

const Carousel = () => {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            image:"https://f.nooncdn.com/mpcms/EN0003/assets/dd55814f-0ef9-4fcd-8091-c851e14ea50b.png?format=avif"
        },
        {
            image:"https://f.nooncdn.com/mpcms/EN0003/assets/048c265a-7cd9-4424-aab2-4d08379147c6.png?format=avif"
        },
        {
            image:"https://f.nooncdn.com/ads/banner-1440x1440/en_dk_eg-hero-01.1737202017.9900124.png?format=avif"
        },
        {
            image:"https://f.nooncdn.com/mpcms/EN0003/assets/26e5a940-a241-42c9-b4e6-3ebbd4647f79.png?format=avif"
        }
    ]

    return (
        <Box position={'relative'} height={'300px'} width={'full'} overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                position="absolute"
                variant="unstyled"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                borderRadius={'50%'}
                onClick={() => slider?.slickPrev()}>
                <IoIosArrowBack size="40px" color='#fff'/>
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="unstyled"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <IoIosArrowForward size="40px" color='#fff'/>
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    // <Box
                    //     key={index}
                    //     height={'300px'}
                    //     maxW={'100%'}
                    //     position="relative"
                    //     backgroundPosition="center"
                    //     backgroundRepeat="no-repeat"
                    //     backgroundSize="con"
                    //     backgroundImage={`url(${card.image})`}>
                    // </Box>
                    <Image key={index} src={card.image} boxSize={'100%'} objectFit={'cover'}/>
                ))}
            </Slider>
        </Box>
    )
}

export default Carousel