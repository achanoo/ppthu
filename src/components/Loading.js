import React from 'react'
import styled from 'styled-components'
const Loading = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h3>Loading ....</h3>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;

    height: auto;
    padding: 20px;
  }
`

export default Loading
