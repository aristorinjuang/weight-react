import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import CreateButton from './CreateButton';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain create text', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/create' }]}>
        <CreateButton />
      </MemoryRouter>
    );
  });

  const button = container.querySelector('a');

  expect(button.textContent).toBe('Create');
})