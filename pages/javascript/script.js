window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop; 
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
/*
function toggleDarkMode() {
  const body = document.body;
  const contentDivs = document.querySelectorAll('.content, .postcontent');
  const h1Elements = document.querySelectorAll('h1');
  const pElements = document.querySelectorAll('p');
  const angryElements = document.querySelectorAll('p.angryerror');
  const linkElements = document.querySelectorAll('a');
  const navbar = document.querySelectorAll('.navbar a'); // Select all of these items.

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');

    // Light mode styles
    contentDivs.forEach(div => {
      div.style.backgroundColor = '#f0f0f0'; // Light background
    });
    h1Elements.forEach(h1 => {
      h1.style.color = '#333333'; // Dark text
      h1.style.backgroundColor = '#f0f0f0'; // Light background
    });
    pElements.forEach(p => {
      p.style.color = '#333333'; // Dark text
      p.style.backgroundColor = '#f0f0f0'; // Light background
    });
    angryElements.forEach(p => {
      p.style.color = '#ff0051'; // Pink text
      p.style.backgroundColor = '#f0f0f0'; // Light background
    });
    linkElements.forEach(a => {
      a.style.color = '#62ff00'; // Dark text
      a.style.backgroundColor = '#f0f0f0'; // Light background
    });
    navbar.forEach(div => {
      div.style.color = '#333333'; // Dark text
      div.style.backgroundColor = '#f0f0f0'; // Light background
    });
  } else {
    body.classList.add('dark-mode');

    // Dark mode styles
    contentDivs.forEach(div => {
      div.style.backgroundColor = '#333333'; // Dark background
    });
    h1Elements.forEach(h1 => {
      h1.style.color = '#eeeeee'; // Light text
      h1.style.backgroundColor = '#333333'; // Dark background
    });
    pElements.forEach(p => {
      p.style.color = '#eeeeee'; // Light text
      p.style.backgroundColor = '#333333'; // Dark background
    });
    angryElements.forEach(p => {
      p.style.color = '#ff0051'; // Pink text
      p.style.backgroundColor = '#333333'; // Dark background
    });
    linkElements.forEach(a => {
      a.style.color = '#62ff00'; // Light text
      a.style.backgroundColor = '#33333e'; // Dark background
    });
    navbar.forEach(div => {
      div.style.color = '#eeeeee'; // Light text
      div.style.backgroundColor = '#333333'; // Dark background
    });
  }
}
*/
var unpurchasedItems = [];
var purchasedItems = [];

function saveCart() {
  const cartData = {
    purchasedItems: purchasedItems,
    unpurchasedItems: unpurchasedItems,
  };
  localStorage.setItem('shopCartData', JSON.stringify(cartData));

  // Display the cart contents
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";
  cartData.purchasedItems.forEach(item => {
    const purchasedItemElement = document.createElement("p");
    purchasedItemElement.textContent = `Purchased: ${item}`;
    cartElement.appendChild(purchasedItemElement);
  });
  cartData.unpurchasedItems.forEach(item => {
    const unpurchasedItemElement = document.createElement("p");
    unpurchasedItemElement.textContent = `Unpurchased: ${item}`;
    cartElement.appendChild(unpurchasedItemElement);
  });
}

function addSimon() {
  unpurchasedItems.push("Simon");
  saveCart();
}

function addClick() {
  unpurchasedItems.push("Click");
  saveCart();
}

function addPhishing() {
  unpurchasedItems.push("Phishing");
  saveCart();
}
