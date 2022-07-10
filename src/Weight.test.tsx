import ReactDOM from 'react-dom/client';
import { fireEvent } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Weight from './Weight';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should contain form with fields, able to update, then redirect to the home', async () => {
  mockedAxios.get.mockResolvedValue({
    data: {
      data: {
        weight: {
          max: 2,
          min: 1,
          date: new Date('2022-05-22'),
          difference: 1
        }
      }
    }
  })

  await act(async () => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/2022-05-22' }]}>
        <Weight />
      </MemoryRouter>
    );
  });

  const maxElement = container.querySelector('input[name="max"]');
  const minElement = container.querySelector('input[name="min"]');

  const date = container.querySelector('input[name="date"]').getAttribute('value');
  const max = maxElement.getAttribute('value');
  const min = minElement.getAttribute('value');
  const difference = container.querySelector('input[name="difference"]').getAttribute('value');
  const button = container.querySelector('button');

  expect(date).toEqual('2022-05-22');
  expect(max).toBe('2');
  expect(min).toBe('1');
  expect(difference).toBe('1');
  expect(button.innerHTML).toBe('Submit');

  fireEvent.change(maxElement, {target: {value: '3'}});
  fireEvent.change(minElement, {target: {value: '2'}});

  mockedAxios.put.mockResolvedValue({
    data: {
      max: 3,
      min: 2
    }
  })

  await act(async () => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(window.location.pathname).toBe('/');
})

it('should return not found page when the weight is not exists', async () => {
  mockedAxios.get.mockRejectedValue(new Error())

  await act(async () => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/2022-05-22' }]}>
        <Weight />
      </MemoryRouter>
    );
  });

  expect(container.textContent).toBe('The page that you are looking for is not found.');
})

it('should be able to create and then redirect to the home', async () => {
  act(() => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/create' }]}>
        <Weight />
      </MemoryRouter>
    );
  });

  const dateElement = container.querySelector('input[name="date"]');
  const maxElement = container.querySelector('input[name="max"]');
  const minElement = container.querySelector('input[name="min"]');
  const button = container.querySelector('button');

  fireEvent.change(dateElement, {target: {value: '2022-05-22'}});
  fireEvent.change(maxElement, {target: {value: '3'}});
  fireEvent.change(minElement, {target: {value: '2'}});

  mockedAxios.post.mockResolvedValue({
    data: {
      date: new Date('2022-05-22'),
      max: 3,
      min: 2
    }
  })

  await act(async () => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(window.location.pathname).toBe('/');
})