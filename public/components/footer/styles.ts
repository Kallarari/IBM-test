import styled from "styled-components";

export const Container = styled.div`
width: 100%;
  height: 12vh;
  background: linear-gradient(225deg, #004688 0%, #09bbed 100%);
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 20px;  
  @media screen and (max-width: 600px) {
    height: 100px;
  }
`;
