import React from 'react';
import Content from './Content';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content kay="general" category="general" />} />
          <Route path="/business" element={<Content key="business" category="business" />} />
          <Route path="/health" element={<Content key="health" category="health" />} />
          <Route path="/entertainment" element={<Content key="entertainment" category="entertainment" />} />
          <Route path="/science" element={<Content key="science" category="science" />} />
          <Route path="/technology" element={<Content key="technology" category="technology" />} />
          <Route path="sports" element={<Content key="sports" category="sports" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;