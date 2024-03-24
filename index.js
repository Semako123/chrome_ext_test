const button = document.getElementById("click");

const onclick = async () => {
  const [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const el = document.getElementsByClassName("h4")[1];
      el.style.color = "#000";
      console.log(el);
    },
  });
};

button.addEventListener("click", onclick);
