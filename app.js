const heroName = prompt("Informe o nome do herói ou heroína:");
const numberOfWins = parseInt(prompt("Informe a quantidade de vitórias: "));
const numberOfDefeats = parseInt(prompt("Informe a quantidade de derrotas: "));

const HeroLevel = function (numberOfWins) {
  let level;
  if (numberOfWins <= 10) {
    level = "Ferro";
  } else if (numberOfWins >= 11 && numberOfWins <= 20) {
    level = "Bronze";
  } else if (numberOfWins >= 21 && numberOfWins <= 50) {
    level = "Prata";
  } else if (numberOfWins >= 51 && numberOfWins <= 80) {
    level = "Ouro";
  } else if (numberOfWins >= 81 && numberOfWins <= 90) {
    level = "Diamante";
  } else if (numberOfWins >= 91 && numberOfWins <= 100) {
    level = "Lendário";
  } else if (numberOfWins >= 101) {
    level = "Imortal";
  }
  return level;
};

function winningBalance(numberOfWins, numberOfDefeats) {
  const result = numberOfWins - numberOfDefeats;
  const level = HeroLevel(numberOfWins);
  alert(
    `O herói ou heroína: ${heroName}, tem um saldo de rankeadas = ${result} e está no nível = ${level}`
  );
}

winningBalance(numberOfWins, numberOfDefeats);
