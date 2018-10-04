import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMenuOption } from '../actions/menu_actions';
import { FLOWS } from '../helpers/constants';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { logOut } from '../actions/login_actions';
import { openModalAddUser } from '../actions/modal_addUser_actions';
import { Redirect } from 'react-router';
import puzzle from '../res/img/puzzle.png'

const MySwal = withReactContent(Swal)

class Menu extends Component {
	
	constructor(props) {
		super(props)
		
		this.toggleUserSettingsOptions = this.toggleUserSettingsOptions.bind(this);
		
		this.state = {
			
			toggleUserSettings: false
		}
	}
	
	toggleUserSettingsOptions() {
		
		this.setState({ toggleUserSettings: !this.state.toggleUserSettings });
	}
	
	
	render() {
		return (
			<Navbar className='navbarIndex' light expand="md">
			<NavbarBrand style={{ cursor: 'auto' }} className='navbarText'> <img src={puzzle} alt='logo' className='puzzleNavBrand' /></NavbarBrand>
			<Nav pills className="ml-auto" navbar>
			<NavItem>
				<NavLink
					className={this.props.isflow_active ? 'navItemsColor' : 'navItemsColor'} active={this.props.isflow_active}
					onClick={() => this.props.selectMenuOption(FLOWS)}><i className="fa fa-question" aria-hidden="true"></i> PERGUNTAS
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					className={this.props.isflow_active ? 'navItemsColor' : 'navItemsColor'} active={this.props.isflow_active}
					onClick={() => this.props.selectMenuOption(FLOWS)}><i className="fa fa-question" aria-hidden="true"></i> PERGUNTAS
				</NavLink>
			</NavItem>
			
			<NavItem>
			<NavLink>
			&nbsp;
			&nbsp;
			</NavLink>
			</NavItem>
			<NavItem>
			<Dropdown direction="left" isOpen={this.state.toggleUserSettings} toggle={this.toggleUserSettingsOptions}>
			<DropdownToggle tag="a">
			<i title='Configurações' onClick={() => this.toggleUserSettingsOptions} className="fa fa-cog spanUserSettings" aria-hidden="true"></i>
			</DropdownToggle>
			<DropdownMenu>
			<DropdownItem onClick={() => this.handleLogOut()} className='dropDownUserSettings'><i className="fa fa-sign-out spanDropItem" aria-hidden="true"></i> Sair</DropdownItem>
			<DropdownItem onClick={() => this.props.openModalAddUser()} className='dropDownUserSettings'><i className="fa fa-user-plus spanDropItem" aria-hidden="true"></i> Novo Usuário</DropdownItem>
			</DropdownMenu>
			</Dropdown>
			</NavItem>
			</Nav>
			</Navbar>
			)
		}
		
		
	handleLogOut() {
		
		MySwal.fire({
			title: <p>Deseja sair do Sistema? </p>,
			showConfirmButton: true,
			showCancelButton: true,
			cancelButtonText: 'Cancelar',
			cancelButtonClass: 'btn btnCancelar',
			confirmButtonText: 'Sim',
			confirmButtonClass: 'btn btnConfirmar',
			buttonsStyling: false,
			reverseButtons: true,
			customClass: 'alertFont',
			type: 'warning',
			allowOutsideClick: true
		}).then((result) => {
			
			if (result.value) {
				
				MySwal.fire({
					
					title: <p>Deslogado com Sucesso!</p>,
					showConfirmButton: true,
					confirmButtonText: 'OK',
					confirmButtonClass: 'btn btnConfirmar',
					buttonsStyling: false,
					customClass: 'alertFont',
					type: 'success',
					allowOutsideClick: false
				}).then(() => {
					this.props.logOut();
					return (
						<Redirect to='/login' />
						)
				})
			} 
		})
	}
}
			
function mapStateToProps(state) {
	return {
		// isflow_active: state.menuOptions.isflow_active,
		// isintegration_active: state.menuOptions.isintegration_active,
		// isdiscovery_active: state.menuOptions.isdiscovery_active
	};
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		selectMenuOption,
		logOut,
		openModalAddUser,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
