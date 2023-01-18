var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.font = "20px Agency FB"
ctx.fillText("TTTT",300,200);
var img = new Image();
var img2 = new Image();
img2.src = "https://pbs.twimg.com/profile_images/1515684452898603016/vdU0-Ivb_400x400.jpg"
img2.onload = function() {
    ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.drawImage(img, 100, 100,100,100);
    ctx.restore()
};
//img2.opacity(0.7);
img.src = "https://pbs.twimg.com/profile_images/1515684452898603016/vdU0-Ivb_400x400.jpg";
        var canvasContext = c.getContext('2d');
        var wrh = img.width / img.height;
        var newWidth = c.width;
        var newHeight = newWidth / wrh;
        if (newHeight > c.height) {
					newHeight = c.height;
        	newWidth = newHeight * wrh;
          }
        var xOffset = newWidth < c.width ? ((c.width - newWidth) / 2) : 0;
        var yOffset = newHeight < c.height ? ((c.height - newHeight) / 2) : 0;  
          

ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight);
//ctx.drawImage(img, 100, 100, 100, 100);

//get center https://stackoverflow.com/questions/39619967/js-center-image-inside-canvas-element
