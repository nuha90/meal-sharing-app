window.handleMealRequest = params => {
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


  
  
  <ul id="meals"></ul>
  
  <div class="wrapper">
  <div class="wrapper">
  
  <form id="myForm" class="form">
  <div class="input-feilds">
  
  <input type="number" id="mealId" class="input" placeholder="Meal Id:" value=${params.id}><br></input>
 
  <input type="text" id="name1" class="input" placeholder="Name:" required ><br></input>
 
  <input type="text" id="email" class="input" placeholder="Email:" required ><br></input>
 
  <input type="number" id="phone-number" class="input" placeholder="Phone Number:" required><br></input>
  <button type="submit" class="btn">Book Seat</button>
  </div>
  </form>
  </div>`;

  fetch(`/api/meals/${params.id}`)
    .then(response => response.json())
    .then(meals => {
      meals.find(meal => {
        const ul = document.getElementById("meals");
        const li = document.createElement("li");
        li.innerHTML = `<div class="meal-id-li">
        <h1 class="h4 card-title pt-4">${meal.title}</h1>
        <p class="card-text">Location: ${meal.location}</p>
        <p class="card-text">Max Reservation: ${meal.max_reservations}</p>
        <p class="card-text">Price: ${meal.price}</p>
       </div>
        `;
        ul.appendChild(li);
      });
    });
  const myForm = document.getElementById("myForm");

  myForm.addEventListener("submit", e => {
    e.preventDefault();
    const name1 = document.getElementById("name1").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const mealId = document.getElementById("mealId").value;

    const data = {
      contact_name: name1,
      contact_email: email,
      contact_phonenumber: phoneNumber,
      meal_id: mealId,
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("/api/reservations/", options)
      .then(response => response.json())
      .then(meal => {
        alert(`you have reserved this meal`);
        console.log("Success:", result);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
};
