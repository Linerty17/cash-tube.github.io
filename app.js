window.onload = function() {
  const letters = '1234567890';
  let randomStr = '';

  // Generate random string
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    randomStr += letters[randomIndex];
  }

  // Update display
  document.getElementById('randomString').textContent = randomStr;

  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get current date and time
  const currentDate = new Date();
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  let hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const meridiem = hour >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }

  // Format the date and time string
  const formattedDateTime = `${month} ${day}, ${year} ${hour}:${minutes.toString().padStart(2, '0')} ${meridiem}`;

  // Update the display
  document.getElementById('datetime').textContent = formattedDateTime;

  const palmpayNumber = localStorage.getItem('palmpayNumber');
  const palmpayName = localStorage.getItem('palmpayName');
  const palmpayCome = localStorage.getItem('palmpayCome');
  const amount = localStorage.getItem('amount');

  document.getElementById('palmpayNumberDisplay').textContent = ` ${palmpayNumber}`;
  document.getElementById('palmpayNameDisplay').textContent = ` ${palmpayName}`;
  document.getElementById('palmpayComeDisplay').textContent = ` ${palmpayCome}`;
  document.getElementById('amountDisplay').textContent = ` ${amount}`;

  // Clear stored form data
  localStorage.removeItem('palmpayNumber');
  localStorage.removeItem('palmpayName');
  localStorage.removeItem('palmpayCome');
  localStorage.removeItem('amount');
};

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});