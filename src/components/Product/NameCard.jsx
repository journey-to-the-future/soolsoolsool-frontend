import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getProductDetail } from "../../api/axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicRating from "../UI/BasicRating";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Checkbox from '@mui/material/Checkbox';



export default function NameCard() {
  const [data, setData] = useState(null);
  const [checked, setChecked] = useState(false);
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetail(param.productId).then((data) => {
      setData(data);
    });
  }, [param]);

  const checkedHandler = () => {
    console.log('checked');
    if(checked === false) {
      setChecked(true);
      navigate('/mypage/wish', {state: {value: data}})
    } else {
      setChecked(false);
    }
  }

  if (!data) return <>Loading...</>;
  return (
    <>
      <CardContent>
        <Typography component='div' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            {data.company}
          </Typography>
          <Typography component='div'><FavoriteButton data={data.id} /></Typography>
        </Typography>
        <Typography variant="h5" component="div" key={data.id}>
          <b>{data.name}</b>
        </Typography>
        <br />
        <BasicRating />
        <Typography component="legend" sx={{ color: "#0b6db7" }}>
          &nbsp;[20 review]
        </Typography>
        {/* <Typography>
          <Checkbox
            size="small"
            icon={<BookmarkBorderIcon color="error" />}
            checkedIcon={<BookmarkIcon color="error" />}
            checked={checked}
            onChange={checkedHandler}
          />
          Add to Wishlist
        </Typography> */}
        <br />
        <Typography variant="body2">주종 : {data.soolType}</Typography>
        <Typography variant="body2">도수 : {data.degree}</Typography>
        <Typography variant="body2">용량 : {data.size}ml</Typography>
        <Typography variant="body2">원재료 : {data.material}</Typography>
        <br />
        <Typography variant="body2">제품소개 : {data.info}</Typography>
      </CardContent>
    </>
  );
}
