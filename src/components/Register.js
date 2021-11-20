import React, { useCallback, useState} from "react";
import {AppProvider, Layout, Page, Card, Button, Form, FormLayout,TextField} from '@shopify/polaris';

function Register(){
    return(
    <AppProvider>
        <Page>
        <Layout>
          <Card sectioned title="Register">
          <Form>
              <FormLayout>
                <FormLayout.Group>
                  <TextField
                    label="First Name"
                    type="text"
                    autoComplete=""
                    placeholder="Chi"
                  />
                    <TextField
                    label="Last Name"
                    type="text"
                    autoComplete=""
                    placeholder="Hieu"
                  />
                </FormLayout.Group>
                    <TextField
                    label="Email"
                    type="email"
                    autoComplete="email"
                  />
                  <TextField
                    label="Phone number"
                    type=""
                    autoComplete=""
                  />
                  <TextField
                    label="Address"
                    type=""
                    autoComplete=""
                  />
                  <TextField
                    label="Password"
                    type=""
                    autoComplete=""
                  />
                  <Button primary>Submit</Button>
              </FormLayout>
          </Form>
          </Card>
          </Layout>
      </Page>
      </AppProvider>
    )
}

export default Register;