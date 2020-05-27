$(document).ready(function () {

    $("#makeBurger").on("submit", function (event) {
        event.preventDefault();
        console.log('makeBurger');
        const newBurger = {
            burger_name: $("#newBurger").val(),
            devoured: false
        };

        $.ajax("/", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Created new burger!")
            location.reload();
        })
    });

    $("#notEaten .eatBurger").on("click", function (event) {
        event.preventDefault();

        console.log('button' + '-'.repeat(75));

        var name = $(this).data('name').trim();
        var id = $(this).data('id');

        var ateBurger = {
            burger_name: name,
            id: id
        }
        console.log(ateBurger + '-'.repeat(75))
        $.ajax("/", {
            type: "PUT",
            data: ateBurger
        }).then(function () {
            console.log("Ate burger!")
            location.reload();
        })
    })
});
