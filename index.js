window.onload = () => {

    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
      // options
      columnWidth: 80,
      gutter: 20,
      itemSelector: '.grid-item',
    });
    
};

const descriptions = [
    "music directer / producer / sound design", // 0 crash
    "engineer / producer / sound design / keyboards / bass", // 1 secret.wav
    "composer / sound design", // 2 half light
    "producer / engineer / keyboards / programmer", // 3 gpt
    "music director / sound design / programmer", // 4 snl
    "coachella: music director / producer / sound design / programmer", // 5 coachella
    "dsp / ui development in c++ / juce of a character reverb plugin based on an emulation of a bricasti hardware reverb bussed through reel to reel tape", // 6 taped spaces
    "kontakt programming for a lofi felt piano with unique tonal weight", // 7 dustbowl
    "kontakt programming for a sub bass sampled to sit perfectly in any arrangement or mix", // 8 lo
    "kontakt programming and sampling for a scoring tool created from a tape-machine-processed piano", // 9 ekotape
    "design & development of a max device that integrates seamlessly with directout's 'Buffer Loop Detection System' enabled hardware, to enable fully auto redundant playback", // 10 BLDS looper
    "music director / sound design / programmer / keyboards" // 11 bbc
];



function showText(index, descriptionIndex) {
    // Hide all photos except the one being hovered over
    const photos = document.querySelectorAll('.photo');

    photos.forEach((photo, i) => {
        if (i !== index) {
            photo.style.opacity = 0;
        }
    });

    var element = document.createElement("p");

    element.id = "description"

    element.textContent = descriptions[descriptionIndex];

    photos[index].appendChild(element);

}

function hideText(index) {
    // Restore the visibility of all photos
    const photos = document.querySelectorAll('.photo');

    photos.forEach((photo) => {
        photo.style.opacity = 1;
    });

    var elementToRemove = document.getElementById("description");

    if (elementToRemove)
    {
        elementToRemove.remove();
    }

}

