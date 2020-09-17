import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

const Div = styled.div`
    padding: 24px 18px 0;
    overflow-y: scroll;    
    box-sizing: border-box;

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