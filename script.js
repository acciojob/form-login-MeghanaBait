function getFormvalue() {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the form fields
    let firstName = document.getElementsByName('fname')[0].value;
    let lastName = document.getElementsByName('lname')[0].value;

    // Display the values using alert
    alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
}
