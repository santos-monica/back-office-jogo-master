import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, FormFeedback } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { addTheme, updateTheme } from '../actions/theme_actions';
import arts from '../res/img/icons/arts.png';
import books from '../res/img/icons/books.png';
import food from '../res/img/icons/food.png';
import history from '../res/img/icons/history.png';
import movies from '../res/img/icons/movies.png';
import science from '../res/img/icons/science.png';
import sports from '../res/img/icons/sports.png';
import theater from '../res/img/icons/theater.png';
import { modalAddThemeToogle, setClearInput } from '../actions/generic_modals_handler_actions';
import { SketchPicker } from 'react-color';
// import { SketchPicker, GithubPicker, ChromePicker, CirclePicker, BlockPicker, TwitterPicker } from 'react-color';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class ModalAddTheme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tema: {
<<<<<<< HEAD
                Tema: '',
                Cor: '',
                Icone: ''
=======
                tema: '',
                cor: '',
                icone: ''
>>>>>>> 5dff8b24c51876f8dbd5e0f397b412d5a3f91a6a
            },
            icones: [ 
                {"arts": arts}, 
                {"books": books}, 
                {"food": food}, 
                {"history": history}, 
                {"movies": movies}, 
                {"science": science}, 
                {"sports": sports}, 
                {"theater": theater}
            ],
            shouldClearInput: false
        };

        this.addTheme = this.addTheme.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }

    componentDidUpdate(){
        if(Object.keys(this.props.selectedTheme).length > 0 && this.state.tema.Tema === ''){
            let theme = this.props.selectedTheme;
            this.props.setClearInput(true);
            this.setState({ ...this.state, tema: theme });
        } else if((Object.keys(this.props.selectedTheme).length === 0) && this.props.shouldClearInput){
            this.clearState();
        }
    }

    clearState(){
        let tema = {
<<<<<<< HEAD
            Tema: '',
            Cor: '',
            Icone: ''
=======
            tema: '',
            cor: '',
            icone: ''
>>>>>>> 5dff8b24c51876f8dbd5e0f397b412d5a3f91a6a
        };
        this.setState({ ...this.state, tema: tema });
        this.props.setClearInput(false);
    }

    handleChangeComplete = (color) => {
        let tema = this.state.tema;
<<<<<<< HEAD
        tema.Cor = color.hex;
=======
        tema.cor = color.hex;
>>>>>>> 5dff8b24c51876f8dbd5e0f397b412d5a3f91a6a
        this.setState({ ...this.state, tema: tema });
    };

    handleChange(event, key) {

        let state = { ...this.state }
        let campo = key;
        let valor = event.target ? event.target.value : event;

        switch(campo){
            case "tema":
<<<<<<< HEAD
                state.tema.Tema = valor;
=======
                state.tema.tema = valor;
>>>>>>> 5dff8b24c51876f8dbd5e0f397b412d5a3f91a6a
                break;
            case "cor":
                state.tema.Cor = valor;
                break;
            case "icone":
                state.tema.Icone = valor;
                break;
            default:
                break;
        }

        this.setState({ ...state })
    }

    addTheme() {
        let theme = { ...this.state.tema };
        try {
            if(Object.keys(this.props.selectedTheme).length > 0){
                this.props.updateTheme(theme, theme.id);
            } else {
                this.props.addTheme(theme);
            }
            NotificationManager.success('Tema Adicionada com Sucesso!', '', 3500);
        } catch (err) {
            NotificationManager.error('Não foi Possível adicionar o Tema', '', 3500);
        }
    }

    renderIcons(){
        let icons = this.state.icones;
        return icons.map((icon) => {
            let iconName = Object.keys(icon)[0];
            let iconImg = Object.values(icon)[0];
            return <img alt="icone" className="themeIcon" src={iconImg} key={iconName} onClick={() => {this.handleChange(iconName, "icone")}}></img>
        });
    }

    renderColorPicker(){
        return (
            <SketchPicker
              color={ this.state.tema.Cor }
              onChangeComplete={ this.handleChangeComplete }    
            />
        );
    }

    render() {
        return (
            <div>
                <Modal size='lg' toggle={() => { this.props.modalAddThemeToogle() }} isOpen={this.props.modal.ismodaladdthemeopen}>
                    <ModalHeader className='modalBody justify-content-center'><span className={`fa ${Object.keys(this.props.selectedTheme).length > 0 ? 'fa-refresh' : 'fa-plus-circle'} spanEditTitle`}></span> {(Object.keys(this.props.selectedTheme).length > 0) ? 'Editar Tema' : 'Adicionar Novo Tema'} </ModalHeader>
                    <ModalBody className='modalBody'>
                        <Form>
                        <FormGroup row className='justify-content-center'>
                            <Label className="LocallyLabel" for="tema" sm={3}>Tema</Label>
                            <Col sm={9}>
                                <Input invalid={this.state.tema.Tema ? false : true} 
                                    value={this.state.tema.Tema} 
                                    className='inputTheme' type="text" 
                                    onChange={(e) => this.handleChange(e, "tema")} id="tema">
                                </Input>
                                <FormFeedback>Tema é obrigatório</FormFeedback>
                            </Col>
                            <br />
                            <Label className="addThemeLabel" for="icon" sm={3}>Ícone</Label>
                            <Col sm={9}>
                                {this.renderIcons()}
                                <Input invalid={this.state.tema.Icone ? false : true} 
                                    value={this.state.tema.Icone} 
                                    disabled
                                    className='inputTheme' type="text" 
                                    onChange={(e) => this.handleChange(e, "icone")} id="icon">
                                </Input>
                                <FormFeedback>Ícone é obrigatório</FormFeedback>
                            </Col>
                            <br />
                            <Label className="addThemeLabel" for="cor" sm={3}>Cor</Label>
                            <Col sm={9}>
                                <Input invalid={this.state.tema.Cor ? false : true} 
                                    value={this.state.tema.Cor} 
                                    disabled
                                    className='inputTheme' type="text" 
                                    onChange={(e) => this.handleChange(e, "tema")} id="cor">
                                </Input>
                                <FormFeedback>Cor é obrigatória</FormFeedback>
                            </Col>
                            <br />
                            <div className="myColorPicker">
                                {this.renderColorPicker()}
                            </div>
                            <br />
                        </FormGroup>
                    </Form>
                    </ModalBody>
                    <ModalFooter className='modalBody'>
                        <Button className='btnCancel' onClick={() => { this.props.modalAddThemeToogle(); this.clearState();}} color="secondary" ><i className="fa fa-times-circle" aria-hidden="true"></i> Cancelar</Button>
                        <Button className='btnSave' disabled={this.state.tema.Tema === '' || this.state.tema.Cor === '' || this.state.tema.Icone === ''} 
                            onClick={() => {this.addTheme(); this.clearState(); this.props.modalAddThemeToogle()}} color="secondary"><i className={`fa ${Object.keys(this.props.selectedTheme).length > 0 ? 'fa-refresh' : 'fa-plus'}`} aria-hidden="true"></i> {Object.keys(this.props.selectedTheme).length > 0 ? 'Salvar' : 'Adicionar'}</Button>
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
        selectedTheme: state.genericmodals.themeSelected,
        shouldClearInput: state.genericmodals.shouldClearInput

    }
}

function mapDispatchToProps(dispatch) {
<<<<<<< HEAD
    return bindActionCreators({ modalAddThemeToogle, addTheme, updateTheme, setClearInput }, dispatch)
=======
    return bindActionCreators({ modalAddThemeToogle, addThemeLocally, updateTheme, setClearInput }, dispatch)
>>>>>>> 5dff8b24c51876f8dbd5e0f397b412d5a3f91a6a
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddTheme)