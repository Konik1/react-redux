import React from 'react'
import './css/column.css';
import CardList from './cardList'
import {Button, FormGroup, FormControl} from 'react-bootstrap'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { renameColumns, deleteColumns, addNewCard, deleteCommentsInCard } from '../store/actions'


/* const cards = JSON.parse(localStorage.getItem('cards')) */
/* const columns= JSON.parse(localStorage.getItem("columns")) */

class Column extends React.Component{
    
    state={
        visibleAddCard: false,
        visibleRenameTitle: false,
        titleCard: "",
        titleColumn: this.props.nameColumn,
    }
    constructor(props){
       super(props)
    }
    
    handleVisibleInput = e => {
        e.preventDefault()
        this.setState({ visibleAddCard: true })
    }
    addNewCard = e => { 
        e.preventDefault()
        const { addNewCard, columnId, loginState } = this.props
        const { titleCard } = this.state;
        addNewCard(titleCard, columnId, loginState.loginObj[0].login)
        this.setState({ visibleAddCard: false, titleCard: "" })
    }
    renameTitleOpen = e => {
        e.preventDefault()
        this.setState({ visibleRenameTitle: true })
    }
    renameTitle = e => {
        e.preventDefault()
        const { titleColumn } = this.state;
        const { columnIndex, renameColumns } = this.props;
        renameColumns(titleColumn, columnIndex)
        this.setState({ visibleRenameTitle: false })
    }

    handleChange = (e) => {
        const { name } = e.currentTarget
        this.setState({ [name]: e.currentTarget.value })
    }
    deleteColumn = () => {
        const { cardsState, columnIndex, columnId, deleteColumns, deleteCommentsInCard } = this.props
        
        cardsState.cards.map((card) => {
            if ( columnId === card.idColumn ){
                deleteCommentsInCard(card.id)
            }
           
        })
        deleteColumns(columnIndex, columnId)
    }
    render(){ 
        const { visibleAddCard, visibleRenameTitle, titleCard, titleColumn } = this.state;
        const { cardsState, columnId, nameColumn } = this.props
        return(
          <div className="column column-width">
            {!visibleRenameTitle && (
                <div>
                <Button 
                    bsSize="xsmall" 
                    bsStyle="danger" 
                    className="delete-card" 
                    onClick={this.deleteColumn}
                >X</Button>
                <div className="column title" 
                     onClick={this.renameTitleOpen}
                >{titleColumn}</div>
            </div>)}
            {visibleRenameTitle && (
                <div >
                <Button bsSize="xsmall" bsStyle="success" 
                    className="rename-column-title"
                    onClick={this.renameTitle}
                >V</Button>    
                <FormGroup  bsSize="small" className="title" >
                    <FormControl 
                        type="text"
                        name="titleColumn"
                        value={titleColumn}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                
                
                </div>
            )}
            <CardList 
                columnId={columnId}
                nameColumn={nameColumn}
                cards={cardsState.cards}
            />
            
            {visibleAddCard && (
                <div>
                <FormGroup  bsSize="small" className="add-card-form">    
                <FormControl 
                    className="column-width" 
                    type="text" 
                    name="titleCard" 
                    placeholder="Введите заголовок карточки"
                    value={titleCard}
                    onChange={this.handleChange}
                />
                </FormGroup>
                <Button
                    bsStyle="success" 
                    className="column-width" 
                    onClick={this.addNewCard}
                >Добавить</Button>
                </div>
            )}

            {!visibleAddCard && (
                <Button
                    bsStyle="success" 
                    className="column-width" 
                    onClick={this.handleVisibleInput}
                >Добавить карточку</Button>
            )}
          </div>
        )
    }
}

export const stateToProps = (state) =>{
    return {
        columnsState: state.columnReducer,
        loginState: state.loginReducer,
        cardsState: state.cardReducer
    }
}
export const dispatchToProps = (dispatch) => {
    return {
        renameColumns: bindActionCreators(renameColumns, dispatch),
        deleteColumns: bindActionCreators(deleteColumns, dispatch),
        addNewCard: bindActionCreators(addNewCard, dispatch),
        deleteCommentsInCard: bindActionCreators(deleteCommentsInCard, dispatch)
    }
}
export default connect(stateToProps, dispatchToProps)(Column)