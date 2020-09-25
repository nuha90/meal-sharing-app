window.handleHomeRequest = () => {
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

 <!-- Header with image -->
    <header class="bgimg w3-display-container " id="home">
    </header>

     <!-- About Container -->
      <div class="w3-container" id="about">
        <div class="w3-content" style="max-width: 700px">
          <h5 class="w3-center w3-padding-64">
         <strong>You don't have to cook fancy or complicated masterpieces - 
         just good food from fresh ingredients.
          </h5></strong>
          <div class="w3-panel w3-leftbar w3-light-grey">
            <p>
            The people who give you their food give you their heart.
           - Cesar Chavez -
            </p>
           </div>

       <div class="w3-row-padding w3-padding-16 w3-center" id="food">
      <div class="w3-quarter">
        <img src="../assets/random1.jpg" style="width:100%; height50%">
      </div>
      <div class="w3-quarter">
        <img src="../assets/random5.jpg"  style="width:100%">
      </div>
      <div class="w3-quarter">
        <img src="../assets/random7.jpg"  style="width:100%">
      </div>
      <div class="w3-quarter">
        <img src="../assets/random3.jpg"  style="width:100%">
      </div>
    </div>
      
   <!-- Menu Container -->
      <div class="w3-container" id="menu">
        <div class="w3-content" style="max-width: 700px">
          <h5 class="w3-center w3-padding-48">
           </h5>
</div>
      </div>
<p><strong>Add</strong> a new meal , and become our new host !</p>
          <form action="/action_page.php" target="_blank" id="myForm">
            <p>
              <input
                class="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Title"
                id="title"
                required
                
              />
            </p>
            <p>
              <input
                class="w3-input w3-padding-16 w3-border"
                type="number"
                placeholder="Price"
                id="price"
                required
               
              />
            </p>
            <p>
              <input
                class="w3-input w3-padding-16 w3-border"
                type="number"
                placeholder="max reservation"
                id="max-reservation"
                required
                
              />
            </p>
            <p>
              <input
                class="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="location"
                id="location"
                required
               
              />
            </p>
            
            <p>
              <button class="w3-button w3-black" type="submit">
                Add Meal
              </button>
            </p>
          </form>
        </div>
      </div>

      <!-- End page content -->
<footer class="w3-center w3-light-grey w3-padding-48 w3-large">
<a href="https://www.facebook.com/nuha.najah/" target="_blank">
<i class="fa fa-facebook-official w3-hover-opacity"></i></a>
<a href="https://www.linkedin.com/in/nouha-najah-90/" target="_blank">
<i class="fa fa-linkedin w3-hover-opacity"></i></a>
<a href="https://github.com/nuha90" target="_blank">
<i class="fa fa-github w3-hover-opacity"></i></a>   <br>       

<p>© 2020 Copyright :
     Nouha Najah</p>
  </div>
  </footer>`;

  const myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const location = document.getElementById("location").value;
    const maxReservation = document.getElementById("max-reservation").value;

    const data = {
      title: title,
      price: price,
      max_reservations: maxReservation,
      location: location,
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("/api/meals/", options)
      .then(response => response.json())
      .then(result => {
        alert("you just added a new meal");
        console.log("Success:", result);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
  router.updatePageLinks();
};
