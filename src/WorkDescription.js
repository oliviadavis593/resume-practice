import React from 'react';
import HISTORY from './history'

function WorkDescription(props) {
    const history = HISTORY.find(h => 
    h.id === props.match.params.historyId    
    )
    return(
        <section className='WorkDesription'>
            <h2>{history.title}</h2>
            <h3>{history.date}</h3>
            <p>{history.description}</p>
        </section>
    )
}

export default WorkDescription; 