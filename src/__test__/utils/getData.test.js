import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Llamar una API y retornar datos', (done) => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    /* return */ getData('https://google.com').then(response => {
      expect(response.data).toEqual('12345');
      done(); /* Se puede usar el callback o solo retornar la promesa */
    });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
