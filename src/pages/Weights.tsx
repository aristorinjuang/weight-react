import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Loading from '../atoms/typography/Loading';
import Table from '../organisms/Table';
import { Weights as WeightsType } from '../molecules/table/TableBody';

export default function Weights() {
  const [loading, setLoading] = useState(true);
  const [weights, setWeights] = useState<WeightsType>([]);
  const [averageMax, setAverageMax] = useState(0);
  const [averageMin, setAverageMin] = useState(0);
  const [averageDifference, setAverageDifference] = useState(0);
  const initialize = () => axios.get(`${process.env.REACT_APP_WEIGHT_HOST}/v1/weights`)
    .then(({ data }) => {
      setWeights(data.data.weights);
      setAverageMax(data.data.average.max);
      setAverageMin(data.data.average.min);
      setAverageDifference(data.data.average.difference);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
    })
  const deleteWeight = (date: Date) => {
    setLoading(true);

    axios.delete(`${process.env.REACT_APP_WEIGHT_HOST}/v1/weights/${moment(date).format('YYYY-MM-DD')}`);
    
    initialize()
  }

  useEffect(() => {
    initialize()
  }, [loading]);

  if (loading) {
    return <Loading />
  }
  return <Table
    items={weights}
    average={{
      max: averageMax,
      min: averageMin,
      difference: averageDifference
    }}
    deleteAction={deleteWeight}
   />
}