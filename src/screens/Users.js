import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../assets/styles/app.scss'
import { getUsers, deleteUser, changeStatusFalse } from '../actions/user'
import Menu from '../components/Menu'


class Users extends Component {

    componentDidMount() {
        this.props.getUsers()
    }

    componentDidUpdate(prevProps) {
        if (this.props.status !== prevProps.status) {
            this.props.getUsers()
            this.props.changeStatusFalse()
        }
    }

    deleteUser(id) {
        this.props.deleteUser(id)
    }

    render() {

        const users = this.props.users
        console.log('users', this.props.users)

        return (
            <div className="App">
                <Menu />
                <div className="App-content">
                    <h2>Lista de Usuários</h2>
                    <div className="content-users">
                        {
                            users.map(user => {
                                return (
                                    <div className="content-user" key={user._id}>
                                        <h3>{user.name}</h3>
                                        <div>
                                            <p><span>CPF:</span> {user.cpf}</p>
                                            <p><span>Telefone:</span> {user.phone}</p>
                                            <p><span>E-mail:</span> {user.email}</p>
                                        </div>
                                        <div>
                                            <Link to={"/editar/" + user._id}>Editar |</Link>
                                            <a onClick={() => this.deleteUser(user._id)}>Excluir</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.getUsers.users,
        error: state.getUsers.error,
        status: state.getUsers.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        changeStatusFalse: () => dispatch(changeStatusFalse()),
        deleteUser: (id) => dispatch(deleteUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)