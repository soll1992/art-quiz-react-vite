import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'consts';
import Home from 'pages/Home';
import Categories from 'pages/Categories';
import Quiz from 'pages/Quiz';
import Settings from 'pages/Settings';
import Score from 'pages/Score';
import Today from 'pages/Today';
import ErrorPage from 'pages/ErrorPage';

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
