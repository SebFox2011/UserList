import React, {Component} from 'react';
import {connect} from 'react-redux'

class UserDetail extends Component {
    render() {
        const {myActiveUser} = this.props
        if (!myActiveUser)
        {
            return <div>Sélectionnez un utilisateur pour démarrer</div>
        }

        return (
            <div>
                <h3>Détail de {myActiveUser.name}</h3>
                <ul>
                    <li>id: {myActiveUser.id}</li>
                    <li>role: {myActiveUser.role}</li>
                    <li>Statut: {myActiveUser.active}</li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        myActiveUser: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);