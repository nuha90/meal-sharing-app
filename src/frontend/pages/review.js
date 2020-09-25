window.handleReviewsRequest = params => {
  document.body.innerHTML = `
    
    <ul id="meals" ></ul>
    
  
 `;
  fetch(`/api/reviews/${params.id}`)
    .then(response => response.json())
    .then(meals => {
      meals.find(meal => {
        const ul = document.getElementById("meals");
        const li = document.createElement("li");
        li.innerHTML = `<div class="meal-id-li">
        <h1 class="h4 card-title pt-4">${meal.title}</h1>
       </div>
        `;
        ul.appendChild(li);
      });
    });
  //   const myForm = document.getElementById("myForm");

  //   myForm.addEventListener("submit", e => {
  //     e.preventDefault();

  //     const description = document.getElementById("description").value;
  //     const stars = document.getElementById("stars").value;
  //     const mealId = document.getElementById("mealId").value;

  //     const data = {
  //       description: description,
  //       stars: stars,
  //       meal_id: mealId,
  //     };
  //     console.log(data);
  //     const options = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     };

  //     fetch("/api/reviews/", options)
  //       .then(response => response.json())
  //       .then(result => {
  //         alert(`thank you for your review !`);
  //         console.log("Success:", result);
  //       })
  //       .catch(error => {
  //         console.error("Error:", error);
  //       });
  //   });
};
