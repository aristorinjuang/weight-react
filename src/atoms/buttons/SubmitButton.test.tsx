import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import SubmitButton from './SubmitButton';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain submit text', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<SubmitButton
      action={jest.fn()}
    />);
  });

  const button = container.querySelector('button');

  expect(button.textContent).toBe('Submit');
})