import React, { useState } from "react";
import { useEffect } from "react";
import MyFormHelperText from "../components/Login/MyFormHelperText";
import axios from "axios";

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
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");



  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(userId,userPassword, userPasswordConfirm, firstName,lastName,nickName)

    const payload = {
      firstname: firstName,
      lastname: lastName,
      memberEmail: userId,
      nickName: nickName,
      passwordConfirm: lastName,
      pwd: userPassword,
    }
    console.log(payload)

    axios.post('/api/v1/auth/signup', payload, {withCredentials: true})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  }

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
            <VpnKeyOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Join sssooolll
          </Typography>
          <form onSubmit={onSubmitHandler}>
            <TextField
              name="email"
              label="Email Address"
              // helperText={<MyFormHelperText name="email" invalid={userIdError} />}
              margin="normal"
              autoComplete="off"
              autoFocus
              required
              fullWidth
              onChange={(e) => setUserId(e.target.value)}
              // error={userIdError && true}
            />
            <TextField
              type="password"
              name="password"
              label="Password"
              // helperText={
              //   <MyFormHelperText name="password" invalid={passwordError} />
              // }
              margin="normal"
              required
              fullWidth
              onChange={(e) => setUserPassword(e.target.value)}
              // error={passwordError && true}
            />
            <TextField
              type="password"
              name="check_password"
              label="Confirm Password"
              // helperText={
              //   <MyFormHelperText
              //     name="confirmPassword"
              //     invalid={confirmPasswordError}
              //   />
              // }
              margin="normal"
              required
              fullWidth
              onChange={(e) => setUserPasswordConfirm(e.target.value)}
              // error={confirmPasswordError && true}
            />
            <TextField
              name="firstname"
              label="First Name"
              // helperText={
              //   <MyFormHelperText name="firstName" invalid={firstNameError} />
              // }
              margin="normal"
              autoComplete="off"
              required
              fullWidth
              onChange={(e) => setFirstName(e.target.value)}
              // error={firstNameError && true}
            />
            <TextField
              name="lastname"
              label="Last Name"
              // helperText={
              //   <MyFormHelperText name="lastName" invalid={lastNameError} />
              // }
              margin="normal"
              autoComplete="off"
              required
              fullWidth
              onChange={(e) => setLastName(e.target.value)}
              // error={lastNameError && true}
            />
            <TextField
              name="nickname"
              label="Nickname"
              // helperText={
              //   <MyFormHelperText name="nickName" invalid={nickNameError} />
              // }
              margin="normal"
              autoComplete="off"
              required
              fullWidth
              onChange={(e) => setNickName(e.target.value)}
              // error={nickNameError && true}
            />
            <FormControlLabel
              control={
                <CheckBox
                  color="primary"
                  // onChange={handleChange}
                  // checked={checked}
                />
              }
              label="I accept Terms of Use and Privacy Policy."
            />
            <Button
              type="submit"
              // onClick={submitValidationHandler}
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              Join us
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default SignUpPage;






  // const [userIdError, setUserIdError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  // const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  // const [firstNameError, setFirstNameError] = useState(false);
  // const [lastNameError, setLastNameError] = useState(false);
  // const [nickNameError, setNickNameError] = useState(false);

  // const [checked, setChecked] = React.useState(false);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  // const submitValidationHandler = () => {
  //   if (checked === false) {
  //     alert("check is required");
  //   } else {
  //     console.log("ok");
  //   }
  // };

  // const onChangeUserId = (e) => {
  //   const userIdRegex =
  //     /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  //   if (!e.target.value || userIdRegex.test(e.target.value)) {
  //     setUserIdError(false);
  //   } else {
  //     setUserIdError(true);
  //     setUserId(e.target.value);
  //   }
  // };

  // useEffect(() => {
  //   if (userPassword.length > 0) {
  //     setUserPassword((currentValue) => currentValue);

  //     const passwordRegex =
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  //     if (!userPassword || passwordRegex.test(userPassword)) {
  //       setPasswordError(false);
  //     } else {
  //       setPasswordError(true);
  //     }
  //   }
  // }, [userPassword]);

  // const onChangeConfirmPassword = (e) => {
  //   if (userPassword !== e.target.value) {
  //     setConfirmPasswordError(true);
  //   } else {
  //     setConfirmPasswordError(false);
  //   }
  // };

  // const onChangeFirstName = (e) => {
  //   if (!e.target.value) {
  //     setFirstNameError(true);
  //   } else {
  //     setFirstNameError(false);
  //     setFirstName(e.target.value);
  //   }
  // };
  // const onChangeLastName = (e) => {
  //   if (!e.target.value) {
  //     setLastNameError(true);
  //   } else {
  //     setLastNameError(false);
  //     setLastName(e.target.value);
  //   }
  // };
  // const onChangeNickName = (e) => {
  //   if (!e.target.value) {
  //     setNickNameError(true);
  //   } else {
  //     setNickNameError(false);
  //     setNickName(e.target.value);
  //   }
  // };