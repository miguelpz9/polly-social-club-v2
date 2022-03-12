import logo from './logo.svg';
import './App.css';
import { Header, Faq, Roadmap, Team, Utility } from './containers';
import { TextSection, Footer } from './components';

function App() {
  return (
    <div className="App flex flex-col justify-center">
      <Header />
      <Utility />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
