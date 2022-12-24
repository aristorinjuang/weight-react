import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import DateInput from './DateInput';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain date placeholder', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<DateInput
      action={jest.fn()}
      disabled={false}
      date={new Date()}
    />);
  });

  const input = container.querySelector('input[name="date"]');

  expect(input.placeholder).toBe('Date');
})