import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Form from './Form';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should have form tag', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <Form
        date={new Date()}
        max={9}
        min={1}
        difference={8}
        disabled={true}
        changeDateAction={jest.fn()}
        changeMaxAction={jest.fn()}
        changeMinAction={jest.fn()}
        submitAction={jest.fn()}
      />
    );
  });

  const form = container.querySelector('form');

  expect(form).toBeDefined();
})