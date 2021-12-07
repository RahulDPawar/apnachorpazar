window.onscroll = function(){myFunction()};
var x = window.matchMedia("(max-width: 700px)");
function myFunction(){
    if(x.matches){
        if(document.body.onscroll > 80 || document.documentElement.scrollTop > 80){
            document.getElementById('logo').style.display = 'none';
            document.getElementById('UserMobile').style.display = 'none';
            document.getElementById('NotificationMobile').style.display = 'none';
            document.getElementById('CartMobile').style.display = 'none';
            document.getElementById('SidebarIcon').style.display = 'none';
            document.getElementById('searchFeild').style.width = '100%';
        }else{
            document.getElementById('logo').style.display = 'flex';
            document.getElementById('UserMobile').style.display = 'inline-block';
            document.getElementById('SidebarIcon').style.display = 'flex';
            document.getElementById('NotificationMobile').style.display = 'inline-block';
            document.getElementById('CartMobile').style.display = 'inline-block';
        }
    }
}
function menu(){
    document.getElementById('sidebar').style.visibility = "visible";
    document.getElementById('mainContainer').style.visibility="visible";
    document.getElementById('slidesImages').style.visibility="hidden";
    document.getElementById('lightHR').style.display = 'none';
    document.body.classList.add("stop-scrolling");
}
function mainContainer(){
    document.getElementById('sidebar').style.visibility = "hidden";
    document.getElementById('mainContainer').style.visibility="hidden";
    document.getElementById('slidesImages').style.visibility="visible";
    document.getElementById('lightHR').style.display = 'block';
    document.body.classList.remove("stop-scrolling");
}
function grocery(){
    document.getElementById('groceryDD').style.display = 'block';
    document.getElementById('downArrow').style.display = 'none';
    document.getElementById('upArrow').style.visibility = 'visible';
}
function leave(){
    document.getElementById('groceryDD').style.display = 'none';
    document.getElementById('downArrow').style.display = 'inline-block';
    document.getElementById('upArrow').style.visibility = 'hidden';
}
function Cloths(){
    document.getElementById('ClothsDD').style.display = 'block';
    document.getElementById('downArrow2').style.display = 'none';
    document.getElementById('upArrow2').style.visibility = 'visible';
}
function leave2(){
    document.getElementById('ClothsDD').style.display = 'none';
    document.getElementById('downArrow2').style.display = 'inline-block';
    document.getElementById('upArrow2').style.visibility = 'hidden';
}
function Electronics(){
    document.getElementById('ElectronicsDD').style.display = 'block';
    document.getElementById('downArrow3').style.display = 'none';
    document.getElementById('upArrow3').style.visibility = 'visible';
}
function leave3(){
    document.getElementById('ElectronicsDD').style.display = 'none';
    document.getElementById('downArrow3').style.display = 'inline-block';
    document.getElementById('upArrow3').style.visibility = 'hidden';
}
function Fasion(){
    document.getElementById('FasionDD').style.display = 'block';
    document.getElementById('downArrow4').style.display = 'none';
    document.getElementById('upArrow4').style.visibility = 'visible';
}
function leave4(){
    document.getElementById('FasionDD').style.display = 'none';
    document.getElementById('downArrow4').style.display = 'inline-block';
    document.getElementById('upArrow4').style.visibility = 'hidden';
}
function Mobile(){
    document.getElementById('MobileDD').style.display = 'block';
    document.getElementById('downArrow5').style.display = 'none';
    document.getElementById('upArrow5').style.visibility = 'visible';
}
function leave5(){
    document.getElementById('MobileDD').style.display = 'none';
    document.getElementById('downArrow5').style.display = 'inline-block';
    document.getElementById('upArrow5').style.visibility = 'hidden';
}
function Travel(){
    document.getElementById('TravelDD').style.display = 'block';
    document.getElementById('downArrow6').style.display = 'none';
    document.getElementById('upArrow6').style.visibility = 'visible';
}
function leave6(){
    document.getElementById('TravelDD').style.display = 'none';
    document.getElementById('downArrow6').style.display = 'inline-block';
    document.getElementById('upArrow6').style.visibility = 'hidden';
}
function Toys(){
    document.getElementById('ToysDD').style.display = 'block';
    document.getElementById('downArrow7').style.display = 'none';
    document.getElementById('upArrow7').style.visibility = 'visible';
}
function leave7(){
    document.getElementById('ToysDD').style.display = 'none';
    document.getElementById('downArrow7').style.display = 'inline-block';
    document.getElementById('upArrow7').style.visibility = 'hidden';
}
