const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');

function updateTime() {
  const now = new Date();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  const time = now.toLocaleTimeString('en-US', { timeZone: 'UTC' }); 

  currentTimeUTC.textContent = `Current time in UTC: ${time}`;
  currentDay.textContent = `Current Day of the week: ${day}`;

}

updateTime();
setInterval(updateTime, 1000);

