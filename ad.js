// Input styling on typing
$('input').on('input', function () {
    $(this).css({
      'background-color': '#e0f0ff',
      'color': '#003366',
      'border-color': '#0077ff'
    });
  });

  <script>
  document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // ✅ CAPTCHA check
    const captchaInput = document.getElementById("captcha").value.trim();
    if (captchaInput !== "7") {
      alert("❌ Incorrect CAPTCHA. Please answer '4 + 3' correctly.");
      return;
    }

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/mvgrlgaw", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        window.location.href = "second.html";  // ✅ Updated here
      } else {
        alert("Something went wrong. Please try again.");
      }
    }).catch(error => {
      console.error(error);
      alert("Network error. Try again.");
    });
  });

  // Input style on typing
  $('input').on('input', function () {
    $(this).css({
      'background-color': '#e0f0ff',
      'color': '#003366',
      'border-color': '#0077ff'
    });
  });
</script>

const formData = new FormData(document.querySelector("form"));
const investment = document.getElementById("investment").value;
formData.append("investment", investment); // Only needed if not already included

fetch("https://formspree.io/f/your-form-id", {
  method: "POST",
  body: formData,
  headers: {
    Accept: "application/json"
  }
})
.then(response => {
  if (response.ok) {
    alert("Form successfully submitted!");
  } else {
    alert("There was an issue submitting the form.");
  }
});