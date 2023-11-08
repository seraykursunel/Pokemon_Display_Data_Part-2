import { mockPokemonsData } from "../mock/pokeData";
import "../styles.css";

console.log(mockPokemonsData);

const PokeCards = () => {
  const poke = mockPokemonsData.map((pokemon) => {
    return (
      <>
        <h1>{pokemon.name}</h1>
        <section className="imageBox">
          <a href={pokemon.videoLink} target="_blank">
            <img
              src={pokemon.sprites.front_default}
              alt="{pokemon.name}"
              className="imageInn"
            />
            <img
              src={pokemon.sprites.front_shiny}
              alt="{pokemon.name}"
              className="hoverImg"
            />
          </a>
        </section>
      </>
    );
  });

  return <>{poke}</>;
};

export default PokeCards;
