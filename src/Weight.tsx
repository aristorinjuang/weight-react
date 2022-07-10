import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import NotFound from './NotFound';

const Weight = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [difference, setDifference] = useState(0);
  const changeDate = (value: Date) => {
    setDate(value);
  }
  const changeMax = (value: number) => {
    setMax(value);
    setDifference(value - min);
  }
  const changeMin = (value: number) => {
    setMin(value);
    setDifference(max - value);
  }
  const createWeight = async (e: React.MouseEvent) => {
    e.preventDefault();

    await axios.post(`${process.env.REACT_APP_WEIGHT_HOST}/v1/weights`, {
      date: moment(date).format('YYYY-MM-DD'),
      max: max,
      min: min
    });

    navigate('/');
  }
  const updateWeight = async (e: React.MouseEvent) => {
    e.preventDefault();

    await axios.put(`${process.env.REACT_APP_WEIGHT_HOST}/v1/weights/${moment(date).format('YYYY-MM-DD')}`, {
      max: max,
      min: min
    });

    navigate('/');
  }

  useEffect(() => {
    if (location.pathname !== '/create' && max === 0 && min === 0) {
      axios.get(`${process.env.REACT_APP_WEIGHT_HOST}/v1/weights${location.pathname}`)
        .then(({ data }) => {
          let max = Number(data.data.weight.max);
          let min = Number(data.data.weight.min);

          setDisabled(true);
          setDate(new Date(data.data.weight.date));
          setMax(max);
          setMin(min);
          setDifference(data.data.weight.difference);
        })
        .catch((error) => {
          console.error(error);
        })
    }
  }, [location.pathname, max, min]);

  if (location.pathname !== '/create' && max === 0 && min === 0) {
    return <NotFound />
  }
  return (
    <form className="my-2 grid grid-cols-6 gap-1 sm:gap-2">
      <p className="my-2 col-span-2">
        <input
          disabled={disabled}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeDate(new Date(e.target.value))}
          defaultValue={moment(date).format('YYYY-MM-DD')}
          name="date"
          type="date"
          placeholder="Date"
          className={`h-8 w-full rounded-full text-xs ${disabled ? 'bg-gray-300' : ''}`}
        />
      </p>
      <p className="my-2">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeMax(Number(e.target.value))}
          defaultValue={max}
          name="max"
          type="number"
          placeholder="Max"
          className="h-8 w-full rounded-full text-xs"
        />
      </p>
      <p className="my-2">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeMin(Number(e.target.value))}
          defaultValue={min}
          name="min"
          type="number"
          placeholder="Min"
          className="h-8 w-full rounded-full text-xs"
        />
      </p>
      <p className="my-2">
        <input disabled name="difference" type="number" value={difference} className="h-8 w-full rounded-full text-xs bg-gray-300" />
      </p>
      <p className="my-2 text-center">
        <button
          onClick={(e: React.MouseEvent) => disabled ? updateWeight(e) : createWeight(e)}
          className="h-8 w-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-700 py-2 rounded-full font-semibold text-white text-xs"
        >
          Submit
        </button>
      </p>
    </form>
  )
}

export default Weight;