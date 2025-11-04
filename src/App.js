// ✅ Importation de React
import React from "react";
// ✅ Importation du composant PlayerList
import PlayersList from "./components/PlayersList";

// ✅ Déclaration du composant principal App
function App() {
  // ✅ Rendu du composant PlayerList
  return (
    <div className="App">
      {/* ✅ Appel du composant PlayerList pour afficher les cartes */}
      <PlayersList />
    </div>
  );
}

// ✅ Exportation du composant App
export default App;
