$(function () {
    $("#makeBurger").on("click", function (event) {
        event.preventDefault();
        console.log('makeBurger');
        const newBurger = {
            burger_name: $("newBurger").val().trim(),
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

    $("input.eatBurger").on("submit", function (event) {
        event.preventDefault();

        console.log('button' + '-'.repeat(75))

        var name = $(this).data('name').val();
        var id = $(this).data('id');

        console.log(name + '-'.repeat(75))

        var ateBurger = {
            burger_name: name,
            id: id
        }

        $.ajax("/api/burgers/" + name, {
            type: "PUT",
            data: ateBurger
        }).then(function () {
            console.log("Ate burger!")
            location.reload();
        }).catch();
    })
});
