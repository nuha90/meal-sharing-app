window.handleMealsRequest = () => {
  document.body.innerHTML = `
  <h1>Meals</h1><h1>Meals</h1>
  <ul></ul>
  <a href="meal/1" data-navigo id="meal/1"></a>
  <a href="meal/:id" data-navigo>meal 3</a>`;

  fetch("/api/meals")
    .then(response => response.json())
    .then(meals => {
      //getAttribute("href");

      meals.filter(meal => {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        const link = "meal/:id";
        li.innerHTML = ` ${link} :${meal.title} `;

        ul.appendChild(li);
      });
    });
};
