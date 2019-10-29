import React, { useState } from 'react';
import { connect } from "react-redux";
import { putSmurf } from "../actions/SmurfsAction";
import styled from 'styled-components'

// div
const FormWrapper = styled.div`
    display:flex;
    justify-content:space-around;
    margin-top: 2rem;
`;


const InputForm = props => {

    const [name, setName] = useState();

    const [age, setAge] = useState();

    const [height, setHeight] = useState();

    const handleSubmit = e => {
        e.preventDefault()

        props.putSmurf({
                name:name,
                age:age,
                height:height
        });
    }

    const handleNameChange = e => {
        e.preventDefault()

        setName(e.target.value)
    }

    const handleAgeChange = e => {
        e.preventDefault()

        setAge(e.target.value)
    }

    const handleHeightChange = e => {
        e.preventDefault()

        setHeight(e.target.value)
    }

return(
    <>
    <FormWrapper>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder={`Smurf Name`}
                value={name}
                onChange={handleNameChange}
            />

            <input
                type="text"
                name="age"
                placeholder={`Smurf Age`}
                value={age}
                onChange={handleAgeChange}
            />

            <input
                type="text"
                name="height"
                placeholder={`Smurf Height`}
                value={height}
                onChange={handleHeightChange}
            />

          <button type="submit">Add</button>
        </form>
    </FormWrapper>
    </>

    );
}


function mapStateToProps(state){
    return{

    }
}

const mapDispatchToProps = {
    
        putSmurf
};

export default connect(mapStateToProps,mapDispatchToProps)(InputForm);