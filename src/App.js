import React from 'react'
import styled from 'styled-components'
import Button from './button'

const Div = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  background-color:#e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  
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
  
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 12px;
  
    background-color: #ffffff;
    border-radius: 4px;
    width: 50vw;
    height: 25vh;
    color: #3f3f3f;
  }
  
  > div:nth-child(3) {
    margin-top: 18px;
    background-color: #bcbcbc;
  }
  
  > div:last-child {
    margin-top: 18px;
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
    <Div>
      <h1>Buttons <input type="checkbox" value={useHover} onChange={e => setUseHover(e.target.checked)}/><span>Use Hover</span></h1>
      <div><ButtonSet /></div>
      <div><ButtonSet /></div>
      <div><ButtonSet/></div>
    </Div>
  );
}

export default App;
