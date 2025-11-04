// ✅ Importation de React
import React from "react";
// ✅ Importation du composant Card depuis react-bootstrap
import { Card } from "react-bootstrap";

// ✅ Déclaration du composant Player avec déstructuration des props et valeurs par défaut
const Player = ({
  name = "Inconnu",
  team = "Équipe inconnue",
  nationality = "Non spécifiée",
  shirtNumber = "Inconnu",
  age = "Inconnu",
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2GYXTUofPO4N5tSHkbDo-VtwFdKdfQlFfA&s"
}) => {
  // ✅ Rendu de la carte du joueur
  return (
    // ✅ Composant Card avec style en ligne
    <Card
      style={{
        width: "18rem",            // largeur fixe
        margin: "20px",            // espace autour de la carte
        borderRadius: "15px",      // coins arrondis
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // ombre douce
        transition: "transform 0.3s", // effet de transition
      }}
      // ✅ Ajout d’un effet au survol (zoom léger)
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* ✅ Image du joueur avec style en ligne */}
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{
          height: "250px",
          objectFit: "cover", // recadrer proprement
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />

      {/* ✅ Corps de la carte */}
      <Card.Body style={{ backgroundColor: "#f9f9f9" }}>
        {/* ✅ Nom du joueur */}
        <Card.Title style={{ color: "#007bff", textAlign: "center" }}>{name}</Card.Title>

        {/* ✅ Informations du joueur */}
        <Card.Text><strong>Équipe :</strong> {team}</Card.Text>
        <Card.Text><strong>Nationalité :</strong> {nationality}</Card.Text>
        <Card.Text><strong>Numéro :</strong> {shirtNumber}</Card.Text>

        {/* ✅ Âge : on affiche “ans” seulement si age est un nombre */}
        <Card.Text>
          <strong>Âge :</strong>{" "}
          {typeof age === "number" ? `${age} ans` : age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
// ✅ Export du composant Player
export default Player;
