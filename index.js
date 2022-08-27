setInterval(()=>
{
    d= new Date();
    htime= d.getHours();
    mtime= d.getMinutes();
    stimme= d.getSeconds();
    hrotation= htime*30+ mtime/2;
    mrotation= mtime*6;
    srotation= stimme*6;
   /* hour.style.transform= `rotate(${hrotation})`;    
    minutes.style.transform= `rotate(${mrotation})`;    
    seconds.style.transform= `rotate(${srotation})`;  */ 
    //d.style.transform= "rotate("+position+"deg)";
    hour.style.transform= "rotate("+hrotation+"deg)";      
    minutes.style.transform= "rotate("+mrotation+"deg)";
    seconds.style.transform= "rotate("+srotation+"deg)"; 

},1000);