import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';

const INITIAL_USER_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10

};


function App() {
  const [userInput, setUserInput] = useState({ ...INITIAL_USER_INPUT });
  return (
    <>
      <Header />
      <UserInput inputValues={userInput}/>
    </>
  )
}

export default App
