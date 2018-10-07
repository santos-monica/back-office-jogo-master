import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, FormFeedback } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { addTheme } from '../actions/theme_actions';
import SVG from 'react-inlinesvg';
import { modalAddQuestionToogle } from '../actions/generic_modals_handler_actions';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class AddTheme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: {
                nome: '',
                cor: '',
                icone: ''
            } 
        };

        this.addTheme = this.addTheme.bind(this);
    }

    componentDidMount() {
        // this.cancelAddQuestion();
    }

    handleChange(event, key) {

        let state = { ...this.state }
        let campo = key;
        let valor = event.target.value;

        switch(campo){
            case "nome":
                state.theme.nome = valor;
                break;
            case "cor":
                state.theme.cor = valor;
                break;
            case "icone":
                state.theme.icone = valor;
                break;
            default:
                break;
        }

        this.setState({ ...state })
    }

    addTheme() {
        this.state.theme = { ...this.state.theme };
        try {
            this.props.addTheme(this.state.theme);
            NotificationManager.success('Tema Adicionada com Sucesso!', '', 3500);
        } catch (err) {

            NotificationManager.error('Não foi Possível adicionar o Tema', '', 3500);
        }
    }

    renderTema(){
        if(Object.keys(this.props.temas).length > 0){
            return this.props.temas.map((tema) => {
                    return (
                        <tr key={tema.identifier}>
                        <td>{tema.nome}</td>
                        <td className="colorTd">#{tema.cor}</td>
                        <td>{tema.icone}</td>
                        <td className='text-center'>
                        <Button title='Editar este Fluxo' className='listItemEdit fa fa-pencil-square fa-sm' color='link' onClick={() => { this.props.getStateList(tema.identifier) }}></Button>
                        &nbsp;
                        <Button title='Remover este Fluxo' className='listItemRemove fa fa-trash fa-sm' color='link' onClick={() => this.removeFlowConfirmation(tema.identifier)}></Button>
                        </td>
                        </tr>
                    )
                })
            } 
    }

    render() {
        return (
            <div>
                {this.renderTema()}
                <Form>
                    <FormGroup row className='justify-content-center'>
                        <Label className="addThemeLabel" for="tema" sm={3}>tema</Label>
                        <Col sm={7}>
                            <Input invalid={this.state.theme.nome ? false : true} 
                                value={this.state.theme.nome} 
                                className='inputModal' type="text" 
                                onChange={(e) => this.handleChange(e, "nome")} id="tema">
                            </Input>
                            <FormFeedback>tema é obrigatória</FormFeedback>
                        </Col>
                        <br />
                        <br />
                        {/* <SVG
                            src="../res/img/icons/earth.svg"
                            preloader={<Loader />}
                            onLoad={(src) => {
                                myOnLoadHandler(src);
                            }}
                            >
                            {/* Here's some optional content for browsers that don't support XHR or inline
                            SVGs. You can use other React components here too. Here, I'll show you.
                            <img src="/path/to/myfile.png" /> */}
                        {/* </SVG> */} 
                    </FormGroup>
                </Form>
                <NotificationContainer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        modal: state.genericmodals,
        temas: state.structure.temas,
		nivel: state.structure.nivel
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ modalAddQuestionToogle, addTheme }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTheme)