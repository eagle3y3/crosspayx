// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;
 
import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";
 
// Import Pyth's contract interface (adjust the path based on your environment)

contract PythPriceConsumer {
    IPyth public pyth;

    // Pyth price feed contract address (replace with the actual Pyth address on Kinto or another chain)
    constructor(address pythContract) {
    // The IPyth interface from pyth-sdk-solidity provides the methods to interact with the Pyth contract.
    // Instantiate it with the Pyth contract address from https://docs.pyth.network/price-feeds/contract-addresses/evm
    pyth = IPyth(pythContract);
    }

    // Function to get the latest price for a specific asset
    function getLatestPrice(bytes32 priceId) public view returns (int64 price, int32 expo) {
        PythStructs.Price memory currentPrice = pyth.getPriceUnsafe(priceId);
        return (currentPrice.price, currentPrice.expo); // Returns the price and the exponent
    }
}
 