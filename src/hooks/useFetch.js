import { useEffect, useRef, useState } from "react";


export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
      
      return () => {
        isMounted.current = false;
      };
    }, []);
    

    useEffect( () => {

        setState({ data: null, loading: true, error: null})

        const getData = async () => {

            try {
                const response = await fetch (url);
                const json = await response.json();

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: json
                    });
                };
            }

            catch (error) {
                setState({
                    loading: false,
                    error: 'No se pudo cargar la info',
                    data: null
                }) ;
            };
        };

            getData();
            
    }, [url]);

    return state;
};

