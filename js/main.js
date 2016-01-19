
var textures = [ 'img/16x9aggregate.fh.md.jpg', 'img/16x9pollack.jpg'];

function setup() {
    $("#btn1").click(function(){
        testFunction();
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");
    });
}

$(document).ready(function(){
    setup();
});

function testFunction() {
    alert('test function');
}