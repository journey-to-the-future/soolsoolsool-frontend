import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MyFormHelperText from "../components/Login/MyFormHelperText";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie] = useCookies(['refreshToken'])
  const navigate = useNavigate()

  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg("");
        setLoading(false);
      }, 1500);
    }
  },[msg])
  
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    // 버튼만 누르면 리로드 되는것을 막아줌
    event.preventDefault();

    if(!email) {
      return alert("ID를 입력하세요.");
    } else if(!password) {
      return alert("Password를 입력하세요.")
    } else {
      const payload = {
        memberEmail: email,
        password: password
      }
      
      const onSilentRefresh = () => {
        axios.post('/api/v1/auth/reissue', payload)
        .then(onLoginSuccess)
        .catch(error => {
          // ... 로그인 실패 처리
          console.log(error)
        });
      }
      
      const onLoginSuccess = (res) => {
        const { accessToken } = res.data.data;
        const { refreshToken } = res.data.data;
        const { accessTokenExpiresIn } = res.data.data;
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        
        if(res.status === 200) {
          // console.log("로그인");
          localStorage.setItem('userId', email)
          setCookie('refreshToken', refreshToken)
          navigate('/')
          alert("로그인 되었습니다.")
        }
        if(res.data.code === 400 || res.data.code === 401 || res.data.code === 404) {
          alert("아이디와 비밀번호를 확인해주세요.");
        }
        
        // accessToken 만료하기 1분 전에 로그인 연장
        setTimeout(onSilentRefresh, accessTokenExpiresIn - 60000);
      }

      axios.post('/api/v1/auth/login', payload, { withCredentials: true })
      .then(onLoginSuccess)
      .catch(error => {
        console.log(error)
      })

    }
    setLoading(true);
  };

  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ marginBottom: 18 }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={onSubmitHandler}>
            <TextField
              margin="normal"
              label="Email Address"
              helperText={<MyFormHelperText name="email" />}
              name="email"
              autoComplete="email"
              required
              fullWidth
              onChange={onEmailHandler}
            />
            <TextField
              margin="normal"
              type="password"
              label="Password"
              helperText={<MyFormHelperText name="password" />}
              name="password"
              autoComplete="current-password"
              required
              fullWidth
              onChange={onPasswordHandler}
            />

            <Button
              type="submit"
              disabled={loading}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <br />
            {msg}
          </form>

          <Grid container>
            <Grid item xs>
              <Link href="#">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link href="/signup">Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default LoginPage;
