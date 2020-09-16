import React from 'react'
import styled from 'styled-components'
import burgerIcon from './burger-icon.svg'

const Div = styled.div`
    min-height: 56px;
    width: 100%;
    background-color: #3f3f3f;

    img {
        margin: 18px 14px;
        cursor: pointer;
    }

    #sidebar {
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vw;
        background-color: rgba(0,0,0,.4);
        color: #3f3f3f;

        > div {
            width: 270px;
            height: 100vw;
            background-color: #ffffff;
            box-shadow: 10px 10px 30px -20px rgba(0,0,0,0.75);
            position: relative;
            padding: 24px;
            box-sizing: border-box;
        }
    }
`;

const Sidebar = ({ closeSidebar }) => (
    <div id="sidebar" onClick={closeSidebar}>
        <div onClick={ e => e.stopPropagation() }>
            <div>
                <h2>Studio</h2>    
            </div>        
        </div>
    </div>
);

const Header = () => {

    const [ sidebar, toggleSidebar ] = React.useState(true);

    return (
    <Div>
        <img src={burgerIcon} alt="Open Burger Menu" onClick={ () => toggleSidebar(v => !v) }/>
        {sidebar && <Sidebar closeSidebar={ () => toggleSidebar(false) }/>}
    </Div>
    )
}

export default Header;