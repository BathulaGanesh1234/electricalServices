document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const serviceType = params.get("type");
    const subservicesList = {
        "New Installations": ["Fan Fitting", "Geyser Fitting", "Light Fitting", "Meter Installation", "New Wiring", "Renovation"],
        "Repairs": ["Light Repair", "Fan Repair", "Switch Repair", "Switch Board Repair", "Meter Repair"]
    };

    if (serviceType && document.getElementById("subservice-options")) {
        document.getElementById("subservice-title").innerText = serviceType;
        const ul = document.getElementById("subservice-options");
        subservicesList[serviceType].forEach(subservice => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="#" onclick="requestLocation('${subservice}')">${subservice}</a>`;
            ul.appendChild(li);
        });
    }
});

function requestLocation(service) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let phoneNumber = "+917842861489"; // Example contact
            let message = `I need ${service} service at my location.`;
            let callUrl = `tel:${phoneNumber}`;
            let messageUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
            
            let options = confirm("Select an option:\nOK to Call\nCancel to Message");
            if (options) {
                window.location.href = callUrl;
            } else {
                window.location.href = messageUrl;
            }
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}
