import React from 'react'
import { Button } from 'react-bootstrap'

import { connect } from 'react-redux'

/* import { stateToProps, dispatchToProps } from '../store/actions' */

import Column from './column'
import Authorization from './authorization'

import './css/board.css';



/* localStorage.removeItem('cards')
localStorage.removeItem('columns')
localStorage.removeItem('cardDescription')
localStorage.removeItem('cardComments')
localStorage.removeItem('loginObj') */

/* const obj= [
    {nameColumn: "TODO", id: 0}, 
    {nameColumn: "In Progress", id: 1},
    {nameColumn: "Testing", id: 2},
    {nameColumn: "Done", id: 3},
]
var serialObj = JSON.stringify(obj);
localStorage.setItem('columns', serialObj); 
 
const obj2= [{nameCard: "первый", idColumn: 0, login: "Алексей", id: 0}]
var serialObj2 = JSON.stringify(obj2);
localStorage.setItem('cards', serialObj2); 

const obj3= [{description: "описание первой карточки", idCard: 0}]
var serialObj3 = JSON.stringify(obj3);
localStorage.setItem('cardDescription', serialObj3); 

const obj4= [{login: "Алексей", comment: "Первый коммент", idCard: 0, id: 0}]
var serialObj4 = JSON.stringify(obj4);
localStorage.setItem('cardComments', serialObj4); 

const obj5= [{login: "Алексей"}]
var serialObj5 = JSON.stringify(obj5);
localStorage.setItem('loginObj', serialObj5); */

class Board extends React.Component{

    constructor(props) {
        /*const columns = JSON.parse(localStorage.getItem('columns'))
         const cards = JSON.parse(localStorage.getItem('cards'))
        const cardDescription = JSON.parse(localStorage.getItem('cardDescription')) 
        const cardComments = JSON.parse(localStorage.getItem('cardComments'))
        const loginObj = JSON.parse(localStorage.getItem('loginObj'))*/
        super(props);
        this.handleRemoveCard = this.handleRemoveCard;
        this.state={ 
             /*columns,
            cards,
            cardDescription, 
            cardComments,
            loginObj*/
        }
    }
    addNewCard = (titleCard, columnId, login) => {
        const { cards, cardDescription, changeCards, changeCardDescription } = this.props
        let id
        if (cards[cards.length-1]){
             id = cards[cards.length-1].id + 10;}
        else { id = 1;}
        cards[cards.length] = {nameCard: titleCard, idColumn: columnId, login: login, id: id}
        cardDescription[cardDescription.length] = {description: "", idCard: id}
        changeCards(cards);
        changeCardDescription(cardDescription);
    }

    handleRemoveCard = (cardIndex, cardId) => {
        const { cards, cardDescription, cardComments, 
            changeCards, changeCardDescription, changeCardComments } = this.props;
        let cards2= cards.filter((v, index) => cardIndex !== index )
        let cardDescription2= cardDescription.filter((v, index) => cardIndex !== index )
        changeCards(cards2);
        changeCardDescription(cardDescription2)
        cardComments.map((comment, index) => {
            if ( comment.idCard === cardId )
                cardComments.splice(index, 1);
        })
        changeCardComments(cardComments)
    }        
    
    deleteColumn = (columnIndex) => {
        const { columns, deleteColumns, cards } = this.props
        /* this.setState({ columns: columns.filter((value, index) => columnIndex !== index ) }) */
        let columns2= columns.filter((v, index) => columnIndex !== index )
        deleteColumns(columns2)
        columns.map((column, index) => {
            if (index === columnIndex){
                cards.map((card, index) => {
                    if (column.id === card.idColumn){
                        this.handleRemoveCard(index, card.id)
                    }
                })
            }
        })
    }   

    addColumn = () => {
        const { columns, addColumns } = this.props
        let id
        if (columns[columns.length-1]){
            id = columns[columns.length-1].id + 10;}
        else { id = 1;}
        columns[columns.length] = {nameColumn: "новая колонка", id: id}
        addColumns(columns)
    }

    renameTitle = (titleColumn, columnIndex) => {
        const { columns, renameColumns } = this.props;
        columns[columnIndex].nameColumn = titleColumn;
        renameColumns(columns)
        /* this.setState({ columns: columns }) */
    }

    renameCardTitle = (cardTitle, cardIndex) => {
        const { cards, changeCards } = this.props;
        cards[cardIndex].nameCard = cardTitle;
        changeCards(cards)
        /* this.setState({ cards: cards }) */
    }

    changeCardDescription = (description, descrIndex) => {
        const { cardDescription, changeCardDescription } = this.props;
        cardDescription[descrIndex].description = description;
        changeCardDescription(cardDescription)
        /* this.setState({ cardDescription: cardDescription }) */
    }
    addComment = (login, comment, cardId) => {
        const { cardComments, changeCardComments } = this.props
        let id
        if (cardComments[cardComments.length-1]){
             id = cardComments[cardComments.length-1].id + 10;}
        else { id = 1;}
        cardComments[cardComments.length] = {login: login, comment: comment, idCard: cardId, id: id}
        /* this.setState({ cardComments: cardComments }) */
        changeCardComments(cardComments);
    }

    removeComment = (indexComment) => {
        const { cardComments, changeCardComments } = this.props
        /* this.setState({ cardComments: cardComments.filter((v, index) => indexComment !== index ) }) */
        let cardComments2= cardComments.filter((v, index) => indexComment !== index )
        changeCardComments(cardComments2);
    }
    changeComment = (comment, index) => {
        const { cardComments, changeCardComments } = this.props;
        cardComments[index].comment = comment;
        changeCardComments(cardComments);
        /* this.setState({ cardComments: cardComments }) */
    }

    addLogin = (login) => {
        const { loginObj, changeLoginObj } = this.props
        loginObj[0] = {login: login}
        /* this.setState({ loginObj: loginObj }) */
        changeLoginObj(loginObj);
    }

    renderColumn= () => {
        const { columns, cardComments, loginObj, cards, cardDescription} = this.props
        return columns.map((column, index) => {
            return(
                <div key={column.id} className="add-column"><Column 
                    columnIndex={index}
                    nameColumn={column.nameColumn}
                    columnId={column.id}
                    renameTitle={this.renameTitle}
                    addNewCard={this.addNewCard}
                    onRemoveCard={this.handleRemoveCard}
                    deleteColumn={this.deleteColumn}
                    onRenameCardTitle={this.renameCardTitle}
                    onChangeCardDescription={this.changeCardDescription}
                    onAddComment={this.addComment}
                    onRemoveComment={this.removeComment}
                    onChangeComment={this.changeComment}
                /></div>
            )
        })
    }
    render(){
        return(
            <div>
                <Authorization addLogin={this.addLogin} />
                {this.renderColumn()}
                <Button
                    className="add-column" 
                    onClick={this.addColumn}
                >Добавить колонку</Button>
            </div>
        )
    }
}

export const stateToProps = (state) =>{
    return {
        columns: state.columns,
    }
}
export const dispatchToProps = (dispatch) => {
    return {
        addColumns: bindActionCreators(addColumns, dispatch),
    }
}
export default connect(stateToProps, dispatchToProps)(Board)