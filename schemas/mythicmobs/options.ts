enum Despawn {
    NORMAL = "NORMAL",
    CHUNK = "CHUNK",
    NEVER = "NEVER",
    PERSISTENT = "PERSISTENT",
    NPC = "NPC",
}

export class Options {
    ReviveHealth ?: number = 10;
    Invincible ?: boolean = false;
    Invulnerable ?: boolean = false;
    Despawn ?: boolean | Despawn = true;
    Persistent ?: boolean = false;
    MovementSpeed ?: number;
    FlyingSpeed ?: number;
    KnockbackResistance ?: number;
    FollowRange ?: number;
    AttackSpeed ?: number;
    Scale ?: number;
    Glowing ?: boolean = false;
    Collidable ?: boolean = true;
    NoGravity ?: boolean = false;
    Interactable ?: boolean = true;
    Silent ?: boolean = false;
    NoAI ?: boolean = false;
    HealOnReload ?: boolean = false;
    NoDamageTicks ?: number = 10
    LockPitch ?: boolean = false;
    UseThreatTable ?: boolean;
    UseImmunityTable ?: boolean;
    MaxAttackRange ?: number = 64;
    MaxCombatDistance ?: number = 256;
    MaxAttackableRange ?: number = 256;
    MaxThreatDistance ?: number = 40;
    AlwaysShowName ?: boolean = false;
    ShowNameOnDamaged ?: boolean = false;
    RepeatAllSkills ?: boolean = false;
    PreventVanillaDamage ?: any;
    PreventOtherDrops ?: any;
    PreventRandomEquipment ?: boolean = false;
    PreventLeashing ?: boolean = true;
    PreventRenaming ?: boolean = true;
    PreventSunburn ?: boolean = false;
    PreventTeleport ?: boolean = false;
    PreventTeleporting ?: boolean = true;
    PreventTransformation ?: boolean = true;
    PreventTransforming ?: boolean = true;
    PreventTransform ?: boolean = true;
    PreventMounts ?: boolean = false;
    PreventJockey ?: boolean = false;
    PreventJockeyMounts ?: boolean = false;
    PreventItemPickup ?: boolean = true;
    PreventMobKillDrops ?: boolean = false;
    PassthroughDamage ?: boolean = false;
    ApplyInvisibility ?: boolean = false;
    Invisibility ?: boolean = false;
    Invisible ?: boolean = false;
    VisibleByDefault ?: boolean = true;
    DigOutOfGround ?: boolean = false;
}
