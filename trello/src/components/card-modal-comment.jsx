import React from 'react'
import {Button, FormGroup, FormControl} from 'react-bootstrap'
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addComment, changeComment, deleteComment } from '../store/reducers/commentReducer'

class CardModalComment extends React.Component{

    state={
        comment: "",
        cgComment: "",
        visible: false,
    }

    handleChange = (e) => {
        const { name } = e.currentTarget
        this.setState({ [name]: e.currentTarget.value })
    }
    addComment = () => {
        const { comment } = this.state;
        const { cardId, loginState, addComment } = this.props;
        addComment(loginState.loginObj[0].login, comment, cardId)
        this.setState({ comment: "" })
    }

    changeComment = (index) => {
        const { cgComment } = this.state
        const { changeComment } = this.props
        changeComment(cgComment, index)
        this.setState({ comment: "", visible: false })
    }
    changeCommentOpen = () => {
        this.setState({ visible: true })
    }
    removeComment = (index) => {
        const { deleteComment } = this.props
        deleteComment(index)
    }
    render(){
        const { comment, visible, cgComment } = this.state
        const { cardCommentsState, cardId } = this.props
        return(
            <div className="comments">
                <div>
                    {cardCommentsState.cardComments.map((comment, index) => { 
                        if (cardId === comment.idCard){
                            return(
                                <div key={comment.id}>
                                    <h4>{comment.login}:</h4>
                                    {visible && (<div>
                                        <FormGroup className="comments-form">
                                            <FormControl type="text"
                                                       
                                                        name="cgComment"
                                                        value={cgComment}
                                                        onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                        <Button bsStyle="success"
                                            className="comments-button"
                                            onClick={() => this.changeComment(index)}
                                        >Изменить комментарий</Button>
                                    </div>)}
                                    {!visible && (<div>
                                    {comment.comment}
                                    <div className="comment">
                                        <Button bsStyle="warning" bsSize="xsmall"
                                            className="comment-button"
                                            onClick={this.changeCommentOpen}>Изменить
                                        </Button>
                                        <Button bsStyle="danger" bsSize="xsmall"
                                            className="comment-button"
                                            onClick={() => this.removeComment(index)}>Удолить
                                        </Button>
                                    </div>
                                    </div>)}
                                </div>
                            )
                        }
                    })}
                </div>
                {!visible && (<div>
                <FormGroup className="comments-form">
                    <FormControl type="text"
                                
                                name="comment" 
                                value={comment}
                                onChange={this.handleChange}
                    />
                </FormGroup>
                <Button bsStyle="success"
                    className="comments-button"
                    onClick={this.addComment}
                >Добавить комментарий</Button>
                </div>)}
            </div>
        )
    }
}

CardModalComment.propTypes = {
    cardCommentsState: PropTypes.object,
    loginState: PropTypes.object,
    addComment: PropTypes.func,
    changeComment: PropTypes.func,
    deleteComment: PropTypes.func,

    cardId: PropTypes.number
}

export const stateToProps = (state) =>{
    return {
        cardCommentsState: state.commentReducer,
        loginState: state.loginReducer
    }
}
export const dispatchToProps = (dispatch) => {
    return {
        addComment: bindActionCreators(addComment, dispatch),
        changeComment: bindActionCreators(changeComment, dispatch),
        deleteComment: bindActionCreators(deleteComment, dispatch)
    }
}
export default connect(stateToProps, dispatchToProps)(CardModalComment)