import React from 'react'
import './css/cardList.css';
import Card from './card'

class CardList extends React.Component{
    
    render(){
        const { cards, columnId, nameColumn } = this.props
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
                            nameColumn={nameColumn}
                            cardIndex={index}
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