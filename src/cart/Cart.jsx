import { Heading, Box, Text, Flex, Image, HStack, Spacer,Icon, useDisclosure,AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,Button } from "@chakra-ui/react"
import React from "react"
import { useEffect, useState } from "react"
import {ImGift} from "react-icons/im"
import { useDispatch, useSelector } from "react-redux"
import { checkout } from "./cartAction"
export default function Cart() {
    const dispatch = useDispatch()
    const[paise,setPaise] = useState()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef ()
  
    const cartitemdata = useSelector((store)=>store.cartData.cartitemdata)
    console.log(cartitemdata)

    useEffect(()=>{
        handleFetchData()
    },[])
    const handleFetchData = ()=>{
        var sum=0
        cartitemdata && cartitemdata.map((el)=>{
            sum=sum+el.price;
        })
        setPaise(Math.floor(sum))
        console.log(sum)
    }
    const handleCheckOut = ()=>{
        dispatch(checkout())
        setPaise(0)
        onClose()
        
      }
    return (
        <>
        
            <Box p={{ base:"10px", sm: '10px', md: '30px', lg: '46px' }} >
                <Box textAlign={"left"}>
                    <Heading fontWeight={"400"} fontSize={{base:"18px",sm:"22px",md:"30px",lg:"40px"}} >Shopping Bag</Heading>
                    <Text marginTop={"10px"} fontSize={{base:"18px",sm:"18px",md:"20px",lg:"25px"}} >Items in your bag are not on hold.</Text>
                    <Flex gap={"10px"}>
                        <HStack><Icon fontSize={"20px"} as = {ImGift}/></HStack>
                        <HStack><Text marginTop={"5px"} fontSize={{base:"13px",sm:"16px",md:"20px",lg:"20px"}} >Choose gift options when you check out.
                        </Text>
                        </HStack>
                    </Flex>
                </Box>
                <Box marginTop={"30px"} bg={"grey"} border={"1px solid grey"}></Box>
                <Box>
                    {cartitemdata && cartitemdata.length>=1 &&
                    cartitemdata.map((el)=>{
                     return(
                        <Flex gap={{base:"10px",sm:"100px",md:"150px",lg:"200px"}}>
                        <HStack><Box boxShadow={"lg"} border = {"1px solid white"} marginTop={"20px"} width={{base:"200px",sm:"250px",md:"300px",lg:"300px"}}><Image w={"100%"} src={el.front_image} /></Box></HStack>

                        <HStack>
                            <Box p={"10px"} boxShadow={"lg"} border = {"1px solid white"}>
                            <Text fontSize={{ base: "15px", sm: "15px", md: "18px", lg: "28px" }} fontWeight={"bold"}>{el.company_name}</Text>
            <Text color="gray.600" fontSize={{ base: "13px", sm: "15px", md: "17px", lg: "22px" }} fontFamily={"Mukta', sans-serif"}>{el.product_name}</Text>

            {el.previous_front_price ? <Flex flexDirection={"column"}><Text fontSize={{ base: "13px", sm: "15px", md: "19px", lg: "20px" }} fontWeight={"bold"} color="#d61f27">{el.current_front_price}</Text><strike style={{ color: "black",fontSize : "14px", fontWeight: "bold"  }}>{el.previous_front_price}</strike></Flex> : <Box><Text fontSize={{ base: "13px", sm: "15px", md: "19px", lg: "20px" }} fontWeight={"bold"} color="black">{el.current_front_price}</Text></Box>}
                            </Box>
                        </HStack>
                    </Flex>
                     )

                    })
                      }
                    
                </Box>
                <Flex gap={"15px"}>
                <HStack><Image w={{base:"200px",sm:"200px",md:"300px",lg:"350px"}} src = "https://i.postimg.cc/rwkD4y6L/payment-Image.png" alt="error" /></HStack>
                <Spacer/>
                <HStack>
                <Button size={{base:"xs",sm:"sm",md:"md",lg:"md"}} fontSize={{base:"10px",sm:"13px",md:"16px",lg:"16px"}} colorScheme='red' onClick={onOpen}>
                Proceed To checkout ₹ {paise} 
                
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Place order
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to place an order of ₹ {paise}.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleCheckOut} colorScheme='red' ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
                </HStack>
                </Flex>
            </Box>
        </>
    )
}