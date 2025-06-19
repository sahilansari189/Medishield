 const path = require("path");
 const HDWalletProvider = require('@truffle/hdwallet-provider');
 const infuraKey = "ca193e49ea8b47588f2fd6683a285b20"
 const fs = require("fs");
 const secrets = JSON.parse(fs.readFileSync(".secrets.json").toString().trim());
 
 module.exports = {
   contracts_build_directory: path.join(__dirname, "src/contracts"),
   networks: {
     goerli: {
       provider: () => {
         return new HDWalletProvider(secrets.mnemonic, `https://goerli.infura.io/v3/${secrets.projectId}`)
       },
       network_id: '5', // eslint-disable-line camelcase
       gas: 5500000,        // Ropsten has a lower block limit than mainnet
       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 2000,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: false
 
     },
     development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' //* will match to any network id
      }
   },
 
   // Set default mocha options here, use special reporters etc.
   mocha: {
     // timeout: 100000
   },
 
   // Configure your compilers
   compilers: {
     solc: {
     }
   },
 };
 