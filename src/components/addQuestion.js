import React, { Component } from 'react';
import { Button, Table, Input, FormGroup, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewQuestion, removeQuestion } from '../actions/questions_actions';
import { modalAddQuestionToogle, editQuestion } from '../actions/generic_modals_handler_actions';
import { NotificationContainer } from 'react-notifications';
import Swal from 'sweetalert2';
import ModalAddQuestion from '../modals/addQuestion';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

class AddQuestion extends Component {
	
	constructor(props) {
		
		super(props)
		
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

	renderTema(temaId){
		if (Object.keys(this.props.temas).length > 0) {
			return Object.entries(this.props.temas)
				.map((tema) => {
					if(tema[1].Id == temaId){
						return <td key={temaId}>{tema[1].Tema}</td>
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
					if(nivel[1].Id == nivelId){
						return <td key={nivelId}>{nivel[1].Nivel}</td>
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
					<tr key={question.pergunta.Id}>
					{this.renderTema(question.pergunta.IdTema)}
					{this.renderNivel(question.pergunta.IdNivel)}
					<td>{question.pergunta.Pergunta}</td>
					<td>{question.pergunta.Patrocinada ? 'Sim' : 'Não'}</td>
					<td className={question.respostas[0].Correta ? `correta` : ''}>{question.respostas[0].Resposta}</td>
					<td className={question.respostas[1].Correta ? `correta` : ''}>{question.respostas[1].Resposta}</td>
					<td className={question.respostas[2].Correta ? `correta` : ''}>{question.respostas[2].Resposta}</td>
					<td className={question.respostas[3].Correta ? `correta` : ''}>{question.respostas[3].Resposta}</td>
					<td className='text-center'>
					<Button title='Editar este Tema' className='listItemEdit fa fa-pencil-square fa-sm' color='link' onClick={() => { this.props.modalAddQuestionToogle(); this.props.editQuestion(question); }}></Button>
					&nbsp;
					<Button title='Remover este Fluxo' className='listItemRemove fa fa-trash fa-sm' color='link' onClick={() => this.props.removeQuestion(question.pergunta.Id)}></Button>
					</td>
					</tr>
					)
				})
			} 
		}
		
	render() {
		if (this.props.menuSelection === "cadastro") {
			return (
				<div>
                <Button size='lg' className='fa fa fa-plus btnAddTheme' title='Adicionar Novo Tema' color='link' onClick={this.props.modalAddQuestionToogle} ></Button>
                <br />
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
                <ModalAddQuestion />
                <NotificationContainer />

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
	return bindActionCreators({ viewQuestion, removeQuestion, modalAddQuestionToogle, editQuestion, removeQuestion }, dispatch);
=======
	return bindActionCreators({ viewQuestion, removeQuestion, modalAddQuestionToogle, editQuestion }, dispatch);
>>>>>>> 5dff8b24c51876f8dbd5e0f397b412d5a3f91a6a
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
		