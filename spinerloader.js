const spinner = document.querySelector(".loader__dots");
const dotsAmount = 15;

(() => {
  spinner.innerHTML = "";

  for (let i = 0; i < dotsAmount + 1; i++) {
    spinner.innerHTML += '<span style="--i:' + i + ';"></span>';
  }

  return spinner.innerHTML;
})();
