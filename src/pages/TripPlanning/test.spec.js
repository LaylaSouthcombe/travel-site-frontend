// import dependencies
const axios = require('axios');

// import the function to be tested
const { fetchArticlesWithoutConfig } = require('./path/to/fetchArticlesWithoutConfig.js');

describe('fetchArticlesWithoutConfig', () => {
  // mock the axios.get method
  jest.mock('axios');
  const mockAxiosGet = axios.get;

  afterEach(() => {
    // restore the original axios.get method
    mockAxiosGet.mockReset();
  });

  it('should call axios.get with the correct URL', async () => {
    // define the expected URL
    const url = 'https://example.com/articles';
    
    // call the function with the URL
    await fetchArticlesWithoutConfig(url);

    // expect axios.get to be called with the URL
    expect(mockAxiosGet).toHaveBeenCalledWith(url);
  });

  it('should set the articles state with the data received from the API', async () => {
    // define the mock response data
    const responseData = [{ title: 'Article 1' }, { title: 'Article 2' }];

    // mock the axios.get method to return the response data
    mockAxiosGet.mockResolvedValue({ data: responseData });

    // define the expected response after calling the function
    const expectedResponse = [{ title: 'Article 1', visible: true }, { title: 'Article 2', visible: true }];

    // define the mock state setter functions
    const setArticles = jest.fn();
    const setLoaded = jest.fn();

    // call the function with the mock state setter functions
    await fetchArticlesWithoutConfig('https://example.com/articles', setArticles, setLoaded);

    // expect setArticles to be called with the expected response
    expect(setArticles).toHaveBeenCalledWith(expectedResponse);
  });

  it('should set the loaded state to true after fetching the data', async () => {
    // define the mock state setter functions
    const setArticles = jest.fn();
    const setLoaded = jest.fn();

    // call the function with the mock state setter functions
    await fetchArticlesWithoutConfig('https://example.com/articles', setArticles, setLoaded);

    // expect setLoaded to be called with true
    expect(setLoaded).toHaveBeenCalledWith(true);
  });
});
