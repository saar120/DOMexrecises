function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (num) {
  console.log(`${this.name} used ${this.attackList[num]}`);
};

const pikachu = new Pokemon("Pikachu", "lightning", ["zetz", "zap", "zip"]);
const Bulbasaur = new Pokemon("Bulbasaur", "grass", ["one", "two", "three"]);
const Charizard = new Pokemon("Charizard", "fire", ["fire", "FIRE", "FiRe"]);

pikachu.attack(2);
pikachu.callPokemon();

Charizard.attack(2);
