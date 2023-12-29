function getFormvalue() {
    //Write your code here
	event.preventDefault();

	let firstName = document.getElmentByName('fName')[0].value;
	let lastName = document.getElmentByName('lName')[0].value;

	alert('First Name: '+firstName+"\n Last Name: "+lastName);

}
