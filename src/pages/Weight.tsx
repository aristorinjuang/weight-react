import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import NotFound from '../atoms/typography/NotFound';
import Form from '../organisms/Form';

export default function Weight() {
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
  return <Form
    date={date}
    max={max}
    min={min}
    difference={difference}
    disabled={disabled}
    changeDateAction={changeDate}
    changeMaxAction={changeMax}
    changeMinAction={changeMin}
    submitAction={disabled ? updateWeight : createWeight}
  />
}