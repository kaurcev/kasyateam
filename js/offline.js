var date = new Date();
        var hour = date.getHours();
        if (hour>=7 && hour<14) online = "online"; else {
        if (hour>=14 && hour<15) online = "online"; else {
        if (hour>=15 && hour<24) online = "online"; else {
        if (hour>=0 && hour<7) online = "offline"; }
    }
}
if(online == "offline") { window.location.href = "/offline"; }