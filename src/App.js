import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Button from './button'
import bgImage from './Artboard.png'
import flausch from './flauschhoernchen.png'
import classNames from 'classnames'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${bgImage});
    margin: 0;
    padding: 0;
    color: #fff;
  }
`

const Div = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  display: flex;
  align-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width:  100vw;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  box-sizing: border-box;
  
  h1 {
    margin: 30px 0 42px;
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
  
  .card:nth-child(2) {
    background-color: #bcbcbc;
  }
  
  .card:last-child {
    background-color: #3f3f3f;
    color: #ffffff;
  }
  
  #tabs {
    border-bottom: solid 1px #e7e7e7;
    width: 50vw;
  }
  
  #content {  
    padding-top: 24px;
    overflow-y: scroll;
    width: 100%; 
    
    > div {
      width: 50vw;
      margin: auto;
    }
    
    .card + .card {
      margin-top: 18px;
    } 
  }
  
  .shadow {
    margin: auto;
    width: 30vw;
    height: 20px;     
    background-color: rgba(0,0,0,.3);
    border-radius: 50%/50%;
  }
`;

const Tabs = styled.ul`
  margin: 0;

  li {
    display: inline-block;
    padding: 0 6px 12px;   
    cursor: pointer;
    user-select: none;
  }
  
  li.active {
    border-bottom: solid 2px #ffffff;
  }
  
  li + li {
    margin-left: 48px;
  }
`;

function App() {

  const [useHover, setUseHover] = React.useState(true)
  const [tab, setTab] = React.useState(1);

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
        <div id="tabs">
          <h1>Proof of Concept for Tab Behaviour</h1>
          <Tabs active={tab}>
            <li onClick={() => setTab(1)} className={classNames({ active: tab ===1 })}>Tab 1</li>
            <li onClick={() => setTab(2)} className={classNames({ active: tab ===2 })}>Tab 2</li>
            <li onClick={() => setTab(3)} className={classNames({ active: tab ===3 })}>Tab 3</li>
          </Tabs>
        </div>
        <div id="content">
          <div>
            {tab === 1 && (
              <>
                <h2>Buttons <input type="checkbox" checked={useHover} onChange={e => setUseHover(e.target.checked)}/><span>Use Hover</span></h2>
                <div className="card"><ButtonSet/></div>
                <div className="card"><ButtonSet/></div>
                <div className="card"><ButtonSet/></div>
                <div className="card"><ButtonSet/></div>
                <div className="card"><ButtonSet/></div>
                <div className="card"><ButtonSet/></div>
                <div className="card"><ButtonSet/></div>
                <div className="card"><ButtonSet/></div>
                <div className="card"><ButtonSet/></div>
                <div className="card"><ButtonSet/></div>
              </>
            )}
            {tab === 2 && (
              <>
                <h2>Ich bin auf Tab 2</h2>
                <div className="card"><ButtonSet/></div>
                <div className="card"><ButtonSet/></div>
                <div className="card"><ButtonSet/></div>
              </>
            )}
            {tab === 3 && (
              <>
                <h2>Und ich bin Tab 3, brudi!</h2>
                <img src={flausch} style={{ width: '50vw'}}/>
                <div className="shadow">&nbsp;</div>
              </>
            )}
          </div>
        </div>
      </Div>
    </>
  );
}

export default App;
