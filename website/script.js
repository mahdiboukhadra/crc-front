document.addEventListener("DOMContentLoaded", function () {
    const endpointUrl = "https://hshyllcxpyt6bd5v3xuqqmezsy0ecnmd.lambda-url.eu-west-3.on.aws/"; // my lambda endpoint URL

    fetch(endpointUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // since the response is in JSON format
        })
        .then((data) => {
            // displaying the fetched data in the "data-container" div
            const dataContainer = document.getElementById("data-container");
            dataContainer.textContent = "This page has been viewed " + JSON.stringify(data, null, 2) + " times";
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});
