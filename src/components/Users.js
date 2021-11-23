import React, {useState} from "react";
// import {AppProvider, Page} from '@shopify/polaris';
import Header from './Header'
import users from '../data';
import GoogleMap from './GooGleMap';
import Pagination from './Pagination';

export default function Users(){
    const [usersData] = useState(users);
    // console.log(usersData)

    /**
     * pagination declare
     */
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    /**
     * get current users
     */
    const   indexOfLastUser = currentPage * usersPerPage,
            indexOfFirstUser = indexOfLastUser - usersPerPage,
            currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

    const totalUsers = usersData.length;
    // console.log("userjs TotalUser"+totalUsers)
    
    //khai báo biến truyền param Address vào GoogleMap
    const [userAddress, setUserAddress] = useState('')
    // console.log("userAddress" + userAddress)
    
    const listUsers = currentUsers.map(user=>(
        // <ul key={user.id}>
        //     <li>Name: {user.name}</li>
        //     <li>Address: <a href='' onClick={(add)=>setUserAdress(add)}>{user.address}</a></li>
        // </ul>
        <div className="users-list" key={user.id} onClick={()=> setUserAddress(user.address)}>
            <div className="user-name">
                <i className="fas fa-user"></i>
                <span>{user.name}</span>
            </div>
            <span>{user.address}</span>
        </div>
    ))

    //change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const totalPages =[];
    
    console.log("Total" + totalUsers);

    for (let i=1; i<= Math.ceil(totalUsers / usersPerPage); i++) {
        totalPages.push(i);
        console.log("Total page"+ totalPages)
    }

    function handlePageChange(newPage){
        paginate(newPage);
    }
    
    return(
        <div className="wrap-user-map">
            <Header/>
            <div className="inline-block user-map-block">
                <div className="inline-30">
                    <h3>USERS LIST</h3>
                    <div className='users-container'>
                        {listUsers}
                    </div>
                    <nav className='pagination-container'>
                        <ul className='pagination'>
                            <button 
                                disabled={currentPage <= 1} 
                                onClick={()=> handlePageChange(currentPage - 1)}
                            >
                                pre
                            </button>
                                {totalPages.map(number => (
                                    <li key={number} className='page-item'>
                                        <a onClick={() => paginate(number)} className='page-link'>
                                            {number}
                                        </a>
                                    </li>
                                ))}
                            <button 
                                disabled={currentPage >= Math.ceil(totalUsers / usersPerPage)}  
                                onClick={()=> handlePageChange(currentPage + 1)}
                            >
                                next
                            </button>
                        </ul>
                    </nav>

                    {/* <PaginationTest
                        usersPerPage={usersPerPage}
                        totalUsers={totalUsers}
                        paginate={paginate}
                    /> */}
                </div>

                <div className="inline-70">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Location: {userAddress}</span>
                    <GoogleMap address={userAddress} />
                </div>
            </div>
        </div>

    )
}