import logo from './logo.svg';
import './App.css';
import WarehouseList from './components/WarehouseList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import WarehouseDetail from './components/WarehouseDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<WarehouseList />} />
          <Route path="edit/:id" element={<WarehouseDetail />} />

        </Routes>


      </Router>
    </div>
  );
}

export default App;
