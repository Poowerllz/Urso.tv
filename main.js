const { app, BrowserWindow } = require('electron')
let win = null

app.once('ready', () => {
    const openWindow = () => {
        win = new BrowserWindow({
            width: 841,
            height: 353,
            frame: false,
            transparent:true,
            resizable:false,
            alwaysOnTop:true,
            x: 0,
            y: 0
        });

        win.loadFile('preview.html');
        let thisWin = win
        
        win.once('ready-to-show', () => {
            thisWin.show()
        })
    }

    app.whenReady().then(openWindow);
    console.log("Aplicacao rodando")
})