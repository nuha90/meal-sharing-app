window.handleMealsRequest = () => {
  document.body.innerHTML = `
  <!-- Links (sit on top) -->
  <div class="w3-top">
    <div class="w3-row w3-padding w3-black">
      <div class="w3-col s3">
        <a href="/" class="w3-button w3-block w3-black">
        <img src="https://logodix.com/logo/72166.gif"
       style="height:2rem; width:3rem"> Our Meal Sharing</a>
      </div>
      <div class="w3-col s3">
        <a href="/meals" class="w3-button w3-block w3-black">MENU</a>
      </div>
      <div class="w3-col s3">
        <a href="/reservations" class="w3-button w3-block w3-black">RESERVATION</a>
      </div>
      <div class="w3-col s3">
        <a href="/contact" class="w3-button w3-block w3-black">CONTACT</a>
      </div>
    </div>
    </div>
  
  <div class="search-bar">
  <input type="text" id="searchBar" autocomplete="on" placeholder="search for a meal" />
  </div>
<ul class="allMeals"></ul> `;

  const ul = document.querySelector(".allMeals");
  let mealTitle = document.getElementById("searchBar");
  let meal = [];

  mealTitle.addEventListener("keyup", e => {
    let mealTitleInput = e.target.value.toLowerCase();
    const filteredMeals = meal.filter(meal => {
      return meal.title.toLowerCase().includes(mealTitleInput);
    });
    ul.innerHTML = " ";
    displayAllMeals(filteredMeals);
  });

  const loadMeals = async () => {
    try {
      const res = await fetch("/api/meals");
      meal = await res.json();
      displayAllMeals(meal);
    } catch {
      console.log("error");
    }
  };
  function displayAllMeals(meals) {
    meals.map(meal => {
      const li = document.createElement("li");
      let x = Math.floor(Math.random() * 10 + 1);
      li.innerHTML = `
     <img src="../assets/random${x}.jpg" class="mealImages" >
      <div class="w3-container w3-margin-left w3-white">
      <h3>${meal.title}</h3>
      <h3>${meal.price} dkk</h3>
        <button class="w3-button w3-block w3-black w3-margin-bottom w3-margin-left reserve-meal"  data-id='${meal.id}' >
  Book meal</button>
  <button class="w3-button w3-block w3-blue w3-margin-bottom w3-margin-left reserve-meal"  data-id='${meal.id}' >
  <a href="/review/${meal.id}">Rating</a></button>
  </div>`;
      ul.appendChild(li);

      const selector = `.reserve-meal[data-id='${meal.id}']`;
      const but = document.querySelector(selector);
      but.addEventListener("click", () => {
        fetch(`/api/meals?availableReservations=true`)
          .then(response => response.json())
          .then(meals => {
            console.log(meal);
            const mealAvailable = meals.find(availableMeal => {
              return availableMeal.id === meal.id;
            });
            console.log({ mealAvailable });
            if (mealAvailable) {
              window.location.href = `/meal/${meal.id}`;
            } else {
              alert("sorry ! , no available reservation for this meal ");
            }
          });
      });
    });
  }
  loadMeals();
  router.updatePageLinks();
};
