let playersData = []

fetch("players.json")
.then(res => res.json())
.then(players => {

playersData = players

displayPlayers(players)

updateLeaderboard(players)

})

function displayPlayers(players){

const table = document.getElementById("playerTable")

table.innerHTML = `

<tr>
<th>SID</th>
<th>TEAM</th>
<th>Alliance</th>
<th>Legion</th>
<th>Role</th>
<th>SIR</th>
</tr>

`

players.forEach(player => {

table.innerHTML += `

<tr>
<td><a href="player.html?id=${player.id}">${player.sid}</a></td>
<td>${player.team}</td>
<td>${player.alliance}</td>
<td>${player.legion}</td>
<td>${player.role}</td>
<td>${player.sir}</td>
</tr>

`

})

}

function updateLeaderboard(players){

const rankingTable = document.getElementById("rankingTable")

rankingTable.innerHTML = `

<tr>
<th>Rank</th>
<th>SID</th>
<th>Team name</th>
<th>SIR</th>
</tr>

`

const sorted = [...players].sort((a,b)=>b.power-a.power)

sorted.forEach((player,i)=>{

rankingTable.innerHTML += `

<tr>
<td>${i+1}</td>
<td>${player.sid}</td>
<td>${player.team}</td>
<td>${player.sirr}</td>
</tr>

`

})

}

document.getElementById("sortSelect").addEventListener("change", function(){

let value = this.value

let sorted = [...playersData]

if(value === "sir"){

sorted.sort((a,b)=>b.sir-a.sir)

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
