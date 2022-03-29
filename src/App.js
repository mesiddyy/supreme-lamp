
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { TopNavigationBar } from "./Components/NavigationBar"
import "./Styles/Home.scss"
import Tiles from "./Components/Tiles";
function App() {
  return (
    <div className="app-container">
      <TopNavigationBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Tiles />} />
      </Routes>
    </div>
  )
}
export default App;