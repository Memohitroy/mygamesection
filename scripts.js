// Function to check if the user has already liked a game
function hasLikedGame(gameIndex) {
    return localStorage.getItem(`liked_game_${gameIndex}`) !== null;
}

// Function to set local storage indicating the user has liked a game
function setLikedGame(gameIndex) {
    localStorage.setItem(`liked_game_${gameIndex}`, 'true');
}

// Function to get total likes for a game from local storage
function getTotalLikes(gameIndex) {
    let likes = localStorage.getItem(`total_likes_${gameIndex}`);
    return likes ? parseInt(likes) : 0;
}

// Function to increment total likes for a game in local storage
function incrementTotalLikes(gameIndex) {
    let currentLikes = getTotalLikes(gameIndex);
    localStorage.setItem(`total_likes_${gameIndex}`, currentLikes + 1);
}

// Function to handle like button click
function likeGame(gameIndex) {
    if (!hasLikedGame(gameIndex)) {
        setLikedGame(gameIndex); // Set local storage indicating liked
        incrementTotalLikes(gameIndex); // Increment total likes

        let likeCountElement = document.getElementById(`like-count-${gameIndex}`);
        likeCountElement.textContent = `${getTotalLikes(gameIndex)} Likes`;

        // Disable the like button after liking
        let likeButton = document.getElementById(`like-button-${gameIndex}`);
        likeButton.disabled = true;
        likeButton.textContent = 'Liked';
    } else {
        alert('You have already liked this game.');
    }
}

// Function to update greeting message based on time
function updateGreeting() {
    const greetingElement = document.querySelector('.greeting');
    const now = new Date();
    const hours = now.getHours();
    let greeting = 'Welcome, Users! - SOURCE CODE KE LIYE DM KARO INSTA ID-mohitroy2004';

    if (hours >= 0 && hours < 12) {
        greeting = 'Good Morning, Users!';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Good Afternoon, Users!';
    } else {
        greeting = 'Good Night, Users!';
    }

    greetingElement.textContent = greeting;
}

// Function to display initial like counts on page load
function displayInitialLikes() {
    for (let gameIndex = 1; gameIndex <= 4; gameIndex++) { // Adjust as per your game list
        let likeCountElement = document.getElementById(`like-count-${gameIndex}`);
        likeCountElement.textContent = `${getTotalLikes(gameIndex)} Likes`;
    }
}

// Call functions on page load
updateGreeting();
displayInitialLikes();

