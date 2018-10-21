import React from 'react'
import './css/cardList.css';
import Card from './card'

class CardList extends React.Component{
    
    render(){
        const { cards, columnId, cardComments, nameColumn } = this.props
        return(
            <div>
                {cards.map((card, index) => {
                    if (columnId == card.idColumn){
                    return(
                        <div key={card.id}>
                        <Card 
                            cardName={card.nameCard}
                            cardId={card.id}
                            cardLogin={card.login}
                            cardDescription={card.description}
                            cardComments={cardComments}
                            nameColumn={nameColumn}
                            onRemoveCard={this.props.onRemoveCard.bind(this)}
                            cardIndex={index}
                            login={this.props.login}
                            onRenameCardTitle={this.props.onRenameCardTitle}
                            onChangeCardDescription={this.props.onChangeCardDescription}
                            onAddComment={this.props.onAddComment}
                            onRemoveComment={this.props.onRemoveComment}
                            onChangeComment={this.props.onChangeComment}
                        />
                        </div>
                    )
                    }
                    else return( <div key={card.id}></div> )
                })
                }
            </div>
        )
    }
}
export default CardList;