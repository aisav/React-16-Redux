import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 7" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 7" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((strResult) => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.val}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddCounter: () => dispatch({type: 'ADD', val: 7}),
        onDecrementCounter: () => dispatch({type: 'DEC'}),
        onIncrementCounter: () => dispatch({type: 'INC'}),
        onSubtractCounter: () => dispatch({type: 'SUB', val: 7}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultDeletedElId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);