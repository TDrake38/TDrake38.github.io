//This is for the contact us page.
document.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();

    console.log(document.querySelector('.name').value);
    console.log(document.querySelector('.email').value);
    console.log(document.querySelector('.message').value);
};
