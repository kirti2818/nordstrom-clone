import { Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftElement, Text ,Center, useMediaQuery, Spacer, useDisclosure, DrawerOverlay, Drawer, DrawerHeader, DrawerBody, DrawerContent} from "@chakra-ui/react";
import React from "react"
// import {IoCubeOutline} from "react-icons/io"
import { BsBagPlus } from "react-icons/bs"
import {CiSearch} from "react-icons/ci"
import { Icon } from '@chakra-ui/react'
import {HiOutlineCube} from "react-icons/hi"
import {HamburgerIcon} from "@chakra-ui/icons"
import {Link} from "react-router-dom"

export default function Navbar() {
    const[IsLargerThanHD] = useMediaQuery('(min-width: 510px)')
     const { isOpen, onOpen, onClose } = useDisclosure()
     const [placement, setPlacement] = React.useState('left')
    return (
        <>
        {
            IsLargerThanHD ? ( <Box>
            <Flex p={{ sm: '10px', md: '30px', lg: '46px' }} gap={{sm:"30px",md:"30px,",lg:"50px"}} justifyContent={"space-between"}>
                <Center><Link to = "/"><Box><Image w={{ sm: "280px", md: '350px', lg: '450px' }} src={"https://n.nordstrommedia.com/alias/nordstrom-logo.svg"} /></Box></Link></Center>
               
                <InputGroup  >
                    <InputLeftElement
                        pointerEvents='none'
                        paddingTop={{sm:"0px",md:null,lg:"20px"}}
                        paddingBottom={{sm:"9px",md:null,lg:null}}
                        paddingRight={{sm:null,md:null,lg:"5px"}}
                        children={<Icon fontSize={{sm:"18px",md:"20px",lg:"25px"}} as={CiSearch} />}
                    />
                    <Input  h={{sm:"30px",md:"35px",lg:"50px"}}  fontSize={{sm:"13px",md:"15px",lg:"18px"}} type='text' placeholder='Search for products and brands' />
                </InputGroup>
                <Flex w={{sm:"100%",md:"50%",lg:"50%"}} gap={"10px"} justifyContent={"space-between"} fontSize= {{sm:"12px",md:"16px",lg:"18px"}}>
                    <HStack><Link to = "/signup"><Text>Sign In</Text></Link></HStack>
                    <HStack><Link to = "/cart"><Icon fontSize={{sm:"18px",md:"22px",lg:"28px"}} as ={BsBagPlus} /></Link><Link to = "/cart"><Text>Purshases</Text></Link></HStack>
                    <HStack><Icon fontSize={{sm:"18px",md:"22px",lg:"35px"}} as={HiOutlineCube}/></HStack>
                    <Box></Box>
                </Flex>
            </Flex>
            <Flex fontSize={{sm:"16px",md:"20px",lg:"20px"}}>
            <Spacer/>
                <HStack><Link to = "/men">Men</Link></HStack>
                <Spacer/>
                <HStack><Link to="/women">Women</Link></HStack> 
                <Spacer/>
                <HStack><Link to = "kids">Kids</Link></HStack>
                <Spacer/>
                <HStack><Link to = "/activeWear">Foot Wear</Link></HStack>
                <Spacer/>
            </Flex>
        </Box>
            ) :(
                <Box p={"10px"}>
                    <Flex gap={"20px"}>
                        <HStack><HamburgerIcon onClick={onOpen} fontSize={"20px"} /></HStack>
                        <Link to="/"><HStack><Image width={"130px"} src ="https://n.nordstrommedia.com/alias/nordstrom-logo.svg"/></HStack></Link>
                        <Spacer/>
                        <HStack><Link to="/cart"><Icon fontSize = {"20px"} as ={BsBagPlus} /></Link></HStack>
                    </Flex>
                    <InputGroup border={"1px solid black"}   marginTop={"12px"} >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Icon   as={CiSearch} />}
                    />
                    <Input border={"none"} height={"35px"} fontSize={"13px"} type='text' placeholder='Search for products and brands' />
                </InputGroup>

                <Drawer  size={{base:"xs"}} placement={placement}  onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent onClick={onClose} border={"1px solid red"} >
          <DrawerHeader  borderBottomWidth='1px'><Link to="/"><HStack><Image width={"130px"} src ="https://n.nordstrommedia.com/alias/nordstrom-logo.svg"/></HStack></Link></DrawerHeader>
          <DrawerBody>
            <Link to = "/signup"><Text fontSize={"20px"} fontWeight={"700"}>Sign Up</Text></Link>
            <Link to = "/cart"><Text fontWeight={"700"} fontSize={"20px"}>Purchases</Text></Link>
            <Text fontWeight={"700"}  fontSize={"20px"}>Payment</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex fontSize={"13px"}>
                <Spacer/>
                <HStack><Link to="/men">Men</Link></HStack>
                <Spacer/>
                <HStack><Link to="/women">Women</Link></HStack>
                <Spacer/>
                <HStack><Link to="kids">Kids</Link></HStack>
                <Spacer/>
                <HStack><Link to="activeWear">Foot Wear</Link></HStack>
                <Spacer/>
            </Flex>
                   

                </Box>
            )
        }
        </>
    )
    
}