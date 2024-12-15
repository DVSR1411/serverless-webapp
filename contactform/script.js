const submitForm = (event) => {
    event.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    fetch("MYAPI", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => alert(result.body || "Submission was successful!"))
    .catch(() => alert("An error occurred while submitting the form"));
};