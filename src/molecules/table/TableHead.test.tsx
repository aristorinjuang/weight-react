import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import TableHead from './TableHead';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should have thead tag', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <TableHead />
      </MemoryRouter>
    );
  });

  const thead = container.querySelector('thead');

  expect(thead).toBeDefined();
})

it('should have tr tag', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <TableHead />
      </MemoryRouter>
    );
  });

  const tr = container.querySelector('tr');

  expect(tr).toBeDefined();
})