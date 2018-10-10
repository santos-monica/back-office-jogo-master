import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, FormFeedback } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { addLevel, updateLevel } from '../actions/level_actions';
import { modalAddLevelToogle, setClearInput } from '../actions/generic_modals_handler_actions';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class ModalAddLevel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: {
                Nivel: ''
            }
        };

        this.addLevel = this.addLevel.bind(this);
    }

    componentDidUpdate(){
        if(Object.keys(this.props.selectedLevel).length > 0 && this.state.level.Nivel === ''){
            let level = this.props.selectedLevel;
            this.props.setClearInput(true);
            this.setState({ ...this.state, level: level });
        } else if((Object.keys(this.props.selectedLevel).length === 0) && this.props.shouldClearInput ){
            this.clearState();
        }
    }

    clearState(){
        let level = {
            Nivel: ''
        };
        this.setState({ ...this.state, level: level });

        this.props.setClearInput(false);
    }

    handleChange(event, key) {

        let state = { ...this.state }
        let campo = key;
        let valor = event.target ? event.target.value : event;

        switch(campo){
            case "nivel":
                state.level.Nivel = valor;

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
                this.props.updateLevel(level, level.Id);
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
                                <Input invalid={this.state.level.Nivel ? false : true} 
                                    value={this.state.level.Nivel} 
                                    className='inputLevel' type="text" 
                                    onChange={(e) => this.handleChange(e, "nivel")} id="nivel">
                                </Input>
                                <FormFeedback>Nível é obrigatório</FormFeedback>
                            </Col>
                            <br />
                            <br />
                        </FormGroup>
                    </Form>
                    </ModalBody>
                    <ModalFooter className='modalBody'>
                        <Button className='btnCancel' onClick={() => { this.props.modalAddLevelToogle(); this.clearState();}} color="secondary" ><i className="fa fa-times-circle" aria-hidden="true"></i> Cancelar</Button>
                        <Button className='btnSave' disabled={this.state.level.nivel === '' } 
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
        selectedLevel: state.genericmodals.levelSelected,
        shouldClearInput: state.genericmodals.shouldClearInput
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ modalAddLevelToogle, addLevel, updateLevel, setClearInput }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddLevel)