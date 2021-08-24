import React, {useRef} from 'react';
import {usePeopleStore} from '../store'

const Input = () => {
    const inputRef = useRef();
    const addPerson = usePeopleStore(state => state.addPerson)

    const add = () => {
        addPerson(inputRef.current.value)
        inputRef.current.value = ''
    }

    return ( 
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={add}>Add person</button>
        </div>
     );
}
 
export default Input;