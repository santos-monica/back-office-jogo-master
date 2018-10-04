import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Label } from 'reactstrap';
import { bindActionCreators } from 'redux';
import puzzle from '../res/img/puzzle.png';

class NotFound extends Component {
    constructor(props) {

        super(props)

        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <br />
                    <br />
                    <br />
                    <Row className='justify-content-center'>
                        <div className='gridNotFound' >
                            <Row className='justify-content-center'>
                                <img src={puzzle} alt='logo'  className='Logo' />
                                <br />
                                <br />
                            </Row>
                            <Row className='justify-content-center'>
                                <i className="fa fa-frown-o fa-4x spanNotFound"></i>
                            </Row>
                            <Row className='justify-content-center'>

                                <Label className='lblPageNotFoundTitle'>404 - Página não Encontrada</Label>

                            </Row>
                            <p className='lblPageNotFoundText'>Não foi possível encontrar a página que você está procurando.</p>
                            <Row className='justify-content-center'>
                                <a className='redirectToHome' href='/login'>VOLTAR</a>
                            </Row>
                            <br />
                            <br />

                        </div>
                    </Row>
                </Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='customLoginBackground' style={{ backgroundColor: '#203b56' }}>
                    <br />
                    <Row className='justify-content-center'>
                        <img src={puzzle} alt='logo' className='logo' />
                    </Row>
                    <Row className='justify-content-center'>
                        <Label className='lblFooterTitle'>Todos os Direitos Reservados - {this.state.date.getFullYear()}</Label>
                    </Row>
                    <br />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NotFound);