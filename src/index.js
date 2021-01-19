$.ajax({
    type:"Get",
    url:"data.json",
    dataType:"json",

})
$.ajax({
    type: "Get",
    url: "src/data.json",
    data: "data",
    dataType: "json",
    success: function (response) {
        $.each(response.services, function (index, el) { 
            const article=$('<article>').attr("class", "service-art");
            const img=$('<img>').attr('src',el.img);
            const title=$('<h2>').text(el.title);
            const text=$('<p>').text(el.text);
            const div=$('<div>');
            const button=$('<button>').text('Select');
            $('.inside-services').prepend(article);
            $(article)
            .append(img)
            .append(title)
            .append(div)
            .append(text)
            .append(button);
        });
        
    },error: function() {
        console.log("No se ha podido obtener la información");
    }
});