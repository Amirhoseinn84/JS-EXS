let paragraphElement = document.querySelector('p');

function changeElement() {
  paragraphElement.textContent = 'Clicked!';
}

paragraphElement.addEventListener('click', changeElement);
