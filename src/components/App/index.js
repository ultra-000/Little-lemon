import Header from '../Header/index';
import MultiStepForm from '../MultistepForm/index';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto py-8 px-12">
        <h1 className="text-center text-3xl font-bold my-8">Reserve a Table</h1>
        <MultiStepForm />
      </main>
    </div>
  );
}

export default App;
