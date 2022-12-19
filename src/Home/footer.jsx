import { Flex, VStack, Image, Box, Text,HStack,Spacer } from "@chakra-ui/react"
import {Icon} from "@chakra-ui/icons";
import SmartphoneTwoToneIcon from '@mui/icons-material/SmartphoneTwoTone';
import {BsInstagram} from "react-icons/bs"
import {ImPinterest2} from "react-icons/im"
import {SiTwitter} from "react-icons/si";
import {CiFacebook} from "react-icons/ci"
export default function Footer() {
    return <Box padding={"5px"}  marginTop="10px" bg= "#f9f9f9">
        <Flex gap={"25px"} flexDirection={"row"} >
        
                <VStack fontSize={"18px"} >
                    <Text fontWeight={"400"} color={"black.600"} fontSize={"23px"}>Customer Service</Text>
                    <Text>Contact Us</Text>
                    <Text>Order Status</Text>
                    <Text>Shipping</Text>
                    <Text>Return Policy & Exchanges</Text>
                    <Text>Price Adjustments</Text>
                    <Text>Gift Cards</Text>
                    <Text>Product Recalls</Text>
                <HStack><Image w={"20px"} src="https://i.postimg.cc/HkFFDv8D/indiaflag.png" alt="error" /><Text>India</Text></HStack>
                </VStack>
            

        
                <VStack fontSize={"18px"}>
                    <Text fontWeight={"400"} color={"black.600"} fontSize={"23px"}>About Us</Text>
                    <Text>All Brands</Text>
                    <Text>Careers</Text>
                    <Text>Corporate Social Responsibility</Text>
                    <Text>Diversity, Inclusion & Belonging</Text>
                    <Text>Get Email Updates</Text>
                    <Text>Nordstrom Blogs</Text>
                    <Text>The Thread</Text>
                    <Text>Nordy Podcast</Text>
                </VStack>
            
        
                <VStack fontSize={"18px"}>
                    <Text fontWeight={"400"} color={"black.600"} fontSize={"23px"}>Store & Services</Text>
                    <Text>Find a Store</Text>
                    <Text>Find Style Help</Text>
                    <Text>Alterations & Tailoring</Text>
                    <Text>Pop-In Shop</Text>
                    <Text>Vitual Events</Text>
                    <Text>Spa Nordstrom</Text>
                    <Text>Nordstrom Restauramts</Text>
                    <Text>Nordstrom Loacl</Text>
                </VStack>
            
        
                <VStack fontSize={"18px"}>
                    <Text fontWeight={"400"} color={"black.600"} fontSize={"23px"}>Nordstrom Card & Rewards</Text>
                    <Text>The Nordy Club Rewards</Text>
                    <Text>Pay My Bill</Text>
                    <Text>Manage My Nordstrom Card</Text>
                </VStack>
            
        
                <VStack fontSize={"18px"}>
                    <Text fontWeight={"400"} color={"black.600"} fontSize={"23px"}>Nordstrom, Inc.</Text>
                    <Text>Nordstrom Rack</Text>
                    <Text>Nordstrom Canada</Text>
                    <Text>Investor Relations</Text>
                    <Text>Press Releases</Text>
                    <Text>Nordstrom Media Network</Text>
                </VStack>
                 

                <VStack marginTop={"10px"} marginLeft={"80px"} marginRight={"10px"} fontSize={"18px"}>
                    <HStack><Icon as={SmartphoneTwoToneIcon}/><Text fontWeight={"400"} color={"black.600"} fontSize={"16px"}>Get Our  Apps</Text></HStack>
                    <HStack>
                      <Icon  as = {BsInstagram}/>
                      <Icon as = {ImPinterest2}/>
                      <Icon as = {SiTwitter}/>
                      <Icon as = {CiFacebook}/>
                    </HStack>
                </VStack>
            
        </Flex>
    </Box>
}
