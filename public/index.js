// const btn = document.getElementsByClassName("to-modal");

// for (let i=0; i < btn.length; i++ ){
//     btn[i].onclick = () => {
//         console.log("Hello Mark");
//     }
// }

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  // Initialization for ES Users
import { Input, initMDB } from "mdb-ui-kit";

initMDB({ Input });

/* 
Day 5
Worked on the footers.
Fixed the odd look it had on most pages.
Take it up from results page.

Day 6:
Session 1: 8 to 10am
Styled Home Contact and About Page
Home: only sizing images remaining

Research on making grid system responsive. Continue with research after the break.
*/