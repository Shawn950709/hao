let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news(){
  list.innerHTML = list.innerHTML + `
  <div class="mews">
    <h2>${title.value}</h2>
    <p>${content.value}</p><hr>
    </div>
  `;
}

let i=0, imgArr=new Array();
imgArr[0] = "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/04/11/anntw/29422865.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930"
imgArr[1] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5Jqlp4J1PEZrCL5LAxHT5WT8D_tzATXDug&s"
imgArr[2] = "https://media.nownews.com/nn_media/thumbnail/2021/11/1636959795745-f0dd21340c554cd18b6fe04488194d8e-1200x800.png?unShow=false"

function showImg() {
  document.getElementById('ico').src = imgArr[i];
  i = (i+1) % 3;
}

function show(){
  setInterval(showImg, 2000);
}