import React from 'react';
import HISTORY from './history'
import { Link } from 'react-router-dom';

function WorkHistory() {
    return(
        <>
        <section>
            <h1>Work History List</h1>
            <ul className='work-history_list'>
                {HISTORY.map(history =>
                    <li key={history.id}>
                        <Link to={`/history/${history.id}`}>
                            {history.title}
                        </Link>
                    </li>    
                )}
            </ul>
        </section>
        </>
    )
}

export default WorkHistory; 