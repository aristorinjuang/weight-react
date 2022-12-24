import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import SubmitField from './SubmitField';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should have p tag', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<SubmitField
      action={jest.fn()}
    />);
  });

  const p = container.querySelector('p');

  expect(p).toBeDefined();
})