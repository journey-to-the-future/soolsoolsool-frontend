import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getProductDetail } from "../../api/axios";

import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

function MyPageBottom(props) {

  if(props.category === 'settings'){
    return (
      <>
        <Box sx={{height: '50vh', padding: '30px 50px', border: '1px solid #F9D537', borderRadius: '12px'}}>
          <Box sx={{height: '40px', borderBottom: '1px solid #F9D537'}}>
              <Box sx={{fontWeight: 'bold'}}>Information</Box>
          </Box>
          <Box sx={{padding: '22px 10px', borderBottom: '1px solid #F9D537'}}>
              <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                  <Box>Name</Box>
                  <Box sx={{fontWeight: 'bold'}}>name</Box>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                  <Box>Nickname</Box>
                  <Box sx={{fontWeight: 'bold'}}>nickname</Box>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <Box>email</Box>
                  <Box sx={{fontWeight: 'bold'}}>example@gmail.com</Box>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '35px'}}>
                  <Link to='/mypage/update'>수정</Link>
              </Box>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '15px', padding: '22px 10px'}}>
              <Box sx={{fontWeight: 'bold'}}>Delete account</Box>
          </Box>
        </Box>
      </>
    );
  } else if(props.category === 'wish') {
    return (
      <>
        <Box sx={{height: '50vh', padding: '30px 50px', border: '1px solid #F9D537', borderRadius: '12px'}}>
          <Box sx={{height: '40px', borderBottom: '1px solid #F9D537'}}>
              <Box sx={{fontWeight: 'bold'}}>My wish list</Box>
          </Box>
        </Box>
      </>
    );
  } else if(props.category === 'update') {
    return (
      <>
        <Box sx={{height: '50vh', padding: '30px 50px', border: '1px solid #F9D537', borderRadius: '12px'}}>
          <Box sx={{height: '40px', borderBottom: '1px solid #F9D537'}}>
              <Box sx={{fontWeight: 'bold'}}>회원 정보 수정</Box>
          </Box>
          <Box sx={{padding: '22px 10px', borderBottom: '1px solid #F9D537'}}>
              <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                  <Box>이름</Box>
                  <TextField defaultValue='name' variant="standard" inputProps={{ style: { textAlign: 'right' } }} />
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                  <Box>닉네임</Box>
                  <TextField defaultValue='nickname' variant="standard" inputProps={{ style: { textAlign: 'right' } }} />
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <Box>이메일</Box>
                  <TextField defaultValue='example@gmail.com' variant="standard" inputProps={{ style: { textAlign: 'right' } }} />
              </Box>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '15px', padding: '22px 10px'}}>
              <Box sx={{fontWeight: 'bold'}}>수정하기</Box>
          </Box>
        </Box>
      </>
    )
  }
}

export default MyPageBottom;
