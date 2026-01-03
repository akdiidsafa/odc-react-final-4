
import Header from './components/Header';

function App() {
  const [userResults,setUserResult] = useState({correct:0,wrong:0,skipped:0})
  return (
    <div>
      
      <Header/>

    </div>
  );
}

export default App;
