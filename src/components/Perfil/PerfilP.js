import { useState } from "react";
import "../../Styles/PerfilStyles.css";
import EditableUserProfile from "../Perfil/EditarPerfil";
import UserProfile from "../Perfil/UsuarioPerfil";

/* Arreglo cambio de imagen */
const animals = [
  "Aardvark",
  "Albatross",
  "Alpaca",
  "Alligator",
  "Anchovie",
  "Angelfish",
  "Ant",
  "Antelope",
  "Armadillo",
  "Aurochs",
  "Axolotl",
];

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function randomName() {
  return "Anonymous " + animals[Math.floor(Math.random() * animals.length)];
}

function PerfilP() {
  const now = new Date(Date.now());
  const defaultBirthday = new Date(now.getTime() + 86400000);

  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState(randomName());
  const [month, setMonth] = useState(defaultBirthday.getMonth());
  const [day, setDay] = useState(defaultBirthday.getDate());
  const [color, setColor] = useState(randomColor());

  const stored = { name, month, day, color };
  const isBirthdayToday = now.getMonth() === month && now.getDate() === day;

  function handleEditComplete(result) {
    console.log("handleEditComplete", result);
    if (result != null) {
      setName(result.name);
      setMonth(result.month);
      setDay(result.day);
      setColor(result.color);
    }
    setEditMode(false);
  }

  return (
    <>
      <main className="ContainerMayor">
        <section className="sectionPerfil">
          <div className="containerPerfil">
            <div className="AppPerfil">
              {editMode ? (
                <>
                  <h1 className="titPerfil">My Profile</h1>
                  <EditableUserProfile
                    stored={stored}
                    editCompleteCallback={handleEditComplete}
                  />
                </>
              ) : (
                <>
                  {isBirthdayToday ? (
                    <div className="birthday">Happy Birthday!</div>
                  ) : (
                    <h1>My Profile</h1>
                  )}
                  <UserProfile
                    stored={stored}
                    startEditCallback={() => setEditMode(true)}
                  />
                </>
              )}
            </div>
          </div>
          <div className="changes"> 
          
          </div>
        </section>
      </main>
    </>
  );
}

export default PerfilP;
