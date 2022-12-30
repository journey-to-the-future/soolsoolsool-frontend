import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ImageSize = styled.img`
  width: 100%;
  height: 80%;
`;

const MainPost = props => {
  const { img, type, name, company, price, id } = props

  return (
    <Link to={`/detail/product/${id}`}>
        <Box sx={{ padding: "12px" }}>
            <Box sx={{
                padding: "12px", 
                height: "36vh",
                border: "2px solid #DCDCDC",
                borderRadius: "12px",
                width: "100%",
                background: "#FAFAFA",
                "&:hover": {
                    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"
                },
                "&:hover .childBox1": {
                    transform: "scale(1.2)",
                    transitionDuration: "0.6s"
                } }}>
            <Box sx={{ display: "flex", height: "60%"}}>
                <Box className='childBox1' sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "50%" }}>
                <ImageSize src={img}/>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%" }}>
                <Typography variant="h4" gutterBottom sx={{ marginBottom: "-6px" }}>
                    4.5
                </Typography> 
                <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
                    <StarBorderRoundedIcon color="error" sx={{ marginRight: "-6px" }}/>
                    <StarBorderRoundedIcon color="error" sx={{ marginRight: "-6px" }}/>
                    <StarBorderRoundedIcon color="error" sx={{ marginRight: "-6px" }}/>
                    <StarBorderRoundedIcon color="error" sx={{ marginRight: "-6px" }}/>
                    <StarBorderRoundedIcon color="error" />
                </Stack>
                <Typography variant="body1" gutterBottom sx={{ marginBottom: "24px" }}>
                    160 ratings
                </Typography>
                <Typography variant="body1" gutterBottom >
                    가격: {price}
                </Typography> 
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "24px" }}>
                <Typography variant="subtitle1" gutterBottom sx={{ marginBottom: "2px" }}>
                    Type: {type}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ marginBottom: "2px", letterSpacing: "1px" }}>
                    {name}
                </Typography>
                <Typography variant="subtitle2" gutterBottom sx={{ letterSpacing: "1px" }}>
                    {company}
                </Typography>
            </Box>
            </Box>
        </Box>
    </Link>
  )
}

export default MainPost