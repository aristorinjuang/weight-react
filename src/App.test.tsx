import App from './App';

it('should contain BrowserRouter', () => {
  expect(App().type.toString()).toContain('BrowserRouter');
})