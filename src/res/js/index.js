const{remote} = require('electron');

document.getElementById('close').addEventListener('click', closeWindows);
document.getElementById('maximize').addEventListener('click', maximizeWindows);
document.getElementById('minimize').addEventListener('click', minimizeWindows);

function closeWindows(){
    var window = remote.getCurrentWindow()
    window.close()    
}

function maximizeWindows(){
    var window = remote.getCurrentWindow()
    window.isMaximized() ? window.unmaximize() : window.maximize()
}

function minimizeWindows(){
    var window = remote.getCurrentWindow()
    window.minimize()
}