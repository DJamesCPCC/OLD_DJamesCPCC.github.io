document.getElementById("intro-form").addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Button pressed");

    const main = document.getElementById('maintext'); // Ensure this is the correct container

    // Remove the existing box if it exists
    const existingBox = document.getElementById("introductonbox");
    if (existingBox) {
        main.removeChild(existingBox);
    }

    // Create a new box
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.id = "introductonbox";

    main.appendChild(newBox);
});



document.getElementById("intro-form").addEventListener('submit', function (event) {

        const form = document.getElementById("intro-form");
        const formData = new FormData(form);

        
        let a = `<h2 class="boxtitle">🐺RESULTS</h2>`
        a += `<figure>
            <img class="intropicture" src="../images/david_at_friends_apartment.jpg" alt="${formData.get("imgcaption")}">
            <figcaption><i>${formData.get("imgcaption")}</i></figcaption>
        </figure>`;

        a += `<p>${formData.get("greeting")}</p>`;
        a += `<p>${formData.get("biography")}</p>`;
    a +=`<h2 class="boxtitle">🐺PERSONAL BACKGROUND</h2>`    
    a += `<ul>
            <li><strong>Personal Background:</strong> ${formData.get(
            "personalbackground"
        )}</li>
            <li><strong>Professional Background:</strong> ${formData.get(
            "professionalbackground"
        )}</li>
            <li><strong>Academic Background:</strong> ${formData.get(
            "academicbackground"
        )}</li>
            <li><strong>Primary Computer:</strong> ${formData.get(
            "primarycomputer"
        )}</li></ul>
        `;

        const courses = formData.getAll("course");
        const reasons = formData.getAll("reason");

        a += `<h2 class="boxtitle">🐺CLASS INFORMATION</h2><ul>`;
        for (let i = 0; i < courses.length; i++) {
            a += `<li><strong>${courses[i]}:</strong> ${reasons[i]}</li>`;
        }
        a += `</ul>`;

    a += `<h2 class="boxtitle">🐺ADDITIONAL INFORMATION</h2><ul>`;    
    a += `<li><strong>Famous Quote: </strong> ${formData.get(
            "famousquote"
        )}</li>`;
        a += `<li><strong>I'd also like to share: </strong> ${formData.get(
            "extrainfo"
        )}</li>`;

        document.getElementById("introductonbox").innerHTML = a;

        const imgInput = document.getElementById("imagesrcs");
        if (imgInput.files.length !== 0) {
            const reader = new FileReader();
            reader.readAsDataURL(imgInput.files[0]);
            reader.onload = () => {
                document.getElementById("intropicture").src = reader.result;
            };
        } else {
            console.error("No image file selected.");
        }


});

document.getElementById("addcoursebutton").addEventListener('click', function () {
    console.log("Add Course button clicked"); // Log button click for debugging

    const courseEntries = document.getElementById("course-field"); // Parent container for course entries
    const i = courseEntries.children.length; // Get the current number of children to create unique IDs

    // Create a new course entry container
    const courseEntry = document.createElement("div");

    // Set the inner HTML for the new course entry
    courseEntry.innerHTML = `
        <label for="course${i}">Course:</label> <!-- Label for the course input -->
        <input type="text" id="course${i}" name="course" required> <!-- Input field for the course name -->

        <br> <!-- Line break for spacing -->

        <label for="reason${i}">Reason:</label> <!-- Label for the reason textarea -->
        <textarea id="reason${i}" name="reason" required></textarea> <!-- Textarea for the reason -->

        <br><br> <!-- Additional line breaks for spacing -->

        <button type="button" class="removeCourseButton">Remove</button> <!-- Button to remove the course entry -->
    `;

    // Add event listener to the remove button
    courseEntry.querySelector(".removeCourseButton").addEventListener('click', function () {
        courseEntries.removeChild(courseEntry); // Remove the course entry when the button is clicked
    });

    // Append the new course entry to the parent container
    courseEntries.appendChild(courseEntry); // Add the new course entry to the DOM
});

