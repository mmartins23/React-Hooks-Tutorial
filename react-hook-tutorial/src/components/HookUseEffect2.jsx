import { useState, useEffect } from 'react';

const HookUseEffect2 = () => {
  const [pokemon, setPokemon] = useState(null);  // State para armazenar os dados do Pokémon
  const [pokemonName, setPokemonName] = useState("pikachu");  // Nome padrão do Pokémon
  const [error, setError] = useState("");  // Estado para exibir mensagens de erro

  useEffect(() => {
    // Verificar se o campo de nome do Pokémon não está vazio
    if (!pokemonName) {
      setError("Por favor, insira o nome de um Pokémon.");
      setPokemon(null);  // Limpa os dados do Pokémon quando o campo está vazio
      return;
    }

    setError("");  // Limpa a mensagem de erro caso haja nome
    // Fazer a requisição na API do Pokémon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Pokémon não encontrado.");
        }
        return response.json();
      })
      .then(data => setPokemon(data))
      .catch(err => {
        setError(err.message);
        setPokemon(null);  // Limpar dados se houver erro
      });
  }, [pokemonName]);  // O efeito é executado sempre que pokemonName muda

  return (
    <div>
      <h1>Informações do Pokémon</h1>

      {/* Campo de input para alterar o nome do Pokémon */}
      <input
        type="text"
        value={pokemonName}
        onChange={e => setPokemonName(e.target.value.toLowerCase())}
        placeholder="Digite o nome de um Pokémon"
      />

      {/* Exibir mensagens de erro, se houver */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Exibir os dados do Pokémon, se disponíveis */}
      {pokemon && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};

export default HookUseEffect2;
