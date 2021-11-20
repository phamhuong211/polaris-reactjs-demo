import {createServer} from 'miragejs';

import users from './data';

    createServer({
        routes() {
            this.namespace ="api"
            this.get("/users", () => users)
        }
    })