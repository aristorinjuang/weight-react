import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Copyright from './Copyright';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain copyright message', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<Copyright />);
  });

  const p = container.querySelector('p');

  expect(p.textContent).toContain('Copyright');
})