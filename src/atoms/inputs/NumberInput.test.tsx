import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import NumberInput from './NumberInput';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain 9 as a default value and number placeholder', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<NumberInput
      action={jest.fn()}
      defaultValue={9}
      name="number"
      placeholder="Number..."
    />);
  });

  const input = container.querySelector('input[name="number"]');

  expect(input.value).toBe('9');
  expect(input.placeholder).toBe('Number...');
})