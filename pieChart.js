/* eslint-disable no-console */
import { customers } from './data.js';
import { makeGenderCountMap } from './data-utils.js';

const countMap = makeGenderCountMap(customers);

const labels = Object.keys(countMap);

const data = {
    labels: labels,
    datasets: [{
        label: 'Gender',
        backgroundColor: ['blue', 'red', 'yellow', 'purple', 'brown', 'indigo', 'olive', 'green'],
        borderColor: 'black',
        data: Object.values(countMap),
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {}
};

// eslint-disable-next-line
const pieChart = new Chart(
    document.querySelector('#myPieChart'),
    config
);
console.log(makeGenderCountMap(customers));