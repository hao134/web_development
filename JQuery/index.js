// when load jquery in html header section use below
// $(document).ready(function() {
//     $("h1").css("color","red");
// });

// add class
// $("h1").addClass("big-title margin-50");

//change the inner text, like something.innerhtml
// $("h1").text("Bye");
// $("button").text("Don't Click Me");
// $("button").html("<em>Hey</em>")



// manipulating attributes
//console.log($("img").attr("src"));
//$("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function() {
//     $("h1").css("color", "purple")
// })


//////  Adding Event Listeners with JQuery
// for (var i=0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }
// equal to 
// $("button").click(function() {
//     $("h1").css("color", "purple");
// });


// $("input").keypress(function(event) {
//     console.log(event.key);
// });

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple");
// });

// $("button").on("click", function() {
//     $("h1").slideToggle();
// });

// $("button").on("click", function() {
//     $("h1").animate({margin: "20%"});
// });

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity:0.5})
});