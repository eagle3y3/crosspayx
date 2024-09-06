// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";


contract PriceConsumer {
    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Optimism
     * Aggregator: ETH/USD
     * Address: 0x13e3Ee699D1909E989722E753853AE30b17e08c5
     */
    constructor() {
        priceFeed = AggregatorV3Interface(0x13e3Ee699D1909E989722E753853AE30b17e08c5);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int) {
        (
            , 
            int price,
            ,
            ,
        ) = priceFeed.latestRoundData();
        return price;
    }
}
