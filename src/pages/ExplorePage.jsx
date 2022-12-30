import React from "react";

import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import ExploreSideBar from "../components/SideBar/ExploreSideBar"

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";



const MainPage = ({props}) => {
    
    return (
        <Container fixed sx={{ marginTop: "30px", display: "flex"}}>
            <Box sx={{ width: "35%", marginRight: "32px"}}>
                <ExploreSideBar />
            </Box>
            <Box sx={{ width: "65%" }}>
                <InfiniteScroll />
            </Box>
        </Container>
    )
};

export default MainPage;