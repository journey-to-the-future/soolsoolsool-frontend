import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs" sx={{marginBottom: 18}}>
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
          <TextField
            margin="normal"
            label="Email Address"
            helperText={<MyFormHelperText name="email" />}
            name="email"
            autoComplete="email"
            required
            fullWidth
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
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link href="/signup">Sing Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default LoginPage;
