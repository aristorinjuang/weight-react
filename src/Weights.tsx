import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Loading from './Loading';

type weight = {
  date: Date,
  difference: number,
  max: number,
  min: number
}

type weights = weight[]

const Weights = () => {
  const [loading, setLoading] = useState(true);
  const [weights, setWeights] = useState<weights>([]);
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
  return (
    <table className="table-auto mx-auto my-2">
      <thead>
        <tr>
          <th className="p-2">Date</th>
          <th className="p-2">Max</th>
          <th className="p-2">Min</th>
          <th className="p-2">Difference</th>
          <th className="p-2">
            <Link
              to="/create"
              className="cursor-pointer bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-700 px-5 py-2 leading-5 rounded-full font-semibold text-white"
            >
              Create
            </Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {weights && weights.map((weight: weight) => 
          <tr key={moment(weight.date).format('YYYY-MM-DD')}>
            <td className="p-2">
              <Link to={'/' + moment(weight.date).format('YYYY-MM-DD')} className="hover:underline">
                {moment(weight.date).format('YYYY-MM-DD')}
              </Link>
            </td>
            <td className="p-2">{weight.max}</td>
            <td className="p-2">{weight.min}</td>
            <td className="p-2">{weight.difference}</td>
            <td className="p-2">
              <button
                onClick={() => window.confirm('Are you sure want to delete this?') && deleteWeight(weight.date)}
                className="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 px-5 py-2 leading-5 rounded-full font-semibold text-white"
              >
                Delete
              </button>
            </td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <th className="p-2">Average</th>
          <th className="p-2 text-left">{averageMax}</th>
          <th className="p-2 text-left">{averageMin}</th>
          <th className="p-2 text-left">{averageDifference}</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
}

export default Weights;