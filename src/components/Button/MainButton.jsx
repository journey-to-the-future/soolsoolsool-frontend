import {useState} from 'react';

import './ExploreButton.css'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {WineBar} from "@mui/icons-material";
import {Typography} from "@mui/material";


const buttonStyle = {
    color: "black",
    width: "6vw",
    borderRadius: "16px"
}

const MainButton = ({handleButtonClick, handleButtonClick2, handleButtonClick3, handleButtonClick4, value, value2, value3, value4}) => {


    const handleClick = () => {
        handleButtonClick()
    };

    const handleClick2 = () => {
        handleButtonClick2()
    };

    const handleClick3 = () => {
        handleButtonClick3()
    };

    const handleClick4 = () => {
        handleButtonClick4()
    };    

    return (
        <Stack direction="row" spacing={2} sx={{marginBottom: "12px"} }>
            <Button sx={ buttonStyle }
                style={{
                    backgroundColor: value ? '#1565c0' : '',
                    color: value ? 'white' : '',
                }}
                onClick={handleClick}
                variant="outlined"
            >
                <Typography fontSize="small" color="black"><b>인기 추천</b></Typography>
            </Button>
            <Button sx={ buttonStyle }
                style={{
                    backgroundColor: value2 ? '#1565c0' : '',
                    color: value2 ? 'white' : '',
                }}
                onClick={handleClick2}
                variant="outlined"
            >
                <Typography fontSize="small" color="black"><b>평점 추천</b></Typography>
            </Button>
            <Button sx={ buttonStyle }
                style={{
                    backgroundColor: value3 ? '#1565c0' : '',
                    color: value3 ? 'white' : '',
                }}
                onClick={handleClick3}
                variant="outlined"
            >
                <Typography fontSize="small" color="black"><b>판매량 추천</b></Typography>
            </Button>
            <Button sx={ buttonStyle }
                style={{
                    backgroundColor: value4 ? '#1565c0' : '',
                    color: value4 ? 'white' : '',
                }}
                onClick={handleClick4}
                variant="outlined"
            >
                <Typography fontSize="small" color="black"><b>신제품 추천</b></Typography>
            </Button>
        </Stack>
    )
}

export default MainButton