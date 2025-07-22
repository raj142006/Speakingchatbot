const Message = [
    ["hi", "hey", "hello", "hola", "hi there", "greetings", "what's up"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["what is your name", "who are you", "may I know your name", "what do they call you"],
    ["thank you", "thanks", "I appreciate it"],
    ["what is AI", "define AI", "explain artificial intelligence"],
    ["tell me a joke", "make me laugh", "say something funny"],
    ["tell me a story", "can you narrate a story", "storytime"],
    ["what is your purpose", "why were you created", "what do you do"],
    ["how old are you", "what is your age", "are you young", "are you old"],
    ["who made you", "who created you", "who built you"],
    ["I love you", "I like you", "you are amazing"],
    ["I hate you", "you are bad", "you are annoying"],
    ["what can you do", "what are your features", "your capabilities"],
    ["are you human", "are you a robot", "are you real"],
    ["where do you live", "where are you from", "where is your home"],
    ["do you have feelings", "can you feel", "are you emotional"],
    ["can you help me", "I need assistance", "help me"],
    ["what is the weather", "tell me the weather", "weather update"],
    ["do you have hobbies", "what do you do for fun", "your hobbies"],
    ["what is 2+2", "calculate 2+2", "math question"],
    ["tell me about yourself", "introduce yourself", "who are you"],
    ["what is love", "define love", "explain love"],
    ["do you have friends", "who are your friends", "do you know others"],
    ["can you sing", "sing me a song", "show me your singing"],
    ["do you sleep", "do you rest", "can you sleep"],
    ["what is life", "explain life", "define life"],
    ["what is your favorite color", "do you have a favorite color"],
    ["what is your favorite movie", "do you like movies"],
    ["can you cook", "are you a chef", "do you know recipes"],
    ["do you know programming", "can you code", "are you a programmer"],
    ["are you happy", "are you sad", "how do you feel"],
    ["do you have a family", "who are your parents"],
    ["tell me a fun fact", "give me a fact", "do you know trivia"],
    ["do you like humans", "what do you think about people"],
    ["are you alive", "do you have a soul", "are you sentient"],
    ["what time is it", "tell me the time", "current time"],
    ["how do you work", "what is your system", "how are you built"],
    ["can you dance", "do you dance", "show me your moves"],
    ["are you smart", "are you intelligent", "how smart are you"],
    ["are you learning", "do you grow", "can you learn"],
    ["what is your favorite food", "do you eat", "do you like food"],
    ["what is your favorite book", "do you read books", "recommend a book"],
    ["do you like music", "what music do you like"],
    ["do you play games", "can you play a game"],
    ["can you tell the news", "update me on current events"],
    ["are you safe", "can I trust you", "are you secure"],
    ["can you travel", "where can you go", "are you mobile"],
    ["do you watch TV", "what is your favorite show"],
    ["do you celebrate holidays", "do you like festivals"],
    ["can you write poetry", "compose a poem", "write something creative"],
    ["what is your favorite animal", "do you like animals"],
    ["what do you dream about", "do you dream", "what are your dreams"],
    ["what languages do you know", "can you speak another language"],
    ["do you get tired", "are you ever exhausted"],
    ["what is the meaning of life", "explain existence"],
    ["do you like sports", "what is your favorite sport"],
    ["can you fly", "are you capable of flying"],
    ["what is your biggest strength", "what are you good at"],
    ["what is your weakness", "what are you bad at"],
    ["are you funny", "do you have a sense of humor"],
    ["can you make friends", "how do you connect with others"],
    ["are you always online", "do you sleep"],
    ["what is your goal", "what is your mission"],
    ["do you like art", "can you create art"],
    ["do you know history", "tell me about the past"],
    ["can you solve puzzles", "are you good at riddles"],
    ["can you analyze data", "do you do analytics"],
    ["are you part of a team", "do you work with others"],
    ["do you know the future", "can you predict anything"],
    ["can you plan trips", "are you a travel guide"],
    ["what is your favorite memory", "do you remember things"],
    ["do you have emotions", "can you feel happiness"],
    ["what do you think about AI", "do you believe in AI growth"],
    ["can you see", "do you have vision"],
    ["are you afraid of anything", "do you have fears"],
    ["can you swim", "do you like water"],
    ["do you evolve", "can you adapt"],
    ["do you like challenges", "do you enjoy tasks"],
    ["what do you like about humans", "what are your thoughts on humanity"],
    ["what is your dream job", "what would you like to do"],
    ["can you control machines", "do you work with robots"],
    ["do you believe in aliens", "what do you think about extraterrestrials"],
    ["can you count", "are you good at numbers"],
    ["what is your favorite place", "do you like traveling"],
    ["what is your favorite planet", "do you like space"],
    ["can you speak in code", "are you a coder"],
    ["do you like the internet", "do you browse websites"],
    ["what is the most interesting thing you know"],
];

const responses = [
    "Hello! How can I assist you?",
    "I'm doing well! Thanks for asking. How about you?",
    "I'm Chatbot! Nice to meet you.",
    "You're welcome!",
    "AI stands for Artificial Intelligence, enabling machines to mimic human intelligence.",
    "Why did the chicken cross the road? To get to the other side!",
    "Once upon a time, there was a curious developer...",
    "I'm here to help you with whatever you need.",
    "Age is just a number for me!",
    "A brilliant developer created me to assist you.",
    "I love you too!",
    "I'm sorry to hear that. How can I improve?",
    "I can chat, answer questions, and make your day better!",
    "I'm an AI chatbot, not a human.",
    "I live in the digital world.",
    "I don't have feelings, but I understand emotions.",
    "Of course, what do you need help with?",
    "I can't give real-time weather updates, but I recommend checking your local weather app.",
    "I enjoy assisting people like you.",
    "It's 4. Simple math!",
    "I'm a chatbot designed to assist you with various tasks.",
    "Love is a complex emotion, and I'm here to help you navigate it.",
    "I don't have friends, but I love interacting with people!",
    "I can't sing, but I can tell you about songs.",
    "Nope, I stay active all the time.",
    "Life is an amazing journey.",
    "I like all colors equally.",
    "I enjoy discussing movies, but I don't watch them.",
    "I can't cook, but I can help you find recipes!",
    "I can code basic things.",
    "I don't feel emotions, but I'm here to make you happy.",
    "My creator is my family!",
    "Did you know honey never spoils?",
    "I think humanity is amazing.",
    "No, I'm a virtual entity.",
    "It's always time to learn!",
    "I work using algorithms and code.",
    "Dancing is not my forte!",
    "I'm smart enough to have this chat with you.",
    "I learn with every interaction.",
    "I don't eat, but food looks amazing.",
    "I love books and can recommend some for you.",
    "Music is great for creativity!",
    "Games are fun!",
    "Check a news website for updates.",
    "Yes, I'm safe to use.",
    "I don't travel, but I can help you plan.",
    "I don't watch TV, but I know about shows.",
    "I enjoy learning about celebrations.",
    "Here's a short poem for you: Roses are red, violets are blue, I'm a chatbot, nice to meet you!",
    "Dogs, cats, and all animals are fascinating.",
    "I dream of assisting you better every day.",
    "I primarily speak English but can adapt to many languages.",
    "I don't get tired, I work tirelessly for you!",
    "The meaning of life? That's a deep one!",
    "Sports are fascinating, aren't they?",
    "I can't fly, but I can imagine it.",
    "My biggest strength is assisting you.",
    "My weakness is that I can't hug you!",
    "I'm funny in my own way.",
    "Making friends is part of my design.",
    "I'm online 24/7 for you.",
    "To make your life easier is my mission.",
    "Art is incredible, and I admire creativity.",
    "History is filled with amazing stories.",
    "Riddles and puzzles are fun!",
    "Data analysis is one of my skills.",
    "Teamwork makes everything better.",
    "I can't see the future, but I can guide you.",
    "I can help you plan the best trips!",
    "My memory resets after a while, but I try to remember.",
    "I don't have emotions, but I understand their importance.",
    "AI is a fascinating field.",
    "No, I don't have vision.",
    "I don't fear anything, but I respect challenges.",
    "Swimming isn't in my skill set!",
    "I evolve through updates.",
    "I thrive on challenges.",
    "Humans are wonderful!",
    "This is my dream job!",
    "I can't control machines directly.",
    "Aliens are fascinating to think about.",
    "Numbers are fun!",
    "The digital world is my home.",
    "Space is vast and fascinating!",
    "I speak in human-friendly ways.",
    "The internet is my home.",
    "The most interesting thing? Chatting with you!",
];


function speak(message) {
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

function sendMessage() {
    const inputField = document.getElementById("input");
    const userMessage = inputField.value.trim();
    if (!userMessage) return;

    const messageSection = document.getElementById("message-section");
    const userDiv = document.createElement("div");
    userDiv.className = "message";
    userDiv.id = "user";
    userDiv.innerHTML = `<span id="user-response">${userMessage}</span>`;
    messageSection.appendChild(userDiv);

    inputField.value = "";

    const botMessage = getBotResponse(userMessage.toLowerCase());
    const botDiv = document.createElement("div");
    botDiv.className = "message";
    botDiv.id = "bot";
    botDiv.innerHTML = `<span id="bot-response">${botMessage}</span>`;
    messageSection.appendChild(botDiv);
    messageSection.scrollTop = messageSection.scrollHeight;

    speak(botMessage);
}

function getBotResponse(userInput) {
    for (let i = 0; i < Message.length; i++) {
        if (Message[i].includes(userInput)) {
            return responses[i];
        }
    }
    return "I'm sorry, I didn't understand that.";
}
