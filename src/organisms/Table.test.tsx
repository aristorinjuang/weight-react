import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Table from './Table';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should have table tag', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <Table
          items={[]}
          average={{
            max: 9,
            min: 1,
            difference: 8
          }}
          deleteAction={jest.fn()}
        />
      </MemoryRouter>
    );
  });

  const table = container.querySelector('table');

  expect(table).toBeDefined();
})