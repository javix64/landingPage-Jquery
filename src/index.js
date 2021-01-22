//button go start
let myButton = $('#myBtn')
$(window).scroll(function () { scrollFunction()});
function scrollFunction () {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        $(myButton).css('display','block');
    }else{
        $(myButton).css('display','none');
    }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 
//          ajax services
let services = $.ajax({
    type: "Get",
    url: "src/data.json",
    data: "data",
    dataType: "json",
    timeout:5000,
    success: function (response) {
        $.each(response.services, function (index, el) { 
            const article=$('<article>').attr("class", "service-art");
            $(article).addClass('articleService');
            const img=$('<img>').attr('src',el.img);
            const title=$('<h2>').text(el.title);
            const text=$('<p>').text(el.text);
            const div=$('<div>').attr('class','line');
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
//          ajax testimonials
let arrArticle=[]
let testimonials = $.ajax({
    type: "Get",
    url: "src/data.json",
    data: "data",
    dataType: "json",
    timeout:5000,
    success: function (response) {
        $.each(response.testimony, function (index, el) { 
            const article=$('<article>').attr("class", "service-art");
            $(article).addClass('articleTestimony');
            const img=$('<img>').attr('src',el.img);
            const name=$('<h3>').text(el.name);
            const text=$('<p>').text(el.text);
            const line=$('<div>').attr('class','line');
            const date=$('<p>').text(el.date).attr('style','text-align:center');
            let art= $(article)
            .append(img)
            .append(name)
            .append(line)
            .append(date)
            .append(text);
            arrArticle.push(article);
        });
        function giveMe(){
            $('.inside-testimonials').empty();
            let arrRandom=[];
                for (let i = 0; i < 3; i++) {
                  let num;
                  do {
                    num=Math.floor(Math.random()*(11));      
                  } while (arrRandom.includes(num));
                  arrRandom.push(num);
                }
                console.log(arrRandom);
            for (let i = 0; i < arrRandom.length; i++) {
                $('.inside-testimonials').prepend(arrArticle[arrRandom[i]]);
            }
        }
        giveMe();
        // Change testimonials every 12 sec
        // Event click
        $('#changeTestimonials').click(function(){
            giveMe();
        })
        
        
    },error: function() {
        console.error("The information could not be obtained");
    }
});


//          Scroll
function scrollToAnchor(aid){
    var aTag = $("."+ aid +"");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
$('#linkTestimonios').click(function () { 
    scrollToAnchor('testimonios');
});
$('#linkServicios').click(function () { 
    scrollToAnchor('inside-services');
});
$('#linkButton').click(function () { 
    scrollToAnchor('formulario');
});
$('#myBtn').click(function () { 
        $('html,body').animate({scrollTop: 0},'slow');
});



//Imagenes de animaciones
let animateArticleTestimony=$(document).scroll(function (e) { 
    let top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('.articleTestimony').offsetTop;
         
    if (isVisible) {
        $('.articleTestimony').addClass('animate');

    }
});
let animateArticleServices=$(document).scroll(function (e) { 
    let top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('.articleService').offsetTop;
         
    if (isVisible) {
        $('.articleService').addClass('animate');

    }
});

//  LOCALIZACION
if ("geolocation" in navigator){
	navigator.geolocation.getCurrentPosition(function(position){ 
		console.log("Tu localizacion es: \nLatitud : "+position.coords.latitude+". \nLongitud : "+ position.coords.longitude+ ". \nCiudad: Granada.");
		});
}else{
	console.log("Browser doesn't support geolocation!");
}

//validar formularios
let inputName= $('#name');
let inputEmail= $('#email');
let inputSubject= $('#subject');

//poner email, subject, submit a disabled
$('#email').attr('disabled','disabled');
$('#subject').attr('disabled','disabled');
$('#submit').attr('disabled','disabled');

//metodos para comprobar.
$('#name').keyup(function () {
    let regexN = new RegExp("^[a-zA-Z]+$");
    let inputN = inputName[0].value;
    if(inputN.length>=3 && regexN.test(inputN)){
    $('#email').removeAttr('disabled');
    $('#name').css('border','5px solid green');
    }else if(inputN.length<=2){
        $('#email').attr('disabled','disabled');
        $('#name').css('border','5px solid red');
    }
});
$('#email').keyup(function (){
    let regexE = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    let inputE = inputEmail[0].value;

    if(inputE.length>=3 && regexE.test(inputE)){
        $('#subject').removeAttr('disabled');
        $('#email').css('border','5px solid green');
    }else if(inputE.length<=2){
        $('#subject').attr('disabled','disabled');
        $('#email').css('border','5px solid red');
    }
});
$('#subject').keyup(function () {
    let regexS = new RegExp("^[a-zA-Z]+$");
    let inputS = inputSubject[0].value;
    if(inputS.length>=3 && regexS.test(inputS)){
        $('#submit').removeAttr('disabled');
        $('#subject').css('border','5px solid green');
    }else if(inputS.length<=2){
        $('#submit').attr('disabled','disabled');
        $('#subject').css('border','5px solid red');
    }
});
