// SharpBoi Beats App Logic

import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


export async function loadBeats(){

const beats = document.getElementById("beats");

const snapshot = await getDocs(collection(db,"beats"));


snapshot.forEach((doc)=>{

const beat = doc.data();


beats.innerHTML += `

<div class="card">

<img src="${beat.image}">

<h2>${beat.title}</h2>

<audio controls>
<source src="${beat.audio}">
</audio>

<h3>$${beat.price}</h3>


<a href="https://cash.app/$sharpboii1">
<button>Cash App</button>
</a>


<a href="https://www.paypal.me/Thermo432">
<button>PayPal</button>
</a>


<p>
Apple Pay: 501-909-5161
</p>


</div>

`;

});

}
