import Header from './components/Header';
import Quiz from './components/Quiz';

function App() {  
  return (
    <>
      <div className='flex flex-col justify-start min-h-screen bg-gradient-to-b from-purple-900 to-slate-900 p-8'>
        <Header />
        <Quiz />
      </div>
    </>
  );
}

export default App;
