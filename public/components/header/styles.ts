import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  height: 50px;
  width: 40%;
  background-color: white;
  border-radius: 8px;
  border: solid grey 2px;
  justify-content: space-around;
  align-content: center;
  box-shadow: 2px 12px 17px -2px rgba(0, 0, 0, 0.41);
  margin-block: auto;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  form{
    width: 80%;
    cursor: pointer;
  }
  .inputSearch {
    border: none;
    color: grey;
    font-size: large;
    outline: none;
  }
`;
export const TitleLogo = styled.h1`
  color: white;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const Content = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 0 20px;
  @media screen and (max-width: 600px) {
    padding-top: 30px;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 12vh;
  background: linear-gradient(225deg, #004688 0%, #09bbed 100%);
  @media screen and (max-width: 600px) {
    height: 100px;
  }
`;
