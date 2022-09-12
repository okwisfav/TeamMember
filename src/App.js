import './App.css';
import Content from './Content';
import Employees from './Employees';
import Footer from './Footer';
import Header from './Header';
function App() {
  return (
    <div className="App">
        <Header />
        <Footer/>
        <Content />
        <Employees />
    </div>
  );
}

export default App;
