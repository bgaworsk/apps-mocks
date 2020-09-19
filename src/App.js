import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Button from './components/Button'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import Card from './components/Card'
import Tabs from './components/Tabs'
import Container from './components/Container'
import Flauschhoernchen from './components/Flauschhoernchen'
import TableCard from './components/TableCard'
import Toolbar from './components/Toolbar'

const GlobalStyle = createGlobalStyle`
  body {
    background: radial-gradient(circle at 159% 159%, #53DA9D 0%, #006CAE 100%);
    //background-color: #006cae;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }
`

const Div = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  display: flex;
  align-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  height: 100vh;
  width:  100vw;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  box-sizing: border-box;
  
  textarea {
    border: solid 1px #bcbcbc;
    width: 100%;
    height: 340px;
    padding: 12px;
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
    font-size: 15px;
    line-height: 21px;
    resize: vertical;
    border-radius: 4px;
    
    &:focus {
      outline-color: #006cae;
    }
  }
`;

function App() {

  const [useHover, setUseHover] = React.useState(true)

  const ButtonSet = ({ onDark }) => (
    <div style={{ textAlign: 'right' }}>
      <Button primary isOnDark={onDark} hover={useHover}>Speichern</Button>
      <Button isOnDark={onDark} hover={useHover}>Zurücksetzen</Button>
      <Button primary isOnDark={onDark} hover={useHover} split>Speichern</Button>
      <Button isOnDark={onDark} hover={useHover} split>Abbrechen</Button>
    </div>
  );

  return (
    <>
      <GlobalStyle />
      <Div>    
        <Header/>
        <Breadcrumb>
          <Button>Zurücksetzen</Button>
          <Button primary >Speichern</Button>
        </Breadcrumb>
        <Tabs initialTab={4}>
          <Container tabName="Inbox" narrow>
            <h1>Inbox</h1>
            <TableCard length={3}/>
            <TableCard length={10} type={1}/>
          </Container>
          <Container tabName="Inbox Localization" narrow>
            <h1>Localization Inbox</h1>
            <TableCard length={23} filter/>
          </Container>
          <Container tabName="Inbox Full Width">
            <h1>Inbox</h1>
            <TableCard length={3}/>
            <TableCard length={10} type={1}/>
          </Container>
          <Container tabName="My" narrow>
            <h2>My Localization</h2>
            <TableCard length={20} bucket={1} filter/>
            <h2>My Publication</h2>
            <TableCard length={20} bucket={1} type={1} filter/>
          </Container>
          <Container tabName="Archive" narrow>
            <h2>Archive Localization</h2>
            <TableCard length={10} bucket={2} filter/>
            <h2>Archive Publication</h2>
            <TableCard length={10} bucket={2} type={1} filter/>
          </Container>
          <Container tabName="Campaign">
            <h1 contentEditable={true}>Bi-weekly Homepage Campaign w/c 3.9.2020</h1>
            <Card>
              <h2>Card Title</h2>
              <p>
                Then some text … why not?
              </p>
              <ButtonSet/>
            </Card>
            <h2>Buttons <input type="checkbox" checked={useHover} onChange={e => setUseHover(e.target.checked)}/><span>Use Hover</span></h2>
            <Card><ButtonSet/></Card>
          </Container>
          <Container tabName="Scrolling" narrow>
            <Card>
              <h2>Ich bin auf Tab 2</h2>
              <Toolbar />
              <textarea />
              <h3>Sub Headline</h3>
              <div>
                Some text, explaining stuff.
              </div>
              <ButtonSet/>
            </Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
            <Card><ButtonSet/></Card>
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
          <Container tabName="Cuteness" narrow>
            <h1>So sweet!</h1>
            <Card>
              <Flauschhoernchen />
            </Card>
          </Container>
        </Tabs>
      </Div>
    </>
  );
}

export default App;
