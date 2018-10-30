import React from 'react'
import './css/card.css';
import CardModal from './card-modal'
import {Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteCard } from '../store/reducers/cardReducer'

class Card extends React.Component{
    
    state={
        show: false,
    }
    handleDeleteCard = () => {
        const { cardIndex, cardId, deleteCard } = this.props
        deleteCard(cardIndex, cardId)
    }

    handleClose = () => {
        this.setState({ show: false });
    }
    
    handleShow = () => {
        this.setState({ show: true });
    }

    render(){
        const { cardName, cardId, cardLogin, cardIndex, cardDescription, nameColumn } = this.props
        const { show } = this.state
        if (cardName){
        return(
            <div key={cardId}>
                <div className="card" onClick={this.handleShow}>{cardName}</div>
                <Button bsSize="xsmall" bsStyle="danger" className="delete-card" onClick={this.handleDeleteCard}>X</Button>
                <CardModal 
                    cardDescription={cardDescription}
                    cardId={cardId}
                    cardLogin={cardLogin}
                    cardIndex={cardIndex}
                    show={show} 
                    cardName={cardName}
                    nameColumn={nameColumn}
                    handleClose={this.handleClose}
                /> 
            </div>
        )
        }
        else{ return <div></div> }
    }

}

Card.propTypes = {
    cardsState: PropTypes.object,
    deleteCard: PropTypes.func,

    cardName: PropTypes.string,
    cardId: PropTypes.number,
    cardLogin: PropTypes.string,
    cardDescription: PropTypes.string,
    nameColumn: PropTypes.string,
    cardIndex: PropTypes.number
}

export const stateToProps = (state) =>{
    return {
        cardsState: state.cardReducer
    }
}
export const dispatchToProps = (dispatch) => {
    return {
        deleteCard: bindActionCreators(deleteCard, dispatch)
    }
}
export default connect(stateToProps, dispatchToProps)(Card)