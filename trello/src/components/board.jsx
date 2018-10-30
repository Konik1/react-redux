import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addColumns } from '../store/reducers/columnReducer'

import Column from './column'
import Authorization from './authorization'

import './css/board.css';

class Board extends React.Component{

    constructor(props) {
        super(props);
        
    }
    addColumn = () => {
        const { addColumns } = this.props
        addColumns()
    }
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

Board.propTypes = {
    columnsState: PropTypes.object,
    addColumns: PropTypes.func
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