// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

// Import interfaces for ERC20 and OpenZeppelin utilities
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";  
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./PythPriceConsumer.sol";  

contract CrossBorderPayment is Ownable, ReentrancyGuard {
    PythPriceConsumer public priceConsumer; 
    address public WETHAddress; 
    

    mapping(bytes32 => address) public stablecoins;
    bytes32[] public stablecoinList;

    
    constructor(address _WETHAddress, address priceConsumerAddress, address initialOwner) Ownable(initialOwner) {
        WETHAddress = _WETHAddress;
        priceConsumer = PythPriceConsumer(priceConsumerAddress);

        // Add WETH to the stablecoins mapping automatically
        bytes32 wethSymbol = keccak256(abi.encodePacked("WETH"));
        stablecoins[wethSymbol] = WETHAddress;
        stablecoinList.push(wethSymbol);
    }
    


    // Function to allow the owner to add new stablecoins to the mapping and array
    function addStablecoin(bytes32 symbol, address stablecoinAddress) public onlyOwner {
        require(stablecoins[symbol] == address(0), "Stablecoin already exists"); // Prevent duplicates

        stablecoins[symbol] = stablecoinAddress;
        stablecoinList.push(symbol); // Add symbol to the list
    }

    // Function to return the entire list of supported stablecoins
    function getAllStablecoins() public view returns (bytes32[] memory) {
        return stablecoinList;
    }

   // Function to execute cross-border payments in WETH or stablecoins
    function pay(address recipient, bytes32 tokenSymbol, uint256 amount, bytes32 priceId) public nonReentrant {
        address tokenAddress = stablecoins[tokenSymbol];

        require(tokenAddress != address(0), "Unsupported or invalid stablecoin");

        IERC20 token = IERC20(tokenAddress);

        uint256 allowance = token.allowance(msg.sender, address(this));
        require(allowance >= amount, "Insufficient token allowance. Call approve() first.");

        require(token.transferFrom(msg.sender, recipient, amount), "Token transfer failed");

        uint256 amountInUSD = convertToUSD(priceId, amount);

        emit PaymentExecuted(msg.sender, recipient, amount, amountInUSD, tokenSymbol);
    }

    // Convert the token amount to USD using Pyth price data
    function convertToUSD(bytes32 priceId, uint256 amount) internal view returns (uint256) {
        (int64 price, int32 expo) = priceConsumer.getLatestPrice(priceId);
        require(price > 0, "Price must be positive");

        uint256 priceInUSD;
        if (expo < 0) {
            priceInUSD = uint256(uint64(price)) / (10 ** uint32(-expo)); // Handle negative exponent
        } else {
            priceInUSD = uint256(uint64(price)) * (10 ** uint32(expo));  // Handle positive exponent
        }

        return amount * priceInUSD;
    }
    
    // Event emitted after a successful payment
    event PaymentExecuted(
        address indexed sender,
        address indexed recipient,
        uint256 amount,
        uint256 amountInUSD,
        bytes32 stablecoinSymbol
    );

    // Function to fetch supported stablecoin contract addresses
    function getStablecoinAddress(bytes32 symbol) public view returns (address) {
        return stablecoins[symbol];
    }
}
