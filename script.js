  function storeCardDetails() {
    // Get input values
    const cardNumber = document.getElementById('cardNumberInput').value;
    const cardHolder = document.getElementById('cardHolderInput').value;
    const expiryMonth = document.getElementById('expiryMonthInput').value;
    const expiryYear = document.getElementById('expiryYearInput').value;
    const cvv = document.getElementById('cvvInput').value;

    // Update the card display
    document.getElementById('cardNumber').textContent = cardNumber || "#### #### #### ####";
    document.getElementById('cardHolder').textContent = cardHolder || "Card Holder Name";
    document.getElementById('expiryDisplay').textContent = `${expiryMonth}/${expiryYear}` || "MM/YY";
    document.getElementById('cvv').textContent = cvv || "###";

    // Optionally, clear the form inputs after submission
    document.getElementById('cardForm').reset();

    // Show the back side of the card after 1 second
    setTimeout(() => {
        document.querySelector('.card .face.front').style.transform = 'rotateY(180deg)';
        document.querySelector('.card .face.back').style.transform = 'rotateY(360deg)';
    
        // Show the front side again after another 1 second
        setTimeout(() => {
            document.querySelector('.card .face.front').style.transform = 'rotateY(0deg)';
            document.querySelector('.card .face.back').style.transform = 'rotateY(180deg)';
        }, 2000);
    }, 1000);
}  
  
