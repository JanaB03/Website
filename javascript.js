function sendEmail() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Construct email message
    var body = "Name: " + name + "\n\n" +
               "Email: " + email + "\n\n" +
               "Message: " + message;

    // Create a temporary element to handle the mailto link
    var tempElement = document.createElement('a');
    tempElement.href = "mailto:jabridi@ucsd.edu" +
                      "?subject=Message from " + name +
                      "&body=" + encodeURIComponent(body);

    // Trigger a click on the temporary element to open the user's default email client
    tempElement.click();

    // Reset form after submission
    document.getElementById("contact-form").reset();
}

document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
      makeHeaderSticky();
    };
  
    function makeHeaderSticky() {
      const header = document.querySelector('.sticky-header');
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  });