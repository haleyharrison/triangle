var triangle = function(sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC) {
    return "equilateral";
  } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    return "isosceles";
  } else if (sideA !== sideB !== sideC) {
    return "scalene";
  } else {
  return false;
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var sideA = parseInt($("input#sideA").val());
    var sideC = parseInt($("input#sideC").val());
    var sideB = parseInt($("input#sideB").val());
    var result = triangle(sideA, sideB, sideC);
    $(".triangle").text(" ");

    $(".triangle").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
