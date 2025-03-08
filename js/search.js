
const mangaManhwaList = [
	"1 to 10",
	"A Tree without Roots",
	"Akira",
	"Apotheosis",
	"Attack on Titan",
	"Bastard",
	"Berserk",
	"Black Clover",
	"Bleach",
	"Blue Exorcist",
	"Chainsaw Man",
	"Dear Teddy Bear",
	"Death Note",
	"Demon Slayer",
	"Dice",
	"Dragon Ball",
	"Eleceed",
	"Fairy Tail",
	"Fullmetal Alchemist",
	"God of Blackfield",
	"Gosu",
	"Hardcore Leveling Warrior",
	"Hunter x Hunter",
	"I Love Yoo",
	"Immortal Swordsman in the Reverse World",
	"Jinx",
	"Jujutsu Kaisen",
	"Jungle Juice",
	"Killing Stalking",
	"Kubera",
	"Kuroko No Basket",
	"Limited Run",
	"Lookism",
	"Lore Olympus",
	"Lost in the Cloud",
	"Martial Peak",
	"Mob Psycho 100",
	"Murim Login",
	"Mushoku Tensei",
	"My Hero Academia",
	"Nano Machine",
	"Naruto Shippuden",
	"Nerd Project",
	"Noblesse",
	"Omniscient Reader",
	"One Piece",
	"One Punch Man",
	"Only Hope",
	"Ouran High School",
	"Painter of the Night",
	"Passion",
	"Projection",
	"Railgun",
	"Re:Zero",
	"Rebirth of the Urban Immortal Cultivator",
	"Sadistic Beauty",
	"Second Life Ranker",
	"Solo Leveling",
	"Soul Eater",
	"Sweet Home",
	"Tales of Demons and Gods",
	"The Beginning After the End",
	"The Boxer",
	"The Breaker",
	"The Gamer",
	"The God of High School",
	"The Legendary Moonlight Sculptor",
	"The Promised Neverland",
	"Tower of God",
	"True Beauty",
	"Unordinary",
	"Vagabond",
	"Versatile Mage",
	"Vinland Saga",
	"Wind Breaker",
	"Yu Yu Hakusho"
  ];
  
  const resultBox = document.querySelector(".results");
  const inputBox = document.querySelector(".search-bar");
  
  const displayResults = function (result) {
	const resultHTML = result.map(function (title) {
	  return `<li onclick=selectInput(this)>${title}</li>`;
	});
  
	resultBox.innerHTML = '<ul>' + resultHTML.join("") + '</ul>';
  }
  
  inputBox.onkeyup = function (e) {
	let result = [];
  
	const input = inputBox.value.toLowerCase();
  
	if (input.length === 0) {
	  resultBox.innerHTML = "";
	}
  
	if (input.length) {
	  result = mangaManhwaList.filter((title) => {
		return title.toLowerCase().includes(input);
	  });
  
	  displayResults(result);
	}
  };
  
  function selectInput(title) {
	inputBox.value = title.innerText;
	resultBox.innerHTML = "";
  };
  