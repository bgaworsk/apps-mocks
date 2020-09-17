import React from 'react'
import styled from 'styled-components'
import burgerIcon from './burger-icon.svg'
import Sidebar from '../Sidebar'

const Div = styled.div`
    min-height: 56px;
    height: 56px;
    width: 100%;
    background-color: #3f3f3f;

    img {
        margin: 14px 12px 0 18px;
        cursor: pointer;
    }
    
    .bar {
      display: flex;
      flex-direction: row;
      
      .app-name {
        font-size: 15px;
        font-weight: 400;
        margin-top: 17px;
        
      }
    }
`;

const Header = () => {

  const showSidebar = React.useRef();

  return (
    <Div>
      <div className="bar">
        <img src={burgerIcon} alt="Open Burger Menu" onClick={() => showSidebar.current()}/>
        <div className="app-name">Marketing</div>
      </div>
      <Sidebar showSidebarRef={showSidebar}/>
    </Div>
  )
}

export default Header;