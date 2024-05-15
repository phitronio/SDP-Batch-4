// const target = document.getElementsByClassName("title");
// const target = document.getElementById("title");

// target.style.color = "red";

// const allBox = document.getElementsByClassName("box");

// for (let i = 0; i < allBox.length; i++) {
//   const element = allBox[i];
//   element.style.backgroundColor = "green";

//   if (element.innerText == "box-5") {
//     element.style.backgroundColor = "red";
//   }
// }

document.getElementById("handleADD").addEventListener("click", (event) => {
  const inputValue = document.getElementById("search-Box").value;

  const container = document.getElementById("comment-container");

  const p = document.createElement("p");
  p.classList.add("child");
  p.innerText = inputValue;

  container.appendChild(p);

  document.getElementById("search-Box").value = "";

  const allComments = document.getElementsByClassName("child");

  // for (let i = 0; i < allComments.length; i++) {
  //     const element = [i];

  // }
  // console.log(allComments);

  for (const element of allComments) {
    element.addEventListener("click", (e) => {
      e.target.parentNode.removeChild(element);
    });
  }
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    displayData(data);
  })
  .catch((err) => {
    console.log(err);
  });

const displayData = (userData) => {
  const container = document.getElementById("userData-Container");

  userData.forEach((user) => {
    const div = document.createElement("div");
    div.classList.add("user");

    div.innerHTML = `
        <h4>title</h4>
        <p>Description</p>
        <button>Details</button>
        
        `;
    container.appendChild(div);
  });
};
