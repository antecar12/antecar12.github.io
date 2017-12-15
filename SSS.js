$(function() {
    $("#schysstnav").click(function(){
        $("section").hide();
        $("#valkommen").hide();
        $("div").css("box-shadow", "inset 0 0 0px #000000");
        $("#schyssttext").show();
        $("div#schysst").css("box-shadow", "inset 0 0 12px #000000");
    });
    $("#sakernav").click(function(){
        $("section").hide();
        $("#valkommen").hide();
        $("div").css("box-shadow", "inset 0 0 0px #000000");
        $("#sakertext").show();
        $("div#saker").css("box-shadow", "inset 0 0 12px #000000");
    });
    $("#standardnav").click(function(){
        $("section").hide();
        $("#valkommen").hide();
        $("div").css("box-shadow", "inset 0 0 0px #000000");
        $("#standardtext").show();
        $("div#standard").css("box-shadow", "inset 0 0 12px #000000");
    });
    
});