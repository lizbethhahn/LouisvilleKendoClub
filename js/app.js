var videos = [
    "https://youtu.be/U9nNymMSixs?t=186",
    "https://youtu.be/U9nNymMSixs?t=214",
    "https://youtu.be/U9nNymMSixs?t=238",
    "https://youtu.be/U9nNymMSixs?t=273",
    "https://youtu.be/U9nNymMSixs?t=304",
    "https://youtu.be/U9nNymMSixs?t=333",
    "https://youtu.be/U9nNymMSixs?t=364",
    "https://youtu.be/U9nNymMSixs?t=458",
    "https://youtu.be/U9nNymMSixs?t=487",
    "https://youtu.be/U9nNymMSixs?t=515"
];



function getVideo() {
    var user_input = document.getElementById( 'myInput' ).value; //gets value of a text field

    if ( user_input < 1 || user_input > videos.length ) { //if input is less than 1 or more than 10, alert!
        alert( "Please choose a number 1-10" );
    } else {
        var index = user_input - 1; //adjusts user input to account for array index system
        var chosen_vid = videos[index]; //accesses video in above array
        window.open( chosen_vid ); //opens video in a separate browers window
    }
}
