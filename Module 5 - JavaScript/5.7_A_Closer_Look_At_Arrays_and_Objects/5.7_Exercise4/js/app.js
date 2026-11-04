const player = {
    username: "Shadow",
    health: 70,
    coins: 100
};

function upgradePlayer (playerName) {
    const copy = Object.assign({}, player)
    copy.health += 30;
    copy.coins -= 50;
    return copy
}

console.log(player);
console.log(upgradePlayer(player));

