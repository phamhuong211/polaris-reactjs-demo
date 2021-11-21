import React, {useState, useEffect} from "react";
import {AppProvider, Page} from '@shopify/polaris';
import users from '../data';
import GoogleMap from './GooGleMap'

export default function Users(){
    // const [users, setUsers] = useState(null);
    // const [userId, setUserId] = useState(null);
    // const [userFirstName, setUserFirstName] = useState('');
    // const [userLastName, setUserLastName] = useState('');
    // const [userAdd, setUserAdd] = useState('')

    // useEffect(()=>{
    //     console.log('rerender') 
    //     fetch('/api/users')
    //     .then((res) => res.json())
    //     .then((json)=> {
    //         setUsers = json;
    //         console.log(users)
    //     })
    //     .catch((err) => console.log(err))
    // },[])

    
    // async function fetchMyAPI() {
    //     let response = await fetch('api/users')
    //     response = await response.json()
    //    console.log("response" + response)
    //    setUsers(response)
    //   }
  
    // fetchMyAPI()


    const usersData = users;
    console.log(usersData)

    const listUsers = usersData.map((d)=>{
        <div classname="wrap-user" key={d.id}>
            <span>Name: + {d.name}</span>
            <span>Email: {d.email}</span>
            <button>Address: {d.address}</button>
        </div>
    })

    return(
        <AppProvider>
            <Page>
                <div className="oneThree" id="users-list">
                    {listUsers}
                </div>
                <div className="oneThree" id="users-list">
                <GoogleMap />
                </div>

            </Page>
        </AppProvider>
    )
}