import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './templates/Layout';
import Weight from './pages/Weight';
import Weights from './pages/Weights';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Weights />} />
          <Route path='*' element={<Weight />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
