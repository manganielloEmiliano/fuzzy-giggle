import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp,Login ,Home,PrivateRoute,PublicRoute} from './components';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


