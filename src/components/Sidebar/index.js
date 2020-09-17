import React from 'react'
import styled from 'styled-components'
import CoreMediaLogo from '../CoreMediaLogo'
import {useSpring, animated} from 'react-spring'
import classNames from 'classnames'

const SidebarContainer = styled(animated.div)`
    display: flex;
    justify-content: stretch;
  
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
      
      > div:first-child {
      box-shadow: none;
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
`;

const Sidebar = ({showSidebarRef, ...props}) => {

  const [sidebar, toggleSidebar] = React.useState(false);
  const [hidden, toggleHidden] = React.useState(true);

  const showSidebar = () => {
    toggleHidden(false);
    toggleSidebar(true);
  }

  showSidebarRef.current = showSidebar;

  const hideSidebar = () => {
    toggleSidebar(false);
    toggleHidden(true);
  }

  const spring = useSpring({left: sidebar ? 0 : -260});

  return (
    <SidebarContainer onClick={hideSidebar} style={spring} className={classNames({ hidden })}{...props}>
      <div props={spring}>
        <div className="header">
          <h2>Marketing</h2>
          <CoreMediaLogo/>
        </div>
      </div>
      <div onClick={e => { e.stopPropagation(); hideSidebar(); }}>
        &nbsp;
      </div>
    </SidebarContainer>
  )
}

export default Sidebar;