window.onload = () =>{
  var dropzone = document.getElementById('dropzone');
  dropzone.ondrop = function(e) {
    console.log("file dropped")

    var length = e.dataTransfer.items.length;
    for (var i = 0; i < length; i++) {
      var entry = e.dataTransfer.items[i].webkitGetAsEntry();
      console.log(entry)
      if (entry.isFile) {

      } else if (entry.isDirectory) {

      }
    }
  };

  document.ondragover = document.ondrop = (ev) => {
    ev.preventDefault()
  }

  document.body.ondrop = (ev) => {
    console.log(ev.dataTransfer.files[0].path)
    ev.preventDefault()
  }

}
