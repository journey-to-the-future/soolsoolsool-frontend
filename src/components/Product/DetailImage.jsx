import React from 'react'
import styled from 'styled-components';
import img from "../../assets/복순도가.png"
import { getProductDetail } from "../../api/axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const ImageSize = styled.img`
  width: 100%;
  height: 100%;
`;

function DetailImage() {
  const [data, setData] = useState("");
  const param = useParams();

  useEffect(() => {
    getProductDetail(param.productId).then((data) => {
      setData(data);
      console.log(data)
    });
  }, [param]);

  return (
        <ImageSize src={data.imageUrl} alt="sool image" />
  )
}

export default DetailImage