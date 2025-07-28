
const fetchOneButton = document.querySelector('.fetch-button');
const fetchThreeButton = document.querySelector('.fetchThree-button');
const firstImage = document.querySelector('.first-image');
const secondImage = document.querySelector('.second-image');
const thirdImage = document.querySelector('.third-image');
const fourthImage = document.querySelector('.fourth-image');

fetchOneButton.addEventListener('click', async() => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    firstImage.src = data.message
    const error = alert(error);
});

fetchThreeButton.addEventListener('click', async() => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    secondImage.src = data.message;
    thirdImage.src = data.message;
    fourthImage.src = data.message;
    const error = alert(error);
})

