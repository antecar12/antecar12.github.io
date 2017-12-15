$(function() {
    $("#schysstnav").click(function(){
        $("section").hide();
        $("#valkommen").hide();
        $("div").css("box-shadow", "inset 0 0 0px #000000");
        $("#schyssttext").show();
        $("div#schysstnav").css("box-shadow", "inset 0 0 12px #000000");
    });
    $("#sakernav").click(function(){
        $("section").hide();
        $("#valkommen").hide();
        $("div").css("box-shadow", "inset 0 0 0px #000000");
        $("#sakertext").show();
        $("div#sakernav").css("box-shadow", "inset 0 0 12px #000000");
    });
    $("#standardnav").click(function(){
        $("section").hide();
        $("#valkommen").hide();
        $("div").css("box-shadow", "inset 0 0 0px #000000");
        $("#standardtext").show();
        $("div#standardnav").css("box-shadow", "inset 0 0 12px #000000");
    });
    
});