let uploadIcon = document.querySelector("#drop-file .upload-icon");
let table = document.querySelector("#drop-file .table");

uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();
})

uploadIcon.nextElementSibling.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader();

        reader.onloadend = (event) => {

            let base64 = event.currentTarget.result;

            table.lastElementChild.innerHTML += `<tr>
            <td>${file.size/1024} Kb</td>
            <td>${file.name}</td>
            <td><img src="${base64}" width="150px" height="150px" alt=""></td>
          </tr>`

        }

        reader.readAsDataURL(file)

    }
})

var imageLoader = document.getElementById('filePhoto');
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
  var reader = new FileReader();
  reader.onload = function(event) {

    $('#blah').attr('src', event.target.result);
  }
  reader.readAsDataURL(e.target.files[0]);
}
