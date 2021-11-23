import React from 'react';

const PaginationTest = ({usersPerPage, totalUsers, paginate}) =>{
    const totalPages =[];
    
    console.log("Total"+totalUsers);

    for (let i=1; i<= Math.ceil(totalUsers / usersPerPage); i++) {
        totalPages.push(i);
        console.log("Total page"+ totalPages)
    }

    return(
        <nav>
            <ul className='pagination'>
                {totalPages.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export default PaginationTest;