import React from 'react';
import './css/card-modal.css';
import {Button, Modal} from 'react-bootstrap'
import CardModalTitel from './card-modal-titel'
import CardModalDescription from './card-modal-description'
import CardModalComment from './card-modal-comment'
import PropTypes from 'prop-types';

class CardModal extends React.Component{

    handleClose = () => {
        this.props.handleClose()
    }

    render() {
        const { show, cardName, cardLogin, cardDescription, cardId, cardIndex, nameColumn } = this.props
        return (
            <div>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header  className="background">
                        <Modal.Title>
                            <div className="title-card"><CardModalTitel
                                cardName={cardName}
                                cardIndex={cardIndex}
                            /></div>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="background">
                        <div className="right-card">
                            <div className="right-card-text">Автор: {cardLogin}</div>
                            <div className="right-card-text">Колонка: {nameColumn}</div>
                        </div>
                        <div>
                            <div key={cardId}>
                            <CardModalDescription 
                                description={cardDescription}
                                cardIndex={cardIndex}
                            />
                            </div>
                        <div className="comments-title">Комментарии:</div>
                        <CardModalComment
                            cardId={cardId}
                        />
                        </div>
                        
                    </Modal.Body>

                    <Modal.Footer className="background">
                        <Button onClick={this.handleClose}>закрыть</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

CardModal.propTypes = {
    cardDescription: PropTypes.string,
    cardId: PropTypes.number,
    cardLogin: PropTypes.string,
    cardIndex: PropTypes.number,
    show: PropTypes.bool,
    cardName: PropTypes.string,
    nameColumn: PropTypes.string,
    handleClose: PropTypes.func
}

export default CardModal;