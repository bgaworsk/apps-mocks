import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

const Div = styled.div`
    padding: 24px 18px;
    overflow-y: scroll;    
    box-sizing: border-box;

    h1 {
      margin: 30px 0 42px;
      font-size: 36px;
      font-weight: 400;
      cursor:  text;
    }

    > .narrow {
      max-width: 900px;
    }
    
    > div {
      width: 100%;
      max-width: 100%;
      margin: auto;
    }
`;

const Container = ({ children, narrow, ...props}) => {
  return (
    <Div {...props}>
      <div className={classnames({ narrow })}>
        {children}
      </div>
    </Div>
  )
}

export default Container;