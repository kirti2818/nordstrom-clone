
import React from "react"
import { useNavigate,Link } from "react-router-dom"
import { useDisclosure,Button,Text,Drawer,DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody,DrawerCloseButton,Stack,Box,FormLabel,Input,Select,Textarea,DrawerFooter,InputGroup,InputRightAddon,InputLeftAddon,Center,Heading } from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons"
import { useEffect, useState } from "react"
import { signUpDat } from "./signup.js"

export default function Login(){
    const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[array,setArray] = useState([])
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  const checkCredentials=(email)=>{
   var filtered = array.filter((user)=>{
     return user.Email === email && user.Password === password;
   })
   if(filtered.length!==0){
     return true
   }
   else{
     return false;
   }
  }

  const handlesubmit = ()=>{
    const newItem = {
      Email :email,
      Password : password
    }
    if(checkCredentials(newItem.Email,newItem.Password)===true ){
       alert("login Successfully")
       handleFetch()
       navigate("/")
    }
    else{
      alert("wrong credentials")
      handleFetch()
    }
  }

  useEffect(()=>{
   handleFetch()
  },[])
  const handleFetch = ()=>{
    signUpDat()
    .then((res)=>{
      console.log(res.data)
      setArray(res.data)
    })
  }
    return <>
   <Button _hover={{bg:"black",color:"white"}} borderRight={"2px solid white"} borderRadius={"0"} onClick = {onOpen}  color = "white" bg="black">Sign In</Button>

<Drawer 
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        size = {{base:"xs",small:"sm",md:"md",lg:"2xl"}}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <Heading fontWeight={"400"} size={"md"} marginTop={"80px"} textAlign={"center"} >
            Login Your Account
          </Heading>

          <Box marginLeft={"auto"} marginRight={"auto"} marginTop={"15px"} >
            <Stack spacing='14px'>
              <Box>
                <FormLabel htmlFor='username'>Email</FormLabel>
                <InputGroup>
                <Input  w={{lg:"md",md:"md"}}
                  value = {email}
                  onChange = {(e)=>setEmail(e.target.value)} 
                  ref={firstField}
                  id='useremail'
                  placeholder='Please enter user email'
                />
                </InputGroup>
              </Box>

              <Box>
              <FormLabel htmlFor='userpassword'>Password</FormLabel>
                <Input
                value = {password}
                onChange = {(e)=>setPassword(e.target.value)} 
                  id='userpassword'
                  placeholder='Please enter user password'
                />
              </Box>

            </Stack>
          </Box>
            <Button marginTop={"10px"} _hover={{bg:"black",color:"white"}} color = "white" marginRight={"auto"} marginLeft={"auto"} w={{lg:"md",md:"md"}} borderRadius={"0"} onClick = {handlesubmit} bg='Black'>Sign Up</Button>
        </DrawerContent>
      </Drawer>
    
    </>
}