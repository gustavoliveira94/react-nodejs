import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions/user'
import Menu from '../components/Menu'
import '../assets/styles/app.scss'


class EditUser extends Component {

    state = {
        name: '',
        cpf: '',
        phone: '',
        email: ''
    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.id)
        setTimeout(() => {
            this.setState({
                name: this.props.user.name,
                cpf: this.props.user.cpf,
                phone: this.props.user.phone,
                email: this.props.user.email
            })
        }, 500)
    }

    handleInputName(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleInputCpf(event) {
        this.setState({
            cpf: event.target.value
        })
    }

    handleInputPhone(event) {
        this.setState({
            phone: event.target.value
        })
    }

    handleInputEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    render() {

        console.log(this.props.user)

        return (
            <div className="App">
                <Menu />
                <div className="App-content">
                    <h2>EDITAR USUÁRIO</h2>
                    <form method="post">
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleInputName(event)} placeholder="Gustavo M de Oliveira" />
                        <label htmlFor="name">CPF:</label>
                        <input type="text" name="cpf" value={this.state.cpf} onChange={(event) => this.handleInputCpf(event)} placeholder="000.000.000-00" />
                        <label htmlFor="name">Telefone:</label>
                        <input type="text" name="phone" value={this.state.phone} onChange={(event) => this.handleInputPhone(event)} placeholder="DD-00000-0000" />
                        <label htmlFor="name">E-mail:</label>
                        <input type="text" name="email" value={this.state.email} onChange={(event) => this.handleInputEmail(event)} placeholder="example@example.com" />
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.getUser.user,
        error: state.getUser.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => dispatch(getUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)