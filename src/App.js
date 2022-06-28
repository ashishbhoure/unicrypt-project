import logo from './logo.svg';
import './App.css';
import Header from './componentes/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from './componentes/body';
import Footer from './componentes/footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
        <Footer />
      <Routes>
        {/* <Route exact path='/' element={<Page />}/> */}
        {/* <Route path='/borrow' element={<BrPage />}/>         */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
