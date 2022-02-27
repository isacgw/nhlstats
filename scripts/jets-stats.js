const wpg_stats = 'https://statsapi.web.nhl.com/api/v1/teams/52/stats';


// WINNIPEG JETS STATS //
async function getJetsStats() {
    const response = await fetch(wpg_stats);
    const data = await response.json();

    console.log(data.stats[0].splits[0].stat);









    // console.log(data.stats[0].splits[0].stat);
    // console.log(data.stats[0].splits[0].stat.wins); // get JETS WINS
    // console.log(data.stats[0].splits[0].stat.losses); // get JETS LOSSES
    // console.log(data.stats[0].splits[0].stat.gamesPlayed); // get JETS GAMES
    // console.log(data.stats[0].splits[0].stat.faceOffsTaken); // get JETS FACEOFFS TOTAL
    // console.log(data.stats[0].splits[0].stat.faceOffsWon); // get JETS FACEOFFS WON
    // console.log(data.stats[0].splits[0].stat.faceOffsLost); // get JETS LOST
    // console.log(data.stats[0].splits[0].stat.powerPlayOpportunities); // get JETS POWERPLAYS
    // console.log(data.stats[0].splits[0].stat.powerPlayPercentage); // get JETS POWERPLAYS
    // console.log(data.stats[0].splits[0].stat.powerPlayGoals); // get JETS POWERPLAYS
    // console.log(data.stats[0].splits[0].stat.powerPlayGoalsAgainst); // get JETS POWERPLAY GOALS AGAINST

    const wins = data.stats[0].splits[0].stat.wins;
    const losses = data.stats[0].splits[0].stat.losses;
    const gamesPlayed = data.stats[0].splits[0].stat.gamesPlayed;
    const faceOffsTaken = data.stats[0].splits[0].stat.faceOffsTaken;
    const faceOffsWon = data.stats[0].splits[0].stat.faceOffsWon;
    const faceOffsLost = data.stats[0].splits[0].stat.faceOffsLost;
    const powerPlayOpportunities = data.stats[0].splits[0].stat.powerPlayOpportunities;
    const powerPlayPercentage = data.stats[0].splits[0].stat.powerPlayPercentage;
    const powerPlayGoals = data.stats[0].splits[0].stat.powerPlayGoals;
    const powerPlayGoalsAgainst = data.stats[0].splits[0].stat.powerPlayGoalsAgainst;

    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('games-played').textContent = gamesPlayed;
    // Faceoff Stats
    document.getElementById('faceOffsTaken').textContent = faceOffsTaken;
    document.getElementById('faceOffsWon').textContent = faceOffsWon;
    document.getElementById('faceOffsLost').textContent = faceOffsLost;
    // Powerplay Stats
    document.getElementById('powerPlayTotal').textContent = powerPlayOpportunities;
    document.getElementById('powerPlayPercentage').textContent = powerPlayPercentage;
    document.getElementById('powerPlayGoals').textContent = powerPlayGoals;
    document.getElementById('powerPlayGoalsAgainst').textContent = powerPlayGoalsAgainst;
}

getJetsStats();