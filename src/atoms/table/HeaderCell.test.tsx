import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import HeaderCell from './HeaderCell';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain text', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<HeaderCell
      value="Average"
    />);
  });

  const cell = container.querySelector('th');

  expect(cell.textContent).toBe('Average');
})