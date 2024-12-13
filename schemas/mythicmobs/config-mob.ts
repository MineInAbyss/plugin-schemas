import {MythicEntityType} from "./minecraft";
import {HealthBar} from "./healthBar";
import {Nameplate} from "./nameplate";
import {LevelModifiers} from "./levelModifiers";
import {BossBar} from "./bossBar";
import {Modules} from "./modules";
import {Options} from "./options";
import {Model} from "./model";
import {Hearing} from "./hearing";
import {Trade} from "./trade";

export type Base = { [key: string]: Mob };

/**
 * This string will be how your mob will be referenced internally in MythicMobs and can be any name you like.
 * Must be a unique name and does not clash with other internal mob names, NO SPACES ALLOWED.
 */
interface Mob {
    /**
     * This field determines which entity type your creation will be based upon.
     * A complete list of available entity types can be found on spigot javadocs, while here you can find a list of types that are explicitly implemented.
     */
    Type?: MythicEntityType;

    /**
     * A list of Geary prefabs to associate with the mob.
     *
     * (Requires Geary to be installed)
     */
    Prefabs?: string[];

    /**
     * Templates are a functionality that allows a mob to "inherit" the characteristics of one or more other mobs.
     */
    Template?: string;

    /**
     * Sets the display name of the mob.
     * This option supports color codes and placeholders.
     * The mob's name will not change or update on its own, you have to use setname mechanic to change or update it.
     */
    Display?: string;

    /**
     * Sets the base value of the mob's max health attribute.
     * Mythic doesn't have any limitations on max health but Spigot, however, caps the max health at 2048.
     * This can easily be changed in spigot's configuration file, server_root\spigot.yml.
     * Whenever the mob is holding or wearing an item with attribute modifiers will also affect the total max health.
     *
     * @minimum 0 */
    Health?: number;

    /**
     * Sets the base value of the mob's melee attack damage attribute.
     * 1 damage equals to 0.5 hearts, so a mob with 6 damage will deal 3 full hearts of damage.
     * This attribute will never affect damage done by ranged attacks, like arrows or potions.
     * Whenever the mob is holding or wearing an item with attribute modifiers will also affect the mob's melee damage.
     */
    Damage?: number;

    /**
     * Sets the base value of the mob's armor attribute.
     * Minecraft caps the max armor value to 30.
     * Whenever the mob is holding or wearing an item with attribute modifiers will also affect the total armor.
     */
    Armor?: number;

    /**
     * Creates a basic health bar hologram above the mob, once the mob has been damaged.
     */
    HealthBar?: HealthBar;

    /**
     * Defines and controls the health bar of the mob.
     * Looks like the Ender Dragon's or the Wither's health bar, but is configurable in appearance.
     */
    BossBar?: BossBar;

    /**
     * Sets the mob's faction, which can be used for advanced Custom AI configurations or targeter filtering.
     * Faction is case-sensitive, so be careful when using faction conditions.
     */
    Faction?: string;

    /**
     * Sets the mount of your mob. Must be another MythicMob.
     * The mob will automatically ride on the defined mount when it spawns.
     */
    Mount?: string;

    /**
     * Sets the display entity options.
     * A list of available display options can be found at https://git.mythiccraft.io/mythiccraft/MythicMobs/-/wikis/Mobs/DisplayOptions
     */
    DisplayOptions?: object;

    /**
     * This is a special field which comes with numerous sub-options, like determining if the mob should despawn,
     * setting knockback resistance, follow range, movement speed and many more.
     */
    Options?: Options;

    /**
     * This field allows you to enable or disable modules, like Threat Tables and/or Immunity Tables
     */
    Modules?: Modules;

    /** Modifies and customizes the AI goals of the mob. */
    AIGoalSelectors?: string[];

    /** Modifies and customizes the AI targets of the mob. */
    AITargetSelectors?: string[];

    /**
     * Add or completely modify the mob loot drops.
     * Can be vanilla items, mythic items, experience points, cross-plugin items (if supported), or even custom drop tables with their own condition system.
     * See Drops & DropTables for more information.
     */
    Drops?: string[];

    /**
     * Modify how much damage the mob will take from different damage causes.
     * For example, DamageModifiers can be used to make the mob immune to melee attacks, but weak to ranged attacks.
     * See Damage Modifiers for more information.
     */
    DamageModifiers?: string[];

    /**
     * Equips the mob with vanilla items or mythic items when it first spawns.
     */
    Equipment?: string[];

    /** Customize the [kill messages] that appears when the mob kills a player. */
    KillMessages?: string[];

    /**
     * MythicMobs can have [levels](/Mobs/Levels) and this field is used to determine
     * which kinds of statistics they should gain on when their levels change.
     */
    LevelModifiers?: LevelModifiers;

    /**
     * Changes the appearance of the mob to be like other entity types.
     * Requires the plugin [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/) to be installed and functioning on your server.
     * See [Add-on: Disguises](/Mobs/Disguises) for more information.
     */
    Disguise?: string;

    /**
     * Skills are an integral feature of Mythic. All mobs are able to have skills of various types that can be triggered under different circumstances with varying
     * conditions. The Mythic skill system is quite intuitive once you get used to it, and can be used to create anything from simple mobs to incredibly complex bosses.
     */
    Skills?: string[];

    /** ModelEngine options */
    Model?: Model;

    /**
     * Forces the usage of Mythic nameplates on the mob, if the `Enabled: true` option is used.
     * This makes display names like `Display: "Hello\nWorld!"` be displayed on two separate lines.
     */
    Nameplate?: Nameplate;

    /**
     * Allows the mob to "hear" sounds like a warden would.
     * Turning this on enables the new ~onHear trigger.
     */
    Hearing?: Hearing;

    /**
     * Instead of using a lot of setvariable mechanics ~onSpawn, you can make a mob spawn with already set
     * variables via the use the of Variables mob field.
     */
    Variables?: { [key: string]: string };

    /**
     * Customizes the villager trades.
     * Villagers must have a profession and a profession level of 2 to be able to keep its custom trades.
     */
    Trades?: { [key: number]: Trade };

    /**
     * Spawn category for Geary's spawning system
     */
    SpawnCategory?: string;
}
