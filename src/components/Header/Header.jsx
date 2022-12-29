import logo from "../../assets/soolsoolsool.png";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptionsButton from "../Button/HeaderOptionsButton"

import { Button,  Stack } from "@mui/material";
import { SportsBar, LocalBar, LocalDrink, WineBar, Liquor } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Search() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 230,
        height: 38,
        marginLeft: "30px",
        background: "#F7F7F7",
        boxShadow: "0",
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="무엇을 찾고 계신가요?"
        inputProps={{ "aria-label": "무엇을 찾고 계신가요?" }}
      />
    </Paper>
  );
}

const Image = styled.img`
  width: 100px;
  height: 40px;
  object-fit: cover;
`;

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['refreshToken'])
  const navigate = useNavigate()

  const logoutHandler = () => {
    if(!cookies.refreshToken) {
      navigate('/login')
    } else {
      localStorage.removeItem('userId')
      removeCookie('refreshToken')
      alert("로그아웃 되었습니다.")
      window.location.replace('/')
    }
  }

  return (
    <Box sx={{ width: "100%", height: "120px", borderBottom: '1px solid lightgray' }}>
      <Box
        sx={{
          width: "100%",
          height: "80px",
          borderBottom: "1px solid lightgray",
          padding: "18px 69px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "40px",
            margin: "0px auto",
            maxWidth: "1144px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Image src={logo} alt="main logo" />
            </Link>
            <Search />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography
              href="/login"
              sx={{
                marginRight: "15px",
                color: "#878787",
                textDecoration: "none",
                cursor: "pointer"
              }}
              onClick={logoutHandler}
            >
              {cookies.refreshToken ? "로그아웃" : "로그인"}
            </Typography>
            <Button variant="text">
              <FavoriteBorderOutlinedIcon fontSize='small' sx={{ color:"black" }} />
            </Button>
            <Button variant="text">
              <ShoppingBagOutlinedIcon fontSize='small' sx={{ color:"black" }} />
            </Button>
            <HeaderOptionsButton />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", padding: "0px 69px", display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1144px",
            height: "40px",
            margin: "0px auto",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: 'center'
          }}
        >
          <Stack direction="row" spacing={8}>
            <Link href="/explore" underline="hover" sx={{textDecoration: 'none', color: '#3E3E3E', fontWeight: 'bold'}}>
              <Typography fontSize="small" color="black"><SportsBar fontSize="small" color="black"/><b> 탁주(막걸리)</b></Typography>
            </Link>
            <Link href="/explore" underline="hover" sx={{textDecoration: 'none', color: '#3E3E3E', fontWeight: 'bold'}}>
              <Typography fontSize="small" color="black"><LocalDrink fontSize="small" color="black"/><b> 증류주(소주)</b></Typography>
            </Link>
            <Link href="/explore" underline="hover" sx={{textDecoration: 'none', color: '#3E3E3E', fontWeight: 'bold'}}>
              <Typography fontSize="small" color="black"><LocalBar fontSize="small" color="black"/><b> 청주•약주(맑은술)</b></Typography>
            </Link>
            <Link href="/explore" underline="hover" sx={{textDecoration: 'none', color: '#3E3E3E', fontWeight: 'bold'}}>
              <Typography fontSize="small" color="black"><WineBar fontSize="small" color="black"/><b> 과실주(한국식 와인)</b></Typography>
            </Link>
            <Link href="/explore" underline="hover" sx={{textDecoration: 'none', color: '#3E3E3E', fontWeight: 'bold'}}>
              <Typography fontSize="small" color="black"><Liquor fontSize="small" color="black"/><b> 리큐르•기타주류</b></Typography>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;