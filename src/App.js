import Header from './components/Header';
import Quiz from './components/Quiz';

function App() {
  return (
    <>
      <div className='flex flex-col justify-start items-center pt-10 bg-[#300b59] min-h-screen'>
        <Header />
        <Quiz />
      </div>
    </>
  );
}

export default App;
