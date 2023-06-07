import { TestPage, HomePage, ResultPage, NotFound } from './pages';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute';
import { useQuestionsStore } from './store/useQuestionsStore';

const App = () => {
  const { isIdentified } = useQuestionsStore();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route
          path="/test"
          element={
            <PrivateRoute isIdentified={isIdentified}>
              <TestPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
