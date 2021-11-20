import React, {useState, useEffect} from "react";
import {AppProvider, Page, Card} from '@shopify/polaris';
import users from '../data';


export default function Users(){
    // const [users, setUsers] = useState(null);
    // const [userId, setUserId] = useState(null);
    // const [userFirstName, setUserFirstName] = useState('');
    // const [userLastName, setUserLastName] = useState('');
    // const [userAdd, setUserAdd] = useState('')

    const usersData = users;
    console.log(usersData)

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
    return(
        <AppProvider>
            <Page>
                {/* <Card sectioned>
                    {users.map(({}))}
                </Card> */}
                <Card sectioned>
                    <span>Pham Huong</span><br/>
                    <span>Address: </span>
                    <span>Hanoi, Vietnam</span>
                </Card>
                <Card sectioned>
                    <span>Pham Huong</span><br/>
                    <span>Address: </span>
                    <span>Hanoi, Vietnam</span>
                </Card>
                <Card sectioned>
                    <span>Pham Huong</span><br/>
                    <span>Address: </span>
                    <span>Hanoi, Vietnam</span>
                </Card>
                <Card sectioned>
                    <span>Pham Huong</span><br/>
                    <span>Address: </span>
                    <span>Hanoi, Vietnam</span>
                </Card>
            </Page>
        </AppProvider>
    )
}