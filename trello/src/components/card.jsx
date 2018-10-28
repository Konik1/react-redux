import React from 'react'
import './css/card.css';
import CardModal from './card-modal'
import {Button} from 'react-bootstrap'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteCard } from '../store/actions'

class Card extends React.Component{
    
    state={
        show: false,
    }
    /* deleteCard = e => {
        e.preventDefault()
        const { data } = this.props;
        const cards = JSON.parse(localStorage.getItem('cards'));
        cards.splice(data.index, 1);
        const serialObj= JSON.stringify(cards);
        localStorage.setItem('cards', serialObj);
    } */
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