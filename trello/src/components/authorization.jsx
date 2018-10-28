import React from 'react'
import {Button, Modal, FormGroup, FormControl} from 'react-bootstrap'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addLogin } from '../store/actions'

class Authorization extends React.Component{

    constructor(props, context) {
        super(props, context);
    
        this.state = {
          show: true,
          login: "",
        };
    }
    
    addLogin = () => {
        const { login } = this.state
        const { addLogin } = this.props
        if (login){
            addLogin(login)
            this.setState({ show: false });
        }
    }

    handleChange = (e) => {
        const { name } = e.currentTarget
        this.setState({ [name]: e.currentTarget.value })
    }
    
    render(){
        const { login } = this.state 
        return(
            <div>
                <Modal bsSize="small" 
                        show={this.state.show} 
                        onHide={this.addLogin} 
                        keyboard={false} 
                        backdrop='static'>

                    <Modal.Header className="background">
                        <Modal.Title><div className="auth-title">Введите своё имя</div></Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="background">
                        <div><FormGroup className="">
                            <FormControl 
                                        type="text" 
                                        name="login"
                                        value={login}
                                        onChange={this.handleChange}
                            />
                        </FormGroup></div>
                    </Modal.Body>

                    <Modal.Footer className="background">
                        <Button className="auth-button" onClick={this.addLogin}>Войти</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}
export const stateToProps = (state) =>{
    return {
        loginState: state.loginReducer
    }
}
export const dispatchToProps = (dispatch) => {
    return {
        addLogin: bindActionCreators(addLogin, dispatch)
    }
}
export default connect(stateToProps, dispatchToProps)(Authorization);