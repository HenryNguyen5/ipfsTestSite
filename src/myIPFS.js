const OrbitDB = require('orbit-db');
const IPFS = require('ipfs-daemon');
let userID = 5;
const ipfsOptions = {
  IpfsDataDir: '/tmp/' + 6,
  Addresses: {
    API: '/ip4/127.0.0.1/tcp/0',
    Swarm: ['/ip4/0.0.0.0/tcp/0'],
    Gateway: '/ip4/0.0.0.0/tcp/0'
  },
}

const ipfs = new IPFS(ipfsOptions);
console.log("Starting...")

ipfs.on('ready', () => {
    console.log("ready")
    const orbitdb = new OrbitDB(ipfs)
    console.log("orbit ready")
    const db = orbitdb.kvstore("|orbit-db|examples|kvstores")
    console.log("db ready")
    const creatures = ['🐙', '🐬', '🐋', '🐠', '🐡', '🦀', '🐢', '🐟', '🐳']

    const query = () => {

      const index = Math.floor(Math.random() * creatures.length)
      console.log("putting values in")
      db.put(userId, { avatar: creatures[index], updated: 50})
        .then(() => {
          console.log("value has been put")
          const user = db.get(userId)
          let output = `\n`
          output += `----------------------\n`
          output += `User\n`
          output += `----------------------\n`
          output += `Id: ${userId}\n`
          output += `Avatar: ${user.avatar}\n`
          output += `Updated: ${user.updated}\n`
          output += `----------------------`
          console.log(output)
        })
        .catch((e) => {
          console.error(e.stack)
          console.log(e)
        })
    }

    setInterval(query, 1000)
  })
  .catch((err) => console.error(err))
