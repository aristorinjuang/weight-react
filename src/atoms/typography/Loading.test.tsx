import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Loading from './Loading';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain loading message', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<Loading />);
  });

  const p = container.querySelector('p');

  expect(p.textContent).toBe('Loading...');
})