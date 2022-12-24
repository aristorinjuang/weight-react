import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Header from './Header';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should have header tag, title, and description', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <Header title="This is Title" description="This is Description" />
      </MemoryRouter>
    );
  });

  const header = container.querySelector('header');

  expect(header).toBeDefined();
  expect(header).toHaveTextContent('This is Title');
  expect(header).toHaveTextContent('This is Description');
})