import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Button from './button'
import bgImage from './Artboard.png'
import flausch from './flauschhoernchen.png'
import classNames from 'classnames'

const width = '1440px';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    background-image: url(${bgImage});
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
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width:  100vw;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 12px 0;
  
  h1 {
    margin: 30px 0 42px;
    font-size: 36px;
    font-weight: 500;
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
    width: 100%;
    max-width: ${width};
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

  img {
    max-width: 100%;
  }
  
  #tabs {
    border-bottom: solid 1px rgba(255,255,255,1);
    width: 100%;
    max-width: ${width};
    font-size: 17px;
    margin-top: 12px;
  }
  
  #content {  
    padding-top: 24px;
    overflow-y: scroll;
    width: 100%; 
    
    > div {
      width: 100%;
      max-width: ${width};
      margin: auto;
    }
    
    .card + .card {
      margin-top: 18px;
    } 
  }
  
  .shadow {
    margin: auto;
    width: 30%;
    height: 20px;     
    background-color: rgba(0,0,0,.3);
    border-radius: 50%/50%;
  }
`;

const Tabs = styled.ul`
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    padding: 0 18px 12px;   
    cursor: pointer;
    user-select: none;
    color: #d2d2d2;

    &:hover {
      color: #ffffff;
    }
  }
  
  li.active {
    border-bottom: solid 3px rgba(255,255,255,1);
    font-size: 17px;
    color: #ffffff;
  }
  
  li + li {
    margin-left: 36px;
  }
`;

const Header = styled.div`
  height: 56px;
  background-color: #3f3f3f;
`;

const Breadcrumbbar = styled.div`
  height: 36px;
  background-color: #ffffff;
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
      <Header>&nbsp;</Header>
      <Breadcrumbbar />
      <Div>    
        <div id="tabs">
          <h1>Proof of Concept for Tab Behaviour</h1>
          <Tabs active={tab}>
            <li onClick={() => setTab(1)} className={classNames({ active: tab ===1 })}>Inbox</li>
            <li onClick={() => setTab(2)} className={classNames({ active: tab ===2 })}>Pending</li>
            <li onClick={() => setTab(3)} className={classNames({ active: tab ===3 })}>Archive</li>
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
                <img src={flausch} style={{ width: '50vw'}} alt="Flauschhörnchen"/>
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
