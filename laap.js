const inputkey=document.getElementById("inputkey")
const inputvalue=document.getElementById("inputvalue")
const btn=document.getElementById("btn")
const output=document.getElementById("output")

btn.onclick=function()
{
    const key= inputkey.value;
    const value=inputvalue.value;


    if (key && value)
    {
        localStorage.setItem(key,value)//save data to local storage
        location.reload()
    }
}
for(i=0;i<localStorage.length;i++)
{
    const k=localStorage.key(i);
    const v=localStorage.getItem(k);//read the data from local storage

     output.innerHTML+=`${k}: ${v} <br>`
    

}
