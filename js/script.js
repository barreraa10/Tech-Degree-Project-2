/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   


//my two global variables declared below 
const studentList = document.querySelectorAll('.student-list li')
const listMax = 10;

// Created the `showPage` function to hide all of the items in the list except for the ten you want to show.

function showPage(list, page) {
   const startIndex = page * listMax - listMax;
   const endIndex = page * listMax;
   for (let i = 0; i < list.length; i++) {
     if (i >= startIndex && i < endIndex) {
       list[i].style.display = "block";
     } else {
       list[i].style.display = "none";
     }
   }
 }
 
 
 //create element function 
const createElement = element => {
   const tag = document.createElement(element);
   return tag;
 };
 
 //this variable looks at how many pages need to be created given the amount of names there are in a list 
 const totalPages = list => {
   if (list.length % listMax > 0) {
     return list.length / 10 + 1;
   }
   return list.length / 10;
 };
 
 //creates pagination function
 function appendPageLinks(studentList) {
   const numberOfPages = totalPages(studentList);//jumps into the total pages variable and returns how many pages need to be created 
   const div = createElement("div");//creates the div element to style 
   const ul = createElement("ul");//creates the ul elemnt to style 
   div.className = "pagination";
   document.querySelector(".page").appendChild(div);
   div.appendChild(ul);

   //creates actual links for the pages to be clicked on 
   function pageNumbers(page) {
     for (let i = 1; i <= page; i++) {
       const li = createElement("li");
       const a = createElement("a");
       a.href = "#";
       li.className = "links";
       ul.appendChild(li);
       a.textContent = i;
       li.appendChild(a);
     }
   }
 
   //show the default 1st page of students
   showPage(studentList, 1);
  
   //shows how many pages are available to be seen on page (depending on the number of students )
   pageNumbers(numberOfPages);
 
   //event listener added for clicks on a given page number 
   ul.addEventListener("click", e => {
     e.preventDefault();
     const a = document.querySelectorAll("a");
     for (let i = 0; i < a.length; i++) {
       a[i].classList.remove("active");
       if (a[i].textContent === e.target.textContent) {
         e.target.className = "active";
         showPage(studentList, e.target.textContent);
       }
     }
   });
 }
 //appends the links to the page 
 appendPageLinks(studentList);