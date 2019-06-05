import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from '../screens/Home'
import Menu from '../components/Menu'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducers } from '../reducers/index'
import { createStore, applyMiddleware } from 'redux'

configure({ adapter: new Adapter() });

describe('Testing home', () => {
    it('Should render tags', () => {
        const home = shallow(
            <Home />
        );
        expect(home.find(Menu)).toHaveLength(1)
        expect(home).toHaveLength(1)
        expect(home.find('h2')).toHaveLength(1)
        expect(home.find('form')).toHaveLength(1)
        expect(home.find('[htmlFor="name"]')).toHaveLength(1)
        expect(home.find('input')).toHaveLength(4)
        expect(home.find('[htmlFor="cpf"]')).toHaveLength(1)
        expect(home.find('[htmlFor="phone"]')).toHaveLength(1)
        expect(home.find('[htmlFor="email"]')).toHaveLength(1)
        expect(home.find('[type="submit"]')).toHaveLength(1)
    })

    it('simulate', () => {
        const home = shallow(
            <Home />
        );
        home.find('input').at(0).simulate('change', { target: { value: 'teste' } })
        home.find('input').at(1).simulate('change', { target: { value: 'teste' } })
        home.find('input').at(2).simulate('change', { target: { value: 'teste' } })
        home.find('input').at(3).simulate('change', { target: { value: 'teste' } })
    })
})