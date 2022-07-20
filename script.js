const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');
const btn = document.querySelector('#btnCopy');
let box = document.querySelector('div');

topLeft.addEventListener('input', function() {
    box.style.borderTopLeftRadius = `${topLeft.value}px`;
});

topRight.addEventListener('input', function() {
    box.style.borderTopRightRadius = `${topRight.value}px`;
});

bottomLeft.addEventListener('input', function() {
    box.style.borderBottomLeftRadius = `${bottomLeft.value}px`;
});

bottomRight.addEventListener('input', function() {
    box.style.borderBottomRightRadius = `${bottomRight.value}px`;
});

btn.addEventListener('click', function () {
    navigator.clipboard.writeText(`border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;`);

    alert("Propriedade copiada!!");
});


