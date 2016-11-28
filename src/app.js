const IPFS = require('ipfs');
const OrbitDB = require('orbit-db');

const ipfs = new IPFS();
const orbitdb = new OrbitDB(ipfs);
const db = orbitdb.kvstore('application.settings.henry');

/**
 * Example code
 */
async function hello() {
  await db.put('hello', {name: 'world'});
  const value = db.get('hello');
  console.log(value);
};

hello();
