import React from 'react';

const Pagination = ({usersPerPage, totalUsers, paginate}) =>{
    const pageNumbers =[];
    
    console.log("Total"+totalUsers);

    for (let i=1; i<= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
        console.log("page Number"+pageNumbers)
    }

    return(
    <nav>
        <ul className='pagination'>
        {pageNumbers.map(number => (
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


export default Pagination;