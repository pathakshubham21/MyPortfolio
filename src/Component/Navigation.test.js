import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import App from '../App';
import MainLayout from './MainLayout';

configure ({ Adapter: new Adapter() });

describe('<Navigation />', () => {
   
    it('Should render 4 tabs elements', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<MainLayout />)).toHaveLength(1);
    });

});

