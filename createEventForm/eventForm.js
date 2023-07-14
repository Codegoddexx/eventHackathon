const eventNameInput = document.getElementById("eventName");
const addressInput = document.getElementById("address");
const dateInput = document.getElementById("date");
const endDateInput = document.getElementById("endDate");
const emailInput = document.getElementById("email");
// const ticketPriceInput = document.getElementById("ticketPrice");
const descriptionInput = document.getElementById("description");
const createButton = document.getElementById("createButton")
const bgImages = [
    "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    'https://images.pexels.com/photos/2705089/pexels-photo-2705089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

const sideBg = document.querySelector(".imageContainer")

sideBg.style.flex = "auto"

const M = Math
let rIndex = () => M.floor(M.random() * bgImages.length)

setInterval(() => {
    sideBg.style.backgroundImage = `url("${bgImages[rIndex()]}")`
}, 5000)



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

