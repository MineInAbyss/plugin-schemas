import {BossBarColor} from "./bossBarColor";
import {BossBarStyle} from "./bossBarStyle";

export class BossBar {
    Enabled?: boolean = true;
    Title?: string;
    /** Range is the distance the BossBar will be displayed to players around the mob. */
    Range?: number;
    Color?: BossBarColor;
    Style?: BossBarStyle;
    /** Adds a fog-like effect to the player's vision while in the radius defined for the bossbar. */
    CreateFog?: boolean;
    /** Darkens the sky while in the radius defined for the bossbar, similar to the effect created when the Wither is spawned. */
    DarkenSky?: boolean;
    PlayMusic?: boolean;
}
