import "./styles.css";

const signin = document.querySelector("#signin");

signin.addEventListener("click", function () {
  const inputs = document.querySelectorAll("input");

  const signInInfo = {};

  inputs.forEach((input) => {
    console.log(input.value);
    signInInfo[input.name] = signInInfo.value;
  });
});
