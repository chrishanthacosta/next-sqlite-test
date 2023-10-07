// db.ts
import  Database  from 'better-sqlite3';

// const db = new Database('./my-database.db');
const db  = new Database('mydb.db',  { verbose: console.log });
db.pragma('journal_mode = WAL');


// function openDb(filename: string) : BetterSqlite3.Database
// {
//     let db : BetterSqlite3.Database;
//     db = new BetterSqlite3(filename);
//     return db;
// }


export default db;
