import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, FormFeedback } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { addLevel, updateLevel } from '../actions/level_actions';
import { modalAddLevelToogle } from '../actions/generic_modals_handler_actions';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class ModalAddLevel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: {
                nivel: '',
                pontos: ''
            },
            shouldClearInput: false
        };

        this.addLevel = this.addLevel.bind(this);
    }

    componentDidUpdate(){
        if(Object.keys(this.props.selectedLevel).length > 0 && this.state.level.nivel === ''){
            let level = this.props.selectedLevel;
            this.setState({ ...this.state, level: level, shouldClearInput: true });
        } else if((Object.keys(this.props.selectedLevel).length === 0) && this.state.shouldClearInput ){
            this.clearState();
        }
    }

    clearState(){
        let nivel = {
            nivel: '',
            pontos: ''
        };
        this.setState({ nivel, shouldClearInput: false });
    }

    handleChange(event, key) {

        let state = { ...this.state }
        let campo = key;
        let valor = event.target ? event.target.value : event;

        switch(campo){
            case "nivel":
                state.level.nivel = valor;
                break;
            case "pontos":
                state.level.pontos = valor;
                break;
            default:
                break;
        }

        this.setState({ ...state })
    }

    addLevel() {
        let level = { ...this.state.level };
        try {
            if(Object.keys(this.props.selectedLevel).length > 0){
                this.props.updateLevel(level, level.id);
            } else {
                this.props.addLevel(level);
            }
            NotificationManager.success('Nível Adicionado com Sucesso!', '', 3500);
        } catch (err) {
            NotificationManager.error('Não foi Possível adicionar o Nível', '', 3500);
        }
    }

    render() {
        return (
            <div>
                <Modal size='lg' toggle={() => { this.props.modalAddLevelToogle() }} isOpen={this.props.modal.ismodaladdlevelopen}>
                    {/* <ModalHeader className='modalBody justify-content-center'><span className={`fa ${Object.keys(this.props.selectedLevel).length > 0 ? 'fa-refresh' : 'fa-plus-circle'} spanEditTitle`}></span> {(Object.keys(this.props.selectedLevel).length > 0) ? 'Editar Nível' : 'Adicionar Novo Nível'} </ModalHeader> */}
                    <ModalBody className='modalBody'>
                        <Form>
                        <FormGroup row className='justify-content-center'>
                            <Label className="addLevelLabel" for="nivel" sm={3}>Nível</Label>
                            <Col sm={9}>
                                <Input invalid={this.state.level.nivel ? false : true} 
                                    value={this.state.level.nivel} 
                                    className='inputLevel' type="text" 
                                    onChange={(e) => this.handleChange(e, "nivel")} id="nivel">
                                </Input>
                                <FormFeedback>Nível é obrigatório</FormFeedback>
                            </Col>
                            <br />
                            <Label className="addLevelLabel" for="icon" sm={3}>Pontos</Label>
                            <Col sm={9}>
                                <Input invalid={this.state.level.pontos ? false : true} 
                                    value={this.state.level.pontos} 
                                    className='inputLevel' type="text" 
                                    onChange={(e) => this.handleChange(e, "pontos")} id="pontos">
                                </Input>
                                <FormFeedback>Pontuação é obrigatória</FormFeedback>
                            </Col>
                            <br />
                            <br />
                        </FormGroup>
                    </Form>
                    </ModalBody>
                    <ModalFooter className='modalBody'>
                        <Button className='btnCancel' onClick={() => { this.props.modalAddLevelToogle(); this.clearState();}} color="secondary" ><i className="fa fa-times-circle" aria-hidden="true"></i> Cancelar</Button>
                        <Button className='btnSave' disabled={this.state.level.nivel === '' || this.state.level.pontos === '' } 
                            onClick={() => {this.addLevel(); this.clearState(); this.props.modalAddLevelToogle()}} color="secondary"><i className={`fa ${Object.keys(this.props.selectedLevel).length > 0 ? 'fa-refresh' : 'fa-plus'}`} aria-hidden="true"></i> {Object.keys(this.props.selectedLevel).length > 0 ? 'Salvar' : 'Adicionar'}</Button>
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
        nivel: state.structure.nivel,
        selectedLevel: state.genericmodals.levelSelected
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ modalAddLevelToogle, addLevel, updateLevel }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddLevel)