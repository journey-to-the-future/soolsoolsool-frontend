import React, {useEffect, useState} from "react";
import Slick from '../components/Slick/Slick';
import MainButton from '../components/Button/MainButton';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {getMainSlider} from "../api/axios";


const date = new Date();
const day = date.getDay();
const weekdays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

const buttonStyle = {
    color: "black",
    width: "6vw",
    borderRadius: "16px"
}

const MainPage = () => {
    const [isActive, setIsActive] = useState(true)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [pageNum, setPageNum] = useState('0')

    const handleClick = () => {
        setIsActive2(!setIsActive);
        setIsActive3(!setIsActive);
        setIsActive4(!setIsActive);
        setIsActive(true);
        setPageNum('0')
        console.log(pageNum)
    };
    const handleClick2 = () => {
        setIsActive(!setIsActive2);
        setIsActive3(!setIsActive2);
        setIsActive4(!setIsActive2);
        setIsActive2(true);
        setPageNum('1')
        console.log(pageNum)
    };
    const handleClick3 = () => {
        setIsActive2(!setIsActive3);
        setIsActive(!setIsActive3);
        setIsActive4(!setIsActive3);
        setIsActive3(true);
        setPageNum('2')
        console.log(pageNum)
    };
    const handleClick4 = () => {
        setIsActive2(!setIsActive4);
        setIsActive3(!setIsActive4);
        setIsActive(!setIsActive4);
        setIsActive4(true);
        setPageNum('3')
        console.log(pageNum)
    };

    if (isActive) {
        console.log("인기")
    } else if (isActive2) {
        console.log("평점")
    }else if (isActive3) {
        console.log("판매량")
    } else if (isActive4) {
        console.log("신제품")
    }

    return (
        <Box>
            <Container fixed sx={{ marginTop: "30px", display: "flex", flexDirection: "column"}}>
                <Box>
                    <Typography variant="h4" gutterBottom sx={{ marginBottom: "2vh" }}>
                        <b>Top lists in your area</b>
                    </Typography>            
                    <Typography variant="h6" gutterBottom sx={{ marginBottom: "2vh" }}>
                        Updated every <b>{weekdays[day]}</b>
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{marginBottom: "12px"} }>
                        <Button sx={ buttonStyle }
                                style={{
                                    backgroundColor: isActive ? '#1565c0' : '',
                                    color: isActive ? 'white' : '',
                                }}
                                onClick={handleClick}
                                variant="outlined"
                        >
                            <Typography fontSize="small" color="black"><b>인기 추천</b></Typography>
                        </Button>
                        <Button sx={ buttonStyle }
                                style={{
                                    backgroundColor: isActive2 ? '#1565c0' : '',
                                    color: isActive2 ? 'white' : '',
                                }}
                                onClick={handleClick2}
                                variant="outlined"
                        >
                            <Typography fontSize="small" color="black"><b>평점 추천</b></Typography>
                        </Button>
                        <Button sx={ buttonStyle }
                                style={{
                                    backgroundColor: isActive3 ? '#1565c0' : '',
                                    color: isActive3 ? 'white' : '',
                                }}
                                onClick={handleClick3}
                                variant="outlined"
                        >
                            <Typography fontSize="small" color="black"><b>판매량 추천</b></Typography>
                        </Button>
                        <Button sx={ buttonStyle }
                                style={{
                                    backgroundColor: isActive4 ? '#1565c0' : '',
                                    color: isActive4 ? 'white' : '',
                                }}
                                onClick={handleClick4}
                                variant="outlined"
                        >
                            <Typography fontSize="small" color="black"><b>신제품 추천</b></Typography>
                        </Button>
                    </Stack>
                    <Typography variant="body2" gutterBottom sx={{ marginBottom: "2vh" }}>
                        Best Sools 
                    </Typography>
                </Box>
                <Box sx={{ marginBottom: "24vh" }}>
                    <Slick />
                </Box>
            </Container>
        </Box>
    )
};

export default MainPage;