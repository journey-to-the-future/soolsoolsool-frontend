import {forwardRef} from 'react'
import Box from '@mui/material/Box'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';


const ImageSize = styled.img`
  width: 20vw;
  height: 20vh;
`;

const Post = forwardRef(({post}, ref) => {
    const postBody = (
        <Link to={`/detail/product/${post.itemId}`}>
            <Box sx={{
                display: "flex",
                height: "36vh",
                marginBottom: "16px",
                border: "2px solid #DCDCDC",
                borderRadius: "12px",
                background: "#FAFAFA",
                width: "100%",
                "&:hover": {
                    // animation: "boxyRotation 0.2s infinite linear",
                    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                    transform: "scale(1.1)",
                    transitionDuration: "0.8s"
                },
                // "&:hover .childBox1": {
                //     transform: "scale(1.2)",
                //     transitionDuration: "2.0s"
                // },
                // "@keyframes boxyRotation": {
                //     from :{
                //         transform: "rotate(0deg)"
                //     },
                //     to :{
                //         transform: "rotate(359deg)"
                //     }
                // }
            }}
            >
                <Box className='childBox1' sx={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <ImageSize src={post.imageUrl}/>
                </Box>
                <Box sx={{width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                    <Box sx={{marginLeft: "1vw"}}>
                        <Typography variant="h6" gutterBottom sx={{marginBottom: "0"}}>
                            Type:{post.soolType}
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{marginBottom: "0"}}>
                            <b>{post.name}</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            제조사 : {post.company}
                        </Typography>
                    </Box>
                    <Box sx={{marginLeft: "1vw", backgroundColor: "whitesmoke", padding: "16px", borderRadius: "8px"}}>
                        <Typography variant="overline" gutterBottom>
                            제품소개 {post.info}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Box
                        sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <Typography variant="h4" gutterBottom sx={{marginBottom: "-6px"}}>
                            4.5
                        </Typography>
                        <Stack direction="row" sx={{display: "flex", alignItems: "center"}}>
                            <StarBorderRoundedIcon color="error" sx={{marginRight: "-6px"}}/>
                            <StarBorderRoundedIcon color="error" sx={{marginRight: "-6px"}}/>
                            <StarBorderRoundedIcon color="error" sx={{marginRight: "-6px"}}/>
                            <StarBorderRoundedIcon color="error" sx={{marginRight: "-6px"}}/>
                            <StarBorderRoundedIcon color="error"/>
                        </Stack>
                        <Typography variant="body1" gutterBottom sx={{marginBottom: "16px"}}>
                            160 ratings
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" gutterBottom sx={{marginBottom: "0px"}}>
                            재고: {post.stockQuantity}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <b>가격: {post.price}</b>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Link>
    )

    return ref
        ? <article ref={ref}>{postBody}</article>
        : <article>{postBody}</article>
})

export default Post