var client = newBitcoin.Client();
client.getAccounts(function(accounts){
    varbtcAddress = accounts[0];

// create a new bitcoin transaction
var transaction = newBitcoin.Transaction();

// add  input parameters:from address to address,amount bitcoin,transaction fee
var txInput = {from: btcAddress,to: bitcoinAddress, amount: 10e18,transactionFee : 0.0001};
// add ouput parameters about new bitcoin address and transaction hash
txOutput = {newBitcoinAddress() {
    txHash: transaction}};

//create a new transaction object 
var input = txtInput;
var output = txOutput;

// create a smart contract to store the transaction content
smartContract = newBitcoin.Smartcontract();

//set the contract's name and constructor function
smartContract.setName(prompt("Enter contract name"));
smartContract.setConstructor(function(args) {
     this.setInput(args[0],args[1],args[2],args[3]);});


// set contract's address and constructor function
smartContract.setAddress("0xbb928deafc41784ebb178abb78bdbc7cd210cbe");
// create smart contract object
smartContract.create();})

// reason for payment function
function askForReason() {
    var reason = prompt("Please enter reason for payment :");
      console.log(askForReason(reason));
    }
// call the smart contract constructor function
smartContract.call()

