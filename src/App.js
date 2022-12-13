import HomePage from "./pages/HomePage";
import { Route, Routes, Link } from "react-router-dom"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
`;

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage />} />

    </Routes>
    </div>
  );
}

export default App;
