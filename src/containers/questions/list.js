import React, { Component } from 'react';
import { Button, Table, Input, FormGroup, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewQuestion, removeQuestion } from '../../actions/questions_actions';
import { viewLevels } from '../../actions/level_actions';
import { viewThemes } from '../../actions/theme_actions';
import { viewQuestions } from '../../actions/questions_actions';
import { modalAddQuestionToogle } from '../../actions/generic_modals_handler_actions';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

class QuestionsList extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.removeFlowConfirmation = this.removeFlowConfirmation.bind(this);
		this.handleInputSearchText = this.handleInputSearchText.bind(this);
		this.clearSearch = this.clearSearch.bind(this);
		
		this.state = {
			
			inputSearchText: '',
			searchRegex: ''
		}
	}

	componentWillMount(){
		this.props.viewThemes();
		this.props.viewQuestions();
		console.log(this.props.questions);
		this.props.viewLevels();
	}
	
	componentWillReceiveProps(){
		
		return this.clearSearch()
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

	renderTema(temaId){
		if (Object.keys(this.props.temas).length > 0) {
			return Object.entries(this.props.temas)
				.map((tema) => {
					if(tema[1].id == temaId){
						return <td key={temaId}>{tema[1].tema}</td>
					} else {
						return;
					}
				})
		}
	}

	renderNivel(nivelId){
		if (Object.keys(this.props.niveis).length > 0) {
			return Object.entries(this.props.niveis)
				.map((nivel) => {
					if(nivel[1].id == nivelId){
						return <td key={nivelId}>{nivel[1].nivel}</td>
					} else {
						return;
					}
				})
		}
	}
	
	renderList() {
		if (Object.keys(this.props.questions).length > 0) {
			return Object.entries(this.props.questions)
			.map(([idx, question]) => {
				return (
					// <tr key={question.id}>
					<tr key={question.id}>
					{/* <tr key={question.id} hidden={!this.filterQuestions(this.state.searchRegex, [question.tema, question.nivel, question.pergunta, question.respostas.toString()])}> */}
					{this.renderTema(question.tema)}
					{this.renderNivel(question.nivel)}
					<td>{question.pergunta}</td>
					<td>{question.patrocinada ? 'Sim' : 'Não'}</td>
					<td className={question.respostas[0].correta ? `correta` : ''}>{question.respostas[0].resposta}</td>
					<td className={question.respostas[1].correta ? `correta` : ''}>{question.respostas[1].resposta}</td>
					<td className={question.respostas[2].correta ? `correta` : ''}>{question.respostas[2].resposta}</td>
					<td className={question.respostas[3].correta ? `correta` : ''}>{question.respostas[3].resposta}</td>
					<td className='text-center'>
					<Button title='Editar este Fluxo' className='listItemEdit fa fa-pencil-square fa-sm' color='link' onClick={() => { this.props.getStateList(question) }}></Button>
					&nbsp;
					<Button title='Remover este Fluxo' className='listItemRemove fa fa-trash fa-sm' color='link' onClick={() => this.removeFlowConfirmation(idx)}></Button>
					</td>
					</tr>
					)
				})
			} 
		}
		
	render() {
		if (this.props.menuSelection === "home") {
			return (
				<div>
				{/* <div className={`marginTableList ${this.props.isFetchingCalls ? 'overlay' : ''}`}> */}
				<FormGroup className='form-inline justify-content-center'>
					<Input value={this.state.inputSearchText} onChange={this.handleInputSearchText} className='col-sm-6 inputBuscarPerguntas' type="text" id="buscarfluxo" name="buscarfluxo" placeholder="Digite o nome do Fluxo para Busca..." />
					&nbsp;
				</FormGroup>
				<br />
				<Row className='justify-content-center'>
					<div className='text-center spinnerFlow' hidden={!this.props.isFetchingCalls}>
						<i className="fa fa-circle-o-notch spanLoading fa-spin "></i>
					</div>
				</Row>
				<Table className='table-bordered'>
					<thead className='theadProperties'>
						<tr>
							<th title='Tema'>TEMA</th>
							<th title='Nível'>NÍVEL</th>
							<th title='Pergunta'>PERGUNTA</th>
							<th title='Patrocínio'>PATROCÍNIO</th>
							<th title='Alternativa 1'>ALTERNATIVA 1</th>
							<th title='Alternativa 2'>ALTERNATIVA 2</th>
							<th title='Alternativa 3'>ALTERNATIVA 3</th>
							<th title='Alternativa 4'>ALTERNATIVA 4</th>
							<th title='Escolha uma Ação Abaixo'>AÇÃO</th>
						</tr>
					</thead>
					<tbody>
					{this.renderList()}
					</tbody>
				</Table>
				</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}
		
	handleInputSearchText(e) {
		this.setState({ inputSearchText: e.target.value })
		this.setState({ searchRegex: new RegExp(e.target.value.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"), "i") })
	}
	
	clearSearch() {
		this.setState({ inputSearchText: '' })
		this.setState({ searchRegex: '' })
	}
	
	filterQuestions(searchRegex, names) {
		let ok = false;
		// for (let i = 0; i < names.length; i++) {
		// 	if (names[i].match(searchRegex)) {
		// 		ok = true;
		// 		break;
		// 	}
		// }
		return ok;
		
	}
	
	
}
		
function mapStateToProps(state) {
	return {
		questions: state.questions.questions,
		temas: state.structure.temas,
		niveis: state.structure.nivel,
		menuSelection: state.menuOptions.selectedOption,
		// isLoaded: state.flows.isLoaded,
	};
}

function mapDispatchToProps(dispatch) {
<<<<<<< HEAD
	return bindActionCreators({ viewQuestion, removeQuestion, modalAddQuestionToogle, viewThemes, viewQuestions, viewLevels }, dispatch);
=======
	return bindActionCreators({ viewQuestion, removeQuestion, modalAddQuestionToogle, viewThemes, viewQuestions }, dispatch);
>>>>>>> 5dff8b24c51876f8dbd5e0f397b412d5a3f91a6a
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
		