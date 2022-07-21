import React from 'react';
import data from '../data'
import Navbar from './Navbar'
import Card from './Card'

const App = () => {
const travelCard = data.map((el) => {
        return (
             <Card key = {el.id} el = {el} />
        )
    })
    
    return(
        <div className='App'>
            <Navbar/>
            {travelCard}
        </div>
    )
}

export default App;
