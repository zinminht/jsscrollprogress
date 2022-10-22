var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
    scrollpoint();
};  

function scrollpoint(){
    // console.log('i am working');

    
    // scrolltop
    var getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);

    // project height
    var getscollheight = document.documentElement.scrollHeight;
    // console.log(getscollheight);

    // client's window height
    var getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);

    // project height - client's window height
    var calcheight = getscollheight - getclientheight;
    // console.log(calcheight);

    // scroll formula
    // scrolltop * 100 / (project height - client's window height)

    // var getfinal = (getscrolltop * 100) / calcheight;
    var getfinal = (getscrolltop / calcheight) * 100;
    // console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;

}

function printme(){
    window.print();
}