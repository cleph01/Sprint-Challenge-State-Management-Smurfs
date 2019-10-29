import React from 'react';
import styled from 'styled-components'

// div
const SmurfDiv = styled.div`
    width: 100%;
    margin-top: 2rem;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items:center;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;
`;


const Header = styled.header`
    font-size: 4rem;
    margin-bottom: 1rem;

`;

const Smurf = props => {

    // console.log(props.feature, 'added-feature-1')

    return (
        <>
            <SmurfDiv>
                <Header>{props.smurf.name}</Header>
               
                <p>Age: {props.smurf.age}</p>
                <p>Height: {props.smurf.height}</p> 
            </SmurfDiv>
        </>
    )
  };
  
  export default Smurf;