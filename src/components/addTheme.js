import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { modalAddThemeToogle, editTheme } from '../actions/generic_modals_handler_actions';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import arts from '../res/img/icons/arts.png';
import books from '../res/img/icons/books.png';
import food from '../res/img/icons/food.png';
import history from '../res/img/icons/history.png';
import movies from '../res/img/icons/movies.png';
import science from '../res/img/icons/science.png';
import sports from '../res/img/icons/sports.png';
import theater from '../res/img/icons/theater.png';
import ModalAddTheme from '../modals/addTheme';
import { addThemeLocally } from '../actions/theme_actions';


class AddTheme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tema: {
                nome: '',
                cor: '',
                icone: ''
            }
        };
    }

    renderTema(){
        if(Object.keys(this.props.temas).length > 0){
            return this.props.temas.map((tema) => {
                let icon;
                switch(tema.icone){
                    case "arts": icon = arts;
                        break;
                    case "books": icon = books;
                        break;
                    case "food": icon = food;
                        break;
                    case "history": icon = history;
                        break;
                    case "movies": icon = movies;
                        break;
                    case "science": icon = science;
                        break;
                    case "sports": icon = sports;
                        break;
                    case "theater": icon = theater;
                        break;
                    default: break;
                }
                return (
                    <tr key={tema.id}>
                    <td className="temaTd">{tema.tema}</td>
                    <td className="colorTd" style={{backgroundColor: tema.cor}}>{tema.cor}</td>
                    <td className="iconTd"><img src={icon} alt="icons" className="themeIcon"></img></td>
                    <td className='text-center'>
                    <Button title='Editar este Tema' className='listItemEdit fa fa-pencil-square fa-sm' color='link' onClick={() => { this.props.modalAddThemeToogle(); this.props.editTheme(tema); }}></Button>
                    &nbsp;
                    <Button title='Remover este Tema' className='listItemRemove fa fa-trash fa-sm' color='link' onClick={() => this.removeFlowConfirmation(tema.id)}></Button>
                    </td>
                    </tr>
                )
                })
            } 
    }

    render() {
        return (
            <div>
                <Button size='lg' className='fa fa fa-plus btnAddTheme' title='Adicionar Novo Tema' color='link' onClick={this.props.modalAddThemeToogle} ></Button>
                <br />
                <Table className='table-bordered'>
					<thead className='theadProperties'>
						<tr>
							<th title='Tema'>TEMA</th>
							<th title='Cor'>COR</th>
							<th title='Icone'>ICONE</th>
							<th title='Acoes'>AÇÕES</th>
						</tr>
					</thead>
					<tbody>
                    {this.renderTema()}
					</tbody>
				</Table>
                <br />
                <br />

                <ModalAddTheme />
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
    return bindActionCreators({ modalAddThemeToogle, addThemeLocally, editTheme }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTheme)