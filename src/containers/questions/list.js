import React, { Component } from 'react';
import { Button, Table, Input, FormGroup, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewQuestion, removeQuestion } from '../../actions/questions_actions';
import { modalAddQuestionToogle } from '../../actions/generic_modals_handler_actions';
import ModalAddFlow from '../../modals/addQuestion';
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
	
	componentWillReceiveProps(){
		
		return this.clearSearch()
	}
	
	// shouldComponentUpdate(nextProps) {
	// 	if (this.props.questions !== nextProps.questions) return true;
	// 	return false;
	// }
	
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
	
	renderList() {
		if (Object.keys(this.props.questions).length > 0) {
			return Object.entries(this.props.questions)
			.map(([idx, question]) => {
				return (
					// <tr key={question.identifier}>
					<tr key={question.identifier} hidden={!this.filterQuestions(this.state.searchRegex, [question.tema, question.nivel, question.pergunta, question.respostas.toString()])}>
					<td>{question.tema}</td>
					<td>{question.nivel}</td>
					<td>{question.pergunta}</td>
					<td>{question.respostas.toString().replace(/,/g, ', ')}</td>
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
		if (this.props.menuSelection == "home") {
			return (
				<div>
				{/* <div className={`marginTableList ${this.props.isFetchingCalls ? 'overlay' : ''}`}> */}
				<FormGroup className='form-inline justify-content-center'>
					<Input value={this.state.inputSearchText} onChange={this.handleInputSearchText} className='col-sm-6 inputBuscarPerguntas' type="text" id="buscarfluxo" name="buscarfluxo" placeholder="Digite o nome do Fluxo para Busca..." />
					&nbsp;
					<Button size='lg' className='fa fa fa-plus btnAddQuestion' title='Adicionar Nova Pergunta' color='link' onClick={this.props.modalAddQuestionToogle} ></Button>
					<ModalAddFlow isOpen={this.props.ismodaladdflowopen}></ModalAddFlow>
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
							<th title='Alternativas'>ALTERNATIVAS</th>
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
		for (let i = 0; i < names.length; i++) {
			if (names[i].match(searchRegex)) {
				ok = true;
				break;
			}
		}
		return ok;
		
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
		