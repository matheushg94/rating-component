const form = document.querySelector('.form');
form.addEventListener('submit', (submitRate))

function submitRate(e) {
    e.preventDefault();
    const rate = document.querySelector('input[name="rate"]:checked').value;
    const rateSelected = document.querySelector('.rate-selected');
    const flipCard = document.querySelector('.flip-card-inner');

    rateSelected.innerText = `You selected ${rate} out of 5`;
    flipCard.style.transform = "rotateY(-180deg)";
}

/* function submitRate(e) {
    e.preventDefault();
    const rate = form.elements["rate"].value
    const rateSelected = document.querySelector('.rate-selected')
    const flipCard = document.querySelector('.flip-card-inner')

    rateSelected.innerText = `You selected ${rate} out of 5`
    flipCard.style.transform = "rotateY(-180deg)"
} */