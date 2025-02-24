// Variable to track the number of times "No" is clicked
let noClickCount = 0;

function selectOption(option) {
    if (option === 'no') {
        if (noClickCount >= 6) {
            showPopup('Bow Bow 🐶'); 
            document.getElementById('no-button').style.display = 'none'; // Hide button forever
            return;
        }

        let messages = [
            'Apple uh? Apdiya? Palagunoam?',
            'You can clear a cavity easily, but you can’t clear the paasam I’ve got.',
            '🎶 Inisai paadi varum, en maela oru tholi paasam ilai 😢',
            '💔 Suthuthae suthuthae boomi... ithu pothumada pothumada nooru kd💔',
            'Bruh, make sure before pressing "No" again... Ask your heart. It told me that you pressed "No" four times. 🫀',
            'Bruh, your kolupu got increased! 😳 I\'m gonna cry this time if you press "No" again!'
        ];

        showPopup(messages[noClickCount]); 
        noClickCount++; 
    } else if (option === 'yes') {
        displayCatHeart(); 
    }
}

// Function to create a custom pop-up with "Kareem says"
function showPopup(message) {
    let popup = document.createElement('div');
    popup.id = 'custom-popup';
    popup.innerHTML = `
        <div id="popup-box">
            <h2>Kareem says:</h2>
            <p>${message}</p>
            <button onclick="closePopup()">OK</button>
        </div>
    `;
    document.body.appendChild(popup);
}

// Function to close the popup
function closePopup() {
    let popup = document.getElementById('custom-popup');
    if (popup) {
        popup.remove();
    }
}

// Function to display cat-heart.gif when "Yes" is clicked
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = ''; 
    var imageContainer = document.getElementById('image-container');

    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; 
    catHeartImage.alt = 'Cat Heart';

    var arigatoText = document.createElement('div');
    arigatoText.innerText = 'Arigato ❤️';
    arigatoText.style.fontSize = '40px';
    arigatoText.style.fontFamily = 'Sacramento, cursive';
    arigatoText.style.color = '#ff4d6d';
    arigatoText.style.marginTop = '10px';

    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        imageContainer.appendChild(arigatoText);
    };

    document.getElementById('question').style.display = 'none';
    document.getElementById('options').style.display = 'none';
}
