       function checkEnter(event) { if (event.key === 'Enter') { sendMessage(); } 
        };
        
        function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message !== "") {
        displayMessage(message, "user");
        userInput.value = "";
    }
}

function displayMessage(message, sender) {
    const chatHistory = document.getElementById("chat-history");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}