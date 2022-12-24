import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import DeleteButton from './DeleteButton';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain delete text', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<DeleteButton
      action={jest.fn()}
      date={new Date()}
    />);
  });

  const button = container.querySelector('button');

  expect(button.textContent).toBe('Delete');
})

it('should have a confirmation dialog', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<DeleteButton
      action={jest.fn()}
      date={new Date()}
    />);
  });

  window.confirm = jest.fn().mockImplementation(() => true)

  const button = container.querySelector('button');

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(window.confirm).toBeCalled()
})