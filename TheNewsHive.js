fetch('https://coding-week-2024-api.onrender.com/api/data').then((response)=>{
    console.log('resolved',response);
    return response.json();
}).then(data => {

    function change_date(date) {
        var y =date[0]+date[1]+date[2]+date[3];
        var m =date[5]+date[6];
        var d =date[8]+date[9];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const mInt =parseInt(m);
        console.log(mInt)
        const output = months[mInt-1]+" "+d+", "+y;
        return(output);
    }

        const style= document.querySelector("style");
        style.innerHTML+=`.part1{background-image: url(${data[5].image})}`;
        const span1= document.querySelector(".News-type1")
        span1.innerHTML+=`${data[5].type.charAt(0).toUpperCase()+data[5].type.slice(1)}`
        const newsinfo1 = document.querySelector(".News-Info1")
        newsinfo1.innerHTML += `${data[5].headline}`
        const author1=document.querySelector(".Author-Name1")
        author1.innerHTML+= `${data[5].author}`
        const maindate1 = document.querySelector(".main-date1")
        maindate1.innerHTML+=`${change_date(data[5].date)}`

        style.innerHTML+=`.part2{background-image: url(${data[2].image})}`;
        const span2= document.querySelector(".News-type2")
        span2.innerHTML+=`${data[2].type.charAt(0).toUpperCase()+data[2].type.slice(1)}`
        const newsinfo2 = document.querySelector(".News-Info2")
        newsinfo2.innerHTML += `${data[2].headline}`
        const author2=document.querySelector(".Author-Name2")
        author2.innerHTML+= `${data[2].author}`
        const maindate2 = document.querySelector(".main-date2")
        maindate2.innerHTML+=`${change_date(data[2].date)}`

        style.innerHTML+=`.part3A{background-image: url(${data[0].image})}`;
        const span3A= document.querySelector(".News-type3A")
        span3A.innerHTML+=`${data[0].type.charAt(0).toUpperCase()+data[0].type.slice(1)}`
        const newsinfo3A = document.querySelector(".News-Info3A")
        newsinfo3A.innerHTML += `${data[0].headline}`
        const author3A=document.querySelector(".Author-Name3A")
        author3A.innerHTML+= `${data[0].author}`
        const maindate3A = document.querySelector(".main-date3A")
        maindate3A.innerHTML+=`${change_date(data[0].date)}`

        style.innerHTML+=`.part3B{background-image: url(${data[6].image})}`;
        const span3B= document.querySelector(".News-type3B")
        span3B.innerHTML+=`${data[6].type.charAt(0).toUpperCase()+data[6].type.slice(1)}`
        const newsinfo3B = document.querySelector(".News-Info3B")
        newsinfo3B.innerHTML += `${data[6].headline}`
        const author3B=document.querySelector(".Author-Name3B")
        author3B.innerHTML+= `${data[6].author}`
        const maindate3B = document.querySelector(".main-date3B")
        maindate3B.innerHTML+=`${change_date(data[6].date)}`
        
        style.innerHTML+=`.img1{background-image: url(${data[1].image})}`;
        const text1 = document.querySelector(".title1")
        text1.innerHTML+=`${data[1].headline}`
        const date1 = document.querySelector(".date1")
        date1.innerHTML+=`${change_date(data[1].date)}`

        style.innerHTML+=`.img2{background-image: url(${data[3].image})}`;
        const text2 = document.querySelector(".title2")
        text2.innerHTML+=`${data[3].headline}`
        const date2 = document.querySelector(".date2")
        date2.innerHTML+=`${change_date(data[3].date)}`

        style.innerHTML+=`.img3{background-image: url(${data[4].image})}`;
        const text3 = document.querySelector(".title3")
        text3.innerHTML+=`${data[4].headline}`
        const date3 = document.querySelector(".date3")
        date3.innerHTML+=`${change_date(data[4].date)}`
        
        style.innerHTML+=`.img4{background-image: url(${data[7].image})}`;
        const text4 = document.querySelector(".title4")
        text4.innerHTML+=`${data[7].headline}`
        const date4 = document.querySelector(".date4")
        date4.innerHTML+=`${change_date(data[7].date)}`

        style.innerHTML+=`.img5{background-image: url(${data[8].image})}`;
        const text5 = document.querySelector(".title5")
        text5.innerHTML+=`${data[8].headline}`
        const date5 = document.querySelector(".date5")
        date5.innerHTML+=`${change_date(data[8].date)}`

        style.innerHTML+=`.img6{background-image: url(${data[9].image})}`;
        const text6 = document.querySelector(".title6")
        text6.innerHTML+=`${data[9].headline}`
        const date6 = document.querySelector(".date6")
        date6.innerHTML+=`${change_date(data[9].date)}`

        const heading=document.querySelector(".heading")
addEventListener("click",function(e){
    if (e.target==heading.lastElementChild) {
        e.target.classList.add("current");
        e.target.previousElementSibling.classList.remove("current");
    }
})
addEventListener("click",function(e){
    if (e.target==heading.firstElementChild) {
        e.target.classList.add("current");
        e.target.nextElementSibling.classList.remove("current");
    }
})

const box = document.querySelector(".box")
const popup = document.querySelectorAll(".popup")
const cross = document.querySelector(".cross-logo")

const popup1 = document.querySelector(".popup1")
const popup2 = document.querySelector(".popup2")
const popup3 = document.querySelector(".popup3")
const popup4 = document.querySelector(".popup4")

const boxtitle = document.querySelector(".boxtitle")
const boxcontent = document.querySelector(".boxcontent")
addEventListener("click",function(e){
    popup.forEach(function(value){
        if (e.target==value) {
            box.classList.add("box-active")
            box.classList.remove("box-inactive") 
        }
    })
})

addEventListener("click",function (e){
    if(e.target==popup1){
        boxtitle.innerHTML=`${data[5].headline}` 
        boxcontent.innerHTML=`${data[5].content}`
    }
})

addEventListener("click",function (e){
    if(e.target==popup2){
        boxtitle.innerHTML=`${data[2].headline}` 
        boxcontent.innerHTML=`${data[2].content}`
    }
})

addEventListener("click",function (e){
    if(e.target==popup3){
        boxtitle.innerHTML=`${data[0].headline}` 
        boxcontent.innerHTML=`${data[0].content}`
    }
})

addEventListener("click",function (e){
    if(e.target==popup4){
        boxtitle.innerHTML=`${data[6].headline}` 
        boxcontent.innerHTML=`${data[6].content}`
    }
})

addEventListener("click",function(e){
    if (e.target==cross) {
        box.classList.remove("box-active")
        box.classList.add("box-inactive")
    }
})

}).catch((err)=>{
    console.log('rejected',err);
})

