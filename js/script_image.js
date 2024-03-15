document.addEventListener("DOMContentLoaded", function() {

    let fileInput = document.getElementById("image");
    let dropZone = document.getElementById("result-image");
    let img = document.getElementById("img-result");
    let img2 = document.getElementById("img-result-2");
    let btnClear = document.getElementById("clear-img");



    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('file-show-active');
    });
    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.classList.remove('file-show-active');
    });

    const uploadImage = (file) => {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.addEventListener('load', (e) => {
            img.setAttribute('src', e.target.result);
            img2.setAttribute('src', e.target.result);
        });
    };
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        fileInput.files = e.dataTransfer.files;
        let file = fileInput.files[0];
        uploadImage(file);
    });
    fileInput.addEventListener('change', (e) => {
        let file = e.target.files[0];
        uploadImage(file);
    });
    btnClear.addEventListener('click', () => {
        img.removeAttribute('src');
        img2.removeAttribute('src');
        dropZone.classList.remove('file-show-active');

    });   
});