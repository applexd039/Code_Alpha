function generateBackground() {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    var backgroundImage = document.getElementById('image').files[0];

    var gradient = 'linear-gradient(to bottom right, ' + color1 + ', ' + color2 + ')';
    document.body.style.background = gradient;

    if (backgroundImage) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.body.style.backgroundImage = 'url(' + e.target.result + ')';
        };
        reader.readAsDataURL(backgroundImage);
    }
}
