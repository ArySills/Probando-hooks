import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter2 } from '../../hooks/useCounter2';


describe('Pruebas en useCounter', () => {
  
    test('debe de retornar valores los valores por defecto', () => {
      
        const { result } = renderHook( () => useCounter2());

        expect ( result.current.counter).toBe(10);
        expect ( typeof result.current.increment).toBe('function');
        expect ( typeof result.current.decrement).toBe('function');
        expect ( typeof result.current.reset).toBe('function');

    });

    test('debe de tener el counter en 100', () => {
      
        const { result } = renderHook( () => useCounter2(100));

        expect ( result.current.counter).toBe(100);
        
    });
    
    test('debe de incrementar el counter en 1', () => {
        
        const { result } = renderHook( () => useCounter2(100));

        const { increment } = result.current;

        act ( () => {

            increment();

        });

        const {counter} = result.current;

        expect(counter).toBe(101);

    });
    
    test('debe de decrementar el counter en 1', () => {
        
        const { result } = renderHook( () => useCounter2(100));

        const { decrement } = result.current;

        act ( () => {

            decrement();

        });

        const {counter} = result.current;

        expect(counter).toBe(99);

    });

    test('debe de resetear el valor al inicial, luego de haberse incrementado en 1', () => {
        
        const { result } = renderHook( () => useCounter2(100));

        const { increment, reset } = result.current;

        act ( () => {

            increment();
            reset();

        });

        const {counter} = result.current;

        expect(counter).toBe(100);

    });
});

