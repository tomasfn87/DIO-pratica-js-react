import './App.css';
import Title from './components/Title.tsx';

const App = () => {
  return (
    <div className="App">
      <Title color="red">My component receives the color</Title>
      <Title color="green">My component receives the color</Title>
      <Title color="blue">My component receives the color</Title>
      <Title color="pink" comment=", but this value is not listed as a prop... so it throws an error on the console">My component receives the color</Title>
      <Title comment=", which is the default color">My component receives the color</Title>
    </div>
  );
}

export default App;
