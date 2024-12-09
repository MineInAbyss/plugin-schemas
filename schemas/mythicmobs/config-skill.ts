export type Base = { [key: string]: Skill };

/**
 * A Metaskill is, in essence, a list of mechanics to execute once the metaskill is called via a Meta Mechanic.
 * They are located in ./plugins/MythicMobs/Skills inside .yml files, just like their mobs counterpart.
 *
 * See https://git.mythiccraft.io/mythiccraft/MythicMobs/-/wikis/Skills/Metaskills
 */
interface Skill {
    /**
     * The Conditions of the metaskill. Those conditions evaluates the caster of the metaskill.
     *
     * Depending on the Condition Action used in each condition, different behaviors can occur: read the relevant wiki page for more info
     */
    Conditions?: string[];

    /** The Cooldown is the time, in seconds, that must elapse between executions of the metaskill for the same caster. */
    Cooldown?: number;

    /**
     * The true core of a metaskill. It's the list of the mechanics that will be executed by the metaskill once triggered.
     * Other Meta Mechanics can be used in here, allowing the Metaskill to trigger other ones.
     *
     * Ex. - skill{s=ExampleSkill_2}
     */
    Skills?: string[];

    /**
     * If the metaskill should cancel its execution if no eligible targets are provided to it.
     *
     * @default true
     */
    CancelIfNoTargets?: boolean;

    /**
     * The Target Conditions of the metaskill. Those conditions evaluates the inherited target of the metaskill, it being either an entity ot a location.
     *
     * Depending on the Condition Action used in each condition, different behaviors can occur: read the relevant wiki page for more info
     */
    TargetConditions?: string[];

    /**
     * The Trigger Conditions of the metaskill. Those conditions evaluates the entity that triggered the skilltree. This entity can also be targeted via the @Trigger targeter
     *
     * Depending on the Condition Action used in each condition, different behaviors can occur: read the relevant wiki page for more info
     */
    TriggerConditions?: string[];

    /** If the Metaskill is triggered while on cooldown, the skill specified here will be casted instead. */
    OnCooldownSkill?: string;

    /** The Metaskill to be executed if the conditions do not check */
    OnFailSkill?: string;

    /** To not be confused with Skills. This option allows the metaskill to execute the mechanics of another metaskill once triggered. */
    Skill?: string;
}
