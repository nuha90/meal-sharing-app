window.handleReservationsRequest = params => {
  document.body.innerHTML = `
  <!-- Links (sit on top) -->
  <div class="w3-top">
    <div class="w3-row w3-padding w3-black">
      <div class="w3-col s3">
        <a href="/" class="w3-button w3-block w3-black"><img src="https://logodix.com/logo/72166.gif"
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
  
  <ul class="reservations"></ul>`;

  function fetchUrls(url) {
    return fetch(url).then(res => res.json());
  }

  Promise.all([fetchUrls("/api/meals"), fetchUrls("/api/reservations")]).then(
    data => {
      let meals = data[0];
      let reservations = data[1];
      const map = meals.map(meal => {
        const ul = document.querySelector(".reservations");
        reservations.filter(reservation => {
          if (meal.id === reservation.meal_id) {
            const li = document.createElement("li");
            let x = Math.floor(Math.random() * 10 + 1);
            li.innerHTML = `
        <img src="../assets/random${x}.jpg"  style="width:300px">
        <h3>one <strong> ${meal.title}</strong></h3>
        <h3>for ${reservation.contact_name}</h3>
        `;
            ul.appendChild(li);
          }
        });
      });
    }
  );
};
