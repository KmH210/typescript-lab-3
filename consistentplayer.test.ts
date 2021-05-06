import ConsistentPlayer from './consistentplayer';
import Player from './player';

describe("consistent player test", () => {
    test("name is set correctly by the constructor", () => {
        let player: Player = new ConsistentPlayer("Grant", "rock");
        expect(player.name).toBe("Grant")
    });
    test("winCount starts at zero", () => {
        let win: Player = new ConsistentPlayer("Grant", "rock");
        expect(win.winCount).toBe(0);
    });
    test("pickSymbol returns the symbol set in the constructor", () => {
        let result: Player = new ConsistentPlayer("Grant", "rock");
        result.pickSymbol()
        expect(result.pickSymbol()).toBe("rock");
    });
});

