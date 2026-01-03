import logo from './logo.svg';
import QuestionTimer from './components/QuestionTimer';
import { useState } from 'react';
import Summary from './components/Summary';

function App() {
  const [userResults,setUserResult] = useState({correct:0,wrong:0,skipped:0})
  return (
    <div>
      <QuestionTimer userResults={userResults} setUserResult={setUserResult} />
      <Summary />
    </div>
  );
}

export default App;
