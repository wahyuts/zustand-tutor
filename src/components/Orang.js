import React from 'react';
import {usePeopleStore} from '../store'

const Orang = () => {

    const people = usePeopleStore(state => state.people)

    return ( 
        <div>
            <p>we have {people.length} people in our DB</p>
            <ul>
            {
                people.length === 0 
                ? 
                <li>List People is empty</li>
                :
                people.map((p,i) => (
                    <li key={i}>{p}</li>
                ))
            }
            
                {/* {people.map(p => (
                    <li>{p}</li>
                ))} */}
            </ul>
        </div>
     );
}
 
export default Orang;

// Arti koding 
//   const people = useStore(state => state.people)  artinya get state people or pilih state people
//   kalimat ini dipakai dikomponent dimana state tersebut ingin digunakan