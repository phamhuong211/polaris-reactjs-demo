import React, { useState } from "react";
import {
    Layout,
    Page,
    Card,
    Button,
    FormLayout,
    TextField
} from '@shopify/polaris';

function RegisterTest(){
    const   [name, setName] = useState(''),
            [email, setEmail] = useState(''),
            [address, setAddress] = useState(''),
            [password, setPassword] = useState('')
    return(
        <Page>
            <Layout>
                <Card sectioned>
                    <FormLayout>
                        <TextField
                            value={name}
                            label="Name"
                            type='text'
                            onChange={e=> setName(e.target.name)}
                        />
                    </FormLayout>
                </Card>
            </Layout>
        </Page>
    )
}

export default RegisterTest;