import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import NumberField from './NumberField';

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
    ReactDOM.createRoot(container).render(<NumberField
      action={jest.fn()}
      value={9}
      name="number"
      placeholder="Number..."
    />);
  });

  const p = container.querySelector('p');

  expect(p).toBeDefined();
})