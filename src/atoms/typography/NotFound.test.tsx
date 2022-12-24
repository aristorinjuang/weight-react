import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import NotFound from './NotFound';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain not found message', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<NotFound />);
  });

  const p = container.querySelector('p');

  expect(p.textContent).toBe('The page that you are looking for is not found.');
})