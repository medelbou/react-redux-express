import React from 'react';

import User from './User';

export default (props) => {

    const {list} = props;

    return (
        <div>
            {list.map((user) => {
                return <User key={user.name} {...user}/>
            })}
        </div>
    )
}