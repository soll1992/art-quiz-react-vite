import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import Categories from '../../Pages/Categories';
import Quiz from '../../Pages/Quiz';
import Settings from '../../Pages/Settings';
import Score from '../../Pages/Score';
import Today from '../../Pages/Today';
import { AppRoutes } from '../../consts';
import ErrorPage from '../../Pages/ErrorPage';

export default function RootRouter() {
  return (
    <div>
      <Routes>
        <Route path={`${AppRoutes.Root}`} element={<Home />} />
        <Route path={`${AppRoutes.Settings}`} element={<Settings />} />
        <Route path={`${AppRoutes.Today}`} element={<Today />} />
        <Route path={`${AppRoutes.Quiz}`} element={<Categories />} />
        <Route path={`${AppRoutes.Quiz + AppRoutes.Category}`} element={<Quiz />} />
        <Route path={`${AppRoutes.Quiz + AppRoutes.Category + AppRoutes.Score}`} element={<Score />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
