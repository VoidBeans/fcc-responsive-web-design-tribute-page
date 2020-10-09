$(".accordion-header").each(function() {
    $(this).on("click", function() {
        $(this).toggleClass("active");

        var child = $(this).next();
        if (child.css("max-height") != "0px") {
            child.css("max-height", "0px");
        } else {
            child.css("max-height", child.prop("scrollHeight") + "px");
        }
    });
});