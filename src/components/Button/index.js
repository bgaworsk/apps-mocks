import React from 'react'
import styled from 'styled-components'
import ArrowDown from './dropdown-arrow-down_16'

const is = (field, on, off) => props => {
  if (!Array.isArray(field)) {
    return props[field] ? on : off;
  } else {
    // Check that all fields are true, therefore none are false
    return (field.filter(v => !props[v]).length === 0) ? on : off;
  }
}

const colors = {
  primary: '#006cae',
  highlight: '#ffffff',
  pressed: '#3f3f3f',
  hoverPrimary: '#025b91',
  hoverSecondary: '#e7e7e7'
};

const Div = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;

  font-size: 15px;
  height: 32px;
  min-width: 80px;
  letter-spacing: 0.3px;
  
  border: solid 1px ${is('isOnDark', colors.highlight, colors.primary)};
  border-radius: 4px;
  color: ${is('primary', colors.highlight, colors.primary)};
  background-color: ${is('primary', colors.primary, colors.highlight)};
  font-weight: 700;
  
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  
  &.button + &.button {
    margin-left: 12px;
  }
  
  &:hover {
    ${is('hover', `border-color: ${colors.hoverPrimary};`, '')}
    ${is(['isOnDark', 'hover'], `border-color: ${colors.highlight};`, '')}
  }
  
  &:active {
    border-color: ${is('isOnDark', colors.highlight, colors.pressed)};
  }
  
  .label, .label-split {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    box-sizing: border-box;
    
    &:hover {
      ${is('hover', `background-color: ${colors.hoverSecondary};`, '')}
      ${is(['hover', 'primary'], `background-color: ${colors.hoverPrimary};`, '')}
    }
    
    &:active {
      background-color: ${colors.pressed};
      color: ${colors.highlight};
    }
  }
  
  .split {
    padding: 0 8px;
    border-left: solid 1px ${is('primary', colors.highlight, colors.primary)};
    color: ${is('primary', colors.highlight, colors.primary)};
    height: 100%;
    display: flex;
    align-items: center;
    
    &:hover {
      ${is('hover', `background-color: ${colors.hoverSecondary};`, '')}
      ${is(['hover', 'primary'], `background-color: ${colors.hoverPrimary};`, '')}
    }
    
    &:active {
      background-color: ${colors.pressed};
      color: ${colors.highlight};
      
      svg {
        fill: ${colors.highlight};
      }
    }
    
    svg {
      margin-top: 2px;
      width: 16px;
      height: 16px;
      fill: ${is('primary', colors.highlight, colors.primary)};
    }
  }
`;

const Button = ({ children, primary, split, isOnDark, hover, ...props }) => {
  return (
    <Div primary={!!primary} isOnDark={!!isOnDark} hover={!!hover} className="button" {...props}>
      <div className={split ? 'label-split' : 'label'}>{children ? children : 'Label'}</div>
      {split && (
        <div className="split">
          <ArrowDown />
        </div>
      )}
    </Div>
  )
}

export default Button;