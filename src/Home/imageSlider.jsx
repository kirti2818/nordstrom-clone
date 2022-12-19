import '../index.css';
import {Box,Image} from "@chakra-ui/react"
export default function Slider(){
    return <Box className="ImageContainer">
      <Box className="wrapper" >
        <Image src="https://i.postimg.cc/9VnnxPBT/image1-Of-Slideshow.webp" />
        <Image src="https://i.postimg.cc/1yxYS923/image2-Of-Slide-Show.webp" />
        <Image src="https://i.postimg.cc/W289003d/image3-Of-Slide-Show.webp" />
        <Image src="https://i.postimg.cc/KFR9gkyY/image4-Of-Slide-Show.webp" />
        <Image src="https://i.postimg.cc/y7zn5L3J/image5-Of-Slide-Show.webp" />
      </Box>
    </Box>
}