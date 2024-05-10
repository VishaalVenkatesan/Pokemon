import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Search from './components/Search.jsx';
import Results from './components/Result.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search/> } />
          <Route path="/result" element={<Results/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;