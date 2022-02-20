import { shallow } from "enzyme";
import { HooksApp } from "../HooksApp";

describe('Pruebas sobre HooksApp', () => {
    
    test('debe renderizar el componente <HooksApp /> correctamente', () => {
      
        const wrapper = shallow ( <HooksApp />)

        expect (wrapper).toMatchSnapshot();


    });
    
});

