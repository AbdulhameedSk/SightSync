import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
