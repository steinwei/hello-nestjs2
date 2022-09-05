import Connection from "mysql2/typings/mysql/lib/Connection";

export class PostSubscriber {
    constructor(connection: Connection, protected sanitizeService: SaniteService) {
        connection.subscribers.push(this)
     }

}