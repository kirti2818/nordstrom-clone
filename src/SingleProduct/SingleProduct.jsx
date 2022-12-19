import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSinglePro } from "./singleAction"
import { Icon, Flex, Text, Image, Box, HStack, Button, Select } from "@chakra-ui/react"
import { BiShoppingBag } from "react-icons/bi"
import { addToCart } from "../cart/cartAction"

export const SingleProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const singleProductData = useSelector((store) => store.singleData.singleProductData);
  // const cartitemdata = useSelector((store) => store.cartData.cartitemdata)

  console.log(id)
  useEffect(() => {
    dispatch(getSinglePro(id))
  }, [])
  console.log(singleProductData[0] && singleProductData[0])
  // console.log(cartitemdata)

  // const itemAlreadyExist = (id, cartItems) => {
  //   if (cartItems.find((item) => item.id === id)) {
  //     return true
  //   }
  //   return false
  // }

  return <>
    <Box p={{ base: "10px", sm: '10px', md: '30px', lg: '46px' }} >
      <Flex gap={"40px"}>
        <Box padding="20px" w={{ base: "250px", sm: "200px", md: "250px", lg: "300px" }} _hover={{ transform: "scale(1.2)" }} transition={"transform .2s"} boxShadow={"lg"}><Image h="100%" w={{ base: "100%", sm: "100%", sm: "100%", lg: "80%" }} src={singleProductData[0] && singleProductData[0].front_image} /></Box>
        <Box padding="20px" w={{ base: "250px", sm: "200px", md: "250px", lg: "300px" }} _hover={{ transform: "scale(1.2)" }} transition={"transform .2s"} boxShadow={"lg"}><Image w={{ base: "100%", lg: "80%" }} src={singleProductData[0] && singleProductData[0].back_image} /></Box>
        <Box>

          <Box marginTop={"5px"} textAlign={{ base: "null", sm: "left", md: "left", lg: "left" }}>
            <Text fontSize={{ base: "15px", sm: "15px", md: "18px", lg: "48px" }} fontWeight={"bold"}>{singleProductData[0] && singleProductData[0].company_name}</Text>
            <Text color="gray.600" fontSize={{ base: "13px", sm: "15px", md: "17px", lg: "27px" }} fontFamily={"Mukta', sans-serif"}>{singleProductData[0] && singleProductData[0].product_name}</Text>

            {singleProductData[0] && singleProductData[0].previous_front_price ? <Flex flexDirection={"column"}><HStack><Text fontSize={{ base: "13px", sm: "15px", md: "19px", lg: "22px" }} fontWeight={"bold"} color="#d61f27">{singleProductData[0] && singleProductData[0].current_front_price}</Text><Text color="#d61f27" noOfLines={"1"}>{singleProductData[0] && singleProductData[0].off_percent}</Text></HStack><strike style={{ color: "black", fontWeight: "bold" }}>{singleProductData[0] && singleProductData[0].previous_front_price}</strike></Flex> : <Box><Text fontSize={{ base: "13px", sm: "15px", md: "19px", lg: "29px" }} fontWeight={"bold"} color="black">{singleProductData[0] && singleProductData[0].current_front_price}</Text></Box>}

            <Flex gap={"20px"} flexDirection={"column"} marginTop={"30px"}>
              <Select fontSize={{ base: "16px", sm: "18px", lg: "20px" }} fontWeight={"bold"} fontFamily={"Mukta', sans-serif"}>
                <option>Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </Select>

              <Select fontSize={{ base: "16px", sm: "18px", lg: "20px" }} fontWeight={"bold"} fontFamily={"Mukta', sans-serif"}>
                <option>Width</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </Select>

              <HStack><Button 
                onClick={() => dispatch(addToCart(singleProductData[0]))} color="white" bgColor={"black"} w={{ lg: "500px" }} ><Icon fontSize={"20px"} as={BiShoppingBag} />Add To Cart</Button></HStack>
            </Flex>

          </Box>

        </Box>
      </Flex>

    </Box>

  </>
}