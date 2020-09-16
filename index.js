const port = process.env.PGPORT;
const node_env = process.env.NODE_ENV;
const dbUser = process.env.PGUSER;
const dbPassword = process.env.PGPASSWORD;
const dbName = process.env.PGDATABASE;
const dbHost = process.env.PGHOST;

console.log(`Your port is ${port}`);
console.log(`Your enviroment is ${node_env}`);
console.log(`Your db name is ${dbName}`);
console.log(`Your db url is ${dbHost}`);