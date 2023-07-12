$(document).ready(function () {
    // Function to handle form submission
    function submitForm() {
        // Get form data
        var email = $("#email").val();
        var password = $("#password").val();


        // Validate form data (you can add your own validation logic here)
        const validateArray = [email, password];

        validateArray.forEach((item) => {
            if (item === "") {
                alert("Please fill in all fields");
                return;
            }
        });

        // Create an object with the form data
        var formData = {
            email: email,
            password: password,
        };

        // Send form data to the server
        $.ajax({
            type: "POST",
            url: "http://eventease.us-west-1.elasticbeanstalk.com/api/v1/user/signin",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function (response) {
                // Handle successful form submission
                alert("Signin successful!");
                // You can perform additional actions here, such as redirecting to another page
                location.assign("../createEventForm/form.html")
            },
            error: function (xhr, status, error) {
                // Handle error
                alert("An error occurred: " + error);
            },
        });
    }

    // Bind form submission to button click event
    $("#signin-form").submit(function (event) {
        event.preventDefault(); // Prevent form from submitting normally
        submitForm(); // Call the submitForm function
    });
});