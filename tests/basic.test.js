const {myStr, data, fruits} = require('../index.js')

it('Should return my string matching - this is my string', () => {
    expect(myStr).toBe('this is my string');
});

it('Should match the object', () => {
    expect(data).toMatchObject({
        name: 'JD',
        age: 43
    });
});

it('Should match the array', () => {
    expect(fruits).toEqual(['orange', 'apple', 'kiwi']);
});