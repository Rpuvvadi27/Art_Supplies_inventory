document.addEventListener('DOMContentLoaded', () => {
    const chatHistory = document.getElementById("chat-history");
    const chatInput = document.getElementById("chat-input");
    const sendChatBtn = document.getElementById("send-chat-btn");
    const clearChatBtn = document.getElementById("clear-chat-btn");
  
    // Function to add messages to the chat history
    function addMessage(sender, message) {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", sender === 'user' ? 'user-message' : 'bot-message');
      messageDiv.textContent = message;
      chatHistory.appendChild(messageDiv);
      chatHistory.scrollTop = chatHistory.scrollHeight;  // Scroll to the bottom
    }
  
    // Function to send the user's input to the bot and get a response
    sendChatBtn.addEventListener("click", () => {
      const userMessage = chatInput.value.trim();
      if (userMessage === "") return;
  
      // Display the user's message
      addMessage("user", userMessage);
      chatInput.value = "";  // Clear input field
  
      // Send the message to the bot for a response
      getBotResponse(userMessage);
    });
  
    // Function to clear the chat history
    clearChatBtn.addEventListener("click", () => {
      chatHistory.innerHTML = '';  // Clear the chat history
      chatInput.value = '';  // Clear the input field
    });
  
    // Function to generate the bot's response based on user input
    function getBotResponse(userMessage) {
      let botResponse = "";
  
      // Basic keyword matching for different types of art supplies
      if(userMessage.toLowerCase().includes("beads") && userMessage.toLowerCase().includes("michaels"))
      {
          botResponse = "Check out these beads from Michaels:\n- https://www.michaels.com/shop/beads-jewelry/beads";
      }
      else if(userMessage.toLowerCase().includes("paint") && userMessage.toLowerCase().includes("michaels"))
      {
            botResponse = "Check out all the paint Michaels has to offer:\n- https://www.michaels.com/search?q=paints";
      }
      else if (userMessage.toLowerCase().includes("paintbrush")) 
      {
          botResponse = "I recommend checking out this brush set form Amazon:\n- https://www.amazon.com/s?k=paintbrushes";
      } 
      else if (userMessage.toLowerCase().includes("paint")) 
      {
        botResponse = "You can find great paints from Amazon:\n- https://www.amazon.com/s?k=acrylic+paint";
      } 
      else if (userMessage.toLowerCase().includes("beads")) 
      {
        botResponse = "Check out these bead from Amazo:\n- https://www.amazon.com/s?k=beads";
      } 
      else 
      {
        botResponse = "Sorry, I can help you find paintbrushes, paints, beads, and other art supplies. What are you looking for?";
      }
  
      // Display the bot's response
      addMessage("bot", botResponse);
    }
  });
  