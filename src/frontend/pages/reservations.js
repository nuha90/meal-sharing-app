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
        <a href="/reviews" class="w3-button w3-block w3-black">REVIEWS</a>
      </div>
    </div>
  </div>
  
  <ul class="reservations"></ul>`;

  fetch("/api/reservations")
    .then(response => response.json())
    .then(reservations => {
      const ul = document.querySelector(".reservations");
      reservations.forEach(reservation => {
        const li = document.createElement("li");
        let x = Math.floor(Math.random() * 6 + 1);
        li.innerHTML = `
        <img src="../assets/random${x}.jpg"  style="width:300px">
        <h3>${reservation.meal_id}</h3>
        <h3>${reservation.contact_name}</h3>
        `;
        ul.appendChild(li);
      });
    });
};
