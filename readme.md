# BITCOINSMARTCONTRACTS
We dive into Smart Contracts for financial transactions using Bitcoin

GITHUB LINK: https://github.com/CRYPTOSHAREBANQ/Bitcoin-Transactions/blob/main/src/send.bitcoin.js


## Detailed Report With Code Examples Of Best Way (Most Secure Way/Tamperproof) To Create and Record Info within Bitcoin Smart Contracts For Financial Transactions

Ever since the introduction of Bitcoin by Satoshi Nakamoto in 2008. Bitcoin has grown into a dominant digital currency and sparked the introduction of digital currencies like Ethereum, Litecoin, XRP, Dogecoin and many more.

However, when it comes to smart contracts, Bitcoin has been left behind by the likes of Ethereum, Cardano, etc. Even though Bitcoin was the first to implement smart contracts, designing complex smart contracts on Bitcoin was cumbersome and not viable in terms of cost.

This led to rise in chains like Ethereum which natively support smart contract creation with Turing complete languages like Solidity.

Bitcoin smart contracts are written using the Bitcoin Script language, a Forth-like programming language used to create scripts that can be included in Bitcoin transactions. A script is a set of instructions that define the conditions under which a transaction can be considered valid and added to the blockchain.

In Bitcoin Script, a transaction input specifies a script that must be satisfied by a corresponding script in the transaction output it is trying to spend. The transaction input's script is called the "scriptSig" (signature script) and the transaction output's script is called the "scriptPubKey" (public key script).

The scriptPubKey specifies the conditions that must be satisfied for the transaction to be considered valid, such as the requirement that the transaction can only be spent by someone who can provide a digital signature using a specific public key. The scriptSig provides the data that satisfies the conditions specified in the scriptPubKey.

Bitcoin Script, however, was designed to be limited in scope to avoid the complexities that come with making the language turing Complete. As of today, the most common type of smart contracts deployed on the Bitcoin network are:


### Pay-to-Public-Key-Hash (P2PKH)

Pay-to-Public-Key-Hash (P2PKH) is a common type of transaction in the Bitcoin network. It is used to send funds to a Bitcoin address, which is derived from a public key hash.

A public key hash is a hash of a public key that is used to identify a specific address on the Bitcoin network. When someone wants to send bitcoins to an address, they create a transaction that includes the public key hash of the recipient in the output script.

The recipient must then provide a signature with their private key to prove that they are the owner of the address and can spend the bitcoins. This signature is added to the transaction input as a "scriptSig" and the entire transaction is broadcast to the network for validation.

In P2PKH transactions, the scriptPubKey in the output is a standard script that specifies the requirement for a digital signature using the corresponding private key of the public key hash in the output. The scriptSig in the input provides the signature that satisfies this requirement.

Example of a P2PKH script in Bitcoin Script:

> OP_DUP OP_HASH160 <20-byte public key hash> OP_EQUALVERIFY OP_CHECKSIG

This script specifies that the transaction can only be spent by someone who provides a digital signature using the private key corresponding to the provided public key hash.


### Multi-Sig Transaction

A multi-sig transaction is a type of transaction in the Bitcoin network that requires more than one signature to be considered valid. It is used to add an extra layer of security to transactions by requiring multiple parties to sign off on a transaction before it can be added to the blockchain.

In a multi-sig transaction, the output script specifies the number of signatures required to spend the bitcoins and the public keys of the parties involved. To spend the bitcoins, the required number of signatures must be provided in the input script.

For example, if a 2-of-3 multi-sig transaction is created, then two of the three public keys involved must sign the transaction before it can be added to the blockchain. This provides a secure way to manage funds between multiple parties without relying on a central authority to manage the funds.

Example of a 2-of-2 multi-sig script in Bitcoin Script:
> OP_2 <public key 1> <public key 2> OP_2 OP_CHECKMULTISIG


### Time-Locked Transactions

A time-locked transaction, also known as a "timelock," is a type of transaction in the Bitcoin network that restricts the spending of the funds until a specified future time or block height. This type of transaction is useful for situations where funds need to be locked away for a certain period of time, such as in escrow or for locking up funds in a time-bound investment.

In a time-locked transaction, the output script specifies a locktime, which is either a block height or a Unix timestamp, after which the funds can be spent. Before the locktime is reached, the transaction cannot be added to the blockchain and the funds are locked away.

For example, if a time-locked transaction has a locktime of block height 650,000, then the funds cannot be spent until block height 650,000 is reached on the blockchain. If the locktime is specified as a Unix timestamp, then the funds cannot be spent until the specified date and time has passed.

Example of a 2-of-2 multi-sig script in Bitcoin Script:

> OP_2 <public key 1> <public key 2> OP_2 OP_CHECKMULTISIG


## Bitcoin Script Language Limitations

Lack of Turing completeness: Bitcoin script is intentionally designed to be simple and limited in order to maintain security and avoid potential vulnerabilities. As a result, it is not Turing complete, which means it cannot handle certain types of computations and logical operations.

Limited functionality: Bitcoin script is primarily designed for simple transaction operations, such as verifying signatures and checking if a certain amount of funds are available. It does not support more complex operations, such as looping and recursion, that are available in other programming languages.

Lack of support for advanced smart contract features: While Bitcoin script does support basic smart contract functionality, it does not have the advanced features found in more sophisticated smart contract platforms, such as Ethereum. This means that more complex smart contracts cannot be implemented using Bitcoin script.

Difficulty in debugging: Due to its limited functionality and lack of support for more advanced programming concepts, debugging Bitcoin script can be challenging. This can make it difficult for developers to identify and fix errors in their code.

Non-reversible transactions: Once a transaction is confirmed on the Bitcoin blockchain, it cannot be reversed or modified. This can be problematic if a bug or error is discovered in a Bitcoin script-based application after a transaction has already been processed.

## Taproot Update and Layer 1s and 2s
Due to Bitcoin Scripts limitations, several improvements have been made to try to improve Bitcoin’s viability for financial transactions. One of this is the Taproot update deployed to improve the privacy, security, and flexibility of the Bitcoin network.

Some of the benefits of the Taproot upgrade include:
Improved transaction privacy.
Reduced transaction fees.
Increased smart contract functionality.
Enhanced scalability.

### Layer 1s 

Other solutions to Bitcoin smart contract limitations include layer 1s and layer 2s that are built to rely on the Bitcoin network. 

A layer 1 is a blockchain that operates as a standalone, self-sufficient network. It is responsible for maintaining its own ledger, validating transactions, and executing smart contracts, all without relying on any external systems or networks.

In a Layer 1 blockchain, all nodes in the network have access to the same information and participate in the consensus process to maintain the network's integrity and security. Examples of Layer 1 blockchains include Bitcoin, Ethereum, and Cardano.

### The Stack Blockchain | A layer One?

Stacks, previously known as Blockstack, is a decentralized computing network that allows developers to build decentralized applications (dApps) on top of the Bitcoin blockchain. 

The Stacks blockchain is anchored to the Bitcoin blockchain, which means that it uses the security of the Bitcoin network to provide a secure and reliable platform for building and running decentralized applications. Stacks uses a consensus mechanism called Proof of Transfer (PoX) that allows STX token holders to participate in the consensus process and earn rewards for securing the network.

The stacks blockchain can be considered hybrid in that it maintainws its own blockchain and at the same times relies on Bitcoins security like a layer 2 blockchain.

Smart contracts on the Stacks blockchain can be created using Clarity, a high-level, statically-typed programming language that is purpose-built for smart contracts.

The benefits of using Clarity to create smart contracts on Stacks include:

Safety and Security: Clarity's static type system and built-in security features help ensure that smart contracts are safe and secure. The language is designed to prevent common programming errors and to provide clear and predictable behavior for smart contracts.

Predictability: Clarity's syntax is designed to be human-readable and easy to understand, which helps reduce errors and makes it easier to reason about the behavior of smart contracts.

Interoperability: Clarity is designed to be interoperable with other blockchain platforms, which means that developers can use the same language to create smart contracts on multiple blockchains.

Decentralization: Stacks is a decentralized network, and Clarity is designed to enable decentralized applications and smart contracts that can run on the network without the need for intermediaries or centralized infrastructure.


### Layer 2

Layer blockchains are scaling solutions that operate on top of a Layer 1 blockchain. They are designed to address some of the scalability limitations of Layer 1 blockchains, such as slow transaction speeds and high fees, by processing transactions off-chain and settling them on the Layer 1 blockchain.

The Lighntinig network is an example of a layer 2 chain. 

The benefits of the Lightning Network include:

Speed: Lightning transactions are almost instantaneous, allowing for fast and efficient transactions without the delays associated with on-chain transactions.

Low Fees: Lightning transactions have very low fees, making it cost-effective to send small transactions that would not be feasible on the blockchain.

Scalability: The Lightning Network can handle a large number of transactions per second, which allows for greater scalability and throughput than the base layer blockchain.

Privacy: Lightning transactions are private and do not require the same level of transparency as on-chain transactions, which provides greater privacy and security for users.


## Sidechains

Sidechains are a type of blockchain that operates as a separate network but is connected to the main blockchain network, also known as the parent chain. They are designed to allow for the transfer of digital assets or data between different blockchains, while maintaining the security and integrity of both chains.

To make Bitcoin turing complete and allow for more complex smart contracts and scalability, the Rootstock smart contract platform was created.

RSK works by using a two-way peg system to connect the Bitcoin and RSK blockchains. This means that users can lock their Bitcoin on the Bitcoin blockchain, which then allows them to mint the same amount of RSK tokens on the RSK blockchain. These tokens can then be used to interact with the RSK ecosystem, including creating and executing smart contracts.

One of the key benefits of RSK is its compatibility with the existing Bitcoin infrastructure, including wallets, exchanges, and mining pools. This allows for seamless integration with the Bitcoin network, while also providing access to a large user base and network of developers.

## Creating a Model for Bitcoin Transactions

Creating smart contracts for financial transactions on the Bitcoin network can be done using the Bitcoin Script language or through the use of third-party tools and libraries. However, since the Bitcoin Script language is limited in functionality and can be challenging for those unfamiliar with it, many developers choose to use a more high-level programming language, such as Python.

One such tool for creating smart contracts in Python for the Bitcoin network is the "bitcoin-python" library, which provides a Python interface to the Bitcoin network and allows developers to write and deploy smart contracts on the network.

Here is a sample Python code for a basic smart contract for a financial transaction on the Bitcoin network using the "bitcoin-python" library:

        from bitcoin import *

        def create_transaction(privkey, to_address, amount):
            tx = mktx(unspent[:2], [{to_address: amount}])
            sign(tx, 0, privkey)
            return tx

        def broadcast_transaction(tx):
            broadcast(tx)
            return

        privkey = 'your_private_key'
        to_address = 'recipient_address'
        amount = 0.01

        transaction = create_transaction(privkey, to_address, amount)
        broadcast_transaction(transaction)

Complex Bitcoin smart contracts can also be created with python, javascript, C#, Java or any other high level language. Below is an example of a Bitcoin smart contract model written in Javascript that can be used to process products from a store. Each product in the store has a wallet attached to it where the buyer will send the Bitcoin in order to make a purchase.

             // sending bitcoin
        const axios = require("axios");
        const bitcore = require("bitcore-lib");
        var https = require("https");


        module.exports = sendPayment = async (fruit_type, quantity) => {
          try {

            // Fruits available in the shop
            const fruits = {
              "apples": {
                  "address": "tb1qsyvek8a3lhzy8j3c3mp84xy9cdy627q2f2pxef",
                  "price": 0.0002
              },
              "bananas": {
                  "address": "tb1q0f8t6cf8hha6tt43arv6nrpln4p3u8ql96g6em",
                  "price": 0.0005
              },
              "oranges": {
                  "address": "tb1qsyvek8a3lhzy8j3c3mp84xy9cdy627q2f2pxe",
                  "price": 0.0006
              },
              "strawberries": {
                  "address": "tb1q3ctrpkl58shfy5hpapgc9km8wx69y5m68350ft",
                  "price": 0.0008
              }
          };
          // Retrieve the wallet address and price for the specified fruit
          var recieverAddress = fruits[fruit_type].address;
          //console.log(recipient_address)
          var fruit_price = fruits[fruit_type].price;


          // Calculate the total cost of the fruit purchase
          const total_cost = fruit_price * quantity; 
          //console.log(total_cost)
          // Send the payment to the recipient address
          //sendPayment(recipient_address, total_cost);




            const privateKey = "d5ca593be0d480a455747c343e597b8e7e95b8dac1bfa58fbc13a4b795fc0ce4";
            const sourceAddress = "n3Hhyfpu4nrfEYLBtLVb7fruK8DrAgaKvL";
            const satoshiToSend = total_cost * 100000000;





            // Get the latest Unspent Transaction Outputs for sourceAddress using cryptoapis
            // Cryptoapis provides all unspent outputs except the script. 
            // We therefore get the index and transaction ID from the api use that below to get the full unpent outputs.
            const txResponse = await axios.get(
              `https://rest.cryptoapis.io/blockchain-data/bitcoin/testnet/addresses/${sourceAddress}/unspent-outputs?`,
              {
                method: 'GET',
                headers: {
                  "Content-Type": "application/json",
                  'x-api-key': 'put your api key here'
                }
              }
            );

            const txHash = await txResponse.data.data.items[0].transactionId;
            const Txindex = await txResponse.data.data.items[0].index;
            //console.log(txHash)
            //console.log(Txindex)

           // Get the full unspent outputs(UTXO) from tatum api after receiving the hash and index

            const response = await axios.get(
              `https://api.tatum.io/v3/bitcoin/utxo/${txHash}/${Txindex}`,
              {
                method: 'GET',
                headers: {
                  'x-api-key': 'put your api key'
                }
              }
            );

            const transaction = new bitcore.Transaction();
            let totalAmountAvailable = 0;

            let inputs = [];
            let utxos = response.data;
            console.log(utxos)

            // Build and arrange the utxo from the unspent outputs received above from Tatum api.
              let utxo = {};
              utxo.address = utxos.address;
              utxo.txId = utxos.hash;
              utxo.outputIndex = utxos.index;
              utxo.satoshis = utxos.value;
              utxo.script = utxos.script;
              totalAmountAvailable += utxo.satoshis;

              // Push the arranged utxo to the utxo array
              inputs.push(utxo);
              //console.log(utxo)

            //Set transaction input
            transaction.from(inputs);

            // set the recieving address and the amount to send
            transaction.to(recieverAddress, satoshiToSend);

            // Set change address - Address to receive the left over funds after transfer
            transaction.change(sourceAddress);

            //manually set transaction fees
            transaction.fee(20000);

            // Sign transaction with your private key
            transaction.sign(privateKey);

            // serialize Transactions
            const serializedTransaction = transaction.serialize();
            //console.log(serializedTransaction)

            //broadcast the transaction to be included into a block in the Bitcoin testnet
            // we use cryptoapis to do this
            var https = require("https");

            var options = {
              "method": "POST",
              "hostname": "rest.cryptoapis.io",
              "path": "/v2/blockchain-tools/bitcoin/testnet/transactions/broadcast",
              "qs": {"context":"yourExampleString"},
              "headers": {
                "Content-Type": "application/json",
                "X-API-Key": "put your api key here"
              }
            };

            var req = https.request(options, function (res) {
              var chunks = [];

              res.on("data", function (chunk) {
                chunks.push(chunk);
              });

              res.on("end", function () {
                var body = Buffer.concat(chunks);
                console.log(body.toString());
              });
            });

            req.write(JSON.stringify({
                "context": "yourExampleString",
                "data": {
                    "item": {
                        "signedTransactionHex": serializedTransaction
                    }
                }
            }));

            req.end();

            // Output a message with the payment details
          console.log(`Payment of ${total_cost} BTC for ${quantity} ${fruit_type} sent to ${recieverAddress}.`);


          } catch (error) {
            return error;
          }

        };





## Sapio Programming Language
Other programming languages have emerged to make the creation of Bitcoin smart contracts natively easier and safer. One such language is Sapio.

Sapio is still work in progress and is currently alpha quality software. To get started with Sapio, you will need to be familiar with docker containers and the Rust programming language. A deep understanding of rust is not required to develop with Sapio but its an added advantage.

The Sapio pod download comes with:
A CTV Compatible Bitcoin Node running regtest
Rust
A pre-built cached Sapio Directory for you to use as a workspace
sapio-cli pre-built
Sapio Studio built and running over X11 connected to your regtest node
neovim for editing

Sapio relies on BIP-119 OP_CHECKTEMPLATEVERIFY (CTV) to enforce specific state transitions. CTV is a proposed soft-fork upgrade to Bitcoin for enabling a bevy of use cases.

CTV enables a script to commit to the "important bits" of how it can be spent, or the:
nVersion
nLockTime
scriptSig hash (maybe!)
input count
sequences hash
output count
outputs hash
input index


# Bitcoin Payment Model.

The code in this repo is for a fruit shop model where a user can buy a fruit and choose the quantity and then pay with Bitcoin.

The code teaches how to construct a bitcoin transaction by simulation a real bitcoin transaction on the testnet.

The code uses the bitcore-lib library to prepare transactions for boradcasting. Tatum api and cryptoapis are used to fetch the data needed for building the transaction and broadcasting the transaction.

The steps included in the code include:
1. Generating a testnet wallet address.
2. Fetching unspent transaction outputs (UTXO) of the source address.
3. Preparing the UTXO.
4. Setting the UTXO as input.
5. Setting the receiving and the amount to be sent to the receiving address.
6. Setting the transaction fees.
7. Signing the transaction.
8. Broadcasting the signed transaction to be included into a block in the Bitcoin Testnet.

## Challenges when working on the code:
1. Finding an api with the right inputs required by bitcore-lib to build a transaction.
2. The Bitcoin testnet is quite slow to confirm transactions.
3. Tested out other libraries before trying out Bitcore-lib. Turns out most are depreciated.


## Conclusion:
Anade ~ Hours of Research were dedicated into adding messages within Bitcoin Transactions. The purpose of the messages are to add identifying information for each transaction. This will make it easier for accounting and give exact details of a transaction.

Example: A grocery store sells 100,000 apples with 2 different types of Apples (Red & Green). Both types of Apples will have a separate wallet to store and record transactions.

Apple 1 = Bitcoin Wallet 1 = 40000 Red Apples Sold

Apple 2 = Bitcoin Wallet 2 = 60000 Green Apples Sold

The challenges in achieveing this lies in the fact that Bitcoin as a blockchain was not designed to support the storage of non-transaction data. Bitcoin transactions can have messages inscribed within them as a way to store messages on-chain with everything from "Hello world" messages to marriage proposals being recorded on the blockchain. The messages are put within the transaction and then decoded using decoders.

Examples of Decoder: https://live.blockcypher.com/btc/decodetx/

![image](https://user-images.githubusercontent.com/104532970/221340704-1dc487b4-03a5-425f-aaec-1409b327d662.png)

The Bitcoin Transaction Script will be added into the decoder and the decoder gives us information about the transaction.

![image](https://user-images.githubusercontent.com/104532970/221340719-1686a461-d8ce-4521-8185-fa0844addd57.png)

The mission is to customize some of the data within the Bitcoin Transaction Script to show that Apples were sold and at what price. The obstacles are currently our research has found that when we do that the Bitcoin becomes an NFT, making it unspendable.


Sources: 

https://trezor.io/learn/a/use-op_return-in-trezor-suite-app 

https://en.bitcoin.it/wiki/OP_RETURN

https://cloudinvent.com/blog/custom-data-in-bitcoin-blockchain-transaction/

https://nftnow.com/guides/bitcoin-nfts-ordinals-inscriptions-explained-finding-buying-more/

https://link.medium.com/fIuNtUhLDxb








