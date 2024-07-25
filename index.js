const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const addBtn = document.getElementById("button");
const bookList = document.getElementById("book_list");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (title.value === "" && author.value === "" && year.value === "") {
    alert("please form fill up your input");
  } else {
    //   create table row
    const tr = document.createElement("tr");
    // create table heading
    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    tr.appendChild(newTitle);

    //   newAuthor

    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    tr.appendChild(newAuthor);

    //   newYear
    const newYear = document.createElement("th");
    newYear.innerHTML = year.value;
    tr.appendChild(newYear);

    bookList.appendChild(tr);
  }
});
