import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, FormFeedback } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { addQuestion } from '../actions/questions_actions';
import { modalAddQuestionToogle } from '../actions/generic_modals_handler_actions';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class ModalAddQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: {
                tema: '',
                nivel: '',
                pergunta: '',
                alt1: '',
                alt2: '',
                alt3: '',
                alt4: ''
            } 
        };

        this.addQuestion = this.addQuestion.bind(this);

    }

    componentDidMount() {
        // this.cancelAddQuestion();
    }

    handleChange(event, key) {

        let question = { ...this.state }
        let campo = key;
        let valor = event.target.value;

        switch(campo){
            case "tema":
                question.tema = valor;
                break;
            case "nivel":
                question.nivel = valor;
                break;
            case "pergunta":
                question.pergunta = valor;
                break;
            case "alt1":
                question.alt1 = valor;
                break;
            case "alt2":
                question.alt2 = valor;
                break;
            case "alt3":
                question.alt3 = valor;
                break;
            case "alt4":
                question.alt4 = valor;
                break;
            default:
                return;

        }

        this.setState({ ...this.state, ...question })
    }

    addQuestion() {
        let question = { ...this.state.question };
        try {
            this.props.addQuestion(question);
            this.props.modalAddQuestionToogle();
            // this.cancelAddQuestion();
            NotificationManager.success('Pergunta Adicionada com Sucesso!', '', 3500);


        } catch (err) {

            NotificationManager.error('Não foi Possível adicionar a Pergunta', '', 3500);
        }
    }

    rendertema(){
        if(Object.keys(this.props.temas).length > 0){
        return this.props.temas.map((tema) => {
				return (
                    <option value={tema} key={tema}>{tema} </option>
                    )
				})
        } 
    }

    renderDificuldade(){
        if(Object.keys(this.props.nivel).length > 0){
        return this.props.nivel.map((nivel) => {
				return (
                    <option value={nivel} key={nivel}>{nivel} </option>
                    )
				})
        } 
    }

    render() {
        return (
            <div>
                <Modal size='lg' toggle={() => { this.props.modalAddQuestionToogle() }} isOpen={this.props.modal.ismodaladdquestionopen}>
                    <ModalHeader className='modalBody justify-content-center'><span className='fa fa-plus-circle spanEditTitle'></span> Adicionar Novo Fluxo </ModalHeader>
                    <ModalBody className='modalBody'>
                        <Form>
                            <FormGroup row className='justify-content-center'>
                                <Label className="addQuestionLabel" for="tema" sm={3}>tema</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.question.tema ? false : true} 
                                        value={this.state.question.tema} 
                                        className='inputModal' type="select" 
                                        onChange={(e) => this.handleChange(e, "tema")} id="tema">
                                        <option value={-1}>--Selecione--</option>
                                        {this.rendertema()}
                                    </Input>
                                    <FormFeedback>tema é obrigatória</FormFeedback>
                                </Col>
                                <br />
                                <br />
                                <Label className="addQuestionLabel" for="nivel" sm={3}>Dificuldade</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.question.nivel ? false : true} 
                                        value={this.state.question.nivel} 
                                        className='inputModal' type="select" 
                                        onChange={(e) => this.handleChange(e, "nivel")} id="nivel">
                                        <option value={-1}>--Selecione--</option>
                                        {this.renderDificuldade()}
                                    </Input>
                                    <FormFeedback>Dificuldade é obrigatória</FormFeedback>
                                </Col>
                                <br />
                                <br />
                                <Label className="addQuestionLabel" for="pergunta" sm={3}>Pergunta</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.question.pergunta ? false : true} value={this.state.question.pergunta} className='inputModal' type="text" onChange={(e) => this.handleChange(e, "pergunta")} id="pergunta" placeholder="Pergunta" />
                                    <FormFeedback>Pergunta obrigatória</FormFeedback>
                                </Col>
                                <br />
                                <br />
                                <Label className="addQuestionLabel" for="alt1" sm={3}>Alternativa 1</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.question.alt1 ? false : true} value={this.state.question.nome} className='inputModal' type="text" onChange={(e) => this.handleChange(e, "alt1")} id="alt1" placeholder="Alternativa 1" />
                                    <FormFeedback>Nome do Fluxo é obrigatório</FormFeedback>
                                </Col>
                                <br />
                                <br />
                                <Label className="addQuestionLabel" for="alt2" sm={3}>Alternativa 2</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.question.alt2 ? false : true} value={this.state.question.alt2} className='inputModal' type="text" onChange={(e) => this.handleChange(e, "alt2")} id="alt2" placeholder="Alternativa 2" />
                                    <FormFeedback>Nome do Fluxo é obrigatório</FormFeedback>
                                </Col>
                                <br />
                                <br />
                                <Label className="addQuestionLabel" for="alt3" sm={3}>Alternativa 3</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.question.alt3 ? false : true} value={this.state.question.alt3} className='inputModal' type="text" onChange={(e) => this.handleChange(e, "alt3")} id="alt3" placeholder="Alternativa 3" />
                                    <FormFeedback>Nome do Fluxo é obrigatório</FormFeedback>
                                </Col>
                                <br />
                                <br />
                                <Label className="addQuestionLabel" for="alt4" sm={3}>Alternativa 4</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.question.alt4 ? false : true} value={this.state.question.alt4} className='inputModal' type="text" onChange={(e) => this.handleChange(e, "alt4")} id="alt4" placeholder="Alternativa 4" />
                                    <FormFeedback>Nome do Fluxo é obrigatório</FormFeedback>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className='modalBody'>
                        <Button className='btnCancel' onClick={() => { this.props.modalAddQuestionToogle(); this.cancelAddQuestion() }} color="secondary" ><i className="fa fa-times-circle" aria-hidden="true"></i> Cancelar</Button>
                        <Button className='btnSave' disabled={this.state.question.tema === '-1' || this.state.question.nivel === '-1' || this.state.question.pergunta === '' || this.state.question.alt1 === '' || this.state.question.alt2 === '' || this.state.question.alt3 === '' || this.state.question.alt4 === ''} onClick={this.addQuestion} color="secondary"><i className="fa fa-plus" aria-hidden="true"></i> Adicionar</Button>
                    </ModalFooter>
                </Modal>
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
    return bindActionCreators({ modalAddQuestionToogle, addQuestion }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddQuestion)