const analytics = [];

// Function to generate a random 6-character short code
function generateShortCode() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

// Main function to shorten URL
function shortenURL() {
  const input = document.getElementById("urlInput").value.trim();
  if (!input) {
    alert("Please enter a valid URL.");
    return;
  }

  // Generate a random short code
  const shortCode = generateShortCode();
  const shortURL = `https://short.ly/${shortCode}`;

  // Display the shortened URL
  document.getElementById("shortenedOutput").innerText = shortURL;

  // Save data in analytics
  const timestamp = new Date().toLocaleString();
  analytics.push({ original: input, short: shortURL, time: timestamp });

  // Update the analytics display
  displayAnalytics();
}

// Function to display analytics history
function displayAnalytics() {
  const list = document.getElementById("analyticsList");
  list.innerHTML = "";

  analytics.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${item.short} → ${item.original} at ${item.time}`;
    list.appendChild(li);
  });
}