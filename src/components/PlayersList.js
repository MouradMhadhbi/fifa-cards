// ✅ Importation de React pour définir le composant
import React from "react";
// ✅ Importation du composant Player (carte du joueur)
import Player from "./Player";
// ✅ Importation des données des joueurs depuis le dossier data
import players from "../data/players";
// ✅ Importation des composants de mise en page Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// ✅ Déclaration du composant PlayerList
const PlayersList = () => {
  // ✅ Retour de la structure d’affichage
  return (
    // ✅ Conteneur principal Bootstrap
    <Container style={{ marginTop: "30px" }}>
      {/* ✅ Titre de la page */}
      <h2 className="text-center mb-4">🌍 Cartes des Joueurs FIFA</h2>
      {/* ✅ Ligne pour organiser les colonnes */}
      <Row className="justify-content-center">
        {/* ✅ Boucle .map pour parcourir le tableau de joueurs */}
        {players.map((player, index) => (
          // ✅ Chaque joueur est affiché dans une colonne responsive
          <Col key={index} md={4} lg={3} className="d-flex justify-content-center">
            {/* ✅ Utilisation de l’opérateur de propagation pour passer toutes les props */}
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// ✅ Exportation du composant PlayerList
export default PlayersList;
