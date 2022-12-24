import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Footer from './Footer';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should have footer tag', () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <Footer />
    );
  });

  const footer = container.querySelector('footer');

  expect(footer).toBeDefined();
})