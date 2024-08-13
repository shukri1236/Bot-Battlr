import { useEffect, useState } from "react";

// Adjust these paths if the components are located in a different directory
import BotCollection from "./components/BotCollection";
import BotDetails from "./components/BotDetails";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [botCollectionData, setBotCollectionData] = useState([]);
  const [selectedBotIndex, setSelectedBotIndex] = useState(0);
  const [armyIdList, setArmyIdList] = useState([]);
  const selectedBot = botCollectionData[selectedBotIndex];

  useEffect(() => { 
    fetch("http://localhost:5000/bots")
      .then((response) => response.json())
      .then(setBotCollectionData)
      .catch(console.error);
  }, []); 

  const updateBotIndex = (index) => setSelectedBotIndex(index);

  const armyList = botCollectionData.filter((bot) =>
    armyIdList.includes(bot.id)
  );

  const addToArmy = (id) => setArmyIdList([...armyIdList, id]);

  const releaseFromArmy = (id) => {
    const newArmyIdList = armyIdList.filter((armyId) => armyId !== id);
    setArmyIdList(newArmyIdList);
  };

  const dischargeFromService = (id) => {
    const newBotCollectionData = botCollectionData.filter(
      (bot) => bot.id !== id
    );
    setBotCollectionData(newBotCollectionData);
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <BotCollection
            collection={botCollectionData}
            onSelect={updateBotIndex}
            onDischarge={dischargeFromService}
          />
        </div>
        <div className="col">
          <div className="sticky-top d-flex flex-column gap-4">
            <BotDetails bot={selectedBot} onAdd={addToArmy} />
            <YourBotArmy armyList={armyList} onRelease={releaseFromArmy} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
