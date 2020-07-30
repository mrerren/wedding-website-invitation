const CACHE_KEY = "greeting_list";

function checkForStorage() {
    return typeof(Storage) !== "undefined";
}

function putGreeting(data) {
    if (checkForStorage()) {
        let listData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            listData = [];
        } else {
            listData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        listData.unshift(data);

        if (listData.length > 50) {
            listData.pop();
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(listData));
    }
}

function showGreeting() {
    if (checkForStorage) {
        return JSON.parse(localStorage.getItem(CACHE_KEY));
    } else {
        return [];
    }
}

function renderGreeting() {
    const listData = showGreeting();
    let greetingList = document.querySelector(".greeting-list");
    greetingList.innerHTML = "";

    if (localStorage.getItem(CACHE_KEY) !== null) {
        document.querySelector(".empty-list").style.display = "none";
        document.querySelector(".greeting-list").style.display = "block";
    } 

    for (let greeting of listData) {
        let msg = document.createElement("div");
        msg.classList.add("message");
        msg.innerHTML = `
        <div class="flex--between">
            <p><strong>${greeting.name}</strong></p> 
            <p class="relativetime-clean">${greeting.days} ${greeting.months} '${greeting.years} at ${greeting.hours}:${greeting.minutes}</p>
        </div>`;
        msg.innerHTML += `<span>${greeting.message}</span>`;

        greetingList.appendChild(msg);
    }
}

renderGreeting();