




document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };



  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("myButton").onclick = function () {
    axios.get("http://localhost:4000/api/goals/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };




  const goalCallback = ({ data: goals }) => displayGoals(goal)
const errCallback = err => console.log(err)

const getAllGoals = () => axios.get(baseURL).then(goalCallback).catch(errCallback)
const createGoals = body => axios.post(baseURL, body).then(goalCallback).catch(errCallback)
const deleteGoals = id => axios.delete(`${baseURL}/${id}`).then(goalCallback).catch(errCallback)
const updateGoals = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(goalCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let nowGoal = document.querySelector('#nowGoal')
    let futureGoal = document.querySelector('#futureGoal')
    let feelingSelect = document.querySelector('feelingSelect')

    let bodyObj = {
        nowGoal: nowGoal.value,
        futureGoal: futureGoal.value, 
        feelingSelect: feelingSelect.value
    }

    createGoal(bodyObj)

    nowGoal.value = ''
    futureGoal.value = ''
    feelingSelect.value = ''

  }

  function createGoal(goal) {
    const goalCard = document.createElement('h2')
    goalCard.classList.add('goal-card')

    goalCard.innerHTML = `<img alt='house cover image' src=${house.imageURL} class="house-cover-image"/>
    <p class="address">${house.address}</p>
    <div class="btns-container">
        <button onclick="updateHouse(${house.id}, 'minus')">-</button>
        <p class="house-price">$${house.price}</p>
        <button onclick="updateHouse(${house.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteHouse(${house.id})">delete</button>
    `


    goalsContainer.appendChild(goalCard)
}

 
function displayGoals(arr) {
  goalContainer.innerHTML = ``
  for (let i = 0; i < arr.length; i++) {
      createGoalCard(arr[i])
  }
}

form.addEventListener('submit', submitHandler)

getAllGoals()
 