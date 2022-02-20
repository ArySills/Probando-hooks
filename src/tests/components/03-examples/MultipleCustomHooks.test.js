import React from 'react';
import {shallow} from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter2 } from '../../../hooks/useCounter2';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter2');


describe('Pruebas en <MultipleCustomHooks />', () => {


    beforeEach( () => {
        useCounter2.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
    });

  
    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
      
        const wrapper = shallow (<MultipleCustomHooks />);
        expect (wrapper).toMatchSnapshot();
        
    });
   
    test('debe de mostrar la informacion', () => {
      
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow (<MultipleCustomHooks />);

        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('p').text().trim() ).toBe('Hola Mundo');
        expect( wrapper.find('.blockquote-footer').text().trim() ).toBe('Fernando');
        

    });
    
});
