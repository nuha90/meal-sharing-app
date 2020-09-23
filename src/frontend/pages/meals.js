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
        <a href="/reviews" class="w3-button w3-block w3-black">REVIEWS</a>
      </div>
    </div>
  </div>
  <h1> Our Meals</h1>

  <div class="search-bar">
      
        <input type="text" id="searchBar" autocomplete="off" placeholder="search for a meal" />
      </div>


  <ul class="allMeals"></ul>
  `;

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
      console.log(error);
    }
  };
  function displayAllMeals(meals) {
    meals.map(meal => {
      const li = document.createElement("li");
      let x = Math.floor(Math.random() * 6 + 1);
      li.innerHTML = `
    <img src="../assets/random${x}.jpg"  style="width:300px">
    <h3>${meal.title}</h3>
    <h3>${meal.price} dkk</h3>
    <button class="w3-button w3-block w3-black w3-margin-bottom reserve-meal">
    <a href="/meal/${meal.id}">Book meal</a></button>
    `;
      ul.appendChild(li);
    });
  }
  loadMeals();
  router.updatePageLinks();
};
