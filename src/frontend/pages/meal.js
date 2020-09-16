window.handleMealRequest = params => {
  document.body.innerHTML = `
  <h1>Meal with id ${params.id}</h1>
  <ul id="meals"></ul>
  <form id="myForm">
  <label >Name:</label><br>
  <input type="text" id="fname" name="fname" ><br></input>
  <label>email:</label><br>
  <input type="text" id="fname" name="fname" ><br></input>
  <label >Phone number:</label><br>
  <input type="number" id="fname" name="fname"  ><br></input>
  <label >mealid:</label><br>
  <input type="number" id="fname" name="fname" value= ${params.id}><br></input>
  <button type="submit">Book Seat</button>
  </form>`;

  fetch(`/api/meals/${params.id}`)
    .then(response => response.json())
    .then(meals => {
      meals.find(meals => {
        ul = document.getElementById("meals");
        li = document.createElement("li");
        li.innerHTML = `Meal Name : ${meals.title} `;
        ul.appendChild(li);
      });
    });

  const myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", e => {
    console.log(this);
    e.preventDefault();
    //const formData = new FormData(this);
    const data = myForm;
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    fetch("/api/reservations/", options)
      .then(response => response.json())
      .then(result => {
        console.log("Success:", result);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
};
