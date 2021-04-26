
 if (window.location.href.match('opretKunde.html') != null) {
    // Get the modal
    var modal = document.getElementById("popupOpret");

    // Get the button that opens the modal
    var btn = document.getElementById("buttonOpret");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    }
 }



var slider = document.getElementById("slider");

var output = document.getElementById("afstand");

output.innerHTML = slider.value + " km"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = slider.value + " km";
  console.log(slider.value);
}

var content = document.querySelector("#dropdownContent");
function dropdown() {
    
    if (content.style.display == "block") {
        content.style.display = "none";
        console.log("invis");
    }

    else {
        content.style.display = "block";
        console.log("Content!")
    }
}


