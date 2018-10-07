import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, Input, Label, Row, InputGroup, InputGroupAddon, InputGroupText, Form } from 'reactstrap';
import { bindActionCreators } from 'redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { submitCredentials, checkIfLogged, clearError  } from '../../actions/login_actions';
import AuthorizedAccess from '../../components/authorized';

const MySwal = withReactContent(Swal)

class Login extends Component {

    constructor(props) {

        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKey = this.handleKey.bind(this);

        this.state = {
            username: '',
            password: '',
            date: new Date()
        }

    }

    componentDidMount() {

        // this.props.checkIfLogged('admin');
    }

    render() {
        return (
            <div>
                <Container className={this.props.loginrequest ? 'overlay' : ''}>
                    <br />
                    <br />
                    <br />
                    <Row className='justify-content-center'>
                        <div className='gridLogin' >
                            <Row className='justify-content-center'>
                                {/* <img src={puzzle} alt='logo' className='puzzle'/> */}
                                <br />
                                <br />
                            </Row>
                            <Row className='justify-content-center'>
                                <Label className='lblkmpageTitle'>Administração Master</Label>
                            </Row>
                            <div>
                                <hr className='loginDivider'></hr>
                                <Form>
                                    <Row className='justify-content-center' style={{ marginRight: -10 }}>
                                        <Col sm={12}>
                                            <InputGroup className='inputLogin'>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText title='Usuário'><span className='fa fa-user'></span></InputGroupText>
                                                </InputGroupAddon>
                                                <Input onKeyDown={this.handleKey} disabled={this.props.loginrequest} value={this.state.username} onChange={(e) => this.handleUsernameInput(e)} type='text' className='inputLoginField' placeholder="Digite o nome de usuário" />
                                                <InputGroupAddon hidden={this.props.loginrequest} className='inputSpanClear' addonType="append">
                                                    <InputGroupText onClick={() => this.clearInputUsername()} hidden={this.state.username ? false : true} title='Limpar'><span onClick={() => this.clearInputUsername()} className='fa fa-times'></span></InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row className='justify-content-center' style={{ marginRight: -10 }}>
                                        <Col sm={12}>
                                            <InputGroup className='inputLogin'>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText title='Senha'><span className='fa fa-lock'></span></InputGroupText>
                                                </InputGroupAddon>
                                                <Input onKeyDown={this.handleKey} disabled={this.props.loginrequest} value={this.state.password} onChange={(e) => this.handlePasswordInput(e)} type='password' className='inputLoginField' placeholder="Digite a senha" />
                                                <InputGroupAddon hidden={this.props.loginrequest} className='inputSpanClear' addonType="append">
                                                    <InputGroupText onClick={() => this.clearInputPassword()} hidden={this.state.password ? false : true} title='Limpar'><span className='fa fa-times'></span></InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row className='justify-content-center'>
                                        <Button title='Fazer Login' hidden={this.props.loginrequest} onClick={this.handleSubmit} disabled={this.state.username && this.state.password ? false : true} className='submitButton' color="secondary"><i className={this.state.username && this.state.password ? "fa fa-sign-in animated pulse infinite" : ""} aria-hidden="true"></i> Login</Button>&nbsp;
                                     </Row>

                                </Form>
                            </div>
                            <br />
                        </div>
                    </Row>
                </Container>
                {this.handleLoginFailed()}
                <div className='text-center' hidden={!this.props.loginrequest}>
                    <i className="fa fa-circle-o-notch spanLoading fa-spin"></i>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='customLoginBackground' style={{ backgroundColor: '#203b56' }}>
                    <br />
                    <Row className='justify-content-center'>
                        {/* <img src={puzzle} alt='logo' className='puzzle' /> */}
                    </Row>
                    <Row className='justify-content-center'>
                        <Label className='lblFooterTitle'>Todos os Direitos Reservados - {this.state.date.getFullYear()}</Label>
                    </Row>
                    <br />
                </div>
                <AuthorizedAccess />
            </div>
        )
    }


    handleUsernameInput(e) {
        var username = e.target.value;
        this.setState({ username });
    }

    handlePasswordInput(e) {
        var password = e.target.value;
        this.setState({ password });
    }

    handleSubmit(e) {

        if (this.state.username && this.state.password) {
            this.props.submitCredentials(this.state.username, this.state.password);
        }
    }

    handleKey(e) {
        if (e.key == 'Enter') {
            if (this.state.username && this.state.password) {
                this.props.submitCredentials(this.state.username, this.state.password);
            } else
                e.preventDefault();
        }
    }

    handleLoginFailed() {
        if (this.props.errormessage) {
            var message = this.props.errormessage
    
            MySwal.fire({
                title: <p>Houve um problema ao fazer Login</p>,
                html: <p style={{fontFamily:'OpenSans', textAlign:'center'}}>{message}</p>,
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonClass: 'btn btnConfirmar',
                buttonsStyling: false,
                customClass: 'alertFont',
                type: 'error',
                allowOutsideClick: true
            }).then(() => {

                this.props.clearError();
            })
        }
    }

    clearInputUsername() {
        var username = '';
        this.setState({ username });
    }

    clearInputPassword() {
        var password = '';
        this.setState({ password });

    }
}

function mapStateToProps(state) {
    return {
        login: state.login,
        // loginrequest: state.requesthandler.loginRequestSent,
        errormessage: state.login.loginFailedMessage
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitCredentials, checkIfLogged, clearError }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);