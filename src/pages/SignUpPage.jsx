import React from "react";
import MyFormHelperText from "../components/Login/MyFormHelperText";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function SignUpPage() {
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
            <VpnKeyOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Join sssooolll
          </Typography>
          <TextField
            name="email"
            label="Email Address"
            helperText={<MyFormHelperText name="email" />}
            autoComplete="email"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            helperText={<MyFormHelperText name="password" />}
            margin="normal"
            autoComplete="current-password"
            required
            fullWidth
          />
          <TextField
            type="password"
            name="check_password"
            label="Confirm Password"
            helperText={<MyFormHelperText name="password to confirm" />}
            margin="normal"
            autoComplete="current-password"
            required
            fullWidth
          />
          <TextField
            name="firstname"
            label="First Name"
            helperText={<MyFormHelperText name="first name" />}
            margin="normal"
            autoComplete="off"
            required
            fullWidth
          />
          <TextField
            name="lastname"
            label="Last Name"
            helperText={<MyFormHelperText name="last name" />}
            margin="normal"
            autoComplete="off"
            required
            fullWidth
          />
          <TextField
            name="nickname"
            label="Nickname"
            helperText={<MyFormHelperText name="nickname" />}
            margin="normal"
            autoComplete="off"
            required
            fullWidth
          />
          <FormControlLabel
            control={<CheckBox value="remember" color="primary" />}
            label="I accept Terms of Use and Privacy Policy."
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Join us
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default SignUpPage;
