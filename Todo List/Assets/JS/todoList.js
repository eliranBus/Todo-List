//check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
    var erasedMessage = "Task Erased";
    $("#feedback").text(erasedMessage).css("color", "black").delay(200).fadeOut(2000);
    $("#feedback").css("display", "");
});

//click on X to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
//show delete feedback
var removedMessage = "Task Removed";
$("span").click(function () {
    $("#feedback").text(removedMessage).css("color", "red").delay(200).fadeOut(2000);
    $("#feedback").css("display", "");
});

//add a new todo line
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabing new todo text from input
        var todoText = $(this).val();
        $(this).val("")
        //creating a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
        //show add feedback
        var addedMessage = "Task Added";
        $("#feedback").text("Task Added").css("color", "lightgreen").delay(200).fadeOut(2000);
        $("#feedback").css("display", "");
    }
});


//pancil icon reveal the "add new task" row
$("#pencil").click(function () {
    $("input[type='text']").fadeToggle();
});