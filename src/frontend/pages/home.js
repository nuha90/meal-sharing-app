window.handleHomeRequest = () => {
  document.body.innerHTML = `
  <div class="container">
  <img src="https://i.ndtvimg.com/i/2016-05/arabic-food_625x350_71463118204.jpg">
  <div class="centered"><h1 class="meal-sharing">Welcome To Our Meal Sharing </h1></div></div>
  <section>
  <h1>Go TO See Our<a href="meals" data-navigo> Meals</a></h1><br>
  <label>Reserve a meal</label><br>
   <input type="text" id="searchBar" />
   <h3></h3><br>
  
  <h1>MENU</h1>
  <a href="meals" data-navigo>Meals</a>
  <a href="meal/1" data-navigo>meal 1</a>
  <a href="meal/2" data-navigo>meal 2</a>
  <a href="meal/3" data-navigo>meal 3</a>
  </section>
  <footer><div class="footer">
  <a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-instagram"></a><div>
</footer>
  `;
  let mealTitle = document.getElementById("searchBar");
  mealTitle.addEventListener("keyup", () => {
    let mealTitleInput = document
      .getElementById("searchBar")
      .value.toLowerCase();
    let url = "/api/meals?" + "title=" + mealTitleInput;
    if (mealTitleInput != "") {
      fetch(url)
        .then(response => response.json())
        .then(meals => {
          h3 = document.querySelector("h3");
          meals.forEach(meals => {
            h3.innerHTML = `${meals.title}`;
            //   li = document.createElement("li");
            //   meals.forEach(meals => {
            //     li.innerHTML = `
            //     <ul>
            //         <li>${meals.title}</li>
            //         <li>${meals.price}</li>
            //     </ul>
            // `;
            document.body.appendChild(h3);
          });
        });
    } else {
      console.log("lllll");
    }
  });

  router.updatePageLinks();
};
