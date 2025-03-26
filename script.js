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
            li.innerHTML = `<a href="#" onclick="callServiceProvider('${subservice}')">${subservice}</a>`;
            ul.appendChild(li);
        });
    }
});

// Call service provider directly
function callServiceProvider(service) {
    const phoneNumber = "+917842861489"; // Direct contact number
    const callUrl = `tel:${phoneNumber}`;
    window.location.href = callUrl; // Directly initiate the call
}
