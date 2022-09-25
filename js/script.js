/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {

   // create two variables which will represent the index for the first and last student on the page
 var startIndex = page*9 -9;

 var endIndex = page*9;
   // select the element with a class of `student-list` and assign it to a variable

 var StudentLI = document.querySelector('.student-list');

   // set the innerHTML property of the variable you just created to an empty string
   StudentLI.innerHTML = ' ';

   // loop over the length of the `list` parameter
   for (let i = 0; i<list.length; i++){
  // inside the loop create a conditional to display the proper students
       // inside the conditional:
         // create the elements needed to display the student information
         // insert the above elements
    if (i >= startIndex && endIndex > i) {
      /* code to run if condition is true */
var StudentStyle = `<li class="student-item cf">

      <div class="student-details">
        <img class="avatar" src="  ${list[i].picture.thumbnail}" alt="Profile Picture">
        <h3>
          ${list[i]["name"].first}
          ${list[i]["name"].last}

        </h3>
        <span class="email">${list[i].email}</span>
      </div>
      <div class="joined-details">
        <span class="date"> ${list[i]["registered"].date}</span>
      </div>
    </li>
    `;


    StudentLI.insertAdjacentHTML('beforeend', StudentStyle)

   }

   

 }


}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/


function addPagination(list) {
  // create a variable to calculate the number of pages needed
var calculatePages =  Math.ceil(list.length / 9);
var LinkLi = document.querySelector('.link-list');
  // select the element with a class of `link-list` and assign it to a variable
  // set the innerHTML property of the variable you just created to an empty string
  LinkLi.innerHTML = ' ';

  // loop over the number of pages needed
  for(let i =1; i<= calculatePages; i++ ){
    let button = `
    <li>
  <button type="button">${i}</button>
</li>
    `;

    LinkLi.insertAdjacentHTML('beforeend', button);

  }
  document.querySelector('button').classList.add('active');

    // create the elements needed to display the pagination button
    // insert the above elements

  // give the first pagination button a class of "active"

  // create an event listener on the `link-list` element
    // if the click target is a button:
      // remove the "active" class from the previous button
      // add the active class to the clicked button
      // call the showPage function passing the `list` parameter and page to display as arguments
  LinkLi.addEventListener('click', (e)=>{
    if(e.target.getAttribute('type')=== "button"){
      document.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");
    let text = e.target.textContent;

showPage(data, text);
    }
  
  });


}
showPage(data, 1);
addPagination(data);


//Search Functionality
const input = document.getElementById("myInput");

input.addEventListener('keyup', searchFunction);

function searchFunction(){
  filterVal = document.getElementById('myInput').value.toLowerCase();
  let mainEl = document.querySelectorAll(".student-details h3");
  
  for (let i = 0; i < mainEl.length; i++) {
    let captions = mainEl[i].innerHTML.toLowerCase();
    let filter = captions.includes(filterVal);
    if (filter === true) {
      mainEl[i].parentNode.parentNode.style.display = "flex";
    } 
     else {

      mainEl[i].parentNode.parentNode.style.display = "none";
    }

  

  }

 }




