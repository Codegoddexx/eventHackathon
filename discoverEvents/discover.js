const theCard = document.getElementById("theCard");
const theTitle = document.getElementById("title");
const theDescription = document.getElementById("description");
const buyTicket = document.getElementById("buyTicket");
const responseData = [];
console.log(theCard);

async function getEvents() {
    const response = await fetch("http://eventease.us-west-1.elasticbeanstalk.com/api/v1/user/fetchallevents");
    const responseData = await response.json();
    const events = responseData.data.data; 
  
    const mainLayout = document.querySelector(".main-layout");
  
    for (let i = 0; i < 20; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="header"></div>
        <div class="info">
          <p class="title">${events[i % events.length].eventName}</p>
          <p class="description">
            <br>
            description: ${events[i % events.length].description}
            <br>
            startDate: ${events[i % events.length].startDate}
            <br>
            endDate: ${events[i % events.length].endDate}
            <br>
            location: ${events[i % events.length].location}
          </p>
        </div>
        <div class="footer">
          <p class="tag">FREE</p>
          <button type="button" class="action">BUY TICKET</button>
        </div>
      `;
  
      const buyTicketButton = card.querySelector(".action");
      buyTicketButton.addEventListener("click", () => {
        window.location.href = "../payment/payment.html";
      });

      mainLayout.appendChild(card);
    }
  }
  
  window.addEventListener("load", getEvents);
  
  
  

window.addEventListener("load", getEvents);
