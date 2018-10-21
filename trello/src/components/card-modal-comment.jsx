import React from 'react'
import {Button, FormGroup, FormControl} from 'react-bootstrap'

class CardModalComment extends React.Component{

    state={
        comment: "",
        changeComment: "",
        visible: false,
    }

    handleChange = (e) => {
        const { name } = e.currentTarget
        this.setState({ [name]: e.currentTarget.value })
    }
    addComment = () => {
        const { comment } = this.state;
        const { cardId, login, addComment } = this.props;
        addComment(login[0].login, comment, cardId)
        this.setState({ comment: "" })
    }

    changeComment = (index) => {
        const { changeComment } = this.state
        const { changeComment } = this.props
        changeComment(changeComment, index)
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
        const { comment, visible, changeComment } = this.state
        const { cardComments, cardId } = this.props
        return(
            <div className="comments">
                <div>
                    {cardComments.map((comment, index) => { 
                        if (cardId === comment.idCard){
                            return(
                                <div key={comment.id}>
                                    <h4>{comment.login}:</h4>
                                    {visible && (<div>
                                        <FormGroup className="comments-form">
                                            <FormControl type="text"
                                                       
                                                        name="changeComment"
                                                        value={changeComment}
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
export default CardModalComment;