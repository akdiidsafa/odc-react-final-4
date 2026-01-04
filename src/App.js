import Header from './components/Header';
import Quiz from './components/Quiz';

function App() {
  const [userResults,setUserResult] = useState({correct:0,wrong:0,skipped:0})
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
