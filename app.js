




var list=[{
    "title":"Heartless","path":"1.mp3","pic":'1.jpg'
},
{
    "title":"Mercy (Rap)","path":"2.mp3","pic":'2.jpg' 
},
{   
    "title":"Genda Pool ","path":"3.mp3","pic":"3.jpg"

}
]
var music=document.querySelector('audio')
document.querySelector('img').setAttribute('src',list[0].pic)
var n=0;
document.querySelector('h1').innerHTML=list[0].title
var btnPlay= document.getElementById('play')
var btnPause=document.getElementById('pause')
var btnNext= document.getElementById("next")
var btnPrev=document.getElementById("prev")
btnPlay.addEventListener('click',()=>{
    music.play()
    document.getElementById('thumbnail').style.animationPlayState="running"

})
btnPause.addEventListener('click',()=>{
    music.pause()
    document.getElementById('thumbnail').style.animationPlayState="paused"

})

btnNext.addEventListener('click',()=>{
    n=(n+1)%list.length;
    document.querySelector('audio').setAttribute('src',list[n].path)
    document.querySelector('h1').innerHTML=list[n].title
    document.querySelector('img').setAttribute('src',list[n].pic)
    document.getElementById('thumbnail').style.animationPlayState="running"
    music.play()
})
btnPrev.addEventListener('click',()=>{
    n=(n-1+list.length)%list.length
    document.querySelector('audio').setAttribute('src',list[n].path)
    document.querySelector('h1').innerHTML=list[n].title
    document.querySelector('img').setAttribute('src',list[n].pic)
    document.getElementById('thumbnail').style.animationPlayState="running"
    music.play()
})
