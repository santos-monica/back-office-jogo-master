import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import QuestionsList from './containers/questions/list';
import Main from './components/main';
import { LOGIN, MENU } from './helpers/constants';
import Login from './containers/login/login';
import Cadastro from './containers/structure/structure';
import Menu from './components/menu';
import NotFound from './components/not_found.js';
import ModalAddUser from './modals/addUser';

class AppRouting extends Component{
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path={`/${LOGIN}`} component={Login}/>
						{/* <Route exact path={`/${MENU}`} component={QuestionsList} /> */}
						<Route exact path={`/${MENU}`} render={(props) => ( this.props.isLogged ? (<div><div><Menu {...props}/> <ModalAddUser {...props}/> </div> <div><QuestionsList {...props}/></div> <div><Cadastro {...props}/></div></div>) : (<Redirect to='/login'/>) )} />
						<Route exact path="/" component={Main} />
						<Route render={() => <NotFound />} />	
					</Switch>			
				</div>
			</Router>
		)
	}
}

function mapStateToProps(state) {
    return {
        isLogged: state.login.isLogged,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouting);
