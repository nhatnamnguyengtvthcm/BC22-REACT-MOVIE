import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
export const MainTemplate = ()=>{
    return (
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        }}>
            {/* Header */}
            <Header></Header>
            {/* Body */}
            <Box sx={{flex:1}}>
                <Outlet />
            </Box>
        </Box>
    )
}

