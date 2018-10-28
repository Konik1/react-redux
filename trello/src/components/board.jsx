import React from 'react'
import { Button } from 'react-bootstrap'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addColumns } from '../store/actions'

/* import { stateToProps, dispatchToProps } from '../store/actions'
 */
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
 
const obj2= [{nameCard: "первый", idColumn: 0, login: "Алексей", id: 0, description: "Описание"}]
var serialObj2 = JSON.stringify(obj2);
localStorage.setItem('cards', serialObj2); 

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
        
    }
    /* addNewCard = (titleCard, columnId, login) => {
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
                this.setState({ columns: columns.filter((value, index) => columnIndex !== index ) })
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
        const { columnsState, addColumns } = this.props
        let id
        if (columns[columns.length-1]){
            id = columns[columns.length-1].id + 10;}
        else { id = 1;}
        columns[columns.length] = {nameColumn: "новая колонка", id: id}
        addColumns(columns)
    }
    */
    addColumn = () => {
        const { addColumns } = this.props
        addColumns()
    }
/*     renameTitle = (titleColumn, columnIndex) => {
        const { columns, renameColumns } = this.props;
        columns[columnIndex].nameColumn = titleColumn;
        renameColumns(columns)
    }

    renameCardTitle = (cardTitle, cardIndex) => {
        const { cards, changeCards } = this.props;
        cards[cardIndex].nameCard = cardTitle;
        changeCards(cards)
    }

    changeCardDescription = (description, descrIndex) => {
        const { cardDescription, changeCardDescription } = this.props;
        cardDescription[descrIndex].description = description;
        changeCardDescription(cardDescription)
    }
    addComment = (login, comment, cardId) => {
        const { cardComments, changeCardComments } = this.props
        let id
        if (cardComments[cardComments.length-1]){
             id = cardComments[cardComments.length-1].id + 10;}
        else { id = 1;}
        cardComments[cardComments.length] = {login: login, comment: comment, idCard: cardId, id: id}
        changeCardComments(cardComments);
    }

    removeComment = (indexComment) => {
        const { cardComments, changeCardComments } = this.props
        let cardComments2= cardComments.filter((v, index) => indexComment !== index )
        changeCardComments(cardComments2);
    }
    changeComment = (comment, index) => {
        const { cardComments, changeCardComments } = this.props;
        cardComments[index].comment = comment;
        changeCardComments(cardComments);
    }

    addLogin = (login) => {
        const { loginObj, changeLoginObj } = this.props
        loginObj[0] = {login: login}
        changeLoginObj(loginObj);
    } */

    renderColumn = () => {
        const { columnsState } = this.props
        console.log("тест " + JSON.parse(localStorage.getItem('columns')))
        return columnsState.columns.map((column, index) => {
            return(
                <div key={column.id} className="add-column"><Column 
                    columnIndex={index}
                    nameColumn={column.nameColumn}
                    columnId={column.id}
                /></div>
            )
        })
    }
    render(){
        return(
            <div>
                <Authorization />
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
        columnsState: state.columnReducer
    }
}
export const dispatchToProps = (dispatch) => {
    return {
        addColumns: bindActionCreators(addColumns, dispatch)
    }
}
export default connect(stateToProps, dispatchToProps)(Board)