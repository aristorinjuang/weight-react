import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import TableBody from './TableBody';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should have tbody tag', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<TableBody
      deleteAction={jest.fn()}
      weights={[]}
    />);
  });

  const tbody = container.querySelector('tbody');

  expect(tbody).toBeDefined();
})

it('should have tr tag', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <TableBody
          deleteAction={jest.fn()}
          weights={[
            {
              date: new Date(),
              max: 9,
              min: 1,
              difference: 8
            }
          ]}
        />
      </MemoryRouter>
    );
  });

  const tr = container.querySelector('tr');

  expect(tr).toBeDefined();
})