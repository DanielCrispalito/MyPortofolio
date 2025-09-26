const form = document.getElementById("contact-form");

form.addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const formData = new FormData(form);

    try {
        let response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("✅ Message sent successfully!");
            form.reset(); 
        } else {
            alert("❌ Failed to send message. Try again.");
        }
    } catch (error) {
        alert("⚠️ Error: " + error.message);
    }
});
