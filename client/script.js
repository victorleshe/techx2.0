function chatStripe(isAi, value, uniqueId) {
  return `
        <div class="wrapper ${isAi && 'ai'}">
            <div class="chat">
                <div class="profile">
                    <img
                      src="${isAi ? './assets/bot.svg' : './assets/user.svg'}"
                      alt="${isAi ? 'bot' : 'user'}"
                    />
                </div>
                <div class="message" id=${uniqueId}>${value}</div>
            </div>
        </div>
    `;
}

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    // Update the text content of the loading indicator
    element.textContent += '.';

    // If the loading indicator has reached three dots, reset it
    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300);
}

function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

// generate unique ID for each message div of bot
// necessary for typing text effect for that specific reply
// without unique ID, typing text will work on every element
function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  // user's chatstripe
  chatContainer.innerHTML += chatStripe(false, data.get('prompt'));

  // to clear the textarea input
  form.reset();

  // bot's chatstripe
  const uniqueId = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true, ' ', uniqueId);

  // to focus scroll to the bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // specific message div
  const messageDiv = document.getElementById(uniqueId);

  // messageDiv.innerHTML = "..."
  loader(messageDiv);

  const response = await fetch('http://localhost:5000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: data.get('prompt'),
    }),
  });

  clearInterval(loadInterval);
  messageDiv.innerHTML = ' ';

  if (response.ok) {
    const data = await response.json();
    const parsedData = data.bot.trim(); // trims any trailing spaces/'\n'

    typeText(messageDiv, parsedData);
  } else {
    const err = await response.text();

    messageDiv.innerHTML = 'Something went wrong';
    alert(err);
  }
};

form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    handleSubmit(e);
  }
});

const body = document.querySelector('body'),
  sidebar = body.querySelector('nav'),
  toggle = body.querySelector('.toggle'),
  searchBtn = body.querySelector('.search-box'),
  modeSwitch = body.querySelector('.toggle-switch'),
  modeText = body.querySelector('.mode-text');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});

searchBtn.addEventListener('click', () => {
  sidebar.classList.remove('close');
});

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    modeText.innerText = 'Light mode';
  } else {
    modeText.innerText = 'Dark mode';
  }
});

// Not necessary - just to make up space
// Get the chatbot sidebar element
const chatbotSidebars = document.querySelector('.chatbot-sidebars');

// Toggle the chatbot sidebar when the button is clicked
const toggleSidebars = () => {
  chatbotSidebars.classList.toggle('shows');
};

// Add an event listener to the toggle button
const toggleButtons = document.querySelector('.toggle-buttons');
toggleButtons.addEventListener('click', toggleSidebars);

// Close the chatbot sidebar when the close button is clicked
const closeButtons = document.querySelector('.close-buttons');
closeButtons.addEventListener('click', toggleSidebars);

// Get the chatbot sidebar element
const chatbotSidebarss = document.querySelector('.chatbot-sidebarss');

// Toggle the chatbot sidebar when the button is clicked
const toggleSidebarss = () => {
  chatbotSidebarss.classList.toggle('show');
};

// Add an event listener to the toggle button
const toggleButtonss = document.querySelector('.toggle-buttonss');
toggleButtonss.addEventListener('click', toggleSidebarss);

// Close the chatbot sidebar when the close button is clicked
const closeButtonss = document.querySelector('.close-buttonss');
closeButtonss.addEventListener('click', toggleSidebarss);

// Get the chatbot sidebar element
const chatbotSidebarsss = document.querySelector('.chatbot-sidebarsss');

// Toggle the chatbot sidebar when the button is clicked
const toggleSidebarsss = () => {
  chatbotSidebarsss.classList.toggle('show');
};

// Add an event listener to the toggle button
const toggleButtonsss = document.querySelector('.toggle-buttonsss');
toggleButtonsss.addEventListener('click', toggleSidebarsss);

// Close the chatbot sidebar when the close button is clicked
const closeButtonsss = document.querySelector('.close-buttonsss');
closeButtonsss.addEventListener('click', toggleSidebarsss);

// Get the chatbot sidebar element
const chatbotSidebarssss = document.querySelector('.chatbot-sidebarssss');

// Toggle the chatbot sidebar when the button is clicked
const toggleSidebarssss = () => {
  chatbotSidebarssss.classList.toggle('show');
};

// Add an event listener to the toggle button
const toggleButtonssss = document.querySelector('.toggle-buttonssss');
toggleButtonssss.addEventListener('click', toggleSidebarssss);

// Close the chatbot sidebar when the close button is clicked
const closeButtonssss = document.querySelector('.close-buttonssss');
closeButtonssss.addEventListener('click', toggleSidebarssss);

// Get the chatbot sidebar element
const chatbotSidebarsssss = document.querySelector('.chatbot-sidebarsssss');

// Toggle the chatbot sidebar when the button is clicked
const toggleSidebarsssss = () => {
  chatbotSidebarsssss.classList.toggle('show');
};

// Add an event listener to the toggle button
const toggleButtonsssss = document.querySelector('.toggle-buttonsssss');
toggleButtonsssss.addEventListener('click', toggleSidebarsssss);

// Close the chatbot sidebar when the close button is clicked
const closeButtonsssss = document.querySelector('.close-buttonsssss');
closeButtonsssss.addEventListener('click', toggleSidebarsssss);

// Get the chatbot sidebar element
const chatbotSidebarssssss = document.querySelector('.chatbot-sidebarssssss');

// Toggle the chatbot sidebar when the button is clicked
const toggleSidebarssssss = () => {
  chatbotSidebarssssss.classList.toggle('show');
};

// Add an event listener to the toggle button
const toggleButtonssssss = document.querySelector('.toggle-buttonssssss');
toggleButtonssssss.addEventListener('click', toggleSidebarssssss);

// Close the chatbot sidebar when the close button is clicked
const closeButtonssssss = document.querySelector('.close-buttonssssss');
closeButtonssssss.addEventListener('click', toggleSidebarssssss);
