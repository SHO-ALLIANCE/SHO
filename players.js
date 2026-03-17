fetch("players.json")

.then(res=>res.json())

.then(players=>{

const table = document.getElementById("playerTable");

players.forEach(player=>{

let row = table.insertRow();

row.innerHTML =

`<td><a href="player.html?id=${player.id}">${player.name}</a></td>
<td>${player.alliance}</td>
<td>${player.legion}</td>
<td>${player.role}</td>
<td>${player.power}</td>`;

});

const sorted = [...players].sort((a,b)=>b.power-a.power);

const ranking = document.getElementById("rankingTable");

sorted.forEach((player,i)=>{

let row = ranking.insertRow();

row.innerHTML =

`<td>${i+1}</td>
<td>${player.name}</td>
<td>${player.power}</td>`;

});

});

document.getElementById("search").addEventListener("keyup",function(){

const value = this.value.toLowerCase();

document.querySelectorAll("#playerTable tr").forEach((row,i)=>{

if(i===0) return;

row.style.display = row.innerText.toLowerCase().includes(value) ? "" : "none";

});

});
