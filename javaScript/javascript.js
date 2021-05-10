function openProj(evt,projName){
    var i, tabcontent,tablinks

    tabcontent=document.getElementsByClassName("tabcontent");

    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display= none;
    }

    tablinks=document.getElementsByClassName("tablinks");
    for(i=0;tablinks.length;i++){

        tablinks[i].className=tablinks.className.replace("active","")
    }
    document.getElementById(projName).style.display=block;
    evt.currentTarget.className += " active";
}
