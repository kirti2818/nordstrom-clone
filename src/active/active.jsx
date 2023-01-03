
import { useDispatch, useSelector } from "react-redux"
import { activeAllProduct } from "../redux/action"
import {Link} from "react-router-dom"

import { useEffect } from "react"
import { Box, SimpleGrid, Image, Text, Center, Flex, HStack, Select } from "@chakra-ui/react"
import { useState } from "react"

export default function Active() {
    const  data= useSelector((store) => store.nordstromData.data)
    const dispatch = useDispatch()
    const[sortByPrice,setSortByPrice] = useState("")
    // console.log(data)
    useEffect(() => {
        dispatch(activeAllProduct(sortByPrice))
    }, [sortByPrice])

    const handleSorting=(e)=>{
        setSortByPrice(e.target.value)
        // console.log(e.target.value)
    }
    console.log(data)
    
    return (
        <>
        <Select fontSize={{base:"14px",sm:"14px",md:"16px",lg:"16px"}}  onChange={handleSorting} marginLeft={{base:"48%",sm:"68%",md:"72%",lg:"78%"}}  w={{base:"50%",sm:"30%",md:"25%",lg:"20%"}} >
  <option value="">Sort By Features</option>
  <option  value="desc">Sort by Price: High to Low</option>
  <option value="asc">Sort by Low to High</option>
</Select>
        <SimpleGrid p={"20px"} columns={{ base: "2", sm: "2", md: "3", lg: "4" }} gap={"20px"}>
            {
                data && data.map((el) => {
                    return (<Link to = {`/SingleProduct/${el._id}`}><Box>
                        <Box  position={"relative"}  boxShadow={"lg"} border={"2px solid #f7f7f7"}>
                            <Center>
                                <Image w={{ base: "90%", sm: "70%", md: "80%", lg: "75%" }} src={el.front_image} />
                                <Image  position={"absolute"} _hover={{opacity:"1"}}  opacity={"0"}  w={{ base: "90%", sm: "70%", md: "80%", lg: "75%" }} src={el.back_image} />
                                
                            </Center>
                        </Box>
                        <Box marginTop={"5px"} textAlign={{base:"null",sm:"left",md:"left",lg:"left"}}>
                            <Text fontSize={{base:"15px",sm:"15px",md:"18px",lg:"18px"}} fontWeight={"bold"}>{el.company_name}</Text>
                            <Text color="gray.600" fontSize={{base:"13px",sm:"15px",md:"17px",lg:"17px"}} fontFamily={"Mukta', sans-serif"}>{el.product_name}</Text>

                            {el.previous_front_price ? <Flex flexDirection={"column"}><HStack><Text fontSize={{base:"13px",sm:"15px",md:"19px",lg:"19px"}} fontWeight={"bold"} color="#d61f27">{el.current_front_price}</Text><Text color="#d61f27" noOfLines={"1"}>{el.off_percent}</Text></HStack><strike style ={{color:"black",fontWeight:"bold"}}>{el.previous_front_price}</strike></Flex> : <Box><Text fontSize={{base:"13px",sm:"15px",md:"19px",lg:"19px"}} fontWeight={"bold"} color="black">{el.current_front_price}</Text></Box>}

                        </Box>
                    </Box>
                    </Link>
                    )
                })
            }
        </SimpleGrid>
        </>
    )
}