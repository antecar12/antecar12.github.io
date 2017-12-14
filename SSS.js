$(function() {
    $("#schysst").click(function(){
        $("section").hide();
        $("div").css("box-shadow", "inset 0 0 0px #000000");
        $("#schyssttext").show();
        $("div#schysst").css("box-shadow", "inset 0 0 12px #000000");
    });
    $("#saker").click(function(){
        $("section").hide();
        $("div").css("box-shadow", "inset 0 0 0px #000000");
        $("#sakertext").show();
        $("div#saker").css("box-shadow", "inset 0 0 12px #000000");
    });
    $("#standard").click(function(){
        $("section").hide();
        $("div").css("box-shadow", "inset 0 0 0px #000000");
        $("#standardtext").show();
        $("div#standard").css("box-shadow", "inset 0 0 12px #000000");
    });
    
});