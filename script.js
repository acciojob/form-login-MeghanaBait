function getFormvalue() {
    //Write your code here
	event.preventDefault();

	let firstName = document.getElementsByName('fName')[0].value;
	let lastName = document.getElementsByName('lName')[0].value;

	alert('First Name: '+firstName+"\n Last Name: "+lastName);

}
