const analytics = [
function generateShortCode() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}
function shortenURL() {
  const input = document.getElementById("urlInput").value.trim();
  if (!input) {
    alert("Please enter a valid URL.");
    return;
  }
  const shortCode = generateShortCode();
  const shortURL = `https://short.ly/${shortCode}`;
  document.getElementById("shortenedOutput").innerText = shortURL;
  const timestamp = new Date().toLocaleString();
  analytics.push({ original: input, short: shortURL, time: timestamp });
  displayAnalytics();
}
function displayAnalytics() {
  const list = document.getElementById("analyticsList");
  list.innerHTML = "";

  analytics.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${item.short} → ${item.original} at ${item.time}`;
    list.appendChild(li);
  });
}
