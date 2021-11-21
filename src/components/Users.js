import React, {useState} from "react";
// import {AppProvider, Page} from '@shopify/polaris';
import users from '../data';
import GoogleMap from './GooGleMap';
import Pagination from './Pagination';

export default function Users(){
    const [usersData] = useState(users);
    console.log(usersData)

    /**
     * pagination declare
     */
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    /**
     * get current users
     */
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

    const totalUsers = usersData.length;
    console.log("userjs TotalUser"+totalUsers)
    
    
    const listUsers = currentUsers.map(user=>(
        <ul key={user.id} className='list-group mb-4'>
            <li>Name: + {user.name}</li>
            <li>Address: + {user.address}</li>
        </ul>
    ))

    //change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //khai báo biến truyền param Address vào GoogleMap
    const[address, setAdress]=useState();
    
    return(
        <div>
            <div className="oneThree" id="users-list">
                {listUsers}
                <Pagination
                    usersPerPage={usersPerPage}
                    totalUsers={totalUsers}
                    paginate={paginate}
                />
            </div>

            <div className="oneThree" id="users-list">
            <GoogleMap address={address} />
            </div>
        </div>

    )
}