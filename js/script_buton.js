document.addEventListener("DOMContentLoaded", function() {
    let check = document.getElementById("check");
    let btn = document.getElementById("btn");

    check.addEventListener('change', inhabilitar, false);
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('file-show-active');
    });

    function inhabilitar() {
        if (check.checked) {
            btn.disabled = true;
            btn.style.pointerEvents = 'none';
        } else {
            btn.disabled = false;
            btn.style.removeProperty('pointer-events')
        }
    }
});