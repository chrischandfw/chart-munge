//this is where I write my functions

import { customers } from './data.js';
//bar chart showing # of customer by each purchase frequency
export function makePurchaseFrequencyCountMap() {
    const countMap = {};

    for (let customer of customers) {
        const frequency = customer.purchase_frequency;

        if (countMap[frequency]) {
            countMap[frequency]++;
        } else {
            countMap[frequency] = 1;
        }
    }

    return countMap;
}

export function makeCoolFactorCountMap() {
    const countMap2 = {};

    for (let customer of customers) {
        const coolFactor = customer.cool_factor;

        if (countMap2[coolFactor]) {
            countMap2[coolFactor]++;
        } else {
            countMap2[coolFactor] = 1;
        }
    }

    return countMap2;
}