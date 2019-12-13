import React, {useState} from 'react';
import { connect } from 'react-redux';
import { getTrivia } from '../actions';
import Loader from 'react-loader-spinner';

const Trivia = props => {
    const [revealed, setRevealed] = useState(false)
    const toggle = e => setRevealed(!revealed)
    return(
        <div>
            <h1>This is JEOPARDY!</h1>
            {!props.trivia && !props.isFetching && <p>New clue for $100, Alex!</p>}
            {props.isFetching && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                />
            )}
            {props.trivia ? (
                <>
                    <p>{props.trivia[0].question}</p> 
                    <p>{props.trivia[0].category.title}</p> 
                    <button onClick={toggle}>See Answer</button>
                    <p className={`answer${revealed ? ' revealed' : ''}`}>{props.trivia[0].answer}</p>
                </>
            ) : null}

            <button onClick={props.getTrivia}>Get new clue</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        trivia: state.trivia,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getTrivia })(Trivia);