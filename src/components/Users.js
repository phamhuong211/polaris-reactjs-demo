import React, {useState} from "react";
// import {AppProvider, Page} from '@shopify/polaris';
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
    const [userAddress, setUserAdress] = useState('')
    
    const listUsers = currentUsers.map(user=>(
        <ul key={user.id} className='list-group mb-4'>
            <li>Name: {user.name}</li>
            <li>Address: <a href='' onClick={(add)=>setUserAdress(add)}>{user.address}</a></li>
        </ul>
    ))

    //change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  
    return(
        <div className="container">
            <div className="oneThree" id="users-list mt-5 col-md-4">
                {listUsers}
                <Pagination
                    usersPerPage={usersPerPage}
                    totalUsers={totalUsers}
                    paginate={paginate}
                />
            </div>

            <div className="oneThree" id="users-list col-md-8">
                <GoogleMap address={userAddress} />
            </div>
        </div>

    )
}