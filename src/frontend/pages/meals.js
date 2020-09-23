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

  <ul class="allMeals"></ul>
  `;

  fetch("/api/meals")
    .then(response => response.json())
    .then(meals => {
      const ul = document.querySelector(".allMeals");
      meals.forEach(meal => {
        const li = document.createElement("li");
        let x = Math.floor(Math.random() * 6 + 1);
        li.innerHTML = `
        <img src="../assets/random${x}.jpg" alt="Norway" style="width:300px">
        <h3>${meal.title}</h3>
        <h3>${meal.price} dkk</h3>
        <button class="w3-button w3-block w3-black w3-margin-bottom reserve-meal">
        <a href="/meal/${meal.id}">Book meal</a></button>
        `;
        ul.appendChild(li);
      });
    });
  router.updatePageLinks();
};
