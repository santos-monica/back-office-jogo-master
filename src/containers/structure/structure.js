import React, { Component } from 'react';
import { Button, Row, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewQuestion, removeQuestion } from '../../actions/questions_actions';
import { modalAddQuestionToogle } from '../../actions/generic_modals_handler_actions';
import AddTheme from '../../components/addTheme';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

class Cadastro extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.removeFlowConfirmation = this.removeFlowConfirmation.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.voltarOnClick = this.voltarOnClick.bind(this);

		this.state = {
			isThemeSelected: false,
			isLevelSelected: false,
			isQuestionSelected: false
		}
	}
	
	removeFlowConfirmation(idx) {
		
		MySwal.fire({
			title: <p>Deseja Realmente Excluir esta Pergunta?</p>,
			showCancelButton: true,
			showConfirmButton: true,
			cancelButtonText: 'Cancelar',
			cancelButtonClass: 'btn btnCancelar',
			confirmButtonText: 'Sim',
			confirmButtonClass: 'btn btnConfirmar',
			buttonsStyling: false,
			customClass: 'alertFont',
			reverseButtons: 'true',
			type: 'warning',
			allowOutsideClick: true,
		}).then((result) => {
			if (result.value) {
				MySwal.fire({
					title: <p>Pergunta excluída com Sucesso!</p>,
					showConfirmButton: true,
					confirmButtonText: 'OK',
					confirmButtonClass: 'btn btnConfirmar',
					buttonsStyling: false,
					customClass: 'alertFont',
					type: 'success',
					allowOutsideClick: false
				})
				this.props.removeFlow(idx)
			}
		})
	}

	voltarOnClick(){
		this.setState({ ...this.state, isThemeSelected: false, isLevelSelected: false, isQuestionSelected: false })
	}

	renderControl(){
		if(this.state.isThemeSelected || this.state.isLevelSelected || this.state.isQuestionSelected){
			return (
                <Button title='Voltar' onClick={() => { this.voltarOnClick(); }} type="button" color="secondary" className="fa fa-chevron-left fa-2x btnBackward" />
            )
		}
	}

	renderTheme(){
		if(this.state.isThemeSelected){
			return (
				<Container className="cadastro">
					<AddTheme/>
				</Container>
			)
		}
	}
		
	render() {
		if (this.props.menuSelection === "cadastro") {
		return (
			<div>
				<Container>
					{this.renderControl()}
					{this.renderTheme()}
					<Row sm={12} hidden={this.state.isThemeSelected || this.state.isLevelSelected || this.state.isQuestionSelected}>
						<div className="teste" onClick={() => {this.handleClick('tema')}}><i className="fa fa-tags fa-4 justify-content-center iconBox" aria-hidden="true"></i> <p className="labelIcon">Temas</p></div>
						<div className="teste" onClick={() => {this.handleClick('nivel')}}><i className="fa fa-tasks fa-4 justify-content-center iconBox" aria-hidden="true"></i> <p className="labelIcon">Dificuldade</p></div>
						<div className="teste" onClick={() => {this.handleClick('perguntas')}}><i className="fa fa-question fa-4 justify-content-center iconBox" aria-hidden="true"></i> <p className="labelIcon">Pergunta</p></div>
					</Row>
					{/* {this.renderTheme()}
					{this.renderLevel()} */}
				</Container>
			
			</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}	

	handleClick(arg){
		if(arg === 'tema'){
			this.setState({ ...this.state, isThemeSelected: true, isLevelSelected: false, isQuestionSelected: false })
		} else if(arg === 'nivel') {
			this.setState({ ...this.state, isThemeSelected: false, isLevelSelected: true, isQuestionSelected: false })
		} else {
			this.setState({ ...this.state, isThemeSelected: false, isLevelSelected: false, isQuestionSelected: true })
		}
	}
	
}
		
function mapStateToProps(state) {
	return {
		questions: state.questions.all,

		menuSelection: state.menuOptions.selectedOption,
		// isLoaded: state.flows.isLoaded,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ viewQuestion, removeQuestion, modalAddQuestionToogle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
		