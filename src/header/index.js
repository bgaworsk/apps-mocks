import React from 'react'
import styled from 'styled-components'
import burgerIcon from './burger-icon.svg'
import classNames from 'classnames'
import {animated, useSpring} from 'react-spring'
import CoreMediaLogo from '../CoreMediaLogo'

const Div = styled.div`
    min-height: 56px;
    height: 56px;
    width: 100%;
    background-color: #3f3f3f;

    img {
        margin: 18px 14px;
        cursor: pointer;
    }

    #sidebar {
        position: fixed;
        z-index: 10;
        left: -260px;
        top: 0;
        width: 100vw;
        height: 100vw;
        color: #3f3f3f;
        
        &.hidden {
          width: 270px;
          
          > div:last-child {
            width: 0;
          }
        }

        > div:first-child {
            min-width: 260px;
            width: 260px;
            height: 100vw;
            background-color: #ffffff;
            box-shadow: 10px 10px 30px -20px rgba(0,0,0,0.75);
            position: relative;
            padding: 18px 17px 24px 18px;            
            box-sizing: border-box;
        }
        
        > div:last-child{
          width: 100vw;
        }
        
        .header {
          display: flex;
          justify-content: space-between;
          
          h2 {
              margin: 0;
              font-size: 24px;
              font-weight: 400;
          }
          
          
          svg {
            width: 32px;
            height: 32px;
            color: #672779;
          }
        }
    }
`;

const SidebarContainer = styled(animated.div)`
  display: flex;
  justify-content: stretch;
`;

const Sidebar = ({closeSidebar, spring, ...props}) => (
  <SidebarContainer id="sidebar" onClick={closeSidebar} style={spring} {...props}>
    <div props={spring}>
      <div className="header">
        <h2>Studio</h2>
        <CoreMediaLogo/>
      </div>
    </div>
    <div onClick={e => {
      e.stopPropagation();
      closeSidebar();
    }}>
      &nbsp;
    </div>
  </SidebarContainer>
);

const Header = () => {

  const [sidebar, toggleSidebar] = React.useState(true);
  const [hidden, toggleHidden] = React.useState(false);

  const showSidebar = () => {
    toggleHidden(false);
    toggleSidebar(true);
  }

  const hideSidebar = () => {
    toggleSidebar(false);
    toggleHidden(true);
  }

  const onRest = ({spring}) => {
    console.log('waa');
    if (!sidebar) {

    }
  }

  const spring = useSpring({
    to: {left: sidebar ? 0 : -260},
    onRest
  });

  return (
    <Div>
      <img src={burgerIcon} alt="Open Burger Menu" onClick={showSidebar}/>
      <Sidebar closeSidebar={hideSidebar} className={classNames({hidden: hidden})} spring={spring}/>
    </Div>
  )
}

export default Header;