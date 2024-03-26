let talked = 0;
let w = "Type your first message";
function startTalking() {
	document.getElementById("disallowed").style.display = "none";
	// If user enters "respond", show a message that this is not allowed
	if(w==="respond"){
		w = "Type a new message";
		document.getElementById("disallowed").style.display = "block";
		return;
	}
	// Prompt user to enter a message
	// If user cancels the prompt, exit the function
	if (w === null) {
		w = "Type a new message";
		return;
	}
	w = prompt(w, "respond");
	if (w !== "respond" && w !== null) {
		document.getElementById("disallowed").style.display = "none";
		talked = talked + 1;
		if (talked !== 1) {
			document.getElementById("talkedamount").textContent = "You have talked to yourself " + talked + " times";
		} else {
			document.getElementById("talkedamount").textContent = "You have talked to yourself " + talked + " time";
		}
	}
	// Call startTalking function again after a delay
	setTimeout(startTalking, 1); // Change the delay time as per your requirement
}