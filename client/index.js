

const gifBtn = document.getElementById("gif-btn");
const gifSection = document.getElementById("gif-section");
const formGoal = document.getElementById("formGoal"); // name of form
const nowGoal = document.getElementById("nowGoal");// Now goal section
const futureGoal = document.getElementById("futureGoal")// future goal section
const feeling = document.getElementById("feelingSelect")// feeling dropdown menu

const feelingSection = document.getElementById("feeling-list") // where the information is going to show

const submitBtn = document.getElementById("myButton")



// Compliment Button
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };


// Fortune button
  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("myButton").onclick = function () {
    axios.get("http://localhost:4000/api/goal/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };



  //Delete an item
  const deleteItem = (id) => {
    axios.delete(`http://localhost:4000/api/goal/${id}`)
    .then((res) => {
      displayItems(res.data);
    });
  };

  const createItem = (item) => {
    const newItem = document.createElement("div");

      newItem.className = "new-item";
      newItem.innerHTML = `<h1 class='nowGoal'>${item.nowGoal}</h1>
        <p>Future Goal: ${item.futureGoal}</p>
        <p>Feeling: ${item.feeling}</p>
        <button class='delete-btn' value="${item.id}">delete</button>`;

        feelingSection.appendChild(newItem);

        let deleteBtns = document.getElementsByClassName("delete-btn");

        for (let i = 0; i < deleteBtns.length; i++) {
          deleteBtns[i].addEventListener("click", deleteItem);
        }

  }

  //makes the cards to display the items
  const displayItems = (arr) => {
    // console.log(arr);
    while(feelingSection.firstChild) {
      feelingSection.removeChild(feelinglist.firstChild);
    }

    for (let i = 0; i < arr.length; i++) {
      createItem(arr[i])
    }
  };

// Adding a feeling item
formGoal.addEventListener("submit", (e) => {
  e.preventDefault();

  const newItem = {
    nowGoal: nowGoal.value,
    futureGoal: futureGoal.value,
    feeling: feeling.selectedIndex
  };
  axios.post("http://localhost:4000/api/goal", newItem)
    .then((res) => {
      displayItems(res.data);
    });

    nowGoal.value = "";
    futureGoal.value = "";
    feeling.selectedIndex = 0;
});








// Gif button
gifBtn.addEventListener("click", () => {

  while (gifSection.firstChild) {
    gifSection.removeChild(gifSection.firstChild);
  }

  axios.get('http://localhost:4000/api/gif')
    .then((res) => {
      const gif = document.createElement("img");
      gif.setAttribute("src", res.data);
      gif.setAttribute("alt", "whassup");
      gif.setAttribute("id", "gif");
      gifSection.appendChild(gif);
    });
})