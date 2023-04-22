function sendEmail() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Construct email message
    var body = "Name: " + name + "\n\n" +
               "Email: " + email + "\n\n" +
               "Message: " + message;
  
    // Send email using the "mailto" protocol
    var mailtoLink = "mailto:jabridi@ucsd.edu" +
                     "?subject=Message from " + name +
                     "&body=" + encodeURIComponent(body);
  
    window.location.href = mailtoLink;
  
    // Reset form after submission
    document.getElementById("contact-form").reset();
  }
  