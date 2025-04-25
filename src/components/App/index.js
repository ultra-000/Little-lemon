
import './index.css';
import Header from '../Header/index';
import Footer from '../Footer/index';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto py-8 px-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
