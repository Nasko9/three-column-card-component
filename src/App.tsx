// Components
import CardContainer from './components/CardContainer';

//Data
import data from './data/cardData.json';

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <CardContainer cardsData={data} />
    </div>
  );
}

export default App;
