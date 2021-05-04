/*import logo from './logo.svg';*/
import logo from '../../assets/logo.svg';
import Footer from '../footer';
import Header from '../header';
import News from '../news';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <News />
      <Footer />
    </div>
  );
}

export default App;
