// const btn = document.getElementsByClassName("to-modal");

// for (let i=0; i < btn.length; i++ ){
//     btn[i].onclick = () => {
//         console.log("Hello Mark");
//     }
// }

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

 