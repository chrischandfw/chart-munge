/* eslint-disable no-console */
import { customers } from './data.js';
import { makeCoolFactorCountMap } from './data-utils.js';

const countMap = makeCoolFactorCountMap(customers);

const labels = Object.keys(countMap);

const data = {
    labels: labels,
    datasets: [{
        label: 'Cool Factor',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(countMap),
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

// eslint-disable-next-line
const barChart = new Chart(
    document.querySelector('#myLineChart'),
    config
);
console.log(makeCoolFactorCountMap(customers));