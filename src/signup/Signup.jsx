import { signUpDat, signUpData } from "./signup";
import { useEffect,useState } from "react";
import React from "react"
import { useDisclosure,Button,Drawer,DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody,DrawerCloseButton,Stack,Box,FormLabel,Input,Select,Textarea,DrawerFooter,InputGroup,InputRightAddon,InputLeftAddon,Center, Heading } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const [array,setArray] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        console.log("hi")
        handleFetch()
          
      },[])
      
      const handleFetch = ()=>{
         signUpDat()
        .then((res)=>{
          console.log(res.data)
          setArray(res.data)
        
        })
      }
      
      
        function chekEmail(email){
          var filtered = array.filter((user)=>{
            return user.Email === email
          })
          if(filtered.length===0){
            return true;
          }
          else{
            return false
          }
        }
      
        const handlesubmit = ()=>{
         var newItem = {
          Email :email,
          Password :password 
         }
      
         
        if(chekEmail(newItem.Email)===true){
          signUpData(newItem)
          .then((res)=>{
            console.log(res.data)
          })
          handleFetch()
          alert("signUp Successfully")
          navigate("/login")
        }
         
        else{
          handleFetch()
          alert("email has already registered")
        }
         
        }
        console.log("hi")
return <>
<Box >
    <Link to = "/login"><Button _hover={{bg:"black",color:"white"}} borderRight={"2px solid white"} borderRadius={"0"}  color = "white" bg="black">Sign In</Button></Link>
    <Button _hover={{bg:"black",color:"white"}} borderRadius={"0"} color = "white" bg="black" onClick = {onOpen}>Create an Account</Button>
</Box>

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
            Create a new account
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