import {
    Box,
    Button,
    Flex,
    Image,
    Spacer,
    Text,
    useStatStyles, HStack
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import "../index.css"

const getData = () => {
    return axios("http://localhost:8081/products?type=shoes");
};

function ProductSlidershoes() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        handleTheFetch();
    }, []);

    const handleTheFetch = () => {
        getData().then((res) => setProduct(res.data));
    };

    console.log("Product=>", product);

    return (
        <Box h={"auto"
        } className="slider">
            <Box className="slide-track">
                {product.map((user) => (
                    <NavLink to={`/product/${user.id}`}>
                        <Flex
                            direction={"column"}
                            overflow={"hidden"}
                            p={1}
                            className="slide"
                            border="1px"
                            borderColor="gray.400"
                            key={user.id}
                            m={1}
                            h={"350px"}
                        >
                            <Image h="200px" width={900} bgSize={"cover"} className="img" src={user.front_image} />
                            {/* <Flex mb={2}> */}
                            <Box marginTop={"5px"} textAlign={{ base: "null", sm: "left", md: "left", lg: "center" }}>
                                <Text fontSize={{ base: "15px", sm: "15px", md: "18px", lg: "16px" }} fontWeight={"bold"}>{user.company_name}</Text>
                                <Text color="gray.600" fontSize={{ base: "13px", sm: "15px", md: "17px", lg: "13px" }} fontFamily={"Mukta', sans-serif"}>{user.product_name}</Text>

                                {user.previous_front_price ? <Flex flexDirection={"column"}><HStack><Text fontSize={{ base: "13px", sm: "15px", md: "19px", lg: "16px" }} fontWeight={"bold"} color="#d61f27">{user.current_front_price}</Text><Text color="#d61f27" noOfLines={"1"}>{user.off_percent}</Text></HStack><strike style={{ color: "black", fontWeight: "bold" }}>{user.previous_front_price}</strike></Flex> : <Box><Text fontSize={{ base: "13px", sm: "15px", md: "19px", lg: "16px" }} fontWeight={"bold"} color="black">{user.current_front_price}</Text></Box>}

                            </Box>

                            {/* </Flex> */}

                        </Flex>
                    </NavLink>
                ))}
            </Box>
        </Box>
    );
}

export default ProductSlidershoes;