import Main from "./containers/Main";
import Navbar from "./containers/Navbar";
import Sidebar from "./containers/Sidebar";
import './pages/app.scss';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className="content">
      <Navbar/>
      <Main/>
      </div>
    
    </div>
  );
}

export default App;
