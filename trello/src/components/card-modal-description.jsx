import React from 'react'
import {Button, FormGroup, FormControl} from 'react-bootstrap'
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeCardDescription } from '../store/reducers/cardReducer'

class CardModalDescription extends React.Component{

    state={
        description: this.props.description,
        visibleAddCardDescription: !this.props.description,
        visibleRenameCardDescription: !this.props.description
    }

    changeCardDescriptionOpen = e => {
        e.preventDefault()
        this.setState({ visibleRenameCardDescription: true })
    }
    changeCardDescription = () => {
        const { description } = this.state;
        const { cardIndex, changeCardDescription } = this.props;
        changeCardDescription(description, cardIndex)
        this.setState({ visibleRenameCardDescription: false, visibleAddCardDescription: !description  })
    }

    handleChange = (e) => {
        const { name } = e.currentTarget
        this.setState({ [name]: e.currentTarget.value })
    }

    render() {
        const { visibleAddCardDescription, description, visibleRenameCardDescription } = this.state
        if ( visibleAddCardDescription ){
            return(
            <div>
                Описание: 
                <div className="">
                    <FormGroup controlId="formControlsTextarea" className="description-form">
                        <FormControl componentClass="textarea"
                                    type="text"
                                    name="description"
                                    value={description}
                                    onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button bsStyle="success"
                        className="description-button"
                        onClick={this.changeCardDescription}
                    >Добавить описание</Button>
                </div>
            </div>)
        }
        else{
            return(
                <div>
                    Описание:
                {!visibleRenameCardDescription && (
                    <div className="description"
                        onClick={this.changeCardDescriptionOpen}
                    >{description}</div>
                )}
                {visibleRenameCardDescription && (
                    <div className="">
                        <FormGroup controlId="formControlsTextarea" className="description-form">
                            <FormControl componentClass="textarea"
                                        type="text"
                                        name="description"
                                        value={description}
                                        onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button bsStyle="success"
                            className="description-button"
                            onClick={this.changeCardDescription}
                        >Изменить описание</Button>
                    </div>
                )}
                </div>
            )
        }
    }
}

CardModalDescription.propTypes = { 
    cardsState: PropTypes.object,
    changeCardDescription: PropTypes.func,

    description: PropTypes.string,
    cardIndex: PropTypes.nimber
}

export const stateToProps = (state) =>{
    return {
        cardsState: state.cardReducer
    }
}
export const dispatchToProps = (dispatch) => {
    return {
        changeCardDescription: bindActionCreators(changeCardDescription, dispatch)
    }
}
export default connect(stateToProps, dispatchToProps)(CardModalDescription);
