import {DyeColor} from "./minecraft";

enum Despawn {
    NORMAL = "NORMAL",
    CHUNK = "CHUNK",
    NEVER = "NEVER",
    PERSISTENT = "PERSISTENT",
    NPC = "NPC",
}

export class Options {
    ReviveHealth?: number = 10;
    Invincible?: boolean = false;
    Invulnerable?: boolean = false;
    Despawn?: boolean | Despawn = true;
    Persistent?: boolean = false;
    MovementSpeed?: number;
    FlyingSpeed?: number;
    KnockbackResistance?: number;
    /** The range in blocks within which a mob will target to attack or track an entity */
    FollowRange ?: number = 32;
    AttackSpeed?: number;
    Scale?: number;
    Glowing?: boolean = false;
    Collidable?: boolean = true;
    NoGravity?: boolean = false;
    Interactable?: boolean = true;
    Silent?: boolean = false;
    NoAI?: boolean = false;
    HealOnReload?: boolean = false;
    NoDamageTicks?: number = 10;
    LockPitch?: boolean = false;
    UseThreatTable?: boolean;
    UseImmunityTable?: boolean;
    MaxAttackRange?: number = 64;
    MaxCombatDistance?: number = 256;
    MaxAttackableRange?: number = 256;
    MaxThreatDistance?: number = 40;
    AlwaysShowName?: boolean = false;
    ShowNameOnDamaged?: boolean = false;
    RepeatAllSkills?: boolean = false;
    PreventVanillaDamage?: boolean;
    PreventOtherDrops?: boolean;
    PreventRandomEquipment?: boolean = false;
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
    PreventMobKillDrops?: boolean = false;
    /** Prevent silverfish from infecting blocks. */
    PreventBlockInfection?: boolean = false;
    PassthroughDamage?: boolean = false;
    ApplyInvisibility?: boolean = false;
    Invisibility?: boolean = false;
    Invisible?: boolean = false;
    VisibleByDefault?: boolean = true;
    DigOutOfGround?: boolean = false;

    // TYPE-DEPENDANT OPTIONS

    /**
     * Sets the color of the mob (wool color of sheep or the collar color of wolves)
     * The value can be any of this Colors
     *
     * @default WHITE
     */
    Color?: DyeColor;

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
