import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import DisabledNumberInput from './DisabledNumberInput';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain 9 as a value', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<DisabledNumberInput
      value={9}
    />);
  });

  const input = container.querySelector('input');

  expect(input.value).toBe('9');
})