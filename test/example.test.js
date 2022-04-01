import { customers } from '../data';
import { makePurchaseFrequencyCountMap, makeCoolFactorCountMap } from '../data-utils';

const test = QUnit.test;

test('time to test a function for returning number of customers by each purchase frequency', (expect) => {
    const countMap = {
		Daily: 142
		Monthly: 123
		Never: 123
		Often: 126
		Once: 107
		Seldom: 129
		Weekly: 122
		Yearly: 128
    };
    const expected = countMap;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makePurchaseFrequencyCountMap(customers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

const test = QUnit.test;

test('time to test a function for returning number of customers by cool factor', (expect) => {
    const countMap2 = {
		1: 109
		2: 119
		3: 99
		4: 101
		5: 93
		6: 102
		7: 101
		8: 99
		9: 82
		10: 95
    };
    const expected = countMap2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makePurchaseFrequencyCountMap(customers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

const test = QUnit.test;

test('time to test a function for returning number of customers by cool factor', (expect) => {
    const countMap3 = {
		Agender: 17
		Bigender: 14
		Female: 457
		Genderfluid: 18
		Genderqueer: 11
		Male: 448
		Non-binary: 24
		Polygender: 11
    };
    const expected = countMap3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeGenderCountMap(customers);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

