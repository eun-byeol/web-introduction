const userName = document.getElementById("name");
const favoriteMovies = document.getElementsByName("favorite");
const button = document.getElementById("button");

function printRegisterResult() {
  let N = 0;
  for (let i=0; i<favoriteMovies.length; i++) {
    if (favoriteMovies[i].checked == true) {
      N++;
    }
  }
  alert(`${userName.value}님, 저와 ${N}개의 취향이 같으시네요!`);
}

button.addEventListener("click", printRegisterResult);
