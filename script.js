const photoInput = document.getElementById("photoInput");
const uploadedPhoto = document.getElementById("uploadedPhoto");

photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        uploadedPhoto.src = event.target.result;

    };

    reader.readAsDataURL(file);

});