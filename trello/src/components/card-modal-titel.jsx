import React from 'react'
import {Button, FormGroup, FormControl} from 'react-bootstrap'
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { renameCard } from '../store/reducers/cardReducer'

class CardModalTitel extends React.Component{

    state={
        visibleRenameCardTitle: false,
        cardTitle: this.props.cardName
    }

    renameCardTitleOpen = e => {
        e.preventDefault()
        this.setState({ visibleRenameCardTitle: true })
    }
    renameCardTitle = e => {
        e.preventDefault()
        const { cardTitle } = this.state;
        const { cardIndex, renameCard } = this.props;
        renameCard(cardTitle, cardIndex)
        this.setState({ visibleRenameCardTitle: false })
    }
    handleChange = (e) => {
        const { name } = e.currentTarget
        this.setState({ [name]: e.currentTarget.value })
    }

    render() {
        const { cardTitle, visibleRenameCardTitle } = this.state
        return(
            <div>
            {!visibleRenameCardTitle && (
                <div className="" 
                    onClick={this.renameCardTitleOpen}
                >{cardTitle}</div>
            )}
            {visibleRenameCardTitle && (
                <div >
                    <FormGroup bsSize="large" className="rename-title-form">
                        <FormControl type="text" 
                                    name="cardTitle" 
                                    value={cardTitle}
                                    onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button bsStyle="success"
                        className="rename-title-button"
                        onClick={this.renameCardTitle}
                    >Изменить название</Button>
                </div>
            )}
            </div>
        )
    }
}

CardModalTitel.propTypes = {
    cardsState: PropTypes.object,
    renameCard: PropTypes.func,

    cardName: PropTypes.string,
    cardIndex: PropTypes.number
}

export const stateToProps = (state) =>{
    return {
        cardsState: state.cardReducer
    }
}
export const dispatchToProps = (dispatch) => {
    return {
        renameCard: bindActionCreators(renameCard, dispatch)
    }
}
export default connect(stateToProps, dispatchToProps)(CardModalTitel);
