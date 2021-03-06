import styled from "styled-components";

export const ImageArea = styled.div`
  background-color: blue;
  height: 80%;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(225deg, #004688 0%, #09bbed 100%);
  justify-content: center;
  align-content: center;
  align-items: center;
  display: flex;
  img{
    max-width: 160px;
  }
`;
export const PriceArea = styled.div`
  height: 20%;
  border-radius: 10px;
`;

export const BookName = styled.h1`
color: grey;
font-size: small;
text-align: center;
margin:0;
`;
export const Price = styled.h1`
color: grey;
margin: 0;
text-align: center;
`;
export const Container = styled.div`
  width: 220px;
  height: 300px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 2px 12px 17px -2px rgba(0, 0, 0, 0.41);
`;
