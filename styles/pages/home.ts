import styled from 'styled-components'

export const MainContent = styled.div`
  width: 1200px;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  
  @media screen and (max-width: 1200px) {
    width: 100vw;
  }
`
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`