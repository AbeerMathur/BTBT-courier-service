document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        section.style.display = "none";
      });
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.style.display = "block";
      }
    }
  
    document.getElementById("loginButton").addEventListener("click", function () {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const loginError = document.getElementById("loginError");
      if (username === "" || password === "") {
        loginError.innerText = "Please enter both username and password.";
        loginError.style.display = "block";
      } else {
        document.getElementById("login").style.display = "none";
        document.getElementById("mainNav").style.display = "block";
        showSection("home");
        loginError.style.display = "none";
      }
    });
  
    const links = ["homeLink", "bookingLink", "statusLink", "checkinLink"];
    links.forEach((link) => {
      document.getElementById(link).addEventListener("click", function (event) {
        event.preventDefault();
        const section = link.replace("Link", "");
        showSection(section);
      });
    });
  
    document.getElementById("bookingButton").addEventListener("click", function () {
      const senderAddress = document.getElementById("senderAddress").value;
      const receiverAddress = document.getElementById("receiverAddress").value;
      const packageType = document.getElementById("packageType").value;
      const packageWeight = document.getElementById("packageWeight").value;
      const bookingError = document.getElementById("bookingError");
      if (!senderAddress || !receiverAddress || !packageWeight) {
        bookingError.innerText = "Please fill in all fields.";
        bookingError.style.display = "block";
      } else {
        document.getElementById("bookingConfirmation").innerText =
          `Package from ${senderAddress} to ${receiverAddress} as a ${packageType} weighing ${packageWeight} kg is ready for dispatch.`;
        document.getElementById("bookingConfirmation").style.display = "block";
        document.getElementById("paymentDetails").style.display = "block";
        bookingError.style.display = "none";
      }
    });
  
    document.getElementById("confirmBookingButton").addEventListener("click", function () {
      const cardNumber = document.getElementById("cardNumber").value;
      const expiryDate = document.getElementById("expiryDate").value;
      const cvv = document.getElementById("cvv").value;
      const bookingError = document.getElementById("bookingError");
      if (!cardNumber || !expiryDate || !cvv) {
        bookingError.innerText = "Please enter all card details.";
        bookingError.style.display = "block";
      } else {
        document.getElementById("bookingConfirmation").innerText += " Payment received.";
        document.getElementById("paymentDetails").style.display = "none";
        bookingError.style.display = "none";
      }
    });
  
    document.getElementById("checkStatusButton").addEventListener("click", function () {
      const trackingNumber = document.getElementById("trackingNumber").value;
      const statusError = document.getElementById("statusError");
      const packageStatus = document.getElementById("packageStatus");
      if (!trackingNumber) {
        statusError.innerText = "Please enter a tracking number.";
        statusError.style.display = "block";
      } else {
        packageStatus.innerText = `Package ${trackingNumber} is in transit.`;
        statusError.style.display = "none";
        packageStatus.style.display = "block";
      }
    });
  
    document.getElementById("checkInButton").addEventListener("click", function () {
      const pickupOrderNumber = document.getElementById("pickupOrderNumber").value;
      const checkinError = document.getElementById("checkinError");
      const pickupStatus = document.getElementById("pickupStatus");
      if (!pickupOrderNumber) {
        checkinError.innerText = "Please enter a pickup order number.";
        checkinError.style.display = "block";
        pickupStatus.style.display = "none";
      } else {
        pickupStatus.innerText = `Pickup order ${pickupOrderNumber} is ready for collection.`;
        checkinError.style.display = "none";
        pickupStatus.style.display = "block";
      }
    });
  });
  