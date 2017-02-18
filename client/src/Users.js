import React from 'react'
import {connect} from 'react-redux';

import {fetchUsers} from './actions/userActions';

import UserList from './components/UserList';


class Users extends React.Component {

    componentWillMount() {

        const {dispatch} = this.props;

        dispatch(fetchUsers());
    }

    render() {

        const {list} = this.props;

        return (
            <div>
                <h1>Users</h1>
                <UserList list={list}/>
            </div>
        )
    }
}

function mapStateToProps(state) {

    const {users: {list}} = state;

    return {
        list
    }
}

export default connect(mapStateToProps)(Users);