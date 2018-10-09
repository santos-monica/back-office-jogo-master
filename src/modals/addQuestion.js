import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, FormGroup, Label, Input, FormFeedback, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
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
                patrocinada: -1,
                tema: '',
                nivel: '',
                pergunta: '', 
                respostas: []
            },
            alt1: {
                resposta: '',
                correta: false
            },
            alt2: {
                resposta: '',
                correta: false
            },
            alt3: {
                resposta: '',
                correta: false
            },
            alt4: {
                resposta: '',
                correta: false
            },
            correta: ''
        }

        this.addQuestion = this.addQuestion.bind(this);
    }

    componentDidUpdate(){
        if(Object.keys(this.props.selectedQuestion).length > 0 && this.state.question.pergunta === ''){
            let question = {
                patrocinada: this.props.selectedQuestion.patrocinada,
                tema: this.props.selectedQuestion.tema,
                nivel: this.props.selectedQuestion.nivel,
                pergunta: this.props.selectedQuestion.pergunta,
                respostas: []
            }
            let alt1 = {
                resposta: this.props.selectedQuestion.respostas[0].resposta,
                correta: false
            }
            let alt2 = {
                resposta: this.props.selectedQuestion.respostas[1].resposta,
                correta: false

            }
            let alt3 = {
                resposta: this.props.selectedQuestion.respostas[2].resposta,
                correta: false
            }
            let alt4 = {
                resposta: this.props.selectedQuestion.respostas[3].resposta,
                correta: false
            }
            this.setState({ ...this.state, question: question, alt1: alt1, alt2: alt2, alt3: alt3, alt4: alt4, shouldClearInput: true });
        } else if((Object.keys(this.props.selectedQuestion).length === 0) && this.state.shouldClearInput){
            this.clearState();
        }
    }

    handleChange(event, key) {

        let state = { ...this.state };
        let campo = key;
        let valor = event.target.value;

        switch(campo){
            case "patrocinio":
                state.question.patrocinada = valor;
                break;
            case "tema":
                state.question.tema = valor;
                break;
            case "nivel":
                state.question.nivel = valor;
                break;
            case "pergunta":
                state.question.pergunta = valor;
                break;
            case "alt1":
                state.alt1.resposta = valor;
                break;
            case "alt2":
                state.alt2.resposta = valor;
                break;
            case "alt3":
                state.alt3.resposta = valor;
                break;
            case "alt4":
                state.alt4.resposta = valor;
                break;
            case "correta":
                state.correta = valor;
                break;
            default:
                return;
        }

        this.setState({ ...this.state, ...state })
    }

    addQuestion() {
        let state = { ...this.state };
        if(state.correta === 'alt1'){
            state.alt1.correta = true;
        } else if(state.correta === 'alt2'){
            state.alt2.correta = true;
        } else if(state.correta === 'alt3'){
            state.alt3.correta = true;
        } else {
            state.alt4.correta = true;
        }
        let question = state.question;
        question.respostas.push(state.alt1);
        question.respostas.push(state.alt2);
        question.respostas.push(state.alt3);
        question.respostas.push(state.alt4);
        
        try {
            if(Object.keys(this.props.selectedQuestion).length > 0){
                this.props.updateQuestion(question, question.id);
            } else {
                this.props.addQuestion(question);
            }
            NotificationManager.success('Tema Adicionada com Sucesso!', '', 3500);
        } catch (err) {
            NotificationManager.error('Não foi Possível adicionar o Tema', '', 3500);
        }
    }

    clearState(){
        // this.setState({ INITIAL_STATE });
    }

    rendertema(){
        if(Object.keys(this.props.temas).length > 0){
        return this.props.temas.map((tema) => {
				return (
                    <option value={tema.id} key={tema.id}>{tema.tema} </option>
                    )
				})
        } 
    }

    renderDificuldade(){
        if(Object.keys(this.props.nivel).length > 0){
        return this.props.nivel.map((level) => {
				return (
                    <option value={level.id} key={level.id}>{level.nivel} </option>
                    )
				})
        } 
    }

    render() {
        return (
            <div>
                <Modal size='lg' toggle={() => { this.props.modalAddQuestuibToogle() }} isOpen={this.props.modal.ismodaladdquestionopen}>
                    <ModalHeader className='modalBody justify-content-center'><span className={`fa ${Object.keys(this.props.selectedQuestion).length > 0 ? 'fa-refresh' : 'fa-plus-circle'} spanEditTitle`}></span> {(Object.keys(this.props.selectedQuestion).length > 0) ? 'Editar Tema' : 'Adicionar Novo Tema'} </ModalHeader>
                    <ModalBody className='modalBody'>
                        <Form>
                            <FormGroup row className='justify-content-center'>
                                <Label className="addQuestionLabel" for="patrocinio" sm={3}>Patrocinada?</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.question.patrocinada != -1 ? false : true} 
                                        value={this.state.question.patrocinada} 
                                        className='inputModal' type="select" 
                                        onChange={(e) => this.handleChange(e, "patrocinio")} id="patrocinio">
                                        <option value={-1}>--Selecione--</option>
                                        <option value={true}>Sim</option>
                                        <option value={false}>Não</option>
                                    </Input>
                                    <FormFeedback>Obrigatório</FormFeedback>
                                </Col>
                                <br />
                                <br />
                                
                                <Label className="addQuestionLabel" for="tema" sm={3}>Tema</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.question.tema ? false : true} 
                                        value={this.state.question.tema} 
                                        className='inputModal' type="select" 
                                        onChange={(e) => this.handleChange(e, "tema")} id="tema">
                                        <option value={-1}>--Selecione--</option>
                                        {this.rendertema()}
                                    </Input>
                                    <FormFeedback>Tema é obrigatório</FormFeedback>
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
                                    <Input invalid={this.state.alt1.resposta ? false : true} value={this.state.alt1.resposta} className='inputModal' type="text" onChange={(e) => this.handleChange(e, "alt1")} id="alt1" placeholder="Alternativa 1" />
                                    <FormFeedback>Obrigatório</FormFeedback>
                                </Col>
                                <br />
                                <br />
                                <Label className="addQuestionLabel" for="alt2" sm={3}>Alternativa 2</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.alt2.resposta ? false : true} value={this.state.alt2.resposta} className='inputModal' type="text" onChange={(e) => this.handleChange(e, "alt2")} id="alt2" placeholder="Alternativa 2" />
                                    <FormFeedback>Obrigatório</FormFeedback>
                                </Col>
                                <br />
                                <br />
                                <Label className="addQuestionLabel" for="alt3" sm={3}>Alternativa 3</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.alt3.resposta ? false : true} value={this.state.alt3.resposta} className='inputModal' type="text" onChange={(e) => this.handleChange(e, "alt3")} id="alt3" placeholder="Alternativa 3" />
                                    <FormFeedback>Obrigatório</FormFeedback>
                                </Col>
                                <br />
                                <br />
                                <Label className="addQuestionLabel" for="alt4" sm={3}>Alternativa 4</Label>
                                <Col sm={7}>
                                    <Input invalid={this.state.alt4.resposta ? false : true} value={this.state.alt4.resposta} className='inputModal' type="text" onChange={(e) => this.handleChange(e, "alt4")} id="alt4" placeholder="Alternativa 4" />
                                    <FormFeedback>Obrigatório</FormFeedback>
                                </Col>
                                <br />
                                <br />
                                <Label className="addQuestionLabel" for="correct" sm={3}>Correta</Label>
                                <Col sm={7}>
                                    <Input invalid={(this.state.correta) ? false : true} 
                                        value={this.state.correta} 
                                        className='inputModal' type="select" 
                                        onChange={(e) => this.handleChange(e, "correta")} 
                                        id="correta" placeholder="Alternativa 4">
                                        <option key="-1" value={-1}>--Selecione--</option>
                                        <option key="alt1" value='alt1'>Alternativa 1</option>
                                        <option key="alt2" value='alt2'>Alternativa 2</option>
                                        <option key="alt3" value='alt3'>Alternativa 3</option>
                                        <option key="alt4" value='alt4'>Alternativa 4</option>
                                    </Input>
                                    <FormFeedback>Obrigatório</FormFeedback>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter className='modalBody'>
                        <Button className='btnCancel' onClick={() => { this.props.modalAddQuestionToogle(); this.clearState();}} color="secondary" ><i className="fa fa-times-circle" aria-hidden="true"></i> Cancelar</Button>
                        <Button className='btnSave' disabled={this.state.question.pergunta === '' || this.state.question.patrocinada === -1 || this.state.question.tema === '' || this.state.question.nivel === ''} 
                            onClick={() => {this.addQuestion(); this.clearState(); this.props.modalAddQuestionToogle()}} color="secondary"><i className={`fa ${Object.keys(this.props.selectedQuestion).length > 0 ? 'fa-refresh' : 'fa-plus'}`} aria-hidden="true"></i> {Object.keys(this.props.selectedQuestion).length > 0 ? 'Salvar' : 'Adicionar'}</Button>
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
        nivel: state.structure.nivel,
        requestSucceeded: state.questions.requestSucceeded,
        requestFailed: state.questions.requestFailed,
        selectedQuestion: state.genericmodals.questionSelected
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addQuestion, modalAddQuestionToogle }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddQuestion)