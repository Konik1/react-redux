import React from 'react'
import './css/card.css';
import CardModal from './card-modal'
import {Button} from 'react-bootstrap'

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
        const { cardName, cardId, cardLogin, cardIndex, cardDescription, cardComments,nameColumn } = this.props
        const { show } = this.state
        if (cardName){
        return(
            <div key={cardId}>
                <div className="card" onClick={this.handleShow}>{cardName}</div>
                <Button bsSize="xsmall" bsStyle="danger" className="delete-card" onClick={this.handleDeleteCard}>X</Button>
                <CardModal 
                    cardDescription={cardDescription}
                    cardComments={cardComments}
                    cardId={cardId}
                    cardLogin={cardLogin}
                    cardIndex={cardIndex}
                    show={show} 
                    cardName={cardName}
                    nameColumn={nameColumn}
                    login={this.props.login}
                    handleClose={this.handleClose}
                    onRenameCardTitle={this.props.onRenameCardTitle}
                    onChangeCardDescription={this.props.onChangeCardDescription}
                    onAddComment={this.props.onAddComment}
                    onRemoveComment={this.props.onRemoveComment}
                    onChangeComment={this.props.onChangeComment}
                /> 
            </div>
        )
        }
        else{ return <div></div> }
    }

}
export default Card;