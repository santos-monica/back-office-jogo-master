import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { modalAddLevelToogle, editLevel } from '../actions/generic_modals_handler_actions';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import ModalAddLevel from '../modals/addLevel';
import {
    addLevel,
    removeLevel
} from '../actions/level_actions';


class AddLevel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: {
                Nivel: ''
            }
            
        };
    }

    renderNivel(){
        if(Object.keys(this.props.nivel).length > 0){
            return this.props.nivel.map((item) => {
                return (
                    <tr key={item.Id}>
                    <td className="nivelTd">{item.Nivel}</td>

                    <td className='text-center'>
                    <Button title='Editar este Tema' className='listItemEdit fa fa-pencil-square fa-sm' color='link' onClick={() => { this.props.modalAddLevelToogle(); this.props.editLevel(item); }}></Button>
                    &nbsp;
                    <Button title='Remover este Tema' className='listItemRemove fa fa-trash fa-sm' color='link' onClick={() => this.props.removeLevel(item.Id)}></Button>
                    </td>
                    </tr>
                )
            })
        } else {
            return <div></div>
        }
    }

    render() {
        return (
            <div>
                <Button size='lg' className='fa fa fa-plus btnAddLevel' title='Adicionar Novo Nível' color='link' onClick={this.props.modalAddLevelToogle} ></Button>
                <br />
                <Table className='table-bordered'>
					<thead className='theadProperties'>
						<tr>
							<th title='Tema'>TEXTO</th>
							<th title='Acoes'>AÇÕES</th>
						</tr>
					</thead>
					<tbody>
                    {this.renderNivel()}
					</tbody>
				</Table>
                <br />
                <br />

                <ModalAddLevel />
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
    return bindActionCreators({ modalAddLevelToogle, addLevel, editLevel, removeLevel }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLevel)