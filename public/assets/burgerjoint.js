$(funciton(){
    $("#makeBurger").on("click",function(event){
        event.preventDefault();

        const newBurger = {
            burger_name:$("newBurger").val().trim(),
            devoured:false
        };

        $.ajax("/",{
            type:"POST",
            data:newBurger
        }).then(function(){
            console.log("Created new burger!")
            location.reload();
        })
    })
})