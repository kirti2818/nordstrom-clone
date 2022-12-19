import {Box,Image} from "@chakra-ui/react"
import { useEffect } from "react";
export default function SlideShow(){
    var imagesArray = [
        "https://i.postimg.cc/9VnnxPBT/image1-Of-Slideshow.webp",
        "https://i.postimg.cc/1yxYS923/image2-Of-Slide-Show.webp",
        "https://i.postimg.cc/W289003d/image3-Of-Slide-Show.webp",
        "https://i.postimg.cc/KFR9gkyY/image4-Of-Slide-Show.webp",
        "https://i.postimg.cc/y7zn5L3J/image5-Of-Slide-Show.webp"
      ]
      const slideImage=()=>{
        var imag = document.getElementById("image")
        var index = 1
        setInterval(() => {
        if(index===imagesArray.length){
            index=0

        }
        imag.setAttribute("src",imagesArray[index])
        index++
        
      }, 3000);
    }
      useEffect(()=>{
          slideImage()
      },[])
     return(
        <>
         <Box ><Image id = "image" src ="https://i.postimg.cc/9VnnxPBT/image1-Of-Slideshow.webp"/></Box>
        </>
     )
}