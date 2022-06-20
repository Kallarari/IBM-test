import styled from 'styled-components'

export const PageSelector = styled.div`
display: flex;
margin-inline: auto;
justify-content: space-between;
`
export const PageSelectorPoints = styled.div`
background-color: #004688;
border-radius: 50%;
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
color: white;
margin-inline: 10px;
cursor: pointer;
`
export const MainContent = styled.div`
  width: 1200px;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  min-height: 74vh;  
  @media screen and (max-width: 1200px) {
    width: 100vw;
  }
`
export const Container = styled.div`
  width: 100%;
  height: 100vh;
`