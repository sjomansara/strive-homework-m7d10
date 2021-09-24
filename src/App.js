import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyJumbotron from './components/MyJumbotron';
import MyNavbar from './components/MyNavbar';
import MiddleBar from './components/MiddleBar';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyJumbotron />
      <MiddleBar />
    </div>
  );
}

export default App;
