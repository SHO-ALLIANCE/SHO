let playersData = []

fetch("players.json")

.then(res => res.json())

.then(players => {

playersData = players

displayPlayers(players)

})

function displayPlayers(players){

const table = document.getElementById("playerTable")

table.innerHTML = `

<tr>
<th>Name</th>
<th>Alliance</th>
<th>Legion</th>
<th>Role</th>
<th>Power</th>
</tr>

`

players.forEach(player => {

table.innerHTML += `

<tr>
<td><a href="player.html?id=${player.id}">${player.name}</a></td>
<td>${player.alliance}</td>
<td>${player.legion}</td>
<td>${player.role}</td>
<td>${player.power}</td>
</tr>

`

})

}

document.getElementById("sortSelect").addEventListener("change", function(){

let value = this.value

let sorted = [...playersData]

if(value === "power"){

sorted.sort((a,b)=>b.power-a.power)

}

else{

sorted.sort((a,b)=>a[value].localeCompare(b[value]))

}

displayPlayers(sorted)

})

document.getElementById("search").addEventListener("keyup", function(){

let value = this.value.toLowerCase()

let filtered = playersData.filter(player =>

player.name.toLowerCase().includes(value)

)

displayPlayers(filtered)

})
