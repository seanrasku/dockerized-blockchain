# Creating a Blockchain application with Docker

This is a larger version of the prior repository, where I add an Express.js server to handle compilation of as many contracts as necessary. The contract abi and bytecode are sent via post request to the frontend where they can be used to deploy contracts. These applications are very simple, but show the basics of how blockchain works: connect to the wallet, retrieve the provider, and use both to send transactions AKA deploy smart contracts on the blockchain. 
