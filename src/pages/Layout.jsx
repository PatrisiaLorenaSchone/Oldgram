import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { Flex } from "@chakra-ui/react"


export default function Layout(){
    return(
        <>
          <Header/>
          <Flex>
          <Sidebar/>
          <Outlet/>
          </Flex>
          <Footer/>
        </>
    )
}
