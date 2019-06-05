import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class Menu extends Component {

    state = {
        isOpen: false
    }

    isOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <header className="menu">
                    <h1 className="logo"><Link to="/">PROJECT</Link></h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Usuários</Link>
                        </li>
                        <li className="menu-mobile">
                            <FontAwesomeIcon icon={faBars} onClick={() => this.isOpen()} />
                        </li>
                    </ul>
                </header>
                {this.state.isOpen &&
                    <div className="menu-hidden">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/users">Usuários</Link>
                            </li>
                        </ul>
                    </div>
                }
            </div >
        )
    }
}

export default Menu