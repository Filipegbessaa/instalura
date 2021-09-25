import redirects from './redirects';

describe('redirects', () => {
    test('renders all current redirects', () => {
        const result = redirects;
        expect(result).toMatchSnapshot();
    })

});