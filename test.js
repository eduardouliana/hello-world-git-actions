const helloWorld = require('./index');

test('[helloWorld] is a function?', () => {
    expect(typeof helloWorld).toEqual('function');
});

test('Must be equal to [Hello World Eduardo]', () => {
    expect(helloWorld('Eduardo')).toEqual('Hello World Eduardo');
});

test('Must be equal to [Hello World]', () => {
    expect(helloWorld('')).toEqual('Hello World ');
});