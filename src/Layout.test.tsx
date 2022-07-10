import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should have title, description, and copyright', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  });

  const header = container.querySelector('header');
  const h1 = header.querySelector('h1');
  const p = header.querySelector('p');
  const footer = container.querySelector('footer');


  expect(h1.textContent).toBe('Weight');
  expect(p.textContent).toBe('A simple app to calculate weights.');
  expect(footer.textContent).toContain('Copyright');
  expect(footer.textContent).toContain('2022');
})