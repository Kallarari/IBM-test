import styled from 'styled-components'

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