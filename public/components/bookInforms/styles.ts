import styled from "styled-components";

export const ButtonText = styled.h1`
  color: grey;
  font-size: 28px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: grey;
  margin-right: 124px;
  
  @media screen and (max-width: 600px) {    
  margin-right: 45px;
  }
`;
export const FavoriteButton = styled.div`
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`
export const BackButton = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`;
export const Header = styled.div`
  display: flex;
`;
export const BookInfoArea = styled.div`
  width: 40%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const BookArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  img {
    width: 40%;
    height: fit-content;
  }
  h1 {
    color: grey;
    font-size: 26px;
    text-align: center;
  }
  h2 {
    color: grey;
    font-size: 16px;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    display: block;
    width: 70%;
    margin-inline: auto;
    img {
      width: 100%;
    }
  }
`;
export const Container = styled.div`
  width: 100%;
`;
