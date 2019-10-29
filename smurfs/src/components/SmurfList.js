import React from 'react';

//import connector for access to Global State Store
import { connect } from 'react-redux';


const SmurfList = props => {

    console.log(props.image, 'State-Image-List-Component')

    return (
        <>
            
            <div>
                {props.image.map((image, index) => (
                    <Smurf key={index} smurf={smurf}/>
                ))}
            </div>
                   
        </>
    )
  };


  //mapStateToProps
  const mapStateToProps = state => {
      return{
          smurfs : state.smurf
      }
  }
  
  export default connect(mapStateToProps)(SmurfList);