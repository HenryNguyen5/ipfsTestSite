const OrbitDB = require('orbit-db');
const IPFS = require('ipfs-daemon');

const ipfsOptions = {
    IpfsDataDir: '/tmp/' + 8,
    Addresses: {
        API: '/ip4/127.0.0.1/tcp/0',
        Swarm: ['/ip4/0.0.0.0/tcp/0'],
        Gateway: '/ip4/0.0.0.0/tcp/0',
    },
};

const ipfs = new IPFS(ipfsOptions);
ipfs.on('ready', () => {
    console.log("IPFS READY");

    const orbitdb = new OrbitDB(ipfs, 8);
    const db = orbitdb.kvstore('application.settings.henry');
    console.log("\n\n\n");
    console.log("PUTTING VALUE");
    db.events.on('ready', () => {
        function go() {

            let random = Math.random() * 100;

            db.put('poo' + random, 'poop')
                .then(() => {
                    console.log("GETTING H1", db.get('poo' + random));
                })
                .catch((e) => {
                    console.log(e.stack);
                });
        }

        setInterval(go, 1000);
    });

    db.events.on('data', (dbname, event) => console.log("Data", dbname, event));
    db.events.on('sync', () => console.log("Sync"));
    db.events.on('load', (dbname, hash) => console.log("Load", dbname, hash));
    db.events.on('history', (dbname, entries) => console.log(dbname, entries, "History"));
    db.events.on('ready', (dbname) => console.log(dbname, "ready"));
    db.events.on('write', (dbname, hash) => {
        console.log("write", dbname, hash);
    });
});

ipfs.onc('error', (e) => {
    console.log("IPFS ERR" + e.stack);
});
