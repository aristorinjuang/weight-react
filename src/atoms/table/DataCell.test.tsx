import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import DataCell from './DataCell';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain 9 as a text', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<DataCell
      value={9}
    />);
  });

  const cell = container.querySelector('td');

  expect(cell.textContent).toBe('9');
})