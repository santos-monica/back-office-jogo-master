import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


class AuthorizedAccess extends Component {

    render() {
        if (this.props.isLogged) {
            return (
                <Redirect to='/menu' />
            )

        } else
            return (<div />)
    }
}

function mapStateToProps(state) {
    return {
        isLogged: state.login.isLogged
    }
}


export default connect(mapStateToProps, null)(AuthorizedAccess);

