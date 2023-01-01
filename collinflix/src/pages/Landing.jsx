import React from "react"
import './Landing.css'

const Landing  = () => {

let i = 0;
let images = [];
let slideTime = 3000; // 3 seconds

images[0] = "https://images3.alphacoders.com/882/882548.jpg";
images[1] = "https://wallpaperaccess.com/full/2440930.jpg";
images[2] = "https://images.alphacoders.com/128/1289451.jpg";

function changePicture() {
  document.body.style.backgroundImage = "url(" + images[i] + ")";

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changePicture, slideTime);
}

window.onload = changePicture;

let userArr = [1, 2, 3, 4];


function border() {
  document.getElementById("img1").style.border = "3px solid white";
  if ((document.getElementById("img1").style.border = "3px solid white")) {
    document.getElementById("img2").style.border = "3px solid black";
    document.getElementById("img3").style.border = "3px solid black";
    document.getElementById("img4").style.border = "3px solid black";
  }
}

function border2() {
  document.getElementById("img2").style.border = "3px solid white";
  if ((document.getElementById("img2").style.border = "3px solid white")) {
    document.getElementById("img1").style.border = "3px solid black";
    document.getElementById("img3").style.border = "3px solid black";
    document.getElementById("img4").style.border = "3px solid black";
  }
}

function border3() {
  document.getElementById("img3").style.border = "3px solid white";
  if ((document.getElementById("img3").style.border = "3px solid white")) {
    document.getElementById("img1").style.border = "3px solid black";
    document.getElementById("img2").style.border = "3px solid black";
    document.getElementById("img4").style.border = "3px solid black";
  }
}

function border4() {
  document.getElementById("img4").style.border = "3px solid white";
  if ((document.getElementById("img4").style.border = "3px solid white")) {
    document.getElementById("img1").style.border = "3px solid black";
    document.getElementById("img3").style.border = "3px solid black";
    document.getElementById("img2").style.border = "3px solid black";
  }
}

function newUser() {
  if (userArr.length === 4) {
    alert("Sorry! There's already a max amount of users");
  }
}

function delUser() {}


    return (
      <div>
        <div>
          <h1>HELLO</h1>
        </div>
        <div class="img container">
          <div>
            <h1 class="head">Who's Watching?</h1>
          </div>
          <div class="user container">
            <div class="row">
              <div class="column" id="column" onClick={border()}>
                <img
                  class="img1"
                  id="img1"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                  alt=""
                />

                <h1 class="h1">Collin</h1>
              </div>
              <div class="column" id="column" onclick={border2()}>
                <img
                  class="img1"
                  id="img2"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                  alt=""
                />

                <h1 class="h1">Collin</h1>
              </div>
              <div class="column" id="column" onclick={border3()}>
                <img
                  class="img1"
                  id="img3"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                  alt=""
                />

                <h1 class="h1">Collin</h1>
              </div>
              <div class="column" id="column" onclick={border4()}>
                <img
                  class="img1"
                  id="img4"
                  alt=""
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                />

                <h1 class="h1">Collin</h1>
              </div>
              <div class="column" id="column">
                <img
                  id="img5"
                  onClick={newUser()}
                  class="img2"
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC7UlEQVR4nM2aTUtUURiAT0FFNBK1KvtObXLRDwgCV9GigqA2OhIREajtqrFNW3dRy2qRRUFMphVJUK0iWwS5MEpxkVBBGFGUVjRO0xMn3wvXSWfuxztz7gOzmMM5576P93y+ozExATYC7UAWOA+cA7qBFmCJSTLAIgl+hPJMAHtMEgFWA0MEZwboBXabpACsBIaJTj+wIgkil4nPLdcSm4ACOrS4FDmJHjdcitxRFHnnUmREUaTobI8BXqPLKlciL5VF6lyJDCtKfHEiYQFyiiIvjCuAs4oi112KHFAUOe5SpE1R5LBLkWeKIkMuRcYURUZdigwoitx2KXJUUeSIS5GlIW+GC/HE9uVMxAIsAyZjSEw6l/CQ+3dUek1SAHbGENllkgQwGEHisUkaQD3wKYTEFLDZJBHgeQiR8Qp9bZHs5EPgA/AL+C6b8AOgC1ifhKvvRJnMzE3gd4A+CpKOqtcWGQ8h8n6e9hn5q1vyct9pBdI2iSeftJTlpI43TPdrSWwApkOI/ATW+dqfKsk+bg3wzAbfMckmL07ElWiOeH9/BWz3XQdsMKcjPD8rbYuR3gywA7giEzEqeXk7RJEokbF8A9aaSgCLgX3AI+APevRXeO4/AiYML5WrlJJx/AZ98pXmBEKFOo3yk0XBP//8P+AcAz5SPXLlAgwqIvX6pGqnv9Aud/eoPq2KIhmpOugVLAeeUhu2KYqkpeqYV3CB2pGaL+igmP/nsmXa22jsmlwr5uR8wzY2c9vWSfGU/dJDbanO0EI3XxWENkWRdqk6aL98rrFINZbfjtBjVGlDbIgrAjQtuCFWG+CaxDgQR4TZjdvb8y6aWiPH/68SQDZGP2ekD9vXGt0ogwdxSA6gxbAyzL6Jbt8xfm/1Ig0WUKfvNG1PsY0B2jQBd6WNlegySQA46BtmM7ICZeTylZJPsyyxfVLHG05u30QpNjMCXA34ryEFO7GdzYkgSJ7M3n/uA2+BH5ITGJVkYEelJfYvEOJN0S57aUkAAAAASUVORK5CYII="
                />

                <h1 class="h1">Add User</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Landing