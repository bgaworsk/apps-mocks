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
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  height: 32px;
  min-width: 80px;
  
  border: solid 1px ${is('isOnDark', colors.highlight, colors.primary)};
  border-radius: 4px;
  color: ${is('primary', colors.highlight, colors.primary)};
  background-color: ${is('primary', colors.primary, colors.highlight)};
  font-weight: 700;
  
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  
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
    
    &:hover {
      ${is('hover', `background-color: ${colors.hoverSecondary};`, '')}
      ${is(['hover', 'primary'], `background-color: ${colors.hoverPrimary};`, '')}
    }
    
    &:active {
      background-color: ${colors.pressed};
      color: ${colors.highlight};
    }
  }
  
  .label {
    padding: 0 16px;
  }
  
  .label-split {
    padding: 0 8px 0 16px;
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
    <Div primary={!!primary} isOnDark={!!isOnDark} hover={!!hover} {...props}>
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