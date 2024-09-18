var unpurchasedItems = [];
var purchasedItems = [];

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop; 
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function saveGame() {
        const gameData = {
          purchasedItems: purchasedItems,
          unpurchasedItems: unpurchasedItems,
          };
        localStorage.setItem('clickerGameData', JSON.stringify(gameData));
        document.getElementById("cart").innerHTML = JSON.stringify(gameData);
      }

function addSimon() {
  unpurchasedItems.push("Simon");
  saveGame();
}

function addClick() {
  unpurchasedItems.push("Click");
  saveGame();
}

function addPhishing() {
  unpurchasedItems.push("Phishing");
  saveGame();
}
