// Function to dynamically extract event data
function fetchEventData() {
const eventData = {};
  
  // Create a temporary DOM parser to extract data from events.html
  fetch("events.html") // Assuming both pages are in the same folder
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      
      // Find all links with data-event attribute
      const eventLinks = doc.querySelectorAll("a[data-event]");
      
      eventLinks.forEach(link => {
        const eventKey = link.getAttribute("data-event");
        eventData[eventKey] = {
            title: link.getAttribute("data-title"),
            description: link.getAttribute("data-description"),
            date: link.getAttribute("data-date"),
            location: link.getAttribute("data-location"),
            image: link.getAttribute("data-image"),
            participant: link.getAttribute("data-participant")
        };
      });
      
      // Call a function to display event details
        displayEventDetails(eventData);
    });
}
// Function to display the correct event details
function displayEventDetails(eventData) {

    const urlParams = new URLSearchParams(window.location.search);
    const eventKey = urlParams.get('event');
    const eventDetailsContainer = document.getElementById("eventDetails");

    if (eventData[eventKey]) {
        const details = eventData[eventKey];
        eventDetailsContainer.innerHTML = `
            <div class="flex flex-col justify-evenly px-24">
                <div class="my-16 w-full lg:w-[500px] xl:w-[700px]">
                    <br><br><br>
                    <h1 class="font-bold text-gray-900 text-3xl md:text-4xl leading-normal mb-6 px-4">${details.title}</h1>
                    <img src="${details.image}" alt="${details.title}" class="w-full rounded-xl shadow-lg mb-4""/>
                </div>

                <div class="text-center lg:text-left mt-12">

                    <p class="font-light text-black text-sm md:text-md lg:text-lg px-4 mb-4"><strong>Description:</strong> ${details.description}</p>
                    <p class="font-light text-black text-sm md:text-md lg:text-lg px-4 mb-4"><strong>Date:</strong> ${details.date}</p>
                    <p class="font-light text-black text-sm md:text-md lg:text-lg px-4 mb-4"><strong>Location:</strong> ${details.location}</p>
                    <p class="font-light text-black text-sm md:text-md lg:text-lg px-4 mb-10"><strong>Participants:</strong> ${details.participant}</p>

                    <a href="volunteer.html"><button class="w-full mx-2 mb-6 px-6 py-4 font-semibold bg-white border-2 border-blue-500 text-black text-base rounded-xl hover:bg-blue-500 hover:text-white transition ease-in-out duration-500">Join and become a volunteer</button></a>
                    <a href="events.html"><button class="w-full mx-2 px-6 py-4 font-semibold bg-blue-200 text-black text-base rounded-xl hover:bg-blue-500 hover:text-white transition ease-in-out duration-500">Back to Events Page</button></a>
                </div>
            </div>
            `;
    } else {
        eventDetailsContainer.innerHTML = "<h2>Event not found</h2>";
    }
}

// Initialize the process
fetchEventData();