import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div  className="jumbotron">
            <h2>{counter}</h2>
            <button
                onClick ={dec}
                className="btn btn-primary btn-lg">
                DEC
            </button>
            <button
                onClick={inc} 
                className="btn btn-primary btn-lg">
                INC
            </button>
            <button 
                onClick={rnd} 
                className="btn btn-primary btn-lg">
                RND
            </button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state,
    };
};


const mapDispatchToProps = (dispatch) => {
    const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd,
    }
};

export default connect(mapStateToProps, actions)(Counter);