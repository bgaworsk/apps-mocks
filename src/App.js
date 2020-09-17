import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Button from './components/Button'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import Card from './components/Card'
import Tabs from './components/Tabs'
import Container from './components/Container'
import Flauschhoernchen from './components/Flauschhoernchen'


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    background: radial-gradient(circle at 159% 159%, #53DA9D 0%, #006CAE 100%);
    background-size: cover;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }
`

const Div = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  display: flex;
  align-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  height: 100vh;
  width:  100vw;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  box-sizing: border-box;
  
  h1 {
    margin: 30px 0 42px;
    font-size: 36px;
    font-weight: 400;
    cursor:  text;
  }
  
  h2 {
    display: flex;
    align-items: center;
  
    input {
      margin-left: 24px;
    }
    
    span {
      font-size: 13px;
    }
  }

  img {
    max-width: 60vh;
    text-align: center;
  }
`;



function App() {

  const [useHover, setUseHover] = React.useState(true)
  const [tab, setTab] = React.useState(0);

  const ButtonSet = ({ onDark }) => (
    <>
      <Button primary isOnDark={onDark} hover={useHover}>Speichern</Button>
      <Button isOnDark={onDark} hover={useHover}>Zurücksetzen</Button>
      <Button primary isOnDark={onDark} hover={useHover} split>Speichern</Button>
      <Button isOnDark={onDark} hover={useHover} split>Abbrechen</Button>
    </>
  );

  const tabs = [ 'Details', 'Content', 'Scheduling', 'Metadata' ];

  return (
    <>
      <GlobalStyle />
      <Div>    
        <Header/>
        <Breadcrumb />
        <Tabs tabs={tabs} activeTab={tab} setActiveTab={setTab} />
        <>
        {tab === 0 && (
          <Container>
            <h1 contentEditable={true}>Bi-weekly Homepage Campaign w/c 3.9.2020</h1>
            <Card><ButtonSet/></Card>
            <h2>Buttons <input type="checkbox" checked={useHover} onChange={e => setUseHover(e.target.checked)}/><span>Use Hover</span></h2>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
          </Container>
        )}
        {tab === 1 && (
          <Container narrow>
            <Card><ButtonSet/></Card>
            <h2>Ich bin auf Tab 2</h2>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
          </Container>
        )}
        {tab === 2 && (
          <Container narrow>
            <h1>Und ich bin Tab 3, brudi!</h1>
            <Card>
              <Flauschhoernchen />
            </Card>
          </Container>
        )}        
        </>      
      </Div>
    </>
  );
}

export default App;
