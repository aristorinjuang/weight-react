import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Link from './Link';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain link text and url', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <Link to="/" text="Home" />
      </MemoryRouter>
    );
  });

  const link = container.querySelector('a');

  expect(link.textContent).toContain('Home');
  expect(link).toHaveAttribute('href', '/');
})