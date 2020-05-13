import React, {useState} from 'react';
import { connect } from 'react-redux';
import { getTrivia } from '../actions';
import Loader from 'react-loader-spinner';
import './Trivia.styles.css';

const Trivia = props => {
    const [revealed, setRevealed] = useState(false);

    const toggle = e => setRevealed(!revealed);

    return(
        <div className='trivia'>
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
                <h4>Category: {props.trivia[0].category.title.toUpperCase()}</h4> 
                <h4>For ${props.trivia[0].value}</h4>
                    <p>{props.trivia[0].question}</p>                     
                    <button 
                    onClick={toggle}>See Answer</button>
                    <p className={`answer${revealed ? 'revealed' : ''}`}>What is {props.trivia[0].answer} ?</p>
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