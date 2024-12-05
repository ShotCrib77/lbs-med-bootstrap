import './App.css';
import ProjectWeeks from './components/ProjectWeeks';
import StudentProjects from './components/StudentProjects';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/projectweeks"
            element={<ProjectWeeks />}
          />
            

          <Route path="/studentprojects" 
            element={<StudentProjects />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
