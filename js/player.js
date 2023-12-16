export const Player = (playerName, playerToken) => {

    const getPlayerName = () => playerName;
    const getPlayerToken = () => playerToken;

    return {getPlayerName, getPlayerToken}
}