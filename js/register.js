addEventListener('submit', regEvent);

function regEvent(e){
    e.preventDefault();

    console.log(document.querySelector('#rUsername').value);
    console.log(document.querySelector('#rEmail').value);
    console.log(document.querySelector('#setPassword').value);
}