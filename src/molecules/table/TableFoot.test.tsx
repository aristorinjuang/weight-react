import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import TableFoot from './TableFoot';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should have tfoot tag', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <TableFoot
        averageMax={9}
        averageMin={1}
        averageDifference={8}
      />
    );
  });

  const tfoot = container.querySelector('tfoot');

  expect(tfoot).toBeDefined();
})

it('should have tr tag', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <TableFoot
        averageMax={9}
        averageMin={1}
        averageDifference={8}
      />
    );
  });

  const tr = container.querySelector('tr');

  expect(tr).toBeDefined();
})