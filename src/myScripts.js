const path = require('path')
window.onload = () => {
    var dropzone = document.getElementById('dropzone');
    dropzone.ondrop = function(e) {

        console.log("File dropped:", e.dataTransfer.files[0].path)
        var length = e.dataTransfer.items.length;
        for (var i = 0; i < length; i++) {
            var entry = e.dataTransfer.items[i].webkitGetAsEntry();


            if (entry.isFile) {

            } else if (entry.isDirectory) {

            }
        }
    };

    document.ondragover = document.ondrop = (ev) => {
        ev.preventDefault()
    }

    document.body.ondrop = (ev) => {
        ev.preventDefault()
    }

}
