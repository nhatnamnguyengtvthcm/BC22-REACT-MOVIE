import Header from "pages/Header"
import Home from "pages/Home"
import HomeCarousel from "pages/HomeCarousel"
import React from "react"
// import { Box } from "@mantine/core";

const Style: React.CSSProperties = {
    margin: "0 !important",
    padding: "0 !important",
}
export const MainTemplate = ()=>{
    return (
        <div className="w-full">
            <Header/>
            <Home></Home>
        </div>
    )
}

