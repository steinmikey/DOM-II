// Your code goes here
console.log("testing...1,2,3");

const navButtons = document.querySelectorAll(".nav a");
navButtons.forEach((element) => {
  //   console.log(element);
  element.addEventListener("click", function (event) {
    element.style.color = "orange";
    element.style.transform = "rotate(20deg)";
    event.preventDefault();
  });
});

const mainPicture = document.querySelector(".intro img");
mainPicture.addEventListener("dblclick", function (event) {
  //   console.log("test");
  //   console.log(event.target);
  event.target.style.width = "50%";
});
mainPicture.addEventListener("click", function (event) {
  //   console.log("test");
  //   console.log(event.target);
  event.target.style.width = "100%";
});
mainPicture.addEventListener("mouseover", function () {
  mainPicture.style.borderRadius = "30px";
});

const signupButtonLeft = document.querySelector(".destination:nth-of-type(1)  .btn");
const signupButtonMiddle = document.querySelector(".destination:nth-of-type(2)  .btn");
const signupButtonRight = document.querySelector(".destination:nth-of-type(3)  .btn");

signupButtonLeft.addEventListener("click", function (event) {
  console.log("you clicked the left sign-up button");
  console.log(event.target);
  event.target.style.backgroundColor = "orange";
  event.target.style.transform = "rotate(20deg)";
});

signupButtonMiddle.addEventListener("mouseover", (event) => {
  console.log("click it, I dare you");
  console.log(event.target);
});
signupButtonMiddle.addEventListener("mouseout", function (event) {
  console.log("wait! come back");
  console.log(event.target);
});

signupButtonRight.addEventListener("click", function (event) {
  console.log("you clicked the right button");
  console.log(event.target);
});
