import React from 'react'
import './css/column.css';
import CardList from './cardList'
import {Button, FormGroup, FormControl} from 'react-bootstrap'

 
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
        const { addNewCard, columnId, login } = this.props
        const { titleCard } = this.state;
        addNewCard(titleCard, columnId, login[0].login)
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
        const { columnIndex, deleteColumns } = this.props
        deleteColumns(columnIndex)
    }
    render(){ 
        const { visibleAddCard, visibleRenameTitle, titleCard, titleColumn } = this.state;
        const { cards, columnId, nameColumn, cardDescription, cardComments } = this.props
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
                cards={cards}
                columnId={columnId}
                cardDescription={cardDescription}
                cardComments={cardComments}
                nameColumn={nameColumn}
                login={this.props.login}
                onRemoveCard={this.props.onRemoveCard.bind(this)}
                onRenameCardTitle={this.props.onRenameCardTitle}
                onChangeCardDescription={this.props.onChangeCardDescription}
                onAddComment={this.props.onAddComment}
                onRemoveComment={this.props.onRemoveComment}
                onChangeComment={this.props.onChangeComment}
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

export default Column;