//shape size 


let widthShape = document.getElementById("widthShape"); 
let widthValue = document.getElementById("widthValue"); 
 
widthValue.innerHTML = widthShape.value; 

let heightShape = document.getElementById("heightShape"); 
let heightValue = document.getElementById("heightValue"); 
heightValue.innerHTML = heightShape.value; 

//changes on size 

widthShape.oninput = function()
{
    widthValue.innerHTML = `${this.value}px`;
    document.documentElement.style.setProperty('--w-shape', `${this.value}px`);  
}

heightShape.oninput = function()
{
    heightValue.innerHTML = `${this.value}px`; 
    document.documentElement.style.setProperty('--h-shape', `${this.value}px`);
}

//background shape 

//red
let redBgShape = document.getElementById("redBgShape"); 
let redBgValue = document.getElementById("redBgValue"); 
redBgValue.innerHTML = redBgShape.value; 

redBgShape.oninput = function()
{
    redBgValue.innerHTML = this.value; 
    document.documentElement.style.setProperty('--red-bg', this.value);
}

//green 
let greenBgShape = document.getElementById("greenBgShape"); 
let greenBgValue = document.getElementById("greenBgValue"); 
greenBgValue.innerHTML = greenBgShape.value; 

greenBgShape.oninput = function()
{
    greenBgValue.innerHTML = this.value; 
    document.documentElement.style.setProperty('--green-bg', this.value);
}

//blue
let blueBgShape = document.getElementById("blueBgShape"); 
let blueBgValue = document.getElementById("blueBgValue"); 
blueBgValue.innerHTML = blueBgShape.value; 

blueBgShape.oninput = function()
{
    blueBgValue.innerHTML = this.value; 
    document.documentElement.style.setProperty('--blue-bg', this.value);
}

//border 

//thickness / espessura 
let thickness = document.getElementById("thickness"); 
let thicknessValue = document.getElementById("thicknessValue"); 
thicknessValue.innerHTML = thickness.value; 

thickness.oninput = function()
{
    thicknessValue.innerHTML = `${this.value}px`; 
    document.documentElement.style.setProperty('--tkness', `${this.value}px`);
}

//radius 
let radius = document.getElementById("radius"); 
let radiusValue = document.getElementById("radiusValue"); 
radiusValue.innerHTML = radius.value; 

radius.oninput = function()
{
    radiusValue.innerHTML = `${this.value}%`; 
    document.documentElement.style.setProperty('--radius-border', `${this.value}%`);
}


//border color 

//red
let redBorder = document.getElementById("redBorder"); 
let redBorderValue = document.getElementById("redBorderValue"); 
redBorderValue.innerHTML = redBorder.value; 

redBorder.oninput = function()
{
    redBorderValue.innerHTML = this.value; 
    document.documentElement.style.setProperty('--red-border', this.value);
}

//green 
let greenBorder = document.getElementById("greenBorder"); 
let greenBorderValue = document.getElementById("greenBorderValue"); 
greenBorderValue.innerHTML = greenBorder.value; 

greenBorder.oninput = function()
{
    greenBorderValue.innerHTML = this.value; 
    document.documentElement.style.setProperty('--green-border', this.value);
}

//blue
let blueBorder = document.getElementById("blueBorder"); 
let blueBorderValue = document.getElementById("blueBorderValue"); 
blueBorderValue.innerHTML = blueBorder.value; 

blueBorder.oninput = function()
{
    blueBorderValue.innerHTML = this.value; 
    document.documentElement.style.setProperty('--blue-border', this.value);
}

//add css 
let cssArea = document.getElementById("cssArea"); 

const addCss = function ()
{
    cssArea.innerHTML = `
    #shape 
    {
        width: ${widthShape.value}px;
        height: ${heightShape.value}px;
        background: rgb(${redBgShape.value}px, ${greenBgShape.value}px, ${blueBgShape.value}px);
        border: ${thickness.value}px solid rgb(${redBorder.value},${greenBorder.value},${blueBorder.value});
        border-radius: ${radius.value}%;
    }`;
    copyClipboard();
}

//copy to clipboard 
function copyClipboard() {
    var copyText = document.getElementById("cssArea");
    console.log(copyText.value);
    copyText.select();
    document.execCommand("copy");
    alert("CSS copiado: " + copyText.value);
  }