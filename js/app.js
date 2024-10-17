var videos = [
    "https://youtu.be/Ip5JWXMUJX0?list=PL6-PxNYXijDEsAKC8-PGiA6L8k4K5nXPq&t=1",
    "https://youtu.be/K0ez9S1YyHY?list=PL6-PxNYXijDEsAKC8-PGiA6L8k4K5nXPq&t=2",
    "https://youtu.be/Kl72PKDAgEI?list=PL6-PxNYXijDEsAKC8-PGiA6L8k4K5nXPq&t=1",
    "https://youtu.be/Dsb8oU4sr-w?list=PL6-PxNYXijDEsAKC8-PGiA6L8k4K5nXPq",
    "https://youtu.be/SOXOh7x5gVE?list=PL6-PxNYXijDEsAKC8-PGiA6L8k4K5nXPq&t=1",
    "https://youtu.be/F2rlIiriso8?list=PL6-PxNYXijDEsAKC8-PGiA6L8k4K5nXPq&t=2",
    "https://youtu.be/rt3LPJMP2c0?list=PL6-PxNYXijDEsAKC8-PGiA6L8k4K5nXPq&t=1",
    "https://youtu.be/r6dWj7fkYoI?list=PL6-PxNYXijDEsAKC8-PGiA6L8k4K5nXPq&t=26",
    "https://youtu.be/hO5XFwFqqN8?list=PL6-PxNYXijDEsAKC8-PGiA6L8k4K5nXPq&t=1",
    "https://youtu.be/D-uoMwAdExs?list=PL6-PxNYXijDEsAKC8-PGiA6L8k4K5nXPq&t=2"
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
