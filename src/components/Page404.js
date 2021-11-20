import React from "react";
import {AppProvider, Card, Page} from '@shopify/polaris';

export default function Page404(){
    return(
        <AppProvider>
            <Page >
                <Card title="404" sectioned>PAGE NOT FOUND</Card>
            </Page>
        </AppProvider>
    )
}