const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;

  const formData = new FormData();
  formData.append('email', email);
  formData.append('amount', amount);

  fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
    },
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the Paystack API
    const reference = data.data.reference;

    // Verification step
    fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
      },
    })
    .then(response => response.json())
    .then(verificationData => {
      // Handle the verification response
      console.log(verificationData);
      // Proceed with further actions based on verification results
    })
    .catch(error => {
      // Handle any errors during verification
      console.error(error);
    });
  })
  .catch(error => {
    // Handle any errors during payment initialization
    console.error(error);
  });
});
