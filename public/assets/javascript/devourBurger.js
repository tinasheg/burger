$(document).ready(function () {
    $(".devoured").on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
        $.ajax({ url: "/api/burgers/" + id, method: "PUT" })

            .then(function (data) {
                console.log(data);
                location.reload();
            });
    });

    $(".add-burger").on("click", function (event) {
        event.preventDefault();

        const newBurger = {
            name: $("#burgerName").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Burger Added");
            location.reload();
        })
    })
});
