const eventNameInput = document.getElementById("eventName");
const addressInput = document.getElementById("address");
const dateInput = document.getElementById("date");
const endDateInput = document.getElementById("endDate");
const emailInput = document.getElementById("email");
// const ticketPriceInput = document.getElementById("ticketPrice");
const descriptionInput = document.getElementById("description");
const createButton = document.getElementById("createButton")




const eventProperties = {
    eventName: "",
    eventLocation: "",
    startDate: "",
    endDate: "",
    email: "",
    description: ""

}

eventNameInput.addEventListener("input", (e) => {
    eventProperties.eventName = e.currentTarget.value;
    console.log(e.currentTarget.value, eventProperties.eventName)
})
addressInput.addEventListener("input", (e) => {
    eventProperties.eventLocation = e.currentTarget.value;
})
dateInput.addEventListener("input", (e) => {
    eventProperties.startDate = e.currentTarget.value;
})
endDateInput.addEventListener("input", (e) => {
    eventProperties.endDate = e.currentTarget.value;
})
emailInput.addEventListener("input", (e) => {
    eventProperties.email = e.currentTarget.value;
})
descriptionInput.addEventListener("input", (e) => {
    eventProperties.endDate = e.currentTarget.value;
})
// ticketPriceInput.addEventListener("onchange",(e)=>{
//     eventProperties.ticketPricee= e.currentTarget.value;
// })

createButton.addEventListener("click", (event) => {
   
    createEvent()
    event.preventDefault();
    console.log(eventProperties);
})

function createEvent() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "email": emailInput.value,
        "eventName": eventNameInput.value,
        "eventLocation": addressInput.value,
        "description": descriptionInput.value.trim(),
        "startDate": dateInput.value,
        "endDate": endDateInput.value
      } );

       console.log(raw,"RAW")
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://eventease.us-west-1.elasticbeanstalk.com/api/v1/user/addevent", requestOptions)
      .then(response => response.text())
      .then(result =>{
        location.assign("../discoverEvents/discover.html")
         console.log(result)
        })
      .catch(error => console.log('error', error));


}

