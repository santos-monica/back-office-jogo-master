import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label, Col} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModalAddUser, submitUserRequest } from '../actions/modal_addUser_actions';

class ModalAddUser extends Component {

    constructor(props) {
        super(props)

        this.handleUser = this.handleUser.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {

            login: '',
            user: '',
            pass: ''

        }
    }

    handleUser(e) {
        if(e){
            var user = e.target.value;
            this.setState({ ...this.state, user: user });
        }
    }

    handleLogin(e) {
        if(e){
            var login = e.target.value;
            this.setState({ ...this.state, login: login });
        }
    }

    handlePass(e){
        if(e){
            var pass = e.target.value;
            this.setState({ ...this.state, pass: pass });
        }
    }

    handleSubmit(){
        if(this.state.user && this.state.pass && this.state.login){
            var request = {};
            request.name = this.state.user;
            request.pass = this.state.pass;
            request.login = this.state.login;
            this.props.submitUserRequest(request);
        }
    }

    render() {
        return (
            <div>
                <Modal size='md' toggle={() => { this.props.closeModalAddUser(); this.handleUser() }} isOpen={this.props.ismodalopen}>
                    <ModalHeader className='modalBody justify-content-center'><span className='fa fa-user-plus spanAddTitle '></span> Cadastrar Novo Usuário</ModalHeader>
                    <ModalBody className='modalBody'>
                        <Form autoComplete="off">
                            {/* this is here to solve an autocomplete problem on Chrome */}
                            <input type="hidden" value="something"/>
                            <FormGroup row className='justify-content-center'>
                                <Label for="user" sm={3}>Nome </Label>
                                <Col sm={9}>
                                    <Input onChange={e => this.handleUser(e)} type="input" id="user" name="user" label={this.state.user ? this.state.user : "Informe o nome do usuário"} autoComplete="nope"/>
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row className='justify-content-center'>
                                <Label for="user" sm={3}>Login </Label>
                                <Col sm={9}>
                                    <Input onChange={e => this.handleLogin(e)} type="input" id="login" name="login" label={this.state.login ? this.state.login : "Informe o login do usuário"} autoComplete="nope"/>
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row className='justify-content-center'>
                                <Label for="pass" sm={3}>Senha </Label>
                                <Col sm={9}>
                                    <Input onChange={e => this.handlePass(e)} type="password" id="pass" name="pass" label={this.state.pass ? this.state.pass : "Informe a senha"} autoComplete="new-password"/>
                                </Col>
                            </FormGroup>
                            <Label hidden={!this.props.requestFailed} style={{ color: 'red' }}>Falha na criação de usuário</Label>
                            <Label hidden={!this.props.requestSucceeded} style={{ color: 'green' }}>Usuário criado com sucesso</Label>
                        </Form>
                    </ModalBody>
                    <ModalFooter className='modalBody'>
                        <Button className='btnCancel' onClick={() => { this.props.closeModalAddUser(); this.handleUser() }} color="secondary" ><i className="fa fa-times-circle" aria-hidden="true"></i> Fechar</Button>
                        <Button disabled={!this.state.user || !this.state.pass} onClick={this.handleSubmit} className='btnSave' color="secondary"><i className="fa fa-share-square" aria-hidden="true"></i> Salvar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // ismodalopen: state.adduser.isModalOpen, 
        // requestFailed: state.adduser.requestFailed,
        // requestSucceeded: state.adduser.requestSucceeded
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ closeModalAddUser, submitUserRequest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddUser)
