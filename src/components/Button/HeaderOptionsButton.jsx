import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Button, Menu, MenuItem, Divider, Link, Typography } from '@mui/material';
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import { useCookies } from 'react-cookie';



const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                '& .MuiMenu-list': {
                    padding: '4px 0',
                },
                '& .MuiMenuItem-root': {
                    '& .MuiSvgIcon-root': {
                        fontSize: 18,
                        color: theme.palette.text.secondary,
                        marginRight: theme.spacing(1.5),
                    },
                    '&:active': {
                        backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                        ),
                    },
                },
            },
        }
    )
);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [cookies, setCookie, removeCookie] = useCookies(['refreshToken'])

    // {!cookies.refreshToken ? "/login" : "/seller"}
    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="text"
                disableElevation
                onClick={handleClick}
            >
                <PermIdentitySharpIcon fontSize='small' sx={{ color:"black" }}/>
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    <Link href={!cookies.refreshToken ? "/login" : "/mypage"} underline="none">
                        <Typography fontSize="small" color="black">회원 정보</Typography>
                    </Link>
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem onClick={handleClose} disableRipple>
                    <Link href={!cookies.refreshToken ? "/login" : "/mypage"} underline="none">
                        <Typography fontSize="small" color="black">주문내역 확인</Typography>
                    </Link>
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem onClick={handleClose} disableRipple>
                    <Link href={!cookies.refreshToken ? "/login" : "/mypage"} underline="none">
                        <Typography fontSize="small" color="black">관심 상품</Typography>
                    </Link>
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem onClick={handleClose} disableRipple>
                    <Link href={!cookies.refreshToken ? "/login" : "/mypage"} underline="none">
                        <Typography fontSize="small" color="black">고객님을 위한 추천상품</Typography>
                    </Link>
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem onClick={handleClose} disableRipple>
                    <Link href={!cookies.refreshToken ? "/login" : "/mypage"} underline="none">
                        <Typography fontSize="small" color="black">회원정보 수정</Typography>
                    </Link>
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem onClick={handleClose} disableRipple>
                    <Link href={!cookies.refreshToken ? "/login" : "/mypage"} underline="none">
                        <Typography fontSize="small" color="black">주수록</Typography>
                    </Link>
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem onClick={handleClose} disableRipple>
                    <Link href={!cookies.refreshToken ? "/login" : "/mypage"} underline="none">
                       <Typography fontSize="small" color="black">문의내역</Typography>
                    </Link>
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem onClick={handleClose} disableRipple>
                    <Link href={!cookies.refreshToken ? "/login" : "/mypage"} underline="none">
                        <Typography fontSize="small" color="black">로그아웃</Typography>
                    </Link>
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
