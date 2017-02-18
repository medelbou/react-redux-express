import React from 'react'
import {connect} from 'react-redux';

import {fetchUsers} from './actions/userActions';


class Users extends React.Component {
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchUsers());
    }

    render() {
        const {list} = this.props;
        return (
            <div>
                {list.map((user) => {
                    return <p key={user.name}>{user.name}</p>
                })}
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