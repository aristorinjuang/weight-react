import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Title from './Title';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain title', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <Title content="This is Title" />
      </MemoryRouter>
    );
  });

  const title = container.querySelector('h1');

  expect(title.textContent).toContain('This is Title');
})

it('should contain link', async () => {
  await act(async () => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/create' }]}>
        <Title content="This is Title" />
      </MemoryRouter>
    );
  });

  const link = container.querySelector('a');

  await act(async () => {
    link.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(window.location.pathname).toBe('/');
})