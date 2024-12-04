import './App.css';
import ProjectWeeks from './components/ProjectWeeks';
import StudentProjects from './components/StudentProjects';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ProjectWeeks /> */}
      <StudentProjects/>
    </div>
  );
}

export default App;
