import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Button from './button'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e7e7e7;
    margin: 0;
    padding: 0;
  }
`

const Div = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width:  100vw;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  padding: 48px;
  box-sizing: border-box;
  
  h1 {
    display: flex;
    align-items: center;
  
    input {
      margin-left: 24px;
    }
    
    span {
      font-size: 13px;
    }
  }
  
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 12px;
  
    background-color: #ffffff;
    border-radius: 4px;
    width: 50vw;
    height: 20vh;
    color: #3f3f3f;
  }
  
  .card:nth-child(3) {
    background-color: #bcbcbc;
  }
  
  .card:last-child {
    background-color: #3f3f3f;
    color: #ffffff;
  }
`;

function App() {

  const [useHover, setUseHover] = React.useState(true)

  const ButtonSet = ({ onDark }) => (
    <>
      <Button primary isOnDark={onDark} hover={useHover}>Speichern</Button>
      <Button isOnDark={onDark} hover={useHover}>Zurücksetzen</Button>
      <Button primary isOnDark={onDark} hover={useHover} split>Speichern</Button>
      <Button isOnDark={onDark} hover={useHover} split>Abbrechen</Button>
    </>
  );

  return (
    <>
      <GlobalStyle />
      <Div>
        <div>
          <h1>Buttons <input type="checkbox" value={useHover} onChange={e => setUseHover(e.target.checked)}/><span>Use Hover</span></h1>
        </div>
        <div className="card"><ButtonSet /></div>
        <div className="card"><ButtonSet /></div>
        <div className="card"><ButtonSet/></div>
      </Div>
    </>
  );
}

export default App;
