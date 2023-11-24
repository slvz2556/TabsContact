var RandomID;

var MainLoopTimer;
var rotationSpeed=Math.floor(Math.random() * 10);

var R=Math.floor(Math.random() * 101),G=Math.floor(Math.random() * 101),B=Math.floor(Math.random() * 101);;
var height=Math.floor(Math.random() * 301),width=Math.floor(Math.random() * 301)

window.addEventListener('load',function(){

    MainLoop();

});

window.onbeforeunload=function(){
    clearInterval(MainLoopTimer);

    localStorage.removeItem(RandomID);
}

function MainLoop(){
    var i = Math.floor(Math.random() * 1001);
    if(rotationSpeed == 0 )rotationSpeed = 1;

    RandomID = "SLVZID_" + i;
    for( var j = 0; j < localStorage.length; ++j ) {
        if(localStorage.getItem(localStorage.key(j)).split('~')[0] == RandomID)
            i++;            
    }

    RandomID = "SLVZID_" + i;
    
    var rotate=0;
    MainLoopTimer = setInterval(function(){

        document.querySelector('#div-slvz').innerHTML="";

        var TheStyle="top:50%; left:50%; margin-top:-"+(height / 2)+"px; margin-left:-"+(width / 2)+"px; position:absolute; height:"+height+"px; width:"+width+"px; background-color:transparent; border:5px solid rgb("+R+","+G+","+B+"); transform: rotateZ("+rotate+"deg);";

        document.querySelector('#div-main').style=TheStyle;
        rotate+= rotationSpeed;

        TheStyle = RandomID + "~" + TheStyle;

        localStorage.setItem(RandomID,TheStyle);

        if(rotate > 360) rotate=0;



        for( var j = 0; j < localStorage.length; ++j ) {
            var data = localStorage.getItem(localStorage.key(j));
            
            if(data.split('~')[0] != RandomID)
            {
                var element= document.createElement("div");
    
                element.style = data.split('~')[1];
    
                document.querySelector('#div-slvz').appendChild(element);
            }
        }


    },50);

}



// Ashkan SLVZ