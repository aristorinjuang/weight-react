import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Weights from './Weights';

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

it('should contain tables with creating and delete buttons', async () => {
  mockedAxios.get.mockResolvedValue({
    data: {
      data: {
        weights: [
          {
            max: 2,
            min: 1,
            date: new Date('2022-05-22'),
            difference: 1
          }
        ],
        average: {
          max: 2,
          min: 1,
          difference: 1
        }
      }
    }
  })

  await act(async () => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <Weights />
      </MemoryRouter>
    );
  });

  expect(container.innerHTML).toContain('Date')
  expect(container.innerHTML).toContain('Max')
  expect(container.innerHTML).toContain('Min')
  expect(container.innerHTML).toContain('Difference')
  expect(container.innerHTML).toContain('Average')
  expect(container.innerHTML).toContain('Create')
  expect(container.innerHTML).toContain('Delete')
  expect(container.innerHTML).toContain('2022-05-22')
  expect(container.innerHTML).toContain('3')
  expect(container.innerHTML).toContain('2')
  expect(container.innerHTML).toContain('1')

  window.confirm = jest.fn().mockImplementation(() => true)

  mockedAxios.delete.mockResolvedValue({})
  mockedAxios.get.mockResolvedValue({
    data: {
      data: {
        weights: [],
        average: {
          max: 0,
          min: 0,
          difference: 0
        }
      }
    }
  })

  const deleteButton = container.querySelector('button.bg-red-500');

  await act(async () => {
    deleteButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(window.confirm).toBeCalled()
  expect(container.innerHTML).not.toContain('2022-05-22')
  expect(container.innerHTML).toContain('<th class="p-2 text-left">0</th>')
})

it('should return the loading page when got an internal server error', async () => {
  mockedAxios.get.mockRejectedValue(new Error())

  await act(async () => {
    ReactDOM.createRoot(container).render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <Weights />
      </MemoryRouter>
    );
  });

  expect(container.textContent).toBe('Loading...');
})