/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        const profit = price - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }

        if (price < minPrice) {
            minPrice = price;
        }
    }

    return maxProfit;
};

