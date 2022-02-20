import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';



describe('Pruebas en useForm', () => {
  
    const initialForm = {
        name: 'ary',
        email: 'ary@gmail.com'
    };

    test('debe de regresar los valores enviados', () => {
      
        const { result } = renderHook( () => useForm( initialForm ));

        expect (result.current[0]).toEqual({
            name: 'ary',
            email: 'ary@gmail.com'
        });

    
    });
    
    test('debe de cambiar el valor del formulario (cambiar valor de name)', () => {


        const { result } = renderHook( () => useForm( initialForm ));

        const handleInputChange = result.current[1]

        act ( () => {
        
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'pepe'
                }
            });
        
        });

        console.log(result.current[0]);

        expect (result.current[0]).toEqual({
            name: 'pepe',
            email: 'ary@gmail.com'
        });

        expect (result.current[0]).toEqual({
            ...initialForm, name: 'pepe'
        });

    });
    
    test('debe de reestablecer el formulario con reset', () => {

        const { result } = renderHook( () => useForm( initialForm ));

        const handleInputChange = result.current[1];
        const reset = result.current[2];

        act ( () => {
        
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'pepe'
                }
            }),
            reset()
        
        });

        expect (result.current[0]).toEqual(initialForm);

    });

});
