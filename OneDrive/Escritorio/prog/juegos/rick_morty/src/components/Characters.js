import React from "react";

export default function Characters(props) {
  const { characters, setCharacters } = props;

  const resetCharacters = () => {
    setCharacters(null);
  };

  console.log(characters);

  return (
    <div className="characters">
        <div class="loadingspinner">
          <div id="square1"></div>
          <div id="square2"></div>
          <div id="square3"></div>
          <div id="square4"></div>
          <div id="square5"></div>
        </div>
      <h1>Personajes</h1>
      <button className="btn-search" onClick={resetCharacters}>
        Volver a la home
      </button>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div >
              <img src={character.image} alt={character.name} />
            </div>
              <div className="">
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
            
          </div>
        ))}
      </div>
      <button className="btn-search" onClick={resetCharacters}>
        Volver a la home
      </button>
      <div class="loadingspinner">
          <div id="square1"></div>
          <div id="square2"></div>
          <div id="square3"></div>
          <div id="square4"></div>
          <div id="square5"></div>
        </div>
    </div>
  );
}