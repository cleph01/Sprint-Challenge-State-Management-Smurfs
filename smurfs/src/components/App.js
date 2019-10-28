import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurf } from '../actions/SmurfsAction';

import InputForm from './InputForm';
import Smurf from './Smurf';

import "./App.css";

function App (props){
  
  useEffect(() => {
    // kick off our asyncronous action creator
    props.fetchSmurf();
  }, []);

    return (
      <>
        <InputForm />

        
        {props.loadError && <p>Error: {props.loadError}</p>}

        {/* want to make sure we take all possible states into account */}
        {props.isSmurfLoading ? (
          <div className="spinner" >Loading...</div>
        ) : (
          props.smurfs.map((smurf, index) => (
            <Smurf key={index} smurf={smurf} />
          ))

        )}
      </>

  );
}

function mapStateToProps(state) {
  return {
    smurfs : state.smurfs,
    isSmurfLoading: state.isLoading,
    loadError: state.error
  };
}

const mapDispatchToProps = {
  // send a version of our action creator that's attached to
  // the dispatcher to the component as a prop
  fetchSmurf
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
