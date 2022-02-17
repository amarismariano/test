const arr = [
  {
    gender: "male",
    name: "mariano",
  },
  {
    gender: "female",
    name: "Lucia",
  },
  {
    gender: "female",
    name: "laura",
  },
  {
    gender: "male",
    name: "Diego",
  },
  {
    gender: "male",
    name: "Luis",
  },
  {
    gender: "female",
    name: "Ana",
  },
];

let elementSelector = document.getElementById("gender-selector");
elementSelector.addEventListener("change", function () {
  console.log("entré");
  const genderVal = elementSelector.value;
  console.log(genderVal);
  if (genderVal === "Male") {
    const validInfo = arr.filter(({ gender }) => gender === "male");
    render(validInfo);
    console.log(validInfo);
  } else if (genderVal === "Female") {
    const validInfo = arr.filter(({ gender }) => gender === "female");
    render(validInfo);
  } else {
    render(arr);
  }
});

const createContainer = (name, gender) =>
  `<div class="card-container">
    <div class="card-title">
      <div class="card-img"><img src="./img/unnamed.jpg" alt="!" /></div>
      <div class="card-information">
        <h2 class="card-information-name">
          <strong>${name}</strong>
        </h2>
        <h2 class="card-information-email">mariano32josea@gaptec.com</h2>
      </div>
    </div>
    <div class="card-content-container">
      <div class="card-content">
        <p><b>Gender:</b> ${gender}</p>
        <p><b>About:</b></p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          laboriosam ex quisquam hic architecto. Optio iure, ab recusandae
          asperiores possimus porro v
        </p>
      </div>
    </div>
  </div>`;

const render = (arrayInfo) => {
  let cardsContainer = document.getElementById("cards-container");
  const containers = arrayInfo.map((item) =>
    createContainer(item.name, item.gender)
  );
  cardsContainer.innerHTML = containers.join("");
};

render(arr);
