document.getElementById("whatsappForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  let contact = "+628816194547"; // add your number ex(+9100000000)

  var encodedMessage = encodeURIComponent("Name: " + name + "\n" + "Email: " + email + "\n" + "Phone: " + phone + "\n" + "Message: " + message);

  var link;

  // Check if user is on a mobile device
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    link = `whatsapp://send?phone=${contact}&text=${encodedMessage}`;
  } else {
    // Desktop device
    link = `https://web.whatsapp.com/send?phone=${contact}&text=${encodedMessage}`;
  }

  window.open(link, "_blank");
});
