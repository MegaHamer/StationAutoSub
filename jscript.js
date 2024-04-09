//запрос
function getQuery(searchString = "",inputId) {
    var settings = {
        "url": "https://busstation.сделай.site/api/station?query=" + searchString,
        "method": "GET",
        "timeout": 0,
    };

    var answers = [];
    $.ajax(settings).done(function (response) {
        answers = response.data.items
        console.log(answers);
        updAutoSub(answers,inputId);
    });

}

//подстановка
function updAutoSub(answers,inputId) {
    $(function () {
        var availableTags = answers.map(a => a.name);
        let unique = availableTags.filter((item, i, ar) => ar.indexOf(item) === i);
        console.log(availableTags);
        $(inputId).autocomplete({
            source: unique
        });
    });
}

$("#in").on("input", function () {
    console.log("input")
    getQuery($(this).val(),"#in")
})
$("#out").on("input", function () {
    console.log("input")
    getQuery($(this).val(),"#out")
})