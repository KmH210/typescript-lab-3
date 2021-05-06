import RandomPlayer from './randomplayer';
import Player from './player'

describe("random player", () => {
    test("name is set correctly by the constructor", () => {
        let player: Player = new RandomPlayer("Grant");
        expect(player.name).toBe("Grant")
    });
    test("winCount starts at zero", () => {
        let win: Player = new RandomPlayer("Grant");
        expect(win.winCount).toBe(0);
    });
});