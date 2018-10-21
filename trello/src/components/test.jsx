import React from 'react'
import {Button, Modal} from 'react-bootstrap'

class Test extends React.Component{

    /* constructor(props, context) {
        super(props, context);
      
          this.handleShow = this.handleShow.bind(this);
          this.handleClose = this.handleClose.bind(this);
      
          this.state = {
            show: false
          };
        }
      
        handleClose() {
          this.setState({ show: false });
        }
      
        handleShow() {
          this.setState({ show: true });
        }
       */
      handleClose = () => {
        this.props.handleClose()
      }

        render() {
          const { show } = this.props
      
          return (
            <div>
            <Modal show={show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>название</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    текст
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.handleClose}>закрыть</Button>
                </Modal.Footer>
            </Modal>
      </div>
    );
  }

}
export default Test;