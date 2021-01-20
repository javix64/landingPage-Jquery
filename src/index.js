//ajax services
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
        console.error("The information could not be obtained");
    }
});
//ajax testimonials
let arrArticle=[]
let testimonials=$.ajax({
    type: "Get",
    url: "src/data.json",
    data: "data",
    dataType: "json",
    success: function (response) {
        $.each(response.testimony, function (index, el) { 
            const article=$('<article>').attr("class", "service-art");
            const img=$('<img>').attr('src',el.img);
            const name=$('<h3>').text(el.name);
            const text=$('<p>').text(el.text);
            const date=$('<p>').text(el.date).attr('style','text-align:center');
            arrArticle.push(article);
            /* function successFunction(data) {

                var numberOfItems = data.d.results.length;
              
                var randItem = Math.floor(Math.random() * numberOfItems);
              
                var randText = data.d.results[randItem].QuoteText;
                $('.quoteText').html(randText);
              
              } */

            //let testimonials=$('.inside-testimonials').prepend(article);
            let art= $(article)
            .append(img)
            .append(name)
            .append(date)
            .append(text);
        });
        //tengo que poner 3 elementos random
        //y prepend en section
        function giveMe(){
            let arrRandom=[];
            for (let i = 0; i < 3; i++) {
                let random= Math.floor( Math.random() * (arrArticle.length));
                arrRandom.push(random);
            }
            console.dir(arrRandom);
            for (let i = 0; i < arrRandom.length; i++) {
                console.log(i);
                $('.inside-testimonials').prepend(arrArticle[arrRandom[i]]);
            }
        }
        giveMe();
        
    },error: function() {
        console.error("The information could not be obtained");
    }
});
