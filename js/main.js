


/*  
===============================================
===============================================
*/

/* start dark 1 */
let d1inputBtn = document.querySelector(".dark-1 .input-btn");
let d1dark1 = document.querySelector(".dark-1");
let d1button = document.querySelector(".dark-1 .nav .button");
let d1btnSpan = document.querySelector(".dark-1 .button span");

d1inputBtn.addEventListener("click", () => {
    d1dark1.classList.toggle("active");
    d1btnSpan.classList.toggle("active");
});


/* end dark 1 */

/*  
===============================================
===============================================
*/

/* start dark 2 */

let d2darken = document.querySelector(".dark-2 #darken");
let d2dark2 = document.querySelector(".dark-2");


if(localStorage.getItem("theme") == null) {

    localStorage.getItem("theme", "light");

}


let d2localData = localStorage.getItem("theme");

if(d2localData == "light") {
    d2dark2.classList.remove("darks");

} else if (d2localData == "dark") {
    d2darken.classList.toggle("active");
    d2dark2.classList.add("darks");
}


d2darken.addEventListener("click", () => {
    d2dark2.classList.toggle("darks");

    if(d2dark2.classList.contains("darks")) {
        d2darken.classList.toggle("active");
        localStorage.setItem("theme", "dark");
    } else {
        d2darken.classList.toggle("active");
        localStorage.setItem("theme", "light");
    }

});



/* end dark 2 */


/*  
===============================================
===============================================
*/

/* start dark 3 */







/* end dark 3 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start dark 3 */



/* end dark 3 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start dark 4 */



/* end dark 4 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start dark 5 */



/* end dark 5 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start dark 6 */



/* end dark 6 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start dark 7 */



/* end dark 7 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start dark 8 */



/* end dark 8 */

/*  
===============================================
===============================================
*/

