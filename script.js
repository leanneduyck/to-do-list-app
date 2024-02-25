$(document).ready(function () {
  $("#button").click(function () {
    newItem();
  });

  $("#input").keydown(function (event) {
    if (event.key === "Enter") {
      newItem();
    }
  });

  $("#todoForm").submit(function (event) {
    event.preventDefault();
    newItem();
  });

  function newItem() {
    let inputValue = $("#input").val().trim();

    if (inputValue === "") {
      alert("You must write something.");
    } else {
      let li = $("<li></li>").text(inputValue);

      li.addClass("crossOutButton");
      li.on("dblclick", function () {
        $(this).toggleClass("strike");
      });
      let crossOutButton = $("<span></span>")
        .addClass("crossOutButton")
        .text(" X");
      crossOutButton.on("click", function () {
        $(this).parent().addClass("delete");
      });
      li.append(crossOutButton);

      $("#list").append(li);
      $("#input").val("");
      $("#button").prop("disabled", true);
    }
  }

  $("#list").sortable();
});

//function newItem() {
//let li = $("<li></li>");
//let inputValue = $("#input").val();
//li.append(inputValue);

//if (inputValue === "") {
//alert("You must write something.");
//} else {
//$("#list").append(li);
//}

//$("#input").keydown(function (event) {
//if (event.key === "Enter") {
//$("#button").click();
//}
//});
//}

//li.addClass("crossOutButton");
//let crossOutButton = $("<crossOutButton></crossOutButton>");
//crossOutButton.append(document.createTextNode("X"));
//li.append(crossOutButton);

//function crossOut() {
//li.addClass("strike");
//}
//$("input").on("dblclick", function crossOut() {
//li.addClass("strike");
//});

//crossOutButton.on("click", function () {
//li.addClass("crossOutButton");
//});

//crossOutButton.on("click", deleteListItem);
//function deleteListItem() {
//li.addClass("delete");
//}

//$("#list").sortable();
