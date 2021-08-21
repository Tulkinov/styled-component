import styled from 'styled-components'
export const Wrapper =styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 800px;
height: 200px;
box-shadow: 0 0 12px blue;
`


export const Button=styled.button`
width: ${(props)=>props.type==='large'? '150px':'100px'};
height: 40px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 0 12px blue;
margin: 10px;
`