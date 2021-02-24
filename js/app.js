var videos = [
    "https://youtu.be/A4QedTRufIE?t=174", 
    "https://youtu.be/A4QedTRufIE?t=209", 
    "https://youtu.be/A4QedTRufIE?t=240",
    "https://youtu.be/A4QedTRufIE?t=288",
    "https://youtu.be/A4QedTRufIE?t=326",
    "https://youtu.be/A4QedTRufIE?t=366",
    "https://youtu.be/A4QedTRufIE?t=407",
    "https://youtu.be/A4QedTRufIE?t=518",
    "https://youtu.be/A4QedTRufIE?t=552",
    "https://youtu.be/A4QedTRufIE?t=591"
];




function getVideo() {
    var user_input = document.getElementById('myInput').value; //gets value of a text field

    if (user_input < 1 || user_input > videos.length) { //if input is less than 1 or more than 10, alert!
        alert("Please choose a number 1-10");
    } else {
        var index = user_input - 1; //adjusts user input to account for array index system
        var chosen_vid = videos[index]; //accesses video in above array
        window.open(chosen_vid); //opens video in a separate browers window
    }
}
