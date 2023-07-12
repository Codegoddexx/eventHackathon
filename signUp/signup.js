$(document).ready(function () {
    // Function to handle form submission
    function submitForm() {
        // Get form data
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var phoneNumber = $("#phoneNumber").val();
        var email = $("#email").val();
        var password = $("#password").val();


        // Validate form data (you can add your own validation logic here)
        const validateArray = [firstName, lastName, email, password];

        validateArray.forEach((item) => {
            if (item === "") {
                alert("Please fill in all fields");
                return;
            }
        });

        // Create an object with the form data
        var formData = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
        };

        // Send form data to the server
        $.ajax({
            type: "POST",
            url: "http://eventease.us-west-1.elasticbeanstalk.com/api/v1/user/registeruser",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function (response) {
                // Handle successful form submission
                alert("Signup successful!");
                // You can perform additional actions here, such as redirecting to another page
                location.assign("../Login/login.html")
            },
            error: function (xhr, status, error) {
                // Handle error
                alert("An error occurred: " + error);
            },
        });
    }

    // Bind form submission to button click event
    $("#signup-form").submit(function (event) {
        event.preventDefault(); // Prevent form from submitting normally
        submitForm(); // Call the submitForm function
    });
});