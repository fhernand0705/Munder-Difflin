var block = document.getElementsByClassName('block');


function shadowIn() {
  block.classList.toggle('hidden', false);
  console.log(block);
}

function shadowOut() {
  block.classList.toggle('hidden', true);
  console.log(block);
}

block.addEventListener('mouseover', shadowIn);
block.addEventListener('mouseout', shadowOut);
