import SlideShow from "./SlideShow";
import Slider from "./imageSlider"
import { Box, Image, Flex, Heading, Text, Button } from "@chakra-ui/react";
import ProductSlider from "./Productslider";
import ProductSliderMen from "./ProductSlider2";
import ProductSlidershoes from "./ProductSlider3";
import Footer from "./footer"
export default function Home() {
    return (
        <>

            <Box p={{ base: "10px", sm: '10px', md: '30px', lg: '46px' }}>
                {/* <SlideShow /> */}
                <Slider/>
                {/* <ProductSlidershoes/> */}
                <Flex flexDirection={{ base: "column", sm: "row", md: "row", lg: "row" }} h={{ base: "150px", sm: "150px", md: "180px", lg: "180px" }} marginTop={"30px"} >
                    <Box h={{ base: "50%", sm: "100%", md: "100%", lg: "100%" }} w={{ base: "100%", sm: "50%", md: "50%", lg: "50%" }}><Image w="100%" h="100%" src="https://i.postimg.cc/R0hVqMWX/PAIGE-Display-Banner-804x200-Winter-Wardrobe.jpg" /></Box>
                    <Box padding={"5px"} paddingTop={{ base: null, sm: "10px", md: "20px", lg: "30px" }} h={{ base: "50%", sm: "100%", md: "100%", lg: "100%" }} w={{ base: "100%", sm: "50%", md: "50%", lg: "50%" }} bg="black">
                        <Heading size={{ base: "sm", sm: "md", md: "lg", lg: "lg" }} color="white">Winter Wardrobe</Heading>
                        <Text marginTop={{ base: null, sm: "10px", md: "10px", lg: "10px" }} fontSize={{ base: "15px", sm: "15px", md: "18px", lg: "20px" }} marginBottom={{ base: "0px", sm: null, md: null, lg: null }} color="white">For nights out,staying in and everything in between.
                        </Text>
                    </Box>
                </Flex>
                <ProductSliderMen/>

                <Box w={"100%"} marginTop={"30px"}>
                    <Box ><Image w={"100%"} src="https://i.postimg.cc/3YnKqvzT/make-Merry.webp" /></Box>
                  
                </Box>
                
                <ProductSlider/>
                <Footer/>
            </Box>
        </>

    )
}