import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyJumbotron from './components/MyJumbotron';
import MyNavbar from './components/MyNavbar';
import MiddleBar from './components/MiddleBar';
import Hourly from './components/Hourly';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyJumbotron />
      <MiddleBar />
      <Hourly />
    </div>
  );
}

export default App;
