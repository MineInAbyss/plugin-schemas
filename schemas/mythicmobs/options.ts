import {DyeColor} from "./minecraft";

enum Despawn {
    NORMAL = "NORMAL",
    CHUNK = "CHUNK",
    NEVER = "NEVER",
    PERSISTENT = "PERSISTENT",
    NPC = "NPC",
}

export class Options {
    /** When the mob's death event gets cancelled (via a Cancelevent mechanic ~onDeath)
     * the one specified is the amount of health the mob's will be set to.
     * If the value is -1, the mob will heal to its own max health value. */
    ReviveHealth?: number = 10;
    /** Makes the mob completely invincible to all types of damage. This option cannot be changed by command skills. */
    Invincible?: boolean = false;
    Invulnerable?: boolean = false;

    /**
     * Determines how the mob will despawn.
     * NORMAL mimics vanilla behavour,
     * NEVER will save mobs but remove them with commands,
     * PERSISTENT will save mobs and not remove them with commands.
     *
     * @default NORMAL
     */
    Despawn?: Despawn = Despawn.NORMAL;
    MovementSpeed?: number;
    FlyingSpeed?: number;
    /** A percentage of knockback resisted from attacks. This option can be anywhere between 0 and 1.
     But a mob with 100% knockback resistance can still be knocked back by a bow's enchantment: ARROW_KNOCKBACK (punch enchantment).
     For true knockback resistance, see the velocity mechanic page. */
    KnockbackResistance?: number = 0;
    /** The range in blocks within which a mob will target to attack or track an entity */
    FollowRange?: number = 32;
    AttackSpeed?: number;
    /** The scale of the mob. If set to -1, the option is ignored. */
    Scale?: number;
    Glowing?: boolean = false;
    Collidable?: boolean = true;
    NoGravity?: boolean = false;
    Interactable?: boolean = true;
    Silent?: boolean = false;
    NoAI?: boolean = false;
    /** Allows non-despawning mobs to heal once the chunk they are in gets reloaded. */
    HealOnReload?: boolean = false;
    NoDamageTicks?: number = 10;
    /** Keeps the mob's head from looking up/down. Requires ProtocolLib. */
    LockPitch?: boolean = false;
    UseThreatTable?: boolean;
    UseImmunityTable?: boolean;
    MaxAttackRange?: number = 64;
    /** Prevents players that are a number of blocks away from damaging the mob.
     Setting this option to a number less than the distance of a certain mob skill or attack will
     ensure that the mob can damage the player and will not be as easy to exploit. */
    MaxCombatDistance?: number = 256;
    MaxAttackableRange?: number = 256;
    MaxThreatDistance?: number = 40;
    AlwaysShowName?: boolean = false;
    ShowNameOnDamaged?: boolean = false;
    RepeatAllSkills?: boolean = false;
    PreventVanillaDamage?: boolean;
    /** Prevents the mob from dropping its vanilla loot table */
    PreventOtherDrops?: boolean;
    PreventRandomEquipment?: boolean = false;
    /** Whether to prevent a leash from being placed on the mob. */
     PreventLeashing?: boolean = true;
    PreventRenaming?: boolean = true;
    PreventSunburn?: boolean = false;
    PreventTeleport?: boolean = false;
    PreventTeleporting?: boolean = true;
    PreventTransformation?: boolean = true;
    PreventTransforming?: boolean = true;
    PreventTransform?: boolean = true;
    PreventMounts?: boolean = false;
    PreventJockey?: boolean = false;
    PreventJockeyMounts?: boolean = false;
    PreventItemPickup?: boolean = true;
    /** Prevents a MythicMob's target from dropping loot. */
    PreventMobKillDrops?: boolean = false;
    /** Prevent silverfish from infecting blocks. */
    PreventBlockInfection?: boolean = false;
    PassthroughDamage?: boolean = false;
    ApplyInvisibility?: boolean = false;
    Invisibility?: boolean = false;
    Invisible?: boolean = false;
    VisibleByDefault?: boolean = true;
    /** Teleports the mob two blocks up if it takes SUFFOCATION damage. */
    DigOutOfGround?: boolean = false;

    // TYPE-DEPENDANT OPTIONS

    // Boats
    BoatType?: string;

    // Animals

    Age?: number;
    AgeLock?: boolean = false;
    Adult?: boolean;
    Baby?: boolean;

    // Colorable

    /**
     * Sets the color of the mob (wool color of sheep or the collar color of wolves)
     * The value can be any of this Colors
     *
     * @default WHITE
     */
    Color?: DyeColor;

    // Neutral

    /** Whether the mob will spawn angry or not, i.e. wolves. */
    Angry?: boolean = false;

    PreventSlimeSplit?: boolean = false;

    /**
     * Sets the size of slimes, magma cubes, and phantoms.
     * Can get VERY big and get exponentially larger with each increase.
     * Extremely high size will cause server lag and possibly crashes
     */
    Size?: number | string = 1;
    CanJoinRaid?: boolean = true;
    PatrolLeader?: boolean = false;
    PatrolSpawnPoint?: boolean = false;
    Tameable?: boolean = false;

    /** Prevent a Skeleton or Zombie from being converted into other types of skeletons. */
    PreventConversion?: boolean = false;
    ReinforcementsChance?: number = 0;

    // Armorstand
    CanMove?: boolean = true;
    CanTick?: boolean = true;
    HasArms?: boolean = false;
    HasBasePlate?: boolean = true;
    HasGravity?: boolean = true;

    /** Designates the Mythic Item that should go in the body/chest slot of an armor stand. */
    ItemBody?: string;

    /** Designates the Mythic Item that should go in the feet slot of an armor stand. */
    ItemFeet?: string;

    /** Designates the Mythic Item that should go in the main hand slot of an armor stand. */
    ItemHand?: string;

    /** Designates the Mythic Item that should go in the off hand slot of an armor stand. */
    ItemOffHand?: string;

    /** Designates the Mythic Item that should go in the helmet slot of an armor stand. */
    ItemHead?: string;

    /** Designates the Mythic Item that should go in the leggings slot of an armor stand. */
    ItemLegs?: string;

    /** Sets the armor stand as a marker. This option prevents the armor stand from being destroyed in game,
     making it completely non-interactable. */
    Marker?: boolean = false;

    /** Sets the armor stand to small variant. */
    Small?: boolean = false;

    Pose?: Pose;

    // Bee
    /** Sets the time in ticks until bee anger ends. If set to 0 the bee will not be angry. */
    Anger?: number = 0;
    /** Whether the bee is carrying pollen. */
    HasNectar?: boolean = false;
    /** Whether the bee has stung an entity. */
    HasStung?: boolean = false;
    /** Whether to prevent the bee from losing its stinger once it hits an entity. */
    PreventStingerLoss?: boolean = false;
}

export class Pose {
    Head?: string = "0,0,0";
    Body?: string = "0,0,0";
    LeftArm?: string = "0,0,0";
    RightArm?: string = "0,0,0";
    LeftLeg?: string = "0,0,0";
    RightLeg?: string = "0,0,0";
}
