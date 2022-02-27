const pit_stats = 'https://statsapi.web.nhl.com/api/v1/teams/5/stats';


// PITTSBURGH STATS //
async function getPenguinsStats() {
    const response = await fetch(pit_stats);
    const data = await response.json();

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
    document.getElementById('faceOffsTaken').textContent = faceOffsTaken;
    document.getElementById('faceOffsWon').textContent = faceOffsWon;
    document.getElementById('faceOffsLost').textContent = faceOffsLost;
    document.getElementById('powerPlayTotal').textContent = powerPlayOpportunities;
    document.getElementById('powerPlayPercentage').textContent = powerPlayPercentage;
    document.getElementById('powerPlayGoals').textContent = powerPlayGoals;
    document.getElementById('powerPlayGoalsAgainst').textContent = powerPlayGoalsAgainst;
}

getPenguinsStats();