export type EntityExpression = string;
export type geary$entity = string;
export type geary$uuid = string;
export type geary$prefab_key = string;
export class Base {
    "uuid"?: geary$uuid;
    "location"?: geary$location;
    "itemRightClickBlock"?: geary$item_right_click_block;
    "bucketable"?: geary$bucketable;
    "tamed"?: geary$tamed;
    "become"?: geary$become;
    "holdsPrefab"?: geary$holds_prefab;
    "set.block"?: geary$set$block;
    "onDamageOther"?: geary$on_damage_other;
    "prevent.riding"?: geary$prevent$riding;
    "getTargetBlock"?: geary$get_target_block;
    "when"?: geary$when;
    "actionGroup"?: geary$action_group;
    "backpack"?: geary$backpack;
    "displayName"?: geary$display_name;
    "itemRightClick"?: geary$item_right_click;
    "copyToInstances"?: geary$copy_to_instances;
    "mythicConditions"?: geary$mythic_conditions;
    "smite"?: geary$smite;
    "onSheared"?: geary$on_sheared;
    "cooldownsComplete"?: geary$cooldowns_complete;
    "prefabKey"?: geary$prefab_key;
    "itemRightClickEntity"?: geary$item_right_click_entity;
    "onFail"?: geary$on_fail;
    "cooldowns"?: geary$cooldowns;
    "child"?: geary$child;
    "itemConsumed"?: geary$item_consumed;
    "children"?: geary$children;
    "denyInVanillaRecipes"?: geary$deny_in_vanilla_recipes;
    "itemInteract"?: geary$item_interact;
    "observe"?: geary$observe;
    "prevent.interaction"?: geary$prevent$interaction;
    "bind.entityType"?: geary$bind$entity_type;
    "sendActionBar"?: geary$send_action_bar;
    "maxNearby"?: geary$max_nearby;
    "hasConsumable"?: geary$has_consumable;
    "itemDrop"?: geary$item_drop;
    "onLoad"?: geary$on_load;
    "playSound"?: geary$play_sound;
    "gap"?: geary$gap;
    "set.potionMixes"?: geary$set$potion_mixes;
    "replaceBurnedDrop"?: geary$replace_burned_drop;
    "backpackContents"?: geary$backpack_contents;
    "blockBelow"?: geary$block_below;
    "with"?: geary$with;
    "hat"?: geary$hat;
    "itemLeftClickBlock"?: geary$item_left_click_block;
    "tamable"?: geary$tamable;
    "isSourceLiquid"?: geary$is_source_liquid;
    "startCooldown"?: geary$start_cooldown;
    "block"?: geary$block;
    "check.entity"?: geary$check$entity;
    "onDamaged"?: geary$on_damaged;
    "prevent.breeding"?: geary$prevent$breeding;
    "onDeath"?: geary$on_death;
    "blockAbove"?: geary$block_above;
    "ensure"?: geary$ensure;
    "sounds"?: geary$sounds;
    "resourcepack"?: geary$resourcepack;
    "set.item"?: geary$set$item;
    "player"?: geary$player;
    "relation"?: geary$relation;
    "consumeItem"?: geary$consume_item;
    "sound"?: geary$sound;
    "getLocation"?: geary$get_location;
    "particle"?: geary$particle;
    "itemLeftClick"?: geary$item_left_click;
    "itemBreak"?: geary$item_break;
    "instances"?: geary$instances;
    "passive"?: geary$passive;
    "inherit"?: geary$inherit;
    "explode"?: geary$explode;
    "disableItemInteractions"?: geary$disable_item_interactions;
    "chance"?: geary$chance;
    "set.mythicMob"?: geary$set$mythic_mob;
    "onSpawn"?: geary$on_spawn;
    "getNearbyEntities"?: geary$get_nearby_entities;
    "set.entityType"?: geary$set$entity_type;
    "prevent.regeneration"?: geary$prevent$regeneration;
    "applyPotionEffects"?: geary$apply_potion_effects;
    "mythicSkills"?: geary$mythic_skills;
    "set.recipes"?: geary$set$recipes;
    "inInventory"?: geary$in_inventory;
    "blocky:sound"?: blocky$sound;
    "blocky:preventItemstackUpdate"?: blocky$prevent_itemstack_update;
    "blocky:pack"?: blocky$pack;
    "blocky:info"?: blocky$info;
    "blocky:light"?: blocky$light;
    "blocky:collisionHitbox"?: blocky$collision_hitbox;
    "blocky:furnitureColor"?: blocky$furniture_color;
    "blocky:directional"?: blocky$directional;
    "blocky:modifier"?: blocky$modifier;
    "blocky:vanillaNoteBlock"?: blocky$vanilla_note_block;
    "blocky:modelengine"?: blocky$modelengine;
    "blocky:placableOn"?: blocky$placable_on;
    "blocky:burnable"?: blocky$burnable;
    "blocky:furniture"?: blocky$furniture;
    "blocky:mining"?: blocky$mining;
    "blocky:waxedCopperBlock"?: blocky$waxed_copper_block;
    "blocky:drops"?: blocky$drops;
    "blocky:associatedSeats"?: blocky$associated_seats;
    "blocky:interactionHitbox"?: blocky$interaction_hitbox;
    "blocky:instrument"?: blocky$instrument;
    "blocky:furnitureProperties"?: blocky$furniture_properties;
    "blocky:breaking"?: blocky$breaking;
    "blocky:seats"?: blocky$seats;
    "blocky:tallWire"?: blocky$tall_wire;
    "packy:packyData"?: packy$packy_data;
    "packy:templates"?: packy$templates;
    "chatty:commandSpy"?: chatty$command_spy;
    "chatty:chattyData"?: chatty$chatty_data;
    "chatty:spyOnChannels"?: chatty$spy_on_channels;
    "chatty:hideJoinLeave"?: chatty$hide_join_leave;
    "chatty:nickname"?: chatty$nickname;
    "minecraft:constant"?: minecraft$constant;
    "mineinabyss:showDepthmeterHud"?: mineinabyss$show_depthmeter_hud;
    "mineinabyss:toggleDepthHud"?: mineinabyss$toggle_depth_hud;
    "mineinabyss:sickle"?: mineinabyss$sickle;
    "mineinabyss:patreonItem"?: mineinabyss$patreon_item;
    "mineinabyss:okibotravel"?: mineinabyss$okibotravel;
    "mineinabyss:okiboMapHitbox"?: mineinabyss$okibo_map_hitbox;
    "mineinabyss:lockable"?: mineinabyss$lockable;
    "mineinabyss:lootLocation"?: mineinabyss$loot_location;
    "mineinabyss:bird"?: mineinabyss$bird;
    "mineinabyss:unlockedGondolas"?: mineinabyss$unlocked_gondolas;
    "mineinabyss:insect"?: mineinabyss$insect;
    "mineinabyss:depthmeter"?: mineinabyss$depthmeter;
    "mineinabyss:playerProfile"?: mineinabyss$player_profile;
    "mineinabyss:orthbound"?: mineinabyss$orthbound;
    "mineinabyss:orthbanker"?: mineinabyss$orthbanker;
    "mineinabyss:grapplingHook"?: mineinabyss$grappling_hook;
    "mineinabyss:signOwner"?: mineinabyss$sign_owner;
    "mineinabyss:patreon"?: mineinabyss$patreon;
    "minecraft:setCount"?: minecraft$set_count;
    "minecraft:group"?: minecraft$group;
    "mineinabyss:starcompass"?: mineinabyss$starcompass;
    "mineinabyss:tutorialEntity"?: mineinabyss$tutorial_entity;
    "mineinabyss:containsLoot"?: mineinabyss$contains_loot;
    "mineinabyss:okiboMap"?: mineinabyss$okibo_map;
    "mineinabyss:backpack"?: mineinabyss$backpack;
    "mineinabyss:okiboLineStation"?: mineinabyss$okibo_line_station;
    "minecraft:uniform"?: minecraft$uniform;
    "mineinabyss:spyOnGuildChat"?: mineinabyss$spy_on_guild_chat;
    "mineinabyss:toggleStarcompassHud"?: mineinabyss$toggle_starcompass_hud;
    "mineinabyss:guildmaster"?: mineinabyss$guildmaster;
    "mineinabyss:splitjaw"?: mineinabyss$splitjaw;
    "mineinabyss:shopkeeper"?: mineinabyss$shopkeeper;
    "mineinabyss:removeInOrth"?: mineinabyss$remove_in_orth;
    "mineinabyss:lootTable"?: mineinabyss$loot_table;
    "mineinabyss:item"?: mineinabyss$item;
    "minecraft:randomChance"?: minecraft$random_chance;
    "minecraft:item"?: minecraft$item;
    "mineinabyss:descentContext"?: mineinabyss$descent_context;
    "mineinabyss:customHudData"?: mineinabyss$custom_hud_data;
    "mineinabyss:playerData"?: mineinabyss$player_data;
    "mineinabyss:showStarcompassHud"?: mineinabyss$show_starcompass_hud;
    "cosmetics:equippedBackpackStorage"?: cosmetics$equipped_backpack_storage;
    "minecraft:binomial"?: minecraft$binomial;
    "mineinabyss:showDepth"?: mineinabyss$show_depth;
    "mineinabyss:gondola"?: mineinabyss$gondola;
    "mineinabyss:mittytoken"?: mineinabyss$mittytoken;
    "mineinabyss:orthcoin"?: mineinabyss$orthcoin;
    "mineinabyss:okiboTraveler"?: mineinabyss$okibo_traveler;
    "mineinabyss:cosmetics"?: mineinabyss$cosmetics;
    "climb:staminaModifier"?: climb$stamina_modifier;
    "bonfire:bonfireRemoved"?: bonfire$bonfire_removed;
    "bonfire:effectArea"?: bonfire$effect_area;
    "bonfire:bonfireRespawn"?: bonfire$bonfire_respawn;
    "bonfire:bonfire"?: bonfire$bonfire;
    "bonfire:expirationTime"?: bonfire$expiration_time;
    "bonfire:bonfireDebug"?: bonfire$bonfire_debug;
}
class BaseOrString {
    "uuid"?: geary$uuid | string;
    "location"?: geary$location | string;
    "itemRightClickBlock"?: geary$item_right_click_block | string;
    "bucketable"?: geary$bucketable | string;
    "tamed"?: geary$tamed | string;
    "become"?: geary$become | string;
    "holdsPrefab"?: geary$holds_prefab | string;
    "set.block"?: geary$set$block | string;
    "onDamageOther"?: geary$on_damage_other | string;
    "prevent.riding"?: geary$prevent$riding | string;
    "getTargetBlock"?: geary$get_target_block | string;
    "when"?: geary$when | string;
    "actionGroup"?: geary$action_group | string;
    "backpack"?: geary$backpack | string;
    "displayName"?: geary$display_name | string;
    "itemRightClick"?: geary$item_right_click | string;
    "copyToInstances"?: geary$copy_to_instances | string;
    "mythicConditions"?: geary$mythic_conditions | string;
    "smite"?: geary$smite | string;
    "onSheared"?: geary$on_sheared | string;
    "cooldownsComplete"?: geary$cooldowns_complete | string;
    "prefabKey"?: geary$prefab_key | string;
    "itemRightClickEntity"?: geary$item_right_click_entity | string;
    "onFail"?: geary$on_fail | string;
    "cooldowns"?: geary$cooldowns | string;
    "child"?: geary$child | string;
    "itemConsumed"?: geary$item_consumed | string;
    "children"?: geary$children | string;
    "denyInVanillaRecipes"?: geary$deny_in_vanilla_recipes | string;
    "itemInteract"?: geary$item_interact | string;
    "observe"?: geary$observe | string;
    "prevent.interaction"?: geary$prevent$interaction | string;
    "bind.entityType"?: geary$bind$entity_type | string;
    "sendActionBar"?: geary$send_action_bar | string;
    "maxNearby"?: geary$max_nearby | string;
    "hasConsumable"?: geary$has_consumable | string;
    "itemDrop"?: geary$item_drop | string;
    "onLoad"?: geary$on_load | string;
    "playSound"?: geary$play_sound | string;
    "gap"?: geary$gap | string;
    "set.potionMixes"?: geary$set$potion_mixes | string;
    "replaceBurnedDrop"?: geary$replace_burned_drop | string;
    "backpackContents"?: geary$backpack_contents | string;
    "blockBelow"?: geary$block_below | string;
    "with"?: geary$with | string;
    "hat"?: geary$hat | string;
    "itemLeftClickBlock"?: geary$item_left_click_block | string;
    "tamable"?: geary$tamable | string;
    "isSourceLiquid"?: geary$is_source_liquid | string;
    "startCooldown"?: geary$start_cooldown | string;
    "block"?: geary$block | string;
    "check.entity"?: geary$check$entity | string;
    "onDamaged"?: geary$on_damaged | string;
    "prevent.breeding"?: geary$prevent$breeding | string;
    "onDeath"?: geary$on_death | string;
    "blockAbove"?: geary$block_above | string;
    "ensure"?: geary$ensure | string;
    "sounds"?: geary$sounds | string;
    "resourcepack"?: geary$resourcepack | string;
    "set.item"?: geary$set$item | string;
    "player"?: geary$player | string;
    "relation"?: geary$relation | string;
    "consumeItem"?: geary$consume_item | string;
    "sound"?: geary$sound | string;
    "getLocation"?: geary$get_location | string;
    "particle"?: geary$particle | string;
    "itemLeftClick"?: geary$item_left_click | string;
    "itemBreak"?: geary$item_break | string;
    "instances"?: geary$instances | string;
    "passive"?: geary$passive | string;
    "inherit"?: geary$inherit | string;
    "explode"?: geary$explode | string;
    "disableItemInteractions"?: geary$disable_item_interactions | string;
    "chance"?: geary$chance | string;
    "set.mythicMob"?: geary$set$mythic_mob | string;
    "onSpawn"?: geary$on_spawn | string;
    "getNearbyEntities"?: geary$get_nearby_entities | string;
    "set.entityType"?: geary$set$entity_type | string;
    "prevent.regeneration"?: geary$prevent$regeneration | string;
    "applyPotionEffects"?: geary$apply_potion_effects | string;
    "mythicSkills"?: geary$mythic_skills | string;
    "set.recipes"?: geary$set$recipes | string;
    "inInventory"?: geary$in_inventory | string;
    "blocky:sound"?: blocky$sound | string;
    "blocky:preventItemstackUpdate"?: blocky$prevent_itemstack_update | string;
    "blocky:pack"?: blocky$pack | string;
    "blocky:info"?: blocky$info | string;
    "blocky:light"?: blocky$light | string;
    "blocky:collisionHitbox"?: blocky$collision_hitbox | string;
    "blocky:furnitureColor"?: blocky$furniture_color | string;
    "blocky:directional"?: blocky$directional | string;
    "blocky:modifier"?: blocky$modifier | string;
    "blocky:vanillaNoteBlock"?: blocky$vanilla_note_block | string;
    "blocky:modelengine"?: blocky$modelengine | string;
    "blocky:placableOn"?: blocky$placable_on | string;
    "blocky:burnable"?: blocky$burnable | string;
    "blocky:furniture"?: blocky$furniture | string;
    "blocky:mining"?: blocky$mining | string;
    "blocky:waxedCopperBlock"?: blocky$waxed_copper_block | string;
    "blocky:drops"?: blocky$drops | string;
    "blocky:associatedSeats"?: blocky$associated_seats | string;
    "blocky:interactionHitbox"?: blocky$interaction_hitbox | string;
    "blocky:instrument"?: blocky$instrument | string;
    "blocky:furnitureProperties"?: blocky$furniture_properties | string;
    "blocky:breaking"?: blocky$breaking | string;
    "blocky:seats"?: blocky$seats | string;
    "blocky:tallWire"?: blocky$tall_wire | string;
    "packy:packyData"?: packy$packy_data | string;
    "packy:templates"?: packy$templates | string;
    "chatty:commandSpy"?: chatty$command_spy | string;
    "chatty:chattyData"?: chatty$chatty_data | string;
    "chatty:spyOnChannels"?: chatty$spy_on_channels | string;
    "chatty:hideJoinLeave"?: chatty$hide_join_leave | string;
    "chatty:nickname"?: chatty$nickname | string;
    "minecraft:constant"?: minecraft$constant | string;
    "mineinabyss:showDepthmeterHud"?: mineinabyss$show_depthmeter_hud | string;
    "mineinabyss:toggleDepthHud"?: mineinabyss$toggle_depth_hud | string;
    "mineinabyss:sickle"?: mineinabyss$sickle | string;
    "mineinabyss:patreonItem"?: mineinabyss$patreon_item | string;
    "mineinabyss:okibotravel"?: mineinabyss$okibotravel | string;
    "mineinabyss:okiboMapHitbox"?: mineinabyss$okibo_map_hitbox | string;
    "mineinabyss:lockable"?: mineinabyss$lockable | string;
    "mineinabyss:lootLocation"?: mineinabyss$loot_location | string;
    "mineinabyss:bird"?: mineinabyss$bird | string;
    "mineinabyss:unlockedGondolas"?: mineinabyss$unlocked_gondolas | string;
    "mineinabyss:insect"?: mineinabyss$insect | string;
    "mineinabyss:depthmeter"?: mineinabyss$depthmeter | string;
    "mineinabyss:playerProfile"?: mineinabyss$player_profile | string;
    "mineinabyss:orthbound"?: mineinabyss$orthbound | string;
    "mineinabyss:orthbanker"?: mineinabyss$orthbanker | string;
    "mineinabyss:grapplingHook"?: mineinabyss$grappling_hook | string;
    "mineinabyss:signOwner"?: mineinabyss$sign_owner | string;
    "mineinabyss:patreon"?: mineinabyss$patreon | string;
    "minecraft:setCount"?: minecraft$set_count | string;
    "minecraft:group"?: minecraft$group | string;
    "mineinabyss:starcompass"?: mineinabyss$starcompass | string;
    "mineinabyss:tutorialEntity"?: mineinabyss$tutorial_entity | string;
    "mineinabyss:containsLoot"?: mineinabyss$contains_loot | string;
    "mineinabyss:okiboMap"?: mineinabyss$okibo_map | string;
    "mineinabyss:backpack"?: mineinabyss$backpack | string;
    "mineinabyss:okiboLineStation"?: mineinabyss$okibo_line_station | string;
    "minecraft:uniform"?: minecraft$uniform | string;
    "mineinabyss:spyOnGuildChat"?: mineinabyss$spy_on_guild_chat | string;
    "mineinabyss:toggleStarcompassHud"?: mineinabyss$toggle_starcompass_hud | string;
    "mineinabyss:guildmaster"?: mineinabyss$guildmaster | string;
    "mineinabyss:splitjaw"?: mineinabyss$splitjaw | string;
    "mineinabyss:shopkeeper"?: mineinabyss$shopkeeper | string;
    "mineinabyss:removeInOrth"?: mineinabyss$remove_in_orth | string;
    "mineinabyss:lootTable"?: mineinabyss$loot_table | string;
    "mineinabyss:item"?: mineinabyss$item | string;
    "minecraft:randomChance"?: minecraft$random_chance | string;
    "minecraft:item"?: minecraft$item | string;
    "mineinabyss:descentContext"?: mineinabyss$descent_context | string;
    "mineinabyss:customHudData"?: mineinabyss$custom_hud_data | string;
    "mineinabyss:playerData"?: mineinabyss$player_data | string;
    "mineinabyss:showStarcompassHud"?: mineinabyss$show_starcompass_hud | string;
    "cosmetics:equippedBackpackStorage"?: cosmetics$equipped_backpack_storage | string;
    "minecraft:binomial"?: minecraft$binomial | string;
    "mineinabyss:showDepth"?: mineinabyss$show_depth | string;
    "mineinabyss:gondola"?: mineinabyss$gondola | string;
    "mineinabyss:mittytoken"?: mineinabyss$mittytoken | string;
    "mineinabyss:orthcoin"?: mineinabyss$orthcoin | string;
    "mineinabyss:okiboTraveler"?: mineinabyss$okibo_traveler | string;
    "mineinabyss:cosmetics"?: mineinabyss$cosmetics | string;
    "climb:staminaModifier"?: climb$stamina_modifier | string;
    "bonfire:bonfireRemoved"?: bonfire$bonfire_removed | string;
    "bonfire:effectArea"?: bonfire$effect_area | string;
    "bonfire:bonfireRespawn"?: bonfire$bonfire_respawn | string;
    "bonfire:bonfire"?: bonfire$bonfire | string;
    "bonfire:expirationTime"?: bonfire$expiration_time | string;
    "bonfire:bonfireDebug"?: bonfire$bonfire_debug | string;
}
type BaseSerializableItemStack = SerializableItemStack | string;

export interface SerializableItemStack {
    type?: string | null;
    amount?: number | null;
    customModelData?: number | null;
    itemName?: string | null;
    customName?: string | null;
    lore?: string[] | null;
    unbreakable?: boolean | null;
    damage?: number | null;
    durability?: number | null;
    prefab?: string | null;
    enchantments?: SerializableEnchantment[] | null;
    itemFlags?: ItemFlag[] | null;
    attributeModifiers?: SerializableAttribute[] | null;
    basePotionType?: string | null;
    customPotionEffects?: PotionEffect[];
    knowledgeBookRecipes?: string[] | null;
    color?: Color | null;
    food?: FoodComponent | null;
    tool?: ToolComponent | null;
    jukeboxPlayable?: JukeboxPlayable | null;
    hideTooltip?: boolean | null;
    isFireResistant?: boolean | null;
    enchantmentGlintOverride?: boolean | null;
    maxStackSize?: number | null;
    rarity?: ItemRarity | null;
    tag?: string | null;
    recipeOptions?: IngredientOption[];
    crucibleItem?: string | null;
    oraxenItem?: string | null;
    itemsadderItem?: string | null;
}

export type Color = string;

export interface FoodComponent {
    nutrition: number;
    saturation: number;
    eatSeconds?: number;
    canAlwaysEat?: boolean;
    usingConvertsTo?: BaseSerializableItemStack | null;
    effects?: FoodEffectWrapper[];
}

export interface ToolComponent {
    rules?: Rule[];
    defaultMiningSpeed?: number;
    damagePerBlock?: number;
}

export interface JukeboxPlayable {
    song: string;
    showInTooltip?: boolean;
}

export enum ItemRarity {
    COMMON = "COMMON",
    UNCOMMON = "UNCOMMON",
    RARE = "RARE",
    EPIC = "EPIC",
}

export interface SerializableEnchantment {
    enchant: Enchantment;
    level?: number;
}

export enum ItemFlag {
    HIDE_ENCHANTS = "HIDE_ENCHANTS",
    HIDE_ATTRIBUTES = "HIDE_ATTRIBUTES",
    HIDE_UNBREAKABLE = "HIDE_UNBREAKABLE",
    HIDE_DESTROYS = "HIDE_DESTROYS",
    HIDE_PLACED_ON = "HIDE_PLACED_ON",
    HIDE_ADDITIONAL_TOOLTIP = "HIDE_ADDITIONAL_TOOLTIP",
    HIDE_DYE = "HIDE_DYE",
    HIDE_ARMOR_TRIM = "HIDE_ARMOR_TRIM",
    HIDE_STORED_ENCHANTS = "HIDE_STORED_ENCHANTS",
}

export interface SerializableAttribute {
    attribute: Attribute;
    modifier: AttributeModifier;
}

export interface PotionEffect {
    type: string;
    duration?: string;
    amplifier?: number;
    isAmbient?: boolean;
    hasParticles?: boolean;
    hasIcon?: boolean;
}



export type IngredientOption =
    | IngredientOption.damage
    | IngredientOption.keep;

export namespace IngredientOption {
    export enum Type {
        damage = "damage",
        keep = "keep",
    }

    export interface damage {
        type: IngredientOption.Type.damage;
        amount: number;
    }

    export interface keep {
        type: IngredientOption.Type.keep;
    }
}

export type Enchantment = string;

export enum Attribute {
    GENERIC_MAX_HEALTH = "GENERIC_MAX_HEALTH",
    GENERIC_FOLLOW_RANGE = "GENERIC_FOLLOW_RANGE",
    GENERIC_KNOCKBACK_RESISTANCE = "GENERIC_KNOCKBACK_RESISTANCE",
    GENERIC_MOVEMENT_SPEED = "GENERIC_MOVEMENT_SPEED",
    GENERIC_FLYING_SPEED = "GENERIC_FLYING_SPEED",
    GENERIC_ATTACK_DAMAGE = "GENERIC_ATTACK_DAMAGE",
    GENERIC_ATTACK_KNOCKBACK = "GENERIC_ATTACK_KNOCKBACK",
    GENERIC_ATTACK_SPEED = "GENERIC_ATTACK_SPEED",
    GENERIC_ARMOR = "GENERIC_ARMOR",
    GENERIC_ARMOR_TOUGHNESS = "GENERIC_ARMOR_TOUGHNESS",
    GENERIC_FALL_DAMAGE_MULTIPLIER = "GENERIC_FALL_DAMAGE_MULTIPLIER",
    GENERIC_LUCK = "GENERIC_LUCK",
    GENERIC_MAX_ABSORPTION = "GENERIC_MAX_ABSORPTION",
    GENERIC_SAFE_FALL_DISTANCE = "GENERIC_SAFE_FALL_DISTANCE",
    GENERIC_SCALE = "GENERIC_SCALE",
    GENERIC_STEP_HEIGHT = "GENERIC_STEP_HEIGHT",
    GENERIC_GRAVITY = "GENERIC_GRAVITY",
    GENERIC_JUMP_STRENGTH = "GENERIC_JUMP_STRENGTH",
    GENERIC_BURNING_TIME = "GENERIC_BURNING_TIME",
    GENERIC_EXPLOSION_KNOCKBACK_RESISTANCE = "GENERIC_EXPLOSION_KNOCKBACK_RESISTANCE",
    GENERIC_MOVEMENT_EFFICIENCY = "GENERIC_MOVEMENT_EFFICIENCY",
    GENERIC_OXYGEN_BONUS = "GENERIC_OXYGEN_BONUS",
    GENERIC_WATER_MOVEMENT_EFFICIENCY = "GENERIC_WATER_MOVEMENT_EFFICIENCY",
    PLAYER_BLOCK_INTERACTION_RANGE = "PLAYER_BLOCK_INTERACTION_RANGE",
    PLAYER_ENTITY_INTERACTION_RANGE = "PLAYER_ENTITY_INTERACTION_RANGE",
    PLAYER_BLOCK_BREAK_SPEED = "PLAYER_BLOCK_BREAK_SPEED",
    PLAYER_MINING_EFFICIENCY = "PLAYER_MINING_EFFICIENCY",
    PLAYER_SNEAKING_SPEED = "PLAYER_SNEAKING_SPEED",
    PLAYER_SUBMERGED_MINING_SPEED = "PLAYER_SUBMERGED_MINING_SPEED",
    PLAYER_SWEEPING_DAMAGE_RATIO = "PLAYER_SWEEPING_DAMAGE_RATIO",
    ZOMBIE_SPAWN_REINFORCEMENTS = "ZOMBIE_SPAWN_REINFORCEMENTS",
}

export interface AttributeModifier {
    key: string;
    amount: number;
    operation?: Operation;
    slotGroup?: string;
}

export interface FoodEffectWrapper {
    effect: PotionEffect;
    probability?: number;
}

export interface Rule {
    blockTypes: string[];
    speed?: number | null;
    correctForDrops?: boolean | null;
}

export enum Operation {
    ADD_NUMBER = "ADD_NUMBER",
    ADD_SCALAR = "ADD_SCALAR",
    MULTIPLY_SCALAR_1 = "MULTIPLY_SCALAR_1",
}

export interface geary$location {
    world?: string;
    x: number;
    y: number;
    z: number;
}

export interface geary$item_right_click_block {
}

export interface geary$bucketable {
    bucketLiquidRequired?: Material;
    bucketItem: BaseSerializableItemStack;
}

export enum Material {
    AIR = "AIR",
    STONE = "STONE",
    GRANITE = "GRANITE",
    POLISHED_GRANITE = "POLISHED_GRANITE",
    DIORITE = "DIORITE",
    POLISHED_DIORITE = "POLISHED_DIORITE",
    ANDESITE = "ANDESITE",
    POLISHED_ANDESITE = "POLISHED_ANDESITE",
    DEEPSLATE = "DEEPSLATE",
    COBBLED_DEEPSLATE = "COBBLED_DEEPSLATE",
    POLISHED_DEEPSLATE = "POLISHED_DEEPSLATE",
    CALCITE = "CALCITE",
    TUFF = "TUFF",
    TUFF_SLAB = "TUFF_SLAB",
    TUFF_STAIRS = "TUFF_STAIRS",
    TUFF_WALL = "TUFF_WALL",
    CHISELED_TUFF = "CHISELED_TUFF",
    POLISHED_TUFF = "POLISHED_TUFF",
    POLISHED_TUFF_SLAB = "POLISHED_TUFF_SLAB",
    POLISHED_TUFF_STAIRS = "POLISHED_TUFF_STAIRS",
    POLISHED_TUFF_WALL = "POLISHED_TUFF_WALL",
    TUFF_BRICKS = "TUFF_BRICKS",
    TUFF_BRICK_SLAB = "TUFF_BRICK_SLAB",
    TUFF_BRICK_STAIRS = "TUFF_BRICK_STAIRS",
    TUFF_BRICK_WALL = "TUFF_BRICK_WALL",
    CHISELED_TUFF_BRICKS = "CHISELED_TUFF_BRICKS",
    DRIPSTONE_BLOCK = "DRIPSTONE_BLOCK",
    GRASS_BLOCK = "GRASS_BLOCK",
    DIRT = "DIRT",
    COARSE_DIRT = "COARSE_DIRT",
    PODZOL = "PODZOL",
    ROOTED_DIRT = "ROOTED_DIRT",
    MUD = "MUD",
    CRIMSON_NYLIUM = "CRIMSON_NYLIUM",
    WARPED_NYLIUM = "WARPED_NYLIUM",
    COBBLESTONE = "COBBLESTONE",
    OAK_PLANKS = "OAK_PLANKS",
    SPRUCE_PLANKS = "SPRUCE_PLANKS",
    BIRCH_PLANKS = "BIRCH_PLANKS",
    JUNGLE_PLANKS = "JUNGLE_PLANKS",
    ACACIA_PLANKS = "ACACIA_PLANKS",
    CHERRY_PLANKS = "CHERRY_PLANKS",
    DARK_OAK_PLANKS = "DARK_OAK_PLANKS",
    MANGROVE_PLANKS = "MANGROVE_PLANKS",
    BAMBOO_PLANKS = "BAMBOO_PLANKS",
    CRIMSON_PLANKS = "CRIMSON_PLANKS",
    WARPED_PLANKS = "WARPED_PLANKS",
    BAMBOO_MOSAIC = "BAMBOO_MOSAIC",
    OAK_SAPLING = "OAK_SAPLING",
    SPRUCE_SAPLING = "SPRUCE_SAPLING",
    BIRCH_SAPLING = "BIRCH_SAPLING",
    JUNGLE_SAPLING = "JUNGLE_SAPLING",
    ACACIA_SAPLING = "ACACIA_SAPLING",
    CHERRY_SAPLING = "CHERRY_SAPLING",
    DARK_OAK_SAPLING = "DARK_OAK_SAPLING",
    MANGROVE_PROPAGULE = "MANGROVE_PROPAGULE",
    BEDROCK = "BEDROCK",
    SAND = "SAND",
    SUSPICIOUS_SAND = "SUSPICIOUS_SAND",
    SUSPICIOUS_GRAVEL = "SUSPICIOUS_GRAVEL",
    RED_SAND = "RED_SAND",
    GRAVEL = "GRAVEL",
    COAL_ORE = "COAL_ORE",
    DEEPSLATE_COAL_ORE = "DEEPSLATE_COAL_ORE",
    IRON_ORE = "IRON_ORE",
    DEEPSLATE_IRON_ORE = "DEEPSLATE_IRON_ORE",
    COPPER_ORE = "COPPER_ORE",
    DEEPSLATE_COPPER_ORE = "DEEPSLATE_COPPER_ORE",
    GOLD_ORE = "GOLD_ORE",
    DEEPSLATE_GOLD_ORE = "DEEPSLATE_GOLD_ORE",
    REDSTONE_ORE = "REDSTONE_ORE",
    DEEPSLATE_REDSTONE_ORE = "DEEPSLATE_REDSTONE_ORE",
    EMERALD_ORE = "EMERALD_ORE",
    DEEPSLATE_EMERALD_ORE = "DEEPSLATE_EMERALD_ORE",
    LAPIS_ORE = "LAPIS_ORE",
    DEEPSLATE_LAPIS_ORE = "DEEPSLATE_LAPIS_ORE",
    DIAMOND_ORE = "DIAMOND_ORE",
    DEEPSLATE_DIAMOND_ORE = "DEEPSLATE_DIAMOND_ORE",
    NETHER_GOLD_ORE = "NETHER_GOLD_ORE",
    NETHER_QUARTZ_ORE = "NETHER_QUARTZ_ORE",
    ANCIENT_DEBRIS = "ANCIENT_DEBRIS",
    COAL_BLOCK = "COAL_BLOCK",
    RAW_IRON_BLOCK = "RAW_IRON_BLOCK",
    RAW_COPPER_BLOCK = "RAW_COPPER_BLOCK",
    RAW_GOLD_BLOCK = "RAW_GOLD_BLOCK",
    HEAVY_CORE = "HEAVY_CORE",
    AMETHYST_BLOCK = "AMETHYST_BLOCK",
    BUDDING_AMETHYST = "BUDDING_AMETHYST",
    IRON_BLOCK = "IRON_BLOCK",
    COPPER_BLOCK = "COPPER_BLOCK",
    GOLD_BLOCK = "GOLD_BLOCK",
    DIAMOND_BLOCK = "DIAMOND_BLOCK",
    NETHERITE_BLOCK = "NETHERITE_BLOCK",
    EXPOSED_COPPER = "EXPOSED_COPPER",
    WEATHERED_COPPER = "WEATHERED_COPPER",
    OXIDIZED_COPPER = "OXIDIZED_COPPER",
    CHISELED_COPPER = "CHISELED_COPPER",
    EXPOSED_CHISELED_COPPER = "EXPOSED_CHISELED_COPPER",
    WEATHERED_CHISELED_COPPER = "WEATHERED_CHISELED_COPPER",
    OXIDIZED_CHISELED_COPPER = "OXIDIZED_CHISELED_COPPER",
    CUT_COPPER = "CUT_COPPER",
    EXPOSED_CUT_COPPER = "EXPOSED_CUT_COPPER",
    WEATHERED_CUT_COPPER = "WEATHERED_CUT_COPPER",
    OXIDIZED_CUT_COPPER = "OXIDIZED_CUT_COPPER",
    CUT_COPPER_STAIRS = "CUT_COPPER_STAIRS",
    EXPOSED_CUT_COPPER_STAIRS = "EXPOSED_CUT_COPPER_STAIRS",
    WEATHERED_CUT_COPPER_STAIRS = "WEATHERED_CUT_COPPER_STAIRS",
    OXIDIZED_CUT_COPPER_STAIRS = "OXIDIZED_CUT_COPPER_STAIRS",
    CUT_COPPER_SLAB = "CUT_COPPER_SLAB",
    EXPOSED_CUT_COPPER_SLAB = "EXPOSED_CUT_COPPER_SLAB",
    WEATHERED_CUT_COPPER_SLAB = "WEATHERED_CUT_COPPER_SLAB",
    OXIDIZED_CUT_COPPER_SLAB = "OXIDIZED_CUT_COPPER_SLAB",
    WAXED_COPPER_BLOCK = "WAXED_COPPER_BLOCK",
    WAXED_EXPOSED_COPPER = "WAXED_EXPOSED_COPPER",
    WAXED_WEATHERED_COPPER = "WAXED_WEATHERED_COPPER",
    WAXED_OXIDIZED_COPPER = "WAXED_OXIDIZED_COPPER",
    WAXED_CHISELED_COPPER = "WAXED_CHISELED_COPPER",
    WAXED_EXPOSED_CHISELED_COPPER = "WAXED_EXPOSED_CHISELED_COPPER",
    WAXED_WEATHERED_CHISELED_COPPER = "WAXED_WEATHERED_CHISELED_COPPER",
    WAXED_OXIDIZED_CHISELED_COPPER = "WAXED_OXIDIZED_CHISELED_COPPER",
    WAXED_CUT_COPPER = "WAXED_CUT_COPPER",
    WAXED_EXPOSED_CUT_COPPER = "WAXED_EXPOSED_CUT_COPPER",
    WAXED_WEATHERED_CUT_COPPER = "WAXED_WEATHERED_CUT_COPPER",
    WAXED_OXIDIZED_CUT_COPPER = "WAXED_OXIDIZED_CUT_COPPER",
    WAXED_CUT_COPPER_STAIRS = "WAXED_CUT_COPPER_STAIRS",
    WAXED_EXPOSED_CUT_COPPER_STAIRS = "WAXED_EXPOSED_CUT_COPPER_STAIRS",
    WAXED_WEATHERED_CUT_COPPER_STAIRS = "WAXED_WEATHERED_CUT_COPPER_STAIRS",
    WAXED_OXIDIZED_CUT_COPPER_STAIRS = "WAXED_OXIDIZED_CUT_COPPER_STAIRS",
    WAXED_CUT_COPPER_SLAB = "WAXED_CUT_COPPER_SLAB",
    WAXED_EXPOSED_CUT_COPPER_SLAB = "WAXED_EXPOSED_CUT_COPPER_SLAB",
    WAXED_WEATHERED_CUT_COPPER_SLAB = "WAXED_WEATHERED_CUT_COPPER_SLAB",
    WAXED_OXIDIZED_CUT_COPPER_SLAB = "WAXED_OXIDIZED_CUT_COPPER_SLAB",
    OAK_LOG = "OAK_LOG",
    SPRUCE_LOG = "SPRUCE_LOG",
    BIRCH_LOG = "BIRCH_LOG",
    JUNGLE_LOG = "JUNGLE_LOG",
    ACACIA_LOG = "ACACIA_LOG",
    CHERRY_LOG = "CHERRY_LOG",
    DARK_OAK_LOG = "DARK_OAK_LOG",
    MANGROVE_LOG = "MANGROVE_LOG",
    MANGROVE_ROOTS = "MANGROVE_ROOTS",
    MUDDY_MANGROVE_ROOTS = "MUDDY_MANGROVE_ROOTS",
    CRIMSON_STEM = "CRIMSON_STEM",
    WARPED_STEM = "WARPED_STEM",
    BAMBOO_BLOCK = "BAMBOO_BLOCK",
    STRIPPED_OAK_LOG = "STRIPPED_OAK_LOG",
    STRIPPED_SPRUCE_LOG = "STRIPPED_SPRUCE_LOG",
    STRIPPED_BIRCH_LOG = "STRIPPED_BIRCH_LOG",
    STRIPPED_JUNGLE_LOG = "STRIPPED_JUNGLE_LOG",
    STRIPPED_ACACIA_LOG = "STRIPPED_ACACIA_LOG",
    STRIPPED_CHERRY_LOG = "STRIPPED_CHERRY_LOG",
    STRIPPED_DARK_OAK_LOG = "STRIPPED_DARK_OAK_LOG",
    STRIPPED_MANGROVE_LOG = "STRIPPED_MANGROVE_LOG",
    STRIPPED_CRIMSON_STEM = "STRIPPED_CRIMSON_STEM",
    STRIPPED_WARPED_STEM = "STRIPPED_WARPED_STEM",
    STRIPPED_OAK_WOOD = "STRIPPED_OAK_WOOD",
    STRIPPED_SPRUCE_WOOD = "STRIPPED_SPRUCE_WOOD",
    STRIPPED_BIRCH_WOOD = "STRIPPED_BIRCH_WOOD",
    STRIPPED_JUNGLE_WOOD = "STRIPPED_JUNGLE_WOOD",
    STRIPPED_ACACIA_WOOD = "STRIPPED_ACACIA_WOOD",
    STRIPPED_CHERRY_WOOD = "STRIPPED_CHERRY_WOOD",
    STRIPPED_DARK_OAK_WOOD = "STRIPPED_DARK_OAK_WOOD",
    STRIPPED_MANGROVE_WOOD = "STRIPPED_MANGROVE_WOOD",
    STRIPPED_CRIMSON_HYPHAE = "STRIPPED_CRIMSON_HYPHAE",
    STRIPPED_WARPED_HYPHAE = "STRIPPED_WARPED_HYPHAE",
    STRIPPED_BAMBOO_BLOCK = "STRIPPED_BAMBOO_BLOCK",
    OAK_WOOD = "OAK_WOOD",
    SPRUCE_WOOD = "SPRUCE_WOOD",
    BIRCH_WOOD = "BIRCH_WOOD",
    JUNGLE_WOOD = "JUNGLE_WOOD",
    ACACIA_WOOD = "ACACIA_WOOD",
    CHERRY_WOOD = "CHERRY_WOOD",
    DARK_OAK_WOOD = "DARK_OAK_WOOD",
    MANGROVE_WOOD = "MANGROVE_WOOD",
    CRIMSON_HYPHAE = "CRIMSON_HYPHAE",
    WARPED_HYPHAE = "WARPED_HYPHAE",
    OAK_LEAVES = "OAK_LEAVES",
    SPRUCE_LEAVES = "SPRUCE_LEAVES",
    BIRCH_LEAVES = "BIRCH_LEAVES",
    JUNGLE_LEAVES = "JUNGLE_LEAVES",
    ACACIA_LEAVES = "ACACIA_LEAVES",
    CHERRY_LEAVES = "CHERRY_LEAVES",
    DARK_OAK_LEAVES = "DARK_OAK_LEAVES",
    MANGROVE_LEAVES = "MANGROVE_LEAVES",
    AZALEA_LEAVES = "AZALEA_LEAVES",
    FLOWERING_AZALEA_LEAVES = "FLOWERING_AZALEA_LEAVES",
    SPONGE = "SPONGE",
    WET_SPONGE = "WET_SPONGE",
    GLASS = "GLASS",
    TINTED_GLASS = "TINTED_GLASS",
    LAPIS_BLOCK = "LAPIS_BLOCK",
    SANDSTONE = "SANDSTONE",
    CHISELED_SANDSTONE = "CHISELED_SANDSTONE",
    CUT_SANDSTONE = "CUT_SANDSTONE",
    COBWEB = "COBWEB",
    SHORT_GRASS = "SHORT_GRASS",
    FERN = "FERN",
    AZALEA = "AZALEA",
    FLOWERING_AZALEA = "FLOWERING_AZALEA",
    DEAD_BUSH = "DEAD_BUSH",
    SEAGRASS = "SEAGRASS",
    SEA_PICKLE = "SEA_PICKLE",
    WHITE_WOOL = "WHITE_WOOL",
    ORANGE_WOOL = "ORANGE_WOOL",
    MAGENTA_WOOL = "MAGENTA_WOOL",
    LIGHT_BLUE_WOOL = "LIGHT_BLUE_WOOL",
    YELLOW_WOOL = "YELLOW_WOOL",
    LIME_WOOL = "LIME_WOOL",
    PINK_WOOL = "PINK_WOOL",
    GRAY_WOOL = "GRAY_WOOL",
    LIGHT_GRAY_WOOL = "LIGHT_GRAY_WOOL",
    CYAN_WOOL = "CYAN_WOOL",
    PURPLE_WOOL = "PURPLE_WOOL",
    BLUE_WOOL = "BLUE_WOOL",
    BROWN_WOOL = "BROWN_WOOL",
    GREEN_WOOL = "GREEN_WOOL",
    RED_WOOL = "RED_WOOL",
    BLACK_WOOL = "BLACK_WOOL",
    DANDELION = "DANDELION",
    POPPY = "POPPY",
    BLUE_ORCHID = "BLUE_ORCHID",
    ALLIUM = "ALLIUM",
    AZURE_BLUET = "AZURE_BLUET",
    RED_TULIP = "RED_TULIP",
    ORANGE_TULIP = "ORANGE_TULIP",
    WHITE_TULIP = "WHITE_TULIP",
    PINK_TULIP = "PINK_TULIP",
    OXEYE_DAISY = "OXEYE_DAISY",
    CORNFLOWER = "CORNFLOWER",
    LILY_OF_THE_VALLEY = "LILY_OF_THE_VALLEY",
    WITHER_ROSE = "WITHER_ROSE",
    TORCHFLOWER = "TORCHFLOWER",
    PITCHER_PLANT = "PITCHER_PLANT",
    SPORE_BLOSSOM = "SPORE_BLOSSOM",
    BROWN_MUSHROOM = "BROWN_MUSHROOM",
    RED_MUSHROOM = "RED_MUSHROOM",
    CRIMSON_FUNGUS = "CRIMSON_FUNGUS",
    WARPED_FUNGUS = "WARPED_FUNGUS",
    CRIMSON_ROOTS = "CRIMSON_ROOTS",
    WARPED_ROOTS = "WARPED_ROOTS",
    NETHER_SPROUTS = "NETHER_SPROUTS",
    WEEPING_VINES = "WEEPING_VINES",
    TWISTING_VINES = "TWISTING_VINES",
    SUGAR_CANE = "SUGAR_CANE",
    KELP = "KELP",
    MOSS_CARPET = "MOSS_CARPET",
    PINK_PETALS = "PINK_PETALS",
    MOSS_BLOCK = "MOSS_BLOCK",
    HANGING_ROOTS = "HANGING_ROOTS",
    BIG_DRIPLEAF = "BIG_DRIPLEAF",
    SMALL_DRIPLEAF = "SMALL_DRIPLEAF",
    BAMBOO = "BAMBOO",
    OAK_SLAB = "OAK_SLAB",
    SPRUCE_SLAB = "SPRUCE_SLAB",
    BIRCH_SLAB = "BIRCH_SLAB",
    JUNGLE_SLAB = "JUNGLE_SLAB",
    ACACIA_SLAB = "ACACIA_SLAB",
    CHERRY_SLAB = "CHERRY_SLAB",
    DARK_OAK_SLAB = "DARK_OAK_SLAB",
    MANGROVE_SLAB = "MANGROVE_SLAB",
    BAMBOO_SLAB = "BAMBOO_SLAB",
    BAMBOO_MOSAIC_SLAB = "BAMBOO_MOSAIC_SLAB",
    CRIMSON_SLAB = "CRIMSON_SLAB",
    WARPED_SLAB = "WARPED_SLAB",
    STONE_SLAB = "STONE_SLAB",
    SMOOTH_STONE_SLAB = "SMOOTH_STONE_SLAB",
    SANDSTONE_SLAB = "SANDSTONE_SLAB",
    CUT_SANDSTONE_SLAB = "CUT_SANDSTONE_SLAB",
    PETRIFIED_OAK_SLAB = "PETRIFIED_OAK_SLAB",
    COBBLESTONE_SLAB = "COBBLESTONE_SLAB",
    BRICK_SLAB = "BRICK_SLAB",
    STONE_BRICK_SLAB = "STONE_BRICK_SLAB",
    MUD_BRICK_SLAB = "MUD_BRICK_SLAB",
    NETHER_BRICK_SLAB = "NETHER_BRICK_SLAB",
    QUARTZ_SLAB = "QUARTZ_SLAB",
    RED_SANDSTONE_SLAB = "RED_SANDSTONE_SLAB",
    CUT_RED_SANDSTONE_SLAB = "CUT_RED_SANDSTONE_SLAB",
    PURPUR_SLAB = "PURPUR_SLAB",
    PRISMARINE_SLAB = "PRISMARINE_SLAB",
    PRISMARINE_BRICK_SLAB = "PRISMARINE_BRICK_SLAB",
    DARK_PRISMARINE_SLAB = "DARK_PRISMARINE_SLAB",
    SMOOTH_QUARTZ = "SMOOTH_QUARTZ",
    SMOOTH_RED_SANDSTONE = "SMOOTH_RED_SANDSTONE",
    SMOOTH_SANDSTONE = "SMOOTH_SANDSTONE",
    SMOOTH_STONE = "SMOOTH_STONE",
    BRICKS = "BRICKS",
    BOOKSHELF = "BOOKSHELF",
    CHISELED_BOOKSHELF = "CHISELED_BOOKSHELF",
    DECORATED_POT = "DECORATED_POT",
    MOSSY_COBBLESTONE = "MOSSY_COBBLESTONE",
    OBSIDIAN = "OBSIDIAN",
    TORCH = "TORCH",
    END_ROD = "END_ROD",
    CHORUS_PLANT = "CHORUS_PLANT",
    CHORUS_FLOWER = "CHORUS_FLOWER",
    PURPUR_BLOCK = "PURPUR_BLOCK",
    PURPUR_PILLAR = "PURPUR_PILLAR",
    PURPUR_STAIRS = "PURPUR_STAIRS",
    SPAWNER = "SPAWNER",
    CHEST = "CHEST",
    CRAFTING_TABLE = "CRAFTING_TABLE",
    FARMLAND = "FARMLAND",
    FURNACE = "FURNACE",
    LADDER = "LADDER",
    COBBLESTONE_STAIRS = "COBBLESTONE_STAIRS",
    SNOW = "SNOW",
    ICE = "ICE",
    SNOW_BLOCK = "SNOW_BLOCK",
    CACTUS = "CACTUS",
    CLAY = "CLAY",
    JUKEBOX = "JUKEBOX",
    OAK_FENCE = "OAK_FENCE",
    SPRUCE_FENCE = "SPRUCE_FENCE",
    BIRCH_FENCE = "BIRCH_FENCE",
    JUNGLE_FENCE = "JUNGLE_FENCE",
    ACACIA_FENCE = "ACACIA_FENCE",
    CHERRY_FENCE = "CHERRY_FENCE",
    DARK_OAK_FENCE = "DARK_OAK_FENCE",
    MANGROVE_FENCE = "MANGROVE_FENCE",
    BAMBOO_FENCE = "BAMBOO_FENCE",
    CRIMSON_FENCE = "CRIMSON_FENCE",
    WARPED_FENCE = "WARPED_FENCE",
    PUMPKIN = "PUMPKIN",
    CARVED_PUMPKIN = "CARVED_PUMPKIN",
    JACK_O_LANTERN = "JACK_O_LANTERN",
    NETHERRACK = "NETHERRACK",
    SOUL_SAND = "SOUL_SAND",
    SOUL_SOIL = "SOUL_SOIL",
    BASALT = "BASALT",
    POLISHED_BASALT = "POLISHED_BASALT",
    SMOOTH_BASALT = "SMOOTH_BASALT",
    SOUL_TORCH = "SOUL_TORCH",
    GLOWSTONE = "GLOWSTONE",
    INFESTED_STONE = "INFESTED_STONE",
    INFESTED_COBBLESTONE = "INFESTED_COBBLESTONE",
    INFESTED_STONE_BRICKS = "INFESTED_STONE_BRICKS",
    INFESTED_MOSSY_STONE_BRICKS = "INFESTED_MOSSY_STONE_BRICKS",
    INFESTED_CRACKED_STONE_BRICKS = "INFESTED_CRACKED_STONE_BRICKS",
    INFESTED_CHISELED_STONE_BRICKS = "INFESTED_CHISELED_STONE_BRICKS",
    INFESTED_DEEPSLATE = "INFESTED_DEEPSLATE",
    STONE_BRICKS = "STONE_BRICKS",
    MOSSY_STONE_BRICKS = "MOSSY_STONE_BRICKS",
    CRACKED_STONE_BRICKS = "CRACKED_STONE_BRICKS",
    CHISELED_STONE_BRICKS = "CHISELED_STONE_BRICKS",
    PACKED_MUD = "PACKED_MUD",
    MUD_BRICKS = "MUD_BRICKS",
    DEEPSLATE_BRICKS = "DEEPSLATE_BRICKS",
    CRACKED_DEEPSLATE_BRICKS = "CRACKED_DEEPSLATE_BRICKS",
    DEEPSLATE_TILES = "DEEPSLATE_TILES",
    CRACKED_DEEPSLATE_TILES = "CRACKED_DEEPSLATE_TILES",
    CHISELED_DEEPSLATE = "CHISELED_DEEPSLATE",
    REINFORCED_DEEPSLATE = "REINFORCED_DEEPSLATE",
    BROWN_MUSHROOM_BLOCK = "BROWN_MUSHROOM_BLOCK",
    RED_MUSHROOM_BLOCK = "RED_MUSHROOM_BLOCK",
    MUSHROOM_STEM = "MUSHROOM_STEM",
    IRON_BARS = "IRON_BARS",
    CHAIN = "CHAIN",
    GLASS_PANE = "GLASS_PANE",
    MELON = "MELON",
    VINE = "VINE",
    GLOW_LICHEN = "GLOW_LICHEN",
    BRICK_STAIRS = "BRICK_STAIRS",
    STONE_BRICK_STAIRS = "STONE_BRICK_STAIRS",
    MUD_BRICK_STAIRS = "MUD_BRICK_STAIRS",
    MYCELIUM = "MYCELIUM",
    LILY_PAD = "LILY_PAD",
    NETHER_BRICKS = "NETHER_BRICKS",
    CRACKED_NETHER_BRICKS = "CRACKED_NETHER_BRICKS",
    CHISELED_NETHER_BRICKS = "CHISELED_NETHER_BRICKS",
    NETHER_BRICK_FENCE = "NETHER_BRICK_FENCE",
    NETHER_BRICK_STAIRS = "NETHER_BRICK_STAIRS",
    SCULK = "SCULK",
    SCULK_VEIN = "SCULK_VEIN",
    SCULK_CATALYST = "SCULK_CATALYST",
    SCULK_SHRIEKER = "SCULK_SHRIEKER",
    ENCHANTING_TABLE = "ENCHANTING_TABLE",
    END_PORTAL_FRAME = "END_PORTAL_FRAME",
    END_STONE = "END_STONE",
    END_STONE_BRICKS = "END_STONE_BRICKS",
    DRAGON_EGG = "DRAGON_EGG",
    SANDSTONE_STAIRS = "SANDSTONE_STAIRS",
    ENDER_CHEST = "ENDER_CHEST",
    EMERALD_BLOCK = "EMERALD_BLOCK",
    OAK_STAIRS = "OAK_STAIRS",
    SPRUCE_STAIRS = "SPRUCE_STAIRS",
    BIRCH_STAIRS = "BIRCH_STAIRS",
    JUNGLE_STAIRS = "JUNGLE_STAIRS",
    ACACIA_STAIRS = "ACACIA_STAIRS",
    CHERRY_STAIRS = "CHERRY_STAIRS",
    DARK_OAK_STAIRS = "DARK_OAK_STAIRS",
    MANGROVE_STAIRS = "MANGROVE_STAIRS",
    BAMBOO_STAIRS = "BAMBOO_STAIRS",
    BAMBOO_MOSAIC_STAIRS = "BAMBOO_MOSAIC_STAIRS",
    CRIMSON_STAIRS = "CRIMSON_STAIRS",
    WARPED_STAIRS = "WARPED_STAIRS",
    COMMAND_BLOCK = "COMMAND_BLOCK",
    BEACON = "BEACON",
    COBBLESTONE_WALL = "COBBLESTONE_WALL",
    MOSSY_COBBLESTONE_WALL = "MOSSY_COBBLESTONE_WALL",
    BRICK_WALL = "BRICK_WALL",
    PRISMARINE_WALL = "PRISMARINE_WALL",
    RED_SANDSTONE_WALL = "RED_SANDSTONE_WALL",
    MOSSY_STONE_BRICK_WALL = "MOSSY_STONE_BRICK_WALL",
    GRANITE_WALL = "GRANITE_WALL",
    STONE_BRICK_WALL = "STONE_BRICK_WALL",
    MUD_BRICK_WALL = "MUD_BRICK_WALL",
    NETHER_BRICK_WALL = "NETHER_BRICK_WALL",
    ANDESITE_WALL = "ANDESITE_WALL",
    RED_NETHER_BRICK_WALL = "RED_NETHER_BRICK_WALL",
    SANDSTONE_WALL = "SANDSTONE_WALL",
    END_STONE_BRICK_WALL = "END_STONE_BRICK_WALL",
    DIORITE_WALL = "DIORITE_WALL",
    BLACKSTONE_WALL = "BLACKSTONE_WALL",
    POLISHED_BLACKSTONE_WALL = "POLISHED_BLACKSTONE_WALL",
    POLISHED_BLACKSTONE_BRICK_WALL = "POLISHED_BLACKSTONE_BRICK_WALL",
    COBBLED_DEEPSLATE_WALL = "COBBLED_DEEPSLATE_WALL",
    POLISHED_DEEPSLATE_WALL = "POLISHED_DEEPSLATE_WALL",
    DEEPSLATE_BRICK_WALL = "DEEPSLATE_BRICK_WALL",
    DEEPSLATE_TILE_WALL = "DEEPSLATE_TILE_WALL",
    ANVIL = "ANVIL",
    CHIPPED_ANVIL = "CHIPPED_ANVIL",
    DAMAGED_ANVIL = "DAMAGED_ANVIL",
    CHISELED_QUARTZ_BLOCK = "CHISELED_QUARTZ_BLOCK",
    QUARTZ_BLOCK = "QUARTZ_BLOCK",
    QUARTZ_BRICKS = "QUARTZ_BRICKS",
    QUARTZ_PILLAR = "QUARTZ_PILLAR",
    QUARTZ_STAIRS = "QUARTZ_STAIRS",
    WHITE_TERRACOTTA = "WHITE_TERRACOTTA",
    ORANGE_TERRACOTTA = "ORANGE_TERRACOTTA",
    MAGENTA_TERRACOTTA = "MAGENTA_TERRACOTTA",
    LIGHT_BLUE_TERRACOTTA = "LIGHT_BLUE_TERRACOTTA",
    YELLOW_TERRACOTTA = "YELLOW_TERRACOTTA",
    LIME_TERRACOTTA = "LIME_TERRACOTTA",
    PINK_TERRACOTTA = "PINK_TERRACOTTA",
    GRAY_TERRACOTTA = "GRAY_TERRACOTTA",
    LIGHT_GRAY_TERRACOTTA = "LIGHT_GRAY_TERRACOTTA",
    CYAN_TERRACOTTA = "CYAN_TERRACOTTA",
    PURPLE_TERRACOTTA = "PURPLE_TERRACOTTA",
    BLUE_TERRACOTTA = "BLUE_TERRACOTTA",
    BROWN_TERRACOTTA = "BROWN_TERRACOTTA",
    GREEN_TERRACOTTA = "GREEN_TERRACOTTA",
    RED_TERRACOTTA = "RED_TERRACOTTA",
    BLACK_TERRACOTTA = "BLACK_TERRACOTTA",
    BARRIER = "BARRIER",
    LIGHT = "LIGHT",
    HAY_BLOCK = "HAY_BLOCK",
    WHITE_CARPET = "WHITE_CARPET",
    ORANGE_CARPET = "ORANGE_CARPET",
    MAGENTA_CARPET = "MAGENTA_CARPET",
    LIGHT_BLUE_CARPET = "LIGHT_BLUE_CARPET",
    YELLOW_CARPET = "YELLOW_CARPET",
    LIME_CARPET = "LIME_CARPET",
    PINK_CARPET = "PINK_CARPET",
    GRAY_CARPET = "GRAY_CARPET",
    LIGHT_GRAY_CARPET = "LIGHT_GRAY_CARPET",
    CYAN_CARPET = "CYAN_CARPET",
    PURPLE_CARPET = "PURPLE_CARPET",
    BLUE_CARPET = "BLUE_CARPET",
    BROWN_CARPET = "BROWN_CARPET",
    GREEN_CARPET = "GREEN_CARPET",
    RED_CARPET = "RED_CARPET",
    BLACK_CARPET = "BLACK_CARPET",
    TERRACOTTA = "TERRACOTTA",
    PACKED_ICE = "PACKED_ICE",
    DIRT_PATH = "DIRT_PATH",
    SUNFLOWER = "SUNFLOWER",
    LILAC = "LILAC",
    ROSE_BUSH = "ROSE_BUSH",
    PEONY = "PEONY",
    TALL_GRASS = "TALL_GRASS",
    LARGE_FERN = "LARGE_FERN",
    WHITE_STAINED_GLASS = "WHITE_STAINED_GLASS",
    ORANGE_STAINED_GLASS = "ORANGE_STAINED_GLASS",
    MAGENTA_STAINED_GLASS = "MAGENTA_STAINED_GLASS",
    LIGHT_BLUE_STAINED_GLASS = "LIGHT_BLUE_STAINED_GLASS",
    YELLOW_STAINED_GLASS = "YELLOW_STAINED_GLASS",
    LIME_STAINED_GLASS = "LIME_STAINED_GLASS",
    PINK_STAINED_GLASS = "PINK_STAINED_GLASS",
    GRAY_STAINED_GLASS = "GRAY_STAINED_GLASS",
    LIGHT_GRAY_STAINED_GLASS = "LIGHT_GRAY_STAINED_GLASS",
    CYAN_STAINED_GLASS = "CYAN_STAINED_GLASS",
    PURPLE_STAINED_GLASS = "PURPLE_STAINED_GLASS",
    BLUE_STAINED_GLASS = "BLUE_STAINED_GLASS",
    BROWN_STAINED_GLASS = "BROWN_STAINED_GLASS",
    GREEN_STAINED_GLASS = "GREEN_STAINED_GLASS",
    RED_STAINED_GLASS = "RED_STAINED_GLASS",
    BLACK_STAINED_GLASS = "BLACK_STAINED_GLASS",
    WHITE_STAINED_GLASS_PANE = "WHITE_STAINED_GLASS_PANE",
    ORANGE_STAINED_GLASS_PANE = "ORANGE_STAINED_GLASS_PANE",
    MAGENTA_STAINED_GLASS_PANE = "MAGENTA_STAINED_GLASS_PANE",
    LIGHT_BLUE_STAINED_GLASS_PANE = "LIGHT_BLUE_STAINED_GLASS_PANE",
    YELLOW_STAINED_GLASS_PANE = "YELLOW_STAINED_GLASS_PANE",
    LIME_STAINED_GLASS_PANE = "LIME_STAINED_GLASS_PANE",
    PINK_STAINED_GLASS_PANE = "PINK_STAINED_GLASS_PANE",
    GRAY_STAINED_GLASS_PANE = "GRAY_STAINED_GLASS_PANE",
    LIGHT_GRAY_STAINED_GLASS_PANE = "LIGHT_GRAY_STAINED_GLASS_PANE",
    CYAN_STAINED_GLASS_PANE = "CYAN_STAINED_GLASS_PANE",
    PURPLE_STAINED_GLASS_PANE = "PURPLE_STAINED_GLASS_PANE",
    BLUE_STAINED_GLASS_PANE = "BLUE_STAINED_GLASS_PANE",
    BROWN_STAINED_GLASS_PANE = "BROWN_STAINED_GLASS_PANE",
    GREEN_STAINED_GLASS_PANE = "GREEN_STAINED_GLASS_PANE",
    RED_STAINED_GLASS_PANE = "RED_STAINED_GLASS_PANE",
    BLACK_STAINED_GLASS_PANE = "BLACK_STAINED_GLASS_PANE",
    PRISMARINE = "PRISMARINE",
    PRISMARINE_BRICKS = "PRISMARINE_BRICKS",
    DARK_PRISMARINE = "DARK_PRISMARINE",
    PRISMARINE_STAIRS = "PRISMARINE_STAIRS",
    PRISMARINE_BRICK_STAIRS = "PRISMARINE_BRICK_STAIRS",
    DARK_PRISMARINE_STAIRS = "DARK_PRISMARINE_STAIRS",
    SEA_LANTERN = "SEA_LANTERN",
    RED_SANDSTONE = "RED_SANDSTONE",
    CHISELED_RED_SANDSTONE = "CHISELED_RED_SANDSTONE",
    CUT_RED_SANDSTONE = "CUT_RED_SANDSTONE",
    RED_SANDSTONE_STAIRS = "RED_SANDSTONE_STAIRS",
    REPEATING_COMMAND_BLOCK = "REPEATING_COMMAND_BLOCK",
    CHAIN_COMMAND_BLOCK = "CHAIN_COMMAND_BLOCK",
    MAGMA_BLOCK = "MAGMA_BLOCK",
    NETHER_WART_BLOCK = "NETHER_WART_BLOCK",
    WARPED_WART_BLOCK = "WARPED_WART_BLOCK",
    RED_NETHER_BRICKS = "RED_NETHER_BRICKS",
    BONE_BLOCK = "BONE_BLOCK",
    STRUCTURE_VOID = "STRUCTURE_VOID",
    SHULKER_BOX = "SHULKER_BOX",
    WHITE_SHULKER_BOX = "WHITE_SHULKER_BOX",
    ORANGE_SHULKER_BOX = "ORANGE_SHULKER_BOX",
    MAGENTA_SHULKER_BOX = "MAGENTA_SHULKER_BOX",
    LIGHT_BLUE_SHULKER_BOX = "LIGHT_BLUE_SHULKER_BOX",
    YELLOW_SHULKER_BOX = "YELLOW_SHULKER_BOX",
    LIME_SHULKER_BOX = "LIME_SHULKER_BOX",
    PINK_SHULKER_BOX = "PINK_SHULKER_BOX",
    GRAY_SHULKER_BOX = "GRAY_SHULKER_BOX",
    LIGHT_GRAY_SHULKER_BOX = "LIGHT_GRAY_SHULKER_BOX",
    CYAN_SHULKER_BOX = "CYAN_SHULKER_BOX",
    PURPLE_SHULKER_BOX = "PURPLE_SHULKER_BOX",
    BLUE_SHULKER_BOX = "BLUE_SHULKER_BOX",
    BROWN_SHULKER_BOX = "BROWN_SHULKER_BOX",
    GREEN_SHULKER_BOX = "GREEN_SHULKER_BOX",
    RED_SHULKER_BOX = "RED_SHULKER_BOX",
    BLACK_SHULKER_BOX = "BLACK_SHULKER_BOX",
    WHITE_GLAZED_TERRACOTTA = "WHITE_GLAZED_TERRACOTTA",
    ORANGE_GLAZED_TERRACOTTA = "ORANGE_GLAZED_TERRACOTTA",
    MAGENTA_GLAZED_TERRACOTTA = "MAGENTA_GLAZED_TERRACOTTA",
    LIGHT_BLUE_GLAZED_TERRACOTTA = "LIGHT_BLUE_GLAZED_TERRACOTTA",
    YELLOW_GLAZED_TERRACOTTA = "YELLOW_GLAZED_TERRACOTTA",
    LIME_GLAZED_TERRACOTTA = "LIME_GLAZED_TERRACOTTA",
    PINK_GLAZED_TERRACOTTA = "PINK_GLAZED_TERRACOTTA",
    GRAY_GLAZED_TERRACOTTA = "GRAY_GLAZED_TERRACOTTA",
    LIGHT_GRAY_GLAZED_TERRACOTTA = "LIGHT_GRAY_GLAZED_TERRACOTTA",
    CYAN_GLAZED_TERRACOTTA = "CYAN_GLAZED_TERRACOTTA",
    PURPLE_GLAZED_TERRACOTTA = "PURPLE_GLAZED_TERRACOTTA",
    BLUE_GLAZED_TERRACOTTA = "BLUE_GLAZED_TERRACOTTA",
    BROWN_GLAZED_TERRACOTTA = "BROWN_GLAZED_TERRACOTTA",
    GREEN_GLAZED_TERRACOTTA = "GREEN_GLAZED_TERRACOTTA",
    RED_GLAZED_TERRACOTTA = "RED_GLAZED_TERRACOTTA",
    BLACK_GLAZED_TERRACOTTA = "BLACK_GLAZED_TERRACOTTA",
    WHITE_CONCRETE = "WHITE_CONCRETE",
    ORANGE_CONCRETE = "ORANGE_CONCRETE",
    MAGENTA_CONCRETE = "MAGENTA_CONCRETE",
    LIGHT_BLUE_CONCRETE = "LIGHT_BLUE_CONCRETE",
    YELLOW_CONCRETE = "YELLOW_CONCRETE",
    LIME_CONCRETE = "LIME_CONCRETE",
    PINK_CONCRETE = "PINK_CONCRETE",
    GRAY_CONCRETE = "GRAY_CONCRETE",
    LIGHT_GRAY_CONCRETE = "LIGHT_GRAY_CONCRETE",
    CYAN_CONCRETE = "CYAN_CONCRETE",
    PURPLE_CONCRETE = "PURPLE_CONCRETE",
    BLUE_CONCRETE = "BLUE_CONCRETE",
    BROWN_CONCRETE = "BROWN_CONCRETE",
    GREEN_CONCRETE = "GREEN_CONCRETE",
    RED_CONCRETE = "RED_CONCRETE",
    BLACK_CONCRETE = "BLACK_CONCRETE",
    WHITE_CONCRETE_POWDER = "WHITE_CONCRETE_POWDER",
    ORANGE_CONCRETE_POWDER = "ORANGE_CONCRETE_POWDER",
    MAGENTA_CONCRETE_POWDER = "MAGENTA_CONCRETE_POWDER",
    LIGHT_BLUE_CONCRETE_POWDER = "LIGHT_BLUE_CONCRETE_POWDER",
    YELLOW_CONCRETE_POWDER = "YELLOW_CONCRETE_POWDER",
    LIME_CONCRETE_POWDER = "LIME_CONCRETE_POWDER",
    PINK_CONCRETE_POWDER = "PINK_CONCRETE_POWDER",
    GRAY_CONCRETE_POWDER = "GRAY_CONCRETE_POWDER",
    LIGHT_GRAY_CONCRETE_POWDER = "LIGHT_GRAY_CONCRETE_POWDER",
    CYAN_CONCRETE_POWDER = "CYAN_CONCRETE_POWDER",
    PURPLE_CONCRETE_POWDER = "PURPLE_CONCRETE_POWDER",
    BLUE_CONCRETE_POWDER = "BLUE_CONCRETE_POWDER",
    BROWN_CONCRETE_POWDER = "BROWN_CONCRETE_POWDER",
    GREEN_CONCRETE_POWDER = "GREEN_CONCRETE_POWDER",
    RED_CONCRETE_POWDER = "RED_CONCRETE_POWDER",
    BLACK_CONCRETE_POWDER = "BLACK_CONCRETE_POWDER",
    TURTLE_EGG = "TURTLE_EGG",
    SNIFFER_EGG = "SNIFFER_EGG",
    DEAD_TUBE_CORAL_BLOCK = "DEAD_TUBE_CORAL_BLOCK",
    DEAD_BRAIN_CORAL_BLOCK = "DEAD_BRAIN_CORAL_BLOCK",
    DEAD_BUBBLE_CORAL_BLOCK = "DEAD_BUBBLE_CORAL_BLOCK",
    DEAD_FIRE_CORAL_BLOCK = "DEAD_FIRE_CORAL_BLOCK",
    DEAD_HORN_CORAL_BLOCK = "DEAD_HORN_CORAL_BLOCK",
    TUBE_CORAL_BLOCK = "TUBE_CORAL_BLOCK",
    BRAIN_CORAL_BLOCK = "BRAIN_CORAL_BLOCK",
    BUBBLE_CORAL_BLOCK = "BUBBLE_CORAL_BLOCK",
    FIRE_CORAL_BLOCK = "FIRE_CORAL_BLOCK",
    HORN_CORAL_BLOCK = "HORN_CORAL_BLOCK",
    TUBE_CORAL = "TUBE_CORAL",
    BRAIN_CORAL = "BRAIN_CORAL",
    BUBBLE_CORAL = "BUBBLE_CORAL",
    FIRE_CORAL = "FIRE_CORAL",
    HORN_CORAL = "HORN_CORAL",
    DEAD_BRAIN_CORAL = "DEAD_BRAIN_CORAL",
    DEAD_BUBBLE_CORAL = "DEAD_BUBBLE_CORAL",
    DEAD_FIRE_CORAL = "DEAD_FIRE_CORAL",
    DEAD_HORN_CORAL = "DEAD_HORN_CORAL",
    DEAD_TUBE_CORAL = "DEAD_TUBE_CORAL",
    TUBE_CORAL_FAN = "TUBE_CORAL_FAN",
    BRAIN_CORAL_FAN = "BRAIN_CORAL_FAN",
    BUBBLE_CORAL_FAN = "BUBBLE_CORAL_FAN",
    FIRE_CORAL_FAN = "FIRE_CORAL_FAN",
    HORN_CORAL_FAN = "HORN_CORAL_FAN",
    DEAD_TUBE_CORAL_FAN = "DEAD_TUBE_CORAL_FAN",
    DEAD_BRAIN_CORAL_FAN = "DEAD_BRAIN_CORAL_FAN",
    DEAD_BUBBLE_CORAL_FAN = "DEAD_BUBBLE_CORAL_FAN",
    DEAD_FIRE_CORAL_FAN = "DEAD_FIRE_CORAL_FAN",
    DEAD_HORN_CORAL_FAN = "DEAD_HORN_CORAL_FAN",
    BLUE_ICE = "BLUE_ICE",
    CONDUIT = "CONDUIT",
    POLISHED_GRANITE_STAIRS = "POLISHED_GRANITE_STAIRS",
    SMOOTH_RED_SANDSTONE_STAIRS = "SMOOTH_RED_SANDSTONE_STAIRS",
    MOSSY_STONE_BRICK_STAIRS = "MOSSY_STONE_BRICK_STAIRS",
    POLISHED_DIORITE_STAIRS = "POLISHED_DIORITE_STAIRS",
    MOSSY_COBBLESTONE_STAIRS = "MOSSY_COBBLESTONE_STAIRS",
    END_STONE_BRICK_STAIRS = "END_STONE_BRICK_STAIRS",
    STONE_STAIRS = "STONE_STAIRS",
    SMOOTH_SANDSTONE_STAIRS = "SMOOTH_SANDSTONE_STAIRS",
    SMOOTH_QUARTZ_STAIRS = "SMOOTH_QUARTZ_STAIRS",
    GRANITE_STAIRS = "GRANITE_STAIRS",
    ANDESITE_STAIRS = "ANDESITE_STAIRS",
    RED_NETHER_BRICK_STAIRS = "RED_NETHER_BRICK_STAIRS",
    POLISHED_ANDESITE_STAIRS = "POLISHED_ANDESITE_STAIRS",
    DIORITE_STAIRS = "DIORITE_STAIRS",
    COBBLED_DEEPSLATE_STAIRS = "COBBLED_DEEPSLATE_STAIRS",
    POLISHED_DEEPSLATE_STAIRS = "POLISHED_DEEPSLATE_STAIRS",
    DEEPSLATE_BRICK_STAIRS = "DEEPSLATE_BRICK_STAIRS",
    DEEPSLATE_TILE_STAIRS = "DEEPSLATE_TILE_STAIRS",
    POLISHED_GRANITE_SLAB = "POLISHED_GRANITE_SLAB",
    SMOOTH_RED_SANDSTONE_SLAB = "SMOOTH_RED_SANDSTONE_SLAB",
    MOSSY_STONE_BRICK_SLAB = "MOSSY_STONE_BRICK_SLAB",
    POLISHED_DIORITE_SLAB = "POLISHED_DIORITE_SLAB",
    MOSSY_COBBLESTONE_SLAB = "MOSSY_COBBLESTONE_SLAB",
    END_STONE_BRICK_SLAB = "END_STONE_BRICK_SLAB",
    SMOOTH_SANDSTONE_SLAB = "SMOOTH_SANDSTONE_SLAB",
    SMOOTH_QUARTZ_SLAB = "SMOOTH_QUARTZ_SLAB",
    GRANITE_SLAB = "GRANITE_SLAB",
    ANDESITE_SLAB = "ANDESITE_SLAB",
    RED_NETHER_BRICK_SLAB = "RED_NETHER_BRICK_SLAB",
    POLISHED_ANDESITE_SLAB = "POLISHED_ANDESITE_SLAB",
    DIORITE_SLAB = "DIORITE_SLAB",
    COBBLED_DEEPSLATE_SLAB = "COBBLED_DEEPSLATE_SLAB",
    POLISHED_DEEPSLATE_SLAB = "POLISHED_DEEPSLATE_SLAB",
    DEEPSLATE_BRICK_SLAB = "DEEPSLATE_BRICK_SLAB",
    DEEPSLATE_TILE_SLAB = "DEEPSLATE_TILE_SLAB",
    SCAFFOLDING = "SCAFFOLDING",
    REDSTONE = "REDSTONE",
    REDSTONE_TORCH = "REDSTONE_TORCH",
    REDSTONE_BLOCK = "REDSTONE_BLOCK",
    REPEATER = "REPEATER",
    COMPARATOR = "COMPARATOR",
    PISTON = "PISTON",
    STICKY_PISTON = "STICKY_PISTON",
    SLIME_BLOCK = "SLIME_BLOCK",
    HONEY_BLOCK = "HONEY_BLOCK",
    OBSERVER = "OBSERVER",
    HOPPER = "HOPPER",
    DISPENSER = "DISPENSER",
    DROPPER = "DROPPER",
    LECTERN = "LECTERN",
    TARGET = "TARGET",
    LEVER = "LEVER",
    LIGHTNING_ROD = "LIGHTNING_ROD",
    DAYLIGHT_DETECTOR = "DAYLIGHT_DETECTOR",
    SCULK_SENSOR = "SCULK_SENSOR",
    CALIBRATED_SCULK_SENSOR = "CALIBRATED_SCULK_SENSOR",
    TRIPWIRE_HOOK = "TRIPWIRE_HOOK",
    TRAPPED_CHEST = "TRAPPED_CHEST",
    TNT = "TNT",
    REDSTONE_LAMP = "REDSTONE_LAMP",
    NOTE_BLOCK = "NOTE_BLOCK",
    STONE_BUTTON = "STONE_BUTTON",
    POLISHED_BLACKSTONE_BUTTON = "POLISHED_BLACKSTONE_BUTTON",
    OAK_BUTTON = "OAK_BUTTON",
    SPRUCE_BUTTON = "SPRUCE_BUTTON",
    BIRCH_BUTTON = "BIRCH_BUTTON",
    JUNGLE_BUTTON = "JUNGLE_BUTTON",
    ACACIA_BUTTON = "ACACIA_BUTTON",
    CHERRY_BUTTON = "CHERRY_BUTTON",
    DARK_OAK_BUTTON = "DARK_OAK_BUTTON",
    MANGROVE_BUTTON = "MANGROVE_BUTTON",
    BAMBOO_BUTTON = "BAMBOO_BUTTON",
    CRIMSON_BUTTON = "CRIMSON_BUTTON",
    WARPED_BUTTON = "WARPED_BUTTON",
    STONE_PRESSURE_PLATE = "STONE_PRESSURE_PLATE",
    POLISHED_BLACKSTONE_PRESSURE_PLATE = "POLISHED_BLACKSTONE_PRESSURE_PLATE",
    LIGHT_WEIGHTED_PRESSURE_PLATE = "LIGHT_WEIGHTED_PRESSURE_PLATE",
    HEAVY_WEIGHTED_PRESSURE_PLATE = "HEAVY_WEIGHTED_PRESSURE_PLATE",
    OAK_PRESSURE_PLATE = "OAK_PRESSURE_PLATE",
    SPRUCE_PRESSURE_PLATE = "SPRUCE_PRESSURE_PLATE",
    BIRCH_PRESSURE_PLATE = "BIRCH_PRESSURE_PLATE",
    JUNGLE_PRESSURE_PLATE = "JUNGLE_PRESSURE_PLATE",
    ACACIA_PRESSURE_PLATE = "ACACIA_PRESSURE_PLATE",
    CHERRY_PRESSURE_PLATE = "CHERRY_PRESSURE_PLATE",
    DARK_OAK_PRESSURE_PLATE = "DARK_OAK_PRESSURE_PLATE",
    MANGROVE_PRESSURE_PLATE = "MANGROVE_PRESSURE_PLATE",
    BAMBOO_PRESSURE_PLATE = "BAMBOO_PRESSURE_PLATE",
    CRIMSON_PRESSURE_PLATE = "CRIMSON_PRESSURE_PLATE",
    WARPED_PRESSURE_PLATE = "WARPED_PRESSURE_PLATE",
    IRON_DOOR = "IRON_DOOR",
    OAK_DOOR = "OAK_DOOR",
    SPRUCE_DOOR = "SPRUCE_DOOR",
    BIRCH_DOOR = "BIRCH_DOOR",
    JUNGLE_DOOR = "JUNGLE_DOOR",
    ACACIA_DOOR = "ACACIA_DOOR",
    CHERRY_DOOR = "CHERRY_DOOR",
    DARK_OAK_DOOR = "DARK_OAK_DOOR",
    MANGROVE_DOOR = "MANGROVE_DOOR",
    BAMBOO_DOOR = "BAMBOO_DOOR",
    CRIMSON_DOOR = "CRIMSON_DOOR",
    WARPED_DOOR = "WARPED_DOOR",
    COPPER_DOOR = "COPPER_DOOR",
    EXPOSED_COPPER_DOOR = "EXPOSED_COPPER_DOOR",
    WEATHERED_COPPER_DOOR = "WEATHERED_COPPER_DOOR",
    OXIDIZED_COPPER_DOOR = "OXIDIZED_COPPER_DOOR",
    WAXED_COPPER_DOOR = "WAXED_COPPER_DOOR",
    WAXED_EXPOSED_COPPER_DOOR = "WAXED_EXPOSED_COPPER_DOOR",
    WAXED_WEATHERED_COPPER_DOOR = "WAXED_WEATHERED_COPPER_DOOR",
    WAXED_OXIDIZED_COPPER_DOOR = "WAXED_OXIDIZED_COPPER_DOOR",
    IRON_TRAPDOOR = "IRON_TRAPDOOR",
    OAK_TRAPDOOR = "OAK_TRAPDOOR",
    SPRUCE_TRAPDOOR = "SPRUCE_TRAPDOOR",
    BIRCH_TRAPDOOR = "BIRCH_TRAPDOOR",
    JUNGLE_TRAPDOOR = "JUNGLE_TRAPDOOR",
    ACACIA_TRAPDOOR = "ACACIA_TRAPDOOR",
    CHERRY_TRAPDOOR = "CHERRY_TRAPDOOR",
    DARK_OAK_TRAPDOOR = "DARK_OAK_TRAPDOOR",
    MANGROVE_TRAPDOOR = "MANGROVE_TRAPDOOR",
    BAMBOO_TRAPDOOR = "BAMBOO_TRAPDOOR",
    CRIMSON_TRAPDOOR = "CRIMSON_TRAPDOOR",
    WARPED_TRAPDOOR = "WARPED_TRAPDOOR",
    COPPER_TRAPDOOR = "COPPER_TRAPDOOR",
    EXPOSED_COPPER_TRAPDOOR = "EXPOSED_COPPER_TRAPDOOR",
    WEATHERED_COPPER_TRAPDOOR = "WEATHERED_COPPER_TRAPDOOR",
    OXIDIZED_COPPER_TRAPDOOR = "OXIDIZED_COPPER_TRAPDOOR",
    WAXED_COPPER_TRAPDOOR = "WAXED_COPPER_TRAPDOOR",
    WAXED_EXPOSED_COPPER_TRAPDOOR = "WAXED_EXPOSED_COPPER_TRAPDOOR",
    WAXED_WEATHERED_COPPER_TRAPDOOR = "WAXED_WEATHERED_COPPER_TRAPDOOR",
    WAXED_OXIDIZED_COPPER_TRAPDOOR = "WAXED_OXIDIZED_COPPER_TRAPDOOR",
    OAK_FENCE_GATE = "OAK_FENCE_GATE",
    SPRUCE_FENCE_GATE = "SPRUCE_FENCE_GATE",
    BIRCH_FENCE_GATE = "BIRCH_FENCE_GATE",
    JUNGLE_FENCE_GATE = "JUNGLE_FENCE_GATE",
    ACACIA_FENCE_GATE = "ACACIA_FENCE_GATE",
    CHERRY_FENCE_GATE = "CHERRY_FENCE_GATE",
    DARK_OAK_FENCE_GATE = "DARK_OAK_FENCE_GATE",
    MANGROVE_FENCE_GATE = "MANGROVE_FENCE_GATE",
    BAMBOO_FENCE_GATE = "BAMBOO_FENCE_GATE",
    CRIMSON_FENCE_GATE = "CRIMSON_FENCE_GATE",
    WARPED_FENCE_GATE = "WARPED_FENCE_GATE",
    POWERED_RAIL = "POWERED_RAIL",
    DETECTOR_RAIL = "DETECTOR_RAIL",
    RAIL = "RAIL",
    ACTIVATOR_RAIL = "ACTIVATOR_RAIL",
    SADDLE = "SADDLE",
    MINECART = "MINECART",
    CHEST_MINECART = "CHEST_MINECART",
    FURNACE_MINECART = "FURNACE_MINECART",
    TNT_MINECART = "TNT_MINECART",
    HOPPER_MINECART = "HOPPER_MINECART",
    CARROT_ON_A_STICK = "CARROT_ON_A_STICK",
    WARPED_FUNGUS_ON_A_STICK = "WARPED_FUNGUS_ON_A_STICK",
    ELYTRA = "ELYTRA",
    OAK_BOAT = "OAK_BOAT",
    OAK_CHEST_BOAT = "OAK_CHEST_BOAT",
    SPRUCE_BOAT = "SPRUCE_BOAT",
    SPRUCE_CHEST_BOAT = "SPRUCE_CHEST_BOAT",
    BIRCH_BOAT = "BIRCH_BOAT",
    BIRCH_CHEST_BOAT = "BIRCH_CHEST_BOAT",
    JUNGLE_BOAT = "JUNGLE_BOAT",
    JUNGLE_CHEST_BOAT = "JUNGLE_CHEST_BOAT",
    ACACIA_BOAT = "ACACIA_BOAT",
    ACACIA_CHEST_BOAT = "ACACIA_CHEST_BOAT",
    CHERRY_BOAT = "CHERRY_BOAT",
    CHERRY_CHEST_BOAT = "CHERRY_CHEST_BOAT",
    DARK_OAK_BOAT = "DARK_OAK_BOAT",
    DARK_OAK_CHEST_BOAT = "DARK_OAK_CHEST_BOAT",
    MANGROVE_BOAT = "MANGROVE_BOAT",
    MANGROVE_CHEST_BOAT = "MANGROVE_CHEST_BOAT",
    BAMBOO_RAFT = "BAMBOO_RAFT",
    BAMBOO_CHEST_RAFT = "BAMBOO_CHEST_RAFT",
    STRUCTURE_BLOCK = "STRUCTURE_BLOCK",
    JIGSAW = "JIGSAW",
    TURTLE_HELMET = "TURTLE_HELMET",
    TURTLE_SCUTE = "TURTLE_SCUTE",
    ARMADILLO_SCUTE = "ARMADILLO_SCUTE",
    WOLF_ARMOR = "WOLF_ARMOR",
    FLINT_AND_STEEL = "FLINT_AND_STEEL",
    BOWL = "BOWL",
    APPLE = "APPLE",
    BOW = "BOW",
    ARROW = "ARROW",
    COAL = "COAL",
    CHARCOAL = "CHARCOAL",
    DIAMOND = "DIAMOND",
    EMERALD = "EMERALD",
    LAPIS_LAZULI = "LAPIS_LAZULI",
    QUARTZ = "QUARTZ",
    AMETHYST_SHARD = "AMETHYST_SHARD",
    RAW_IRON = "RAW_IRON",
    IRON_INGOT = "IRON_INGOT",
    RAW_COPPER = "RAW_COPPER",
    COPPER_INGOT = "COPPER_INGOT",
    RAW_GOLD = "RAW_GOLD",
    GOLD_INGOT = "GOLD_INGOT",
    NETHERITE_INGOT = "NETHERITE_INGOT",
    NETHERITE_SCRAP = "NETHERITE_SCRAP",
    WOODEN_SWORD = "WOODEN_SWORD",
    WOODEN_SHOVEL = "WOODEN_SHOVEL",
    WOODEN_PICKAXE = "WOODEN_PICKAXE",
    WOODEN_AXE = "WOODEN_AXE",
    WOODEN_HOE = "WOODEN_HOE",
    STONE_SWORD = "STONE_SWORD",
    STONE_SHOVEL = "STONE_SHOVEL",
    STONE_PICKAXE = "STONE_PICKAXE",
    STONE_AXE = "STONE_AXE",
    STONE_HOE = "STONE_HOE",
    GOLDEN_SWORD = "GOLDEN_SWORD",
    GOLDEN_SHOVEL = "GOLDEN_SHOVEL",
    GOLDEN_PICKAXE = "GOLDEN_PICKAXE",
    GOLDEN_AXE = "GOLDEN_AXE",
    GOLDEN_HOE = "GOLDEN_HOE",
    IRON_SWORD = "IRON_SWORD",
    IRON_SHOVEL = "IRON_SHOVEL",
    IRON_PICKAXE = "IRON_PICKAXE",
    IRON_AXE = "IRON_AXE",
    IRON_HOE = "IRON_HOE",
    DIAMOND_SWORD = "DIAMOND_SWORD",
    DIAMOND_SHOVEL = "DIAMOND_SHOVEL",
    DIAMOND_PICKAXE = "DIAMOND_PICKAXE",
    DIAMOND_AXE = "DIAMOND_AXE",
    DIAMOND_HOE = "DIAMOND_HOE",
    NETHERITE_SWORD = "NETHERITE_SWORD",
    NETHERITE_SHOVEL = "NETHERITE_SHOVEL",
    NETHERITE_PICKAXE = "NETHERITE_PICKAXE",
    NETHERITE_AXE = "NETHERITE_AXE",
    NETHERITE_HOE = "NETHERITE_HOE",
    STICK = "STICK",
    MUSHROOM_STEW = "MUSHROOM_STEW",
    STRING = "STRING",
    FEATHER = "FEATHER",
    GUNPOWDER = "GUNPOWDER",
    WHEAT_SEEDS = "WHEAT_SEEDS",
    WHEAT = "WHEAT",
    BREAD = "BREAD",
    LEATHER_HELMET = "LEATHER_HELMET",
    LEATHER_CHESTPLATE = "LEATHER_CHESTPLATE",
    LEATHER_LEGGINGS = "LEATHER_LEGGINGS",
    LEATHER_BOOTS = "LEATHER_BOOTS",
    CHAINMAIL_HELMET = "CHAINMAIL_HELMET",
    CHAINMAIL_CHESTPLATE = "CHAINMAIL_CHESTPLATE",
    CHAINMAIL_LEGGINGS = "CHAINMAIL_LEGGINGS",
    CHAINMAIL_BOOTS = "CHAINMAIL_BOOTS",
    IRON_HELMET = "IRON_HELMET",
    IRON_CHESTPLATE = "IRON_CHESTPLATE",
    IRON_LEGGINGS = "IRON_LEGGINGS",
    IRON_BOOTS = "IRON_BOOTS",
    DIAMOND_HELMET = "DIAMOND_HELMET",
    DIAMOND_CHESTPLATE = "DIAMOND_CHESTPLATE",
    DIAMOND_LEGGINGS = "DIAMOND_LEGGINGS",
    DIAMOND_BOOTS = "DIAMOND_BOOTS",
    GOLDEN_HELMET = "GOLDEN_HELMET",
    GOLDEN_CHESTPLATE = "GOLDEN_CHESTPLATE",
    GOLDEN_LEGGINGS = "GOLDEN_LEGGINGS",
    GOLDEN_BOOTS = "GOLDEN_BOOTS",
    NETHERITE_HELMET = "NETHERITE_HELMET",
    NETHERITE_CHESTPLATE = "NETHERITE_CHESTPLATE",
    NETHERITE_LEGGINGS = "NETHERITE_LEGGINGS",
    NETHERITE_BOOTS = "NETHERITE_BOOTS",
    FLINT = "FLINT",
    PORKCHOP = "PORKCHOP",
    COOKED_PORKCHOP = "COOKED_PORKCHOP",
    PAINTING = "PAINTING",
    GOLDEN_APPLE = "GOLDEN_APPLE",
    ENCHANTED_GOLDEN_APPLE = "ENCHANTED_GOLDEN_APPLE",
    OAK_SIGN = "OAK_SIGN",
    SPRUCE_SIGN = "SPRUCE_SIGN",
    BIRCH_SIGN = "BIRCH_SIGN",
    JUNGLE_SIGN = "JUNGLE_SIGN",
    ACACIA_SIGN = "ACACIA_SIGN",
    CHERRY_SIGN = "CHERRY_SIGN",
    DARK_OAK_SIGN = "DARK_OAK_SIGN",
    MANGROVE_SIGN = "MANGROVE_SIGN",
    BAMBOO_SIGN = "BAMBOO_SIGN",
    CRIMSON_SIGN = "CRIMSON_SIGN",
    WARPED_SIGN = "WARPED_SIGN",
    OAK_HANGING_SIGN = "OAK_HANGING_SIGN",
    SPRUCE_HANGING_SIGN = "SPRUCE_HANGING_SIGN",
    BIRCH_HANGING_SIGN = "BIRCH_HANGING_SIGN",
    JUNGLE_HANGING_SIGN = "JUNGLE_HANGING_SIGN",
    ACACIA_HANGING_SIGN = "ACACIA_HANGING_SIGN",
    CHERRY_HANGING_SIGN = "CHERRY_HANGING_SIGN",
    DARK_OAK_HANGING_SIGN = "DARK_OAK_HANGING_SIGN",
    MANGROVE_HANGING_SIGN = "MANGROVE_HANGING_SIGN",
    BAMBOO_HANGING_SIGN = "BAMBOO_HANGING_SIGN",
    CRIMSON_HANGING_SIGN = "CRIMSON_HANGING_SIGN",
    WARPED_HANGING_SIGN = "WARPED_HANGING_SIGN",
    BUCKET = "BUCKET",
    WATER_BUCKET = "WATER_BUCKET",
    LAVA_BUCKET = "LAVA_BUCKET",
    POWDER_SNOW_BUCKET = "POWDER_SNOW_BUCKET",
    SNOWBALL = "SNOWBALL",
    LEATHER = "LEATHER",
    MILK_BUCKET = "MILK_BUCKET",
    PUFFERFISH_BUCKET = "PUFFERFISH_BUCKET",
    SALMON_BUCKET = "SALMON_BUCKET",
    COD_BUCKET = "COD_BUCKET",
    TROPICAL_FISH_BUCKET = "TROPICAL_FISH_BUCKET",
    AXOLOTL_BUCKET = "AXOLOTL_BUCKET",
    TADPOLE_BUCKET = "TADPOLE_BUCKET",
    BRICK = "BRICK",
    CLAY_BALL = "CLAY_BALL",
    DRIED_KELP_BLOCK = "DRIED_KELP_BLOCK",
    PAPER = "PAPER",
    BOOK = "BOOK",
    SLIME_BALL = "SLIME_BALL",
    EGG = "EGG",
    COMPASS = "COMPASS",
    RECOVERY_COMPASS = "RECOVERY_COMPASS",
    BUNDLE = "BUNDLE",
    FISHING_ROD = "FISHING_ROD",
    CLOCK = "CLOCK",
    SPYGLASS = "SPYGLASS",
    GLOWSTONE_DUST = "GLOWSTONE_DUST",
    COD = "COD",
    SALMON = "SALMON",
    TROPICAL_FISH = "TROPICAL_FISH",
    PUFFERFISH = "PUFFERFISH",
    COOKED_COD = "COOKED_COD",
    COOKED_SALMON = "COOKED_SALMON",
    INK_SAC = "INK_SAC",
    GLOW_INK_SAC = "GLOW_INK_SAC",
    COCOA_BEANS = "COCOA_BEANS",
    WHITE_DYE = "WHITE_DYE",
    ORANGE_DYE = "ORANGE_DYE",
    MAGENTA_DYE = "MAGENTA_DYE",
    LIGHT_BLUE_DYE = "LIGHT_BLUE_DYE",
    YELLOW_DYE = "YELLOW_DYE",
    LIME_DYE = "LIME_DYE",
    PINK_DYE = "PINK_DYE",
    GRAY_DYE = "GRAY_DYE",
    LIGHT_GRAY_DYE = "LIGHT_GRAY_DYE",
    CYAN_DYE = "CYAN_DYE",
    PURPLE_DYE = "PURPLE_DYE",
    BLUE_DYE = "BLUE_DYE",
    BROWN_DYE = "BROWN_DYE",
    GREEN_DYE = "GREEN_DYE",
    RED_DYE = "RED_DYE",
    BLACK_DYE = "BLACK_DYE",
    BONE_MEAL = "BONE_MEAL",
    BONE = "BONE",
    SUGAR = "SUGAR",
    CAKE = "CAKE",
    WHITE_BED = "WHITE_BED",
    ORANGE_BED = "ORANGE_BED",
    MAGENTA_BED = "MAGENTA_BED",
    LIGHT_BLUE_BED = "LIGHT_BLUE_BED",
    YELLOW_BED = "YELLOW_BED",
    LIME_BED = "LIME_BED",
    PINK_BED = "PINK_BED",
    GRAY_BED = "GRAY_BED",
    LIGHT_GRAY_BED = "LIGHT_GRAY_BED",
    CYAN_BED = "CYAN_BED",
    PURPLE_BED = "PURPLE_BED",
    BLUE_BED = "BLUE_BED",
    BROWN_BED = "BROWN_BED",
    GREEN_BED = "GREEN_BED",
    RED_BED = "RED_BED",
    BLACK_BED = "BLACK_BED",
    COOKIE = "COOKIE",
    CRAFTER = "CRAFTER",
    FILLED_MAP = "FILLED_MAP",
    SHEARS = "SHEARS",
    MELON_SLICE = "MELON_SLICE",
    DRIED_KELP = "DRIED_KELP",
    PUMPKIN_SEEDS = "PUMPKIN_SEEDS",
    MELON_SEEDS = "MELON_SEEDS",
    BEEF = "BEEF",
    COOKED_BEEF = "COOKED_BEEF",
    CHICKEN = "CHICKEN",
    COOKED_CHICKEN = "COOKED_CHICKEN",
    ROTTEN_FLESH = "ROTTEN_FLESH",
    ENDER_PEARL = "ENDER_PEARL",
    BLAZE_ROD = "BLAZE_ROD",
    GHAST_TEAR = "GHAST_TEAR",
    GOLD_NUGGET = "GOLD_NUGGET",
    NETHER_WART = "NETHER_WART",
    POTION = "POTION",
    GLASS_BOTTLE = "GLASS_BOTTLE",
    SPIDER_EYE = "SPIDER_EYE",
    FERMENTED_SPIDER_EYE = "FERMENTED_SPIDER_EYE",
    BLAZE_POWDER = "BLAZE_POWDER",
    MAGMA_CREAM = "MAGMA_CREAM",
    BREWING_STAND = "BREWING_STAND",
    CAULDRON = "CAULDRON",
    ENDER_EYE = "ENDER_EYE",
    GLISTERING_MELON_SLICE = "GLISTERING_MELON_SLICE",
    ARMADILLO_SPAWN_EGG = "ARMADILLO_SPAWN_EGG",
    ALLAY_SPAWN_EGG = "ALLAY_SPAWN_EGG",
    AXOLOTL_SPAWN_EGG = "AXOLOTL_SPAWN_EGG",
    BAT_SPAWN_EGG = "BAT_SPAWN_EGG",
    BEE_SPAWN_EGG = "BEE_SPAWN_EGG",
    BLAZE_SPAWN_EGG = "BLAZE_SPAWN_EGG",
    BOGGED_SPAWN_EGG = "BOGGED_SPAWN_EGG",
    BREEZE_SPAWN_EGG = "BREEZE_SPAWN_EGG",
    CAT_SPAWN_EGG = "CAT_SPAWN_EGG",
    CAMEL_SPAWN_EGG = "CAMEL_SPAWN_EGG",
    CAVE_SPIDER_SPAWN_EGG = "CAVE_SPIDER_SPAWN_EGG",
    CHICKEN_SPAWN_EGG = "CHICKEN_SPAWN_EGG",
    COD_SPAWN_EGG = "COD_SPAWN_EGG",
    COW_SPAWN_EGG = "COW_SPAWN_EGG",
    CREEPER_SPAWN_EGG = "CREEPER_SPAWN_EGG",
    DOLPHIN_SPAWN_EGG = "DOLPHIN_SPAWN_EGG",
    DONKEY_SPAWN_EGG = "DONKEY_SPAWN_EGG",
    DROWNED_SPAWN_EGG = "DROWNED_SPAWN_EGG",
    ELDER_GUARDIAN_SPAWN_EGG = "ELDER_GUARDIAN_SPAWN_EGG",
    ENDER_DRAGON_SPAWN_EGG = "ENDER_DRAGON_SPAWN_EGG",
    ENDERMAN_SPAWN_EGG = "ENDERMAN_SPAWN_EGG",
    ENDERMITE_SPAWN_EGG = "ENDERMITE_SPAWN_EGG",
    EVOKER_SPAWN_EGG = "EVOKER_SPAWN_EGG",
    FOX_SPAWN_EGG = "FOX_SPAWN_EGG",
    FROG_SPAWN_EGG = "FROG_SPAWN_EGG",
    GHAST_SPAWN_EGG = "GHAST_SPAWN_EGG",
    GLOW_SQUID_SPAWN_EGG = "GLOW_SQUID_SPAWN_EGG",
    GOAT_SPAWN_EGG = "GOAT_SPAWN_EGG",
    GUARDIAN_SPAWN_EGG = "GUARDIAN_SPAWN_EGG",
    HOGLIN_SPAWN_EGG = "HOGLIN_SPAWN_EGG",
    HORSE_SPAWN_EGG = "HORSE_SPAWN_EGG",
    HUSK_SPAWN_EGG = "HUSK_SPAWN_EGG",
    IRON_GOLEM_SPAWN_EGG = "IRON_GOLEM_SPAWN_EGG",
    LLAMA_SPAWN_EGG = "LLAMA_SPAWN_EGG",
    MAGMA_CUBE_SPAWN_EGG = "MAGMA_CUBE_SPAWN_EGG",
    MOOSHROOM_SPAWN_EGG = "MOOSHROOM_SPAWN_EGG",
    MULE_SPAWN_EGG = "MULE_SPAWN_EGG",
    OCELOT_SPAWN_EGG = "OCELOT_SPAWN_EGG",
    PANDA_SPAWN_EGG = "PANDA_SPAWN_EGG",
    PARROT_SPAWN_EGG = "PARROT_SPAWN_EGG",
    PHANTOM_SPAWN_EGG = "PHANTOM_SPAWN_EGG",
    PIG_SPAWN_EGG = "PIG_SPAWN_EGG",
    PIGLIN_SPAWN_EGG = "PIGLIN_SPAWN_EGG",
    PIGLIN_BRUTE_SPAWN_EGG = "PIGLIN_BRUTE_SPAWN_EGG",
    PILLAGER_SPAWN_EGG = "PILLAGER_SPAWN_EGG",
    POLAR_BEAR_SPAWN_EGG = "POLAR_BEAR_SPAWN_EGG",
    PUFFERFISH_SPAWN_EGG = "PUFFERFISH_SPAWN_EGG",
    RABBIT_SPAWN_EGG = "RABBIT_SPAWN_EGG",
    RAVAGER_SPAWN_EGG = "RAVAGER_SPAWN_EGG",
    SALMON_SPAWN_EGG = "SALMON_SPAWN_EGG",
    SHEEP_SPAWN_EGG = "SHEEP_SPAWN_EGG",
    SHULKER_SPAWN_EGG = "SHULKER_SPAWN_EGG",
    SILVERFISH_SPAWN_EGG = "SILVERFISH_SPAWN_EGG",
    SKELETON_SPAWN_EGG = "SKELETON_SPAWN_EGG",
    SKELETON_HORSE_SPAWN_EGG = "SKELETON_HORSE_SPAWN_EGG",
    SLIME_SPAWN_EGG = "SLIME_SPAWN_EGG",
    SNIFFER_SPAWN_EGG = "SNIFFER_SPAWN_EGG",
    SNOW_GOLEM_SPAWN_EGG = "SNOW_GOLEM_SPAWN_EGG",
    SPIDER_SPAWN_EGG = "SPIDER_SPAWN_EGG",
    SQUID_SPAWN_EGG = "SQUID_SPAWN_EGG",
    STRAY_SPAWN_EGG = "STRAY_SPAWN_EGG",
    STRIDER_SPAWN_EGG = "STRIDER_SPAWN_EGG",
    TADPOLE_SPAWN_EGG = "TADPOLE_SPAWN_EGG",
    TRADER_LLAMA_SPAWN_EGG = "TRADER_LLAMA_SPAWN_EGG",
    TROPICAL_FISH_SPAWN_EGG = "TROPICAL_FISH_SPAWN_EGG",
    TURTLE_SPAWN_EGG = "TURTLE_SPAWN_EGG",
    VEX_SPAWN_EGG = "VEX_SPAWN_EGG",
    VILLAGER_SPAWN_EGG = "VILLAGER_SPAWN_EGG",
    VINDICATOR_SPAWN_EGG = "VINDICATOR_SPAWN_EGG",
    WANDERING_TRADER_SPAWN_EGG = "WANDERING_TRADER_SPAWN_EGG",
    WARDEN_SPAWN_EGG = "WARDEN_SPAWN_EGG",
    WITCH_SPAWN_EGG = "WITCH_SPAWN_EGG",
    WITHER_SPAWN_EGG = "WITHER_SPAWN_EGG",
    WITHER_SKELETON_SPAWN_EGG = "WITHER_SKELETON_SPAWN_EGG",
    WOLF_SPAWN_EGG = "WOLF_SPAWN_EGG",
    ZOGLIN_SPAWN_EGG = "ZOGLIN_SPAWN_EGG",
    ZOMBIE_SPAWN_EGG = "ZOMBIE_SPAWN_EGG",
    ZOMBIE_HORSE_SPAWN_EGG = "ZOMBIE_HORSE_SPAWN_EGG",
    ZOMBIE_VILLAGER_SPAWN_EGG = "ZOMBIE_VILLAGER_SPAWN_EGG",
    ZOMBIFIED_PIGLIN_SPAWN_EGG = "ZOMBIFIED_PIGLIN_SPAWN_EGG",
    EXPERIENCE_BOTTLE = "EXPERIENCE_BOTTLE",
    FIRE_CHARGE = "FIRE_CHARGE",
    WIND_CHARGE = "WIND_CHARGE",
    WRITABLE_BOOK = "WRITABLE_BOOK",
    WRITTEN_BOOK = "WRITTEN_BOOK",
    MACE = "MACE",
    ITEM_FRAME = "ITEM_FRAME",
    GLOW_ITEM_FRAME = "GLOW_ITEM_FRAME",
    FLOWER_POT = "FLOWER_POT",
    CARROT = "CARROT",
    POTATO = "POTATO",
    BAKED_POTATO = "BAKED_POTATO",
    POISONOUS_POTATO = "POISONOUS_POTATO",
    MAP = "MAP",
    GOLDEN_CARROT = "GOLDEN_CARROT",
    SKELETON_SKULL = "SKELETON_SKULL",
    WITHER_SKELETON_SKULL = "WITHER_SKELETON_SKULL",
    PLAYER_HEAD = "PLAYER_HEAD",
    ZOMBIE_HEAD = "ZOMBIE_HEAD",
    CREEPER_HEAD = "CREEPER_HEAD",
    DRAGON_HEAD = "DRAGON_HEAD",
    PIGLIN_HEAD = "PIGLIN_HEAD",
    NETHER_STAR = "NETHER_STAR",
    PUMPKIN_PIE = "PUMPKIN_PIE",
    FIREWORK_ROCKET = "FIREWORK_ROCKET",
    FIREWORK_STAR = "FIREWORK_STAR",
    ENCHANTED_BOOK = "ENCHANTED_BOOK",
    NETHER_BRICK = "NETHER_BRICK",
    PRISMARINE_SHARD = "PRISMARINE_SHARD",
    PRISMARINE_CRYSTALS = "PRISMARINE_CRYSTALS",
    RABBIT = "RABBIT",
    COOKED_RABBIT = "COOKED_RABBIT",
    RABBIT_STEW = "RABBIT_STEW",
    RABBIT_FOOT = "RABBIT_FOOT",
    RABBIT_HIDE = "RABBIT_HIDE",
    ARMOR_STAND = "ARMOR_STAND",
    IRON_HORSE_ARMOR = "IRON_HORSE_ARMOR",
    GOLDEN_HORSE_ARMOR = "GOLDEN_HORSE_ARMOR",
    DIAMOND_HORSE_ARMOR = "DIAMOND_HORSE_ARMOR",
    LEATHER_HORSE_ARMOR = "LEATHER_HORSE_ARMOR",
    LEAD = "LEAD",
    NAME_TAG = "NAME_TAG",
    COMMAND_BLOCK_MINECART = "COMMAND_BLOCK_MINECART",
    MUTTON = "MUTTON",
    COOKED_MUTTON = "COOKED_MUTTON",
    WHITE_BANNER = "WHITE_BANNER",
    ORANGE_BANNER = "ORANGE_BANNER",
    MAGENTA_BANNER = "MAGENTA_BANNER",
    LIGHT_BLUE_BANNER = "LIGHT_BLUE_BANNER",
    YELLOW_BANNER = "YELLOW_BANNER",
    LIME_BANNER = "LIME_BANNER",
    PINK_BANNER = "PINK_BANNER",
    GRAY_BANNER = "GRAY_BANNER",
    LIGHT_GRAY_BANNER = "LIGHT_GRAY_BANNER",
    CYAN_BANNER = "CYAN_BANNER",
    PURPLE_BANNER = "PURPLE_BANNER",
    BLUE_BANNER = "BLUE_BANNER",
    BROWN_BANNER = "BROWN_BANNER",
    GREEN_BANNER = "GREEN_BANNER",
    RED_BANNER = "RED_BANNER",
    BLACK_BANNER = "BLACK_BANNER",
    END_CRYSTAL = "END_CRYSTAL",
    CHORUS_FRUIT = "CHORUS_FRUIT",
    POPPED_CHORUS_FRUIT = "POPPED_CHORUS_FRUIT",
    TORCHFLOWER_SEEDS = "TORCHFLOWER_SEEDS",
    PITCHER_POD = "PITCHER_POD",
    BEETROOT = "BEETROOT",
    BEETROOT_SEEDS = "BEETROOT_SEEDS",
    BEETROOT_SOUP = "BEETROOT_SOUP",
    DRAGON_BREATH = "DRAGON_BREATH",
    SPLASH_POTION = "SPLASH_POTION",
    SPECTRAL_ARROW = "SPECTRAL_ARROW",
    TIPPED_ARROW = "TIPPED_ARROW",
    LINGERING_POTION = "LINGERING_POTION",
    SHIELD = "SHIELD",
    TOTEM_OF_UNDYING = "TOTEM_OF_UNDYING",
    SHULKER_SHELL = "SHULKER_SHELL",
    IRON_NUGGET = "IRON_NUGGET",
    KNOWLEDGE_BOOK = "KNOWLEDGE_BOOK",
    DEBUG_STICK = "DEBUG_STICK",
    MUSIC_DISC_13 = "MUSIC_DISC_13",
    MUSIC_DISC_CAT = "MUSIC_DISC_CAT",
    MUSIC_DISC_BLOCKS = "MUSIC_DISC_BLOCKS",
    MUSIC_DISC_CHIRP = "MUSIC_DISC_CHIRP",
    MUSIC_DISC_CREATOR = "MUSIC_DISC_CREATOR",
    MUSIC_DISC_CREATOR_MUSIC_BOX = "MUSIC_DISC_CREATOR_MUSIC_BOX",
    MUSIC_DISC_FAR = "MUSIC_DISC_FAR",
    MUSIC_DISC_MALL = "MUSIC_DISC_MALL",
    MUSIC_DISC_MELLOHI = "MUSIC_DISC_MELLOHI",
    MUSIC_DISC_STAL = "MUSIC_DISC_STAL",
    MUSIC_DISC_STRAD = "MUSIC_DISC_STRAD",
    MUSIC_DISC_WARD = "MUSIC_DISC_WARD",
    MUSIC_DISC_11 = "MUSIC_DISC_11",
    MUSIC_DISC_WAIT = "MUSIC_DISC_WAIT",
    MUSIC_DISC_OTHERSIDE = "MUSIC_DISC_OTHERSIDE",
    MUSIC_DISC_RELIC = "MUSIC_DISC_RELIC",
    MUSIC_DISC_5 = "MUSIC_DISC_5",
    MUSIC_DISC_PIGSTEP = "MUSIC_DISC_PIGSTEP",
    MUSIC_DISC_PRECIPICE = "MUSIC_DISC_PRECIPICE",
    DISC_FRAGMENT_5 = "DISC_FRAGMENT_5",
    TRIDENT = "TRIDENT",
    PHANTOM_MEMBRANE = "PHANTOM_MEMBRANE",
    NAUTILUS_SHELL = "NAUTILUS_SHELL",
    HEART_OF_THE_SEA = "HEART_OF_THE_SEA",
    CROSSBOW = "CROSSBOW",
    SUSPICIOUS_STEW = "SUSPICIOUS_STEW",
    LOOM = "LOOM",
    FLOWER_BANNER_PATTERN = "FLOWER_BANNER_PATTERN",
    CREEPER_BANNER_PATTERN = "CREEPER_BANNER_PATTERN",
    SKULL_BANNER_PATTERN = "SKULL_BANNER_PATTERN",
    MOJANG_BANNER_PATTERN = "MOJANG_BANNER_PATTERN",
    GLOBE_BANNER_PATTERN = "GLOBE_BANNER_PATTERN",
    PIGLIN_BANNER_PATTERN = "PIGLIN_BANNER_PATTERN",
    FLOW_BANNER_PATTERN = "FLOW_BANNER_PATTERN",
    GUSTER_BANNER_PATTERN = "GUSTER_BANNER_PATTERN",
    GOAT_HORN = "GOAT_HORN",
    COMPOSTER = "COMPOSTER",
    BARREL = "BARREL",
    SMOKER = "SMOKER",
    BLAST_FURNACE = "BLAST_FURNACE",
    CARTOGRAPHY_TABLE = "CARTOGRAPHY_TABLE",
    FLETCHING_TABLE = "FLETCHING_TABLE",
    GRINDSTONE = "GRINDSTONE",
    SMITHING_TABLE = "SMITHING_TABLE",
    STONECUTTER = "STONECUTTER",
    BELL = "BELL",
    LANTERN = "LANTERN",
    SOUL_LANTERN = "SOUL_LANTERN",
    SWEET_BERRIES = "SWEET_BERRIES",
    GLOW_BERRIES = "GLOW_BERRIES",
    CAMPFIRE = "CAMPFIRE",
    SOUL_CAMPFIRE = "SOUL_CAMPFIRE",
    SHROOMLIGHT = "SHROOMLIGHT",
    HONEYCOMB = "HONEYCOMB",
    BEE_NEST = "BEE_NEST",
    BEEHIVE = "BEEHIVE",
    HONEY_BOTTLE = "HONEY_BOTTLE",
    HONEYCOMB_BLOCK = "HONEYCOMB_BLOCK",
    LODESTONE = "LODESTONE",
    CRYING_OBSIDIAN = "CRYING_OBSIDIAN",
    BLACKSTONE = "BLACKSTONE",
    BLACKSTONE_SLAB = "BLACKSTONE_SLAB",
    BLACKSTONE_STAIRS = "BLACKSTONE_STAIRS",
    GILDED_BLACKSTONE = "GILDED_BLACKSTONE",
    POLISHED_BLACKSTONE = "POLISHED_BLACKSTONE",
    POLISHED_BLACKSTONE_SLAB = "POLISHED_BLACKSTONE_SLAB",
    POLISHED_BLACKSTONE_STAIRS = "POLISHED_BLACKSTONE_STAIRS",
    CHISELED_POLISHED_BLACKSTONE = "CHISELED_POLISHED_BLACKSTONE",
    POLISHED_BLACKSTONE_BRICKS = "POLISHED_BLACKSTONE_BRICKS",
    POLISHED_BLACKSTONE_BRICK_SLAB = "POLISHED_BLACKSTONE_BRICK_SLAB",
    POLISHED_BLACKSTONE_BRICK_STAIRS = "POLISHED_BLACKSTONE_BRICK_STAIRS",
    CRACKED_POLISHED_BLACKSTONE_BRICKS = "CRACKED_POLISHED_BLACKSTONE_BRICKS",
    RESPAWN_ANCHOR = "RESPAWN_ANCHOR",
    CANDLE = "CANDLE",
    WHITE_CANDLE = "WHITE_CANDLE",
    ORANGE_CANDLE = "ORANGE_CANDLE",
    MAGENTA_CANDLE = "MAGENTA_CANDLE",
    LIGHT_BLUE_CANDLE = "LIGHT_BLUE_CANDLE",
    YELLOW_CANDLE = "YELLOW_CANDLE",
    LIME_CANDLE = "LIME_CANDLE",
    PINK_CANDLE = "PINK_CANDLE",
    GRAY_CANDLE = "GRAY_CANDLE",
    LIGHT_GRAY_CANDLE = "LIGHT_GRAY_CANDLE",
    CYAN_CANDLE = "CYAN_CANDLE",
    PURPLE_CANDLE = "PURPLE_CANDLE",
    BLUE_CANDLE = "BLUE_CANDLE",
    BROWN_CANDLE = "BROWN_CANDLE",
    GREEN_CANDLE = "GREEN_CANDLE",
    RED_CANDLE = "RED_CANDLE",
    BLACK_CANDLE = "BLACK_CANDLE",
    SMALL_AMETHYST_BUD = "SMALL_AMETHYST_BUD",
    MEDIUM_AMETHYST_BUD = "MEDIUM_AMETHYST_BUD",
    LARGE_AMETHYST_BUD = "LARGE_AMETHYST_BUD",
    AMETHYST_CLUSTER = "AMETHYST_CLUSTER",
    POINTED_DRIPSTONE = "POINTED_DRIPSTONE",
    OCHRE_FROGLIGHT = "OCHRE_FROGLIGHT",
    VERDANT_FROGLIGHT = "VERDANT_FROGLIGHT",
    PEARLESCENT_FROGLIGHT = "PEARLESCENT_FROGLIGHT",
    FROGSPAWN = "FROGSPAWN",
    ECHO_SHARD = "ECHO_SHARD",
    BRUSH = "BRUSH",
    NETHERITE_UPGRADE_SMITHING_TEMPLATE = "NETHERITE_UPGRADE_SMITHING_TEMPLATE",
    SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE = "SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE",
    DUNE_ARMOR_TRIM_SMITHING_TEMPLATE = "DUNE_ARMOR_TRIM_SMITHING_TEMPLATE",
    COAST_ARMOR_TRIM_SMITHING_TEMPLATE = "COAST_ARMOR_TRIM_SMITHING_TEMPLATE",
    WILD_ARMOR_TRIM_SMITHING_TEMPLATE = "WILD_ARMOR_TRIM_SMITHING_TEMPLATE",
    WARD_ARMOR_TRIM_SMITHING_TEMPLATE = "WARD_ARMOR_TRIM_SMITHING_TEMPLATE",
    EYE_ARMOR_TRIM_SMITHING_TEMPLATE = "EYE_ARMOR_TRIM_SMITHING_TEMPLATE",
    VEX_ARMOR_TRIM_SMITHING_TEMPLATE = "VEX_ARMOR_TRIM_SMITHING_TEMPLATE",
    TIDE_ARMOR_TRIM_SMITHING_TEMPLATE = "TIDE_ARMOR_TRIM_SMITHING_TEMPLATE",
    SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE = "SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE",
    RIB_ARMOR_TRIM_SMITHING_TEMPLATE = "RIB_ARMOR_TRIM_SMITHING_TEMPLATE",
    SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE = "SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE",
    WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE = "WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE",
    SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE = "SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE",
    SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE = "SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE",
    RAISER_ARMOR_TRIM_SMITHING_TEMPLATE = "RAISER_ARMOR_TRIM_SMITHING_TEMPLATE",
    HOST_ARMOR_TRIM_SMITHING_TEMPLATE = "HOST_ARMOR_TRIM_SMITHING_TEMPLATE",
    FLOW_ARMOR_TRIM_SMITHING_TEMPLATE = "FLOW_ARMOR_TRIM_SMITHING_TEMPLATE",
    BOLT_ARMOR_TRIM_SMITHING_TEMPLATE = "BOLT_ARMOR_TRIM_SMITHING_TEMPLATE",
    ANGLER_POTTERY_SHERD = "ANGLER_POTTERY_SHERD",
    ARCHER_POTTERY_SHERD = "ARCHER_POTTERY_SHERD",
    ARMS_UP_POTTERY_SHERD = "ARMS_UP_POTTERY_SHERD",
    BLADE_POTTERY_SHERD = "BLADE_POTTERY_SHERD",
    BREWER_POTTERY_SHERD = "BREWER_POTTERY_SHERD",
    BURN_POTTERY_SHERD = "BURN_POTTERY_SHERD",
    DANGER_POTTERY_SHERD = "DANGER_POTTERY_SHERD",
    EXPLORER_POTTERY_SHERD = "EXPLORER_POTTERY_SHERD",
    FLOW_POTTERY_SHERD = "FLOW_POTTERY_SHERD",
    FRIEND_POTTERY_SHERD = "FRIEND_POTTERY_SHERD",
    GUSTER_POTTERY_SHERD = "GUSTER_POTTERY_SHERD",
    HEART_POTTERY_SHERD = "HEART_POTTERY_SHERD",
    HEARTBREAK_POTTERY_SHERD = "HEARTBREAK_POTTERY_SHERD",
    HOWL_POTTERY_SHERD = "HOWL_POTTERY_SHERD",
    MINER_POTTERY_SHERD = "MINER_POTTERY_SHERD",
    MOURNER_POTTERY_SHERD = "MOURNER_POTTERY_SHERD",
    PLENTY_POTTERY_SHERD = "PLENTY_POTTERY_SHERD",
    PRIZE_POTTERY_SHERD = "PRIZE_POTTERY_SHERD",
    SCRAPE_POTTERY_SHERD = "SCRAPE_POTTERY_SHERD",
    SHEAF_POTTERY_SHERD = "SHEAF_POTTERY_SHERD",
    SHELTER_POTTERY_SHERD = "SHELTER_POTTERY_SHERD",
    SKULL_POTTERY_SHERD = "SKULL_POTTERY_SHERD",
    SNORT_POTTERY_SHERD = "SNORT_POTTERY_SHERD",
    COPPER_GRATE = "COPPER_GRATE",
    EXPOSED_COPPER_GRATE = "EXPOSED_COPPER_GRATE",
    WEATHERED_COPPER_GRATE = "WEATHERED_COPPER_GRATE",
    OXIDIZED_COPPER_GRATE = "OXIDIZED_COPPER_GRATE",
    WAXED_COPPER_GRATE = "WAXED_COPPER_GRATE",
    WAXED_EXPOSED_COPPER_GRATE = "WAXED_EXPOSED_COPPER_GRATE",
    WAXED_WEATHERED_COPPER_GRATE = "WAXED_WEATHERED_COPPER_GRATE",
    WAXED_OXIDIZED_COPPER_GRATE = "WAXED_OXIDIZED_COPPER_GRATE",
    COPPER_BULB = "COPPER_BULB",
    EXPOSED_COPPER_BULB = "EXPOSED_COPPER_BULB",
    WEATHERED_COPPER_BULB = "WEATHERED_COPPER_BULB",
    OXIDIZED_COPPER_BULB = "OXIDIZED_COPPER_BULB",
    WAXED_COPPER_BULB = "WAXED_COPPER_BULB",
    WAXED_EXPOSED_COPPER_BULB = "WAXED_EXPOSED_COPPER_BULB",
    WAXED_WEATHERED_COPPER_BULB = "WAXED_WEATHERED_COPPER_BULB",
    WAXED_OXIDIZED_COPPER_BULB = "WAXED_OXIDIZED_COPPER_BULB",
    TRIAL_SPAWNER = "TRIAL_SPAWNER",
    TRIAL_KEY = "TRIAL_KEY",
    OMINOUS_TRIAL_KEY = "OMINOUS_TRIAL_KEY",
    VAULT = "VAULT",
    OMINOUS_BOTTLE = "OMINOUS_BOTTLE",
    BREEZE_ROD = "BREEZE_ROD",
    WATER = "WATER",
    LAVA = "LAVA",
    TALL_SEAGRASS = "TALL_SEAGRASS",
    PISTON_HEAD = "PISTON_HEAD",
    MOVING_PISTON = "MOVING_PISTON",
    WALL_TORCH = "WALL_TORCH",
    FIRE = "FIRE",
    SOUL_FIRE = "SOUL_FIRE",
    REDSTONE_WIRE = "REDSTONE_WIRE",
    OAK_WALL_SIGN = "OAK_WALL_SIGN",
    SPRUCE_WALL_SIGN = "SPRUCE_WALL_SIGN",
    BIRCH_WALL_SIGN = "BIRCH_WALL_SIGN",
    ACACIA_WALL_SIGN = "ACACIA_WALL_SIGN",
    CHERRY_WALL_SIGN = "CHERRY_WALL_SIGN",
    JUNGLE_WALL_SIGN = "JUNGLE_WALL_SIGN",
    DARK_OAK_WALL_SIGN = "DARK_OAK_WALL_SIGN",
    MANGROVE_WALL_SIGN = "MANGROVE_WALL_SIGN",
    BAMBOO_WALL_SIGN = "BAMBOO_WALL_SIGN",
    OAK_WALL_HANGING_SIGN = "OAK_WALL_HANGING_SIGN",
    SPRUCE_WALL_HANGING_SIGN = "SPRUCE_WALL_HANGING_SIGN",
    BIRCH_WALL_HANGING_SIGN = "BIRCH_WALL_HANGING_SIGN",
    ACACIA_WALL_HANGING_SIGN = "ACACIA_WALL_HANGING_SIGN",
    CHERRY_WALL_HANGING_SIGN = "CHERRY_WALL_HANGING_SIGN",
    JUNGLE_WALL_HANGING_SIGN = "JUNGLE_WALL_HANGING_SIGN",
    DARK_OAK_WALL_HANGING_SIGN = "DARK_OAK_WALL_HANGING_SIGN",
    MANGROVE_WALL_HANGING_SIGN = "MANGROVE_WALL_HANGING_SIGN",
    CRIMSON_WALL_HANGING_SIGN = "CRIMSON_WALL_HANGING_SIGN",
    WARPED_WALL_HANGING_SIGN = "WARPED_WALL_HANGING_SIGN",
    BAMBOO_WALL_HANGING_SIGN = "BAMBOO_WALL_HANGING_SIGN",
    REDSTONE_WALL_TORCH = "REDSTONE_WALL_TORCH",
    SOUL_WALL_TORCH = "SOUL_WALL_TORCH",
    NETHER_PORTAL = "NETHER_PORTAL",
    ATTACHED_PUMPKIN_STEM = "ATTACHED_PUMPKIN_STEM",
    ATTACHED_MELON_STEM = "ATTACHED_MELON_STEM",
    PUMPKIN_STEM = "PUMPKIN_STEM",
    MELON_STEM = "MELON_STEM",
    WATER_CAULDRON = "WATER_CAULDRON",
    LAVA_CAULDRON = "LAVA_CAULDRON",
    POWDER_SNOW_CAULDRON = "POWDER_SNOW_CAULDRON",
    END_PORTAL = "END_PORTAL",
    COCOA = "COCOA",
    TRIPWIRE = "TRIPWIRE",
    POTTED_TORCHFLOWER = "POTTED_TORCHFLOWER",
    POTTED_OAK_SAPLING = "POTTED_OAK_SAPLING",
    POTTED_SPRUCE_SAPLING = "POTTED_SPRUCE_SAPLING",
    POTTED_BIRCH_SAPLING = "POTTED_BIRCH_SAPLING",
    POTTED_JUNGLE_SAPLING = "POTTED_JUNGLE_SAPLING",
    POTTED_ACACIA_SAPLING = "POTTED_ACACIA_SAPLING",
    POTTED_CHERRY_SAPLING = "POTTED_CHERRY_SAPLING",
    POTTED_DARK_OAK_SAPLING = "POTTED_DARK_OAK_SAPLING",
    POTTED_MANGROVE_PROPAGULE = "POTTED_MANGROVE_PROPAGULE",
    POTTED_FERN = "POTTED_FERN",
    POTTED_DANDELION = "POTTED_DANDELION",
    POTTED_POPPY = "POTTED_POPPY",
    POTTED_BLUE_ORCHID = "POTTED_BLUE_ORCHID",
    POTTED_ALLIUM = "POTTED_ALLIUM",
    POTTED_AZURE_BLUET = "POTTED_AZURE_BLUET",
    POTTED_RED_TULIP = "POTTED_RED_TULIP",
    POTTED_ORANGE_TULIP = "POTTED_ORANGE_TULIP",
    POTTED_WHITE_TULIP = "POTTED_WHITE_TULIP",
    POTTED_PINK_TULIP = "POTTED_PINK_TULIP",
    POTTED_OXEYE_DAISY = "POTTED_OXEYE_DAISY",
    POTTED_CORNFLOWER = "POTTED_CORNFLOWER",
    POTTED_LILY_OF_THE_VALLEY = "POTTED_LILY_OF_THE_VALLEY",
    POTTED_WITHER_ROSE = "POTTED_WITHER_ROSE",
    POTTED_RED_MUSHROOM = "POTTED_RED_MUSHROOM",
    POTTED_BROWN_MUSHROOM = "POTTED_BROWN_MUSHROOM",
    POTTED_DEAD_BUSH = "POTTED_DEAD_BUSH",
    POTTED_CACTUS = "POTTED_CACTUS",
    CARROTS = "CARROTS",
    POTATOES = "POTATOES",
    SKELETON_WALL_SKULL = "SKELETON_WALL_SKULL",
    WITHER_SKELETON_WALL_SKULL = "WITHER_SKELETON_WALL_SKULL",
    ZOMBIE_WALL_HEAD = "ZOMBIE_WALL_HEAD",
    PLAYER_WALL_HEAD = "PLAYER_WALL_HEAD",
    CREEPER_WALL_HEAD = "CREEPER_WALL_HEAD",
    DRAGON_WALL_HEAD = "DRAGON_WALL_HEAD",
    PIGLIN_WALL_HEAD = "PIGLIN_WALL_HEAD",
    WHITE_WALL_BANNER = "WHITE_WALL_BANNER",
    ORANGE_WALL_BANNER = "ORANGE_WALL_BANNER",
    MAGENTA_WALL_BANNER = "MAGENTA_WALL_BANNER",
    LIGHT_BLUE_WALL_BANNER = "LIGHT_BLUE_WALL_BANNER",
    YELLOW_WALL_BANNER = "YELLOW_WALL_BANNER",
    LIME_WALL_BANNER = "LIME_WALL_BANNER",
    PINK_WALL_BANNER = "PINK_WALL_BANNER",
    GRAY_WALL_BANNER = "GRAY_WALL_BANNER",
    LIGHT_GRAY_WALL_BANNER = "LIGHT_GRAY_WALL_BANNER",
    CYAN_WALL_BANNER = "CYAN_WALL_BANNER",
    PURPLE_WALL_BANNER = "PURPLE_WALL_BANNER",
    BLUE_WALL_BANNER = "BLUE_WALL_BANNER",
    BROWN_WALL_BANNER = "BROWN_WALL_BANNER",
    GREEN_WALL_BANNER = "GREEN_WALL_BANNER",
    RED_WALL_BANNER = "RED_WALL_BANNER",
    BLACK_WALL_BANNER = "BLACK_WALL_BANNER",
    TORCHFLOWER_CROP = "TORCHFLOWER_CROP",
    PITCHER_CROP = "PITCHER_CROP",
    BEETROOTS = "BEETROOTS",
    END_GATEWAY = "END_GATEWAY",
    FROSTED_ICE = "FROSTED_ICE",
    KELP_PLANT = "KELP_PLANT",
    DEAD_TUBE_CORAL_WALL_FAN = "DEAD_TUBE_CORAL_WALL_FAN",
    DEAD_BRAIN_CORAL_WALL_FAN = "DEAD_BRAIN_CORAL_WALL_FAN",
    DEAD_BUBBLE_CORAL_WALL_FAN = "DEAD_BUBBLE_CORAL_WALL_FAN",
    DEAD_FIRE_CORAL_WALL_FAN = "DEAD_FIRE_CORAL_WALL_FAN",
    DEAD_HORN_CORAL_WALL_FAN = "DEAD_HORN_CORAL_WALL_FAN",
    TUBE_CORAL_WALL_FAN = "TUBE_CORAL_WALL_FAN",
    BRAIN_CORAL_WALL_FAN = "BRAIN_CORAL_WALL_FAN",
    BUBBLE_CORAL_WALL_FAN = "BUBBLE_CORAL_WALL_FAN",
    FIRE_CORAL_WALL_FAN = "FIRE_CORAL_WALL_FAN",
    HORN_CORAL_WALL_FAN = "HORN_CORAL_WALL_FAN",
    BAMBOO_SAPLING = "BAMBOO_SAPLING",
    POTTED_BAMBOO = "POTTED_BAMBOO",
    VOID_AIR = "VOID_AIR",
    CAVE_AIR = "CAVE_AIR",
    BUBBLE_COLUMN = "BUBBLE_COLUMN",
    SWEET_BERRY_BUSH = "SWEET_BERRY_BUSH",
    WEEPING_VINES_PLANT = "WEEPING_VINES_PLANT",
    TWISTING_VINES_PLANT = "TWISTING_VINES_PLANT",
    CRIMSON_WALL_SIGN = "CRIMSON_WALL_SIGN",
    WARPED_WALL_SIGN = "WARPED_WALL_SIGN",
    POTTED_CRIMSON_FUNGUS = "POTTED_CRIMSON_FUNGUS",
    POTTED_WARPED_FUNGUS = "POTTED_WARPED_FUNGUS",
    POTTED_CRIMSON_ROOTS = "POTTED_CRIMSON_ROOTS",
    POTTED_WARPED_ROOTS = "POTTED_WARPED_ROOTS",
    CANDLE_CAKE = "CANDLE_CAKE",
    WHITE_CANDLE_CAKE = "WHITE_CANDLE_CAKE",
    ORANGE_CANDLE_CAKE = "ORANGE_CANDLE_CAKE",
    MAGENTA_CANDLE_CAKE = "MAGENTA_CANDLE_CAKE",
    LIGHT_BLUE_CANDLE_CAKE = "LIGHT_BLUE_CANDLE_CAKE",
    YELLOW_CANDLE_CAKE = "YELLOW_CANDLE_CAKE",
    LIME_CANDLE_CAKE = "LIME_CANDLE_CAKE",
    PINK_CANDLE_CAKE = "PINK_CANDLE_CAKE",
    GRAY_CANDLE_CAKE = "GRAY_CANDLE_CAKE",
    LIGHT_GRAY_CANDLE_CAKE = "LIGHT_GRAY_CANDLE_CAKE",
    CYAN_CANDLE_CAKE = "CYAN_CANDLE_CAKE",
    PURPLE_CANDLE_CAKE = "PURPLE_CANDLE_CAKE",
    BLUE_CANDLE_CAKE = "BLUE_CANDLE_CAKE",
    BROWN_CANDLE_CAKE = "BROWN_CANDLE_CAKE",
    GREEN_CANDLE_CAKE = "GREEN_CANDLE_CAKE",
    RED_CANDLE_CAKE = "RED_CANDLE_CAKE",
    BLACK_CANDLE_CAKE = "BLACK_CANDLE_CAKE",
    POWDER_SNOW = "POWDER_SNOW",
    CAVE_VINES = "CAVE_VINES",
    CAVE_VINES_PLANT = "CAVE_VINES_PLANT",
    BIG_DRIPLEAF_STEM = "BIG_DRIPLEAF_STEM",
    POTTED_AZALEA_BUSH = "POTTED_AZALEA_BUSH",
    POTTED_FLOWERING_AZALEA_BUSH = "POTTED_FLOWERING_AZALEA_BUSH",
    LEGACY_AIR = "LEGACY_AIR",
    LEGACY_STONE = "LEGACY_STONE",
    LEGACY_GRASS = "LEGACY_GRASS",
    LEGACY_DIRT = "LEGACY_DIRT",
    LEGACY_COBBLESTONE = "LEGACY_COBBLESTONE",
    LEGACY_WOOD = "LEGACY_WOOD",
    LEGACY_SAPLING = "LEGACY_SAPLING",
    LEGACY_BEDROCK = "LEGACY_BEDROCK",
    LEGACY_WATER = "LEGACY_WATER",
    LEGACY_STATIONARY_WATER = "LEGACY_STATIONARY_WATER",
    LEGACY_LAVA = "LEGACY_LAVA",
    LEGACY_STATIONARY_LAVA = "LEGACY_STATIONARY_LAVA",
    LEGACY_SAND = "LEGACY_SAND",
    LEGACY_GRAVEL = "LEGACY_GRAVEL",
    LEGACY_GOLD_ORE = "LEGACY_GOLD_ORE",
    LEGACY_IRON_ORE = "LEGACY_IRON_ORE",
    LEGACY_COAL_ORE = "LEGACY_COAL_ORE",
    LEGACY_LOG = "LEGACY_LOG",
    LEGACY_LEAVES = "LEGACY_LEAVES",
    LEGACY_SPONGE = "LEGACY_SPONGE",
    LEGACY_GLASS = "LEGACY_GLASS",
    LEGACY_LAPIS_ORE = "LEGACY_LAPIS_ORE",
    LEGACY_LAPIS_BLOCK = "LEGACY_LAPIS_BLOCK",
    LEGACY_DISPENSER = "LEGACY_DISPENSER",
    LEGACY_SANDSTONE = "LEGACY_SANDSTONE",
    LEGACY_NOTE_BLOCK = "LEGACY_NOTE_BLOCK",
    LEGACY_BED_BLOCK = "LEGACY_BED_BLOCK",
    LEGACY_POWERED_RAIL = "LEGACY_POWERED_RAIL",
    LEGACY_DETECTOR_RAIL = "LEGACY_DETECTOR_RAIL",
    LEGACY_PISTON_STICKY_BASE = "LEGACY_PISTON_STICKY_BASE",
    LEGACY_WEB = "LEGACY_WEB",
    LEGACY_LONG_GRASS = "LEGACY_LONG_GRASS",
    LEGACY_DEAD_BUSH = "LEGACY_DEAD_BUSH",
    LEGACY_PISTON_BASE = "LEGACY_PISTON_BASE",
    LEGACY_PISTON_EXTENSION = "LEGACY_PISTON_EXTENSION",
    LEGACY_WOOL = "LEGACY_WOOL",
    LEGACY_PISTON_MOVING_PIECE = "LEGACY_PISTON_MOVING_PIECE",
    LEGACY_YELLOW_FLOWER = "LEGACY_YELLOW_FLOWER",
    LEGACY_RED_ROSE = "LEGACY_RED_ROSE",
    LEGACY_BROWN_MUSHROOM = "LEGACY_BROWN_MUSHROOM",
    LEGACY_RED_MUSHROOM = "LEGACY_RED_MUSHROOM",
    LEGACY_GOLD_BLOCK = "LEGACY_GOLD_BLOCK",
    LEGACY_IRON_BLOCK = "LEGACY_IRON_BLOCK",
    LEGACY_DOUBLE_STEP = "LEGACY_DOUBLE_STEP",
    LEGACY_STEP = "LEGACY_STEP",
    LEGACY_BRICK = "LEGACY_BRICK",
    LEGACY_TNT = "LEGACY_TNT",
    LEGACY_BOOKSHELF = "LEGACY_BOOKSHELF",
    LEGACY_MOSSY_COBBLESTONE = "LEGACY_MOSSY_COBBLESTONE",
    LEGACY_OBSIDIAN = "LEGACY_OBSIDIAN",
    LEGACY_TORCH = "LEGACY_TORCH",
    LEGACY_FIRE = "LEGACY_FIRE",
    LEGACY_MOB_SPAWNER = "LEGACY_MOB_SPAWNER",
    LEGACY_WOOD_STAIRS = "LEGACY_WOOD_STAIRS",
    LEGACY_CHEST = "LEGACY_CHEST",
    LEGACY_REDSTONE_WIRE = "LEGACY_REDSTONE_WIRE",
    LEGACY_DIAMOND_ORE = "LEGACY_DIAMOND_ORE",
    LEGACY_DIAMOND_BLOCK = "LEGACY_DIAMOND_BLOCK",
    LEGACY_WORKBENCH = "LEGACY_WORKBENCH",
    LEGACY_CROPS = "LEGACY_CROPS",
    LEGACY_SOIL = "LEGACY_SOIL",
    LEGACY_FURNACE = "LEGACY_FURNACE",
    LEGACY_BURNING_FURNACE = "LEGACY_BURNING_FURNACE",
    LEGACY_SIGN_POST = "LEGACY_SIGN_POST",
    LEGACY_WOODEN_DOOR = "LEGACY_WOODEN_DOOR",
    LEGACY_LADDER = "LEGACY_LADDER",
    LEGACY_RAILS = "LEGACY_RAILS",
    LEGACY_COBBLESTONE_STAIRS = "LEGACY_COBBLESTONE_STAIRS",
    LEGACY_WALL_SIGN = "LEGACY_WALL_SIGN",
    LEGACY_LEVER = "LEGACY_LEVER",
    LEGACY_STONE_PLATE = "LEGACY_STONE_PLATE",
    LEGACY_IRON_DOOR_BLOCK = "LEGACY_IRON_DOOR_BLOCK",
    LEGACY_WOOD_PLATE = "LEGACY_WOOD_PLATE",
    LEGACY_REDSTONE_ORE = "LEGACY_REDSTONE_ORE",
    LEGACY_GLOWING_REDSTONE_ORE = "LEGACY_GLOWING_REDSTONE_ORE",
    LEGACY_REDSTONE_TORCH_OFF = "LEGACY_REDSTONE_TORCH_OFF",
    LEGACY_REDSTONE_TORCH_ON = "LEGACY_REDSTONE_TORCH_ON",
    LEGACY_STONE_BUTTON = "LEGACY_STONE_BUTTON",
    LEGACY_SNOW = "LEGACY_SNOW",
    LEGACY_ICE = "LEGACY_ICE",
    LEGACY_SNOW_BLOCK = "LEGACY_SNOW_BLOCK",
    LEGACY_CACTUS = "LEGACY_CACTUS",
    LEGACY_CLAY = "LEGACY_CLAY",
    LEGACY_SUGAR_CANE_BLOCK = "LEGACY_SUGAR_CANE_BLOCK",
    LEGACY_JUKEBOX = "LEGACY_JUKEBOX",
    LEGACY_FENCE = "LEGACY_FENCE",
    LEGACY_PUMPKIN = "LEGACY_PUMPKIN",
    LEGACY_NETHERRACK = "LEGACY_NETHERRACK",
    LEGACY_SOUL_SAND = "LEGACY_SOUL_SAND",
    LEGACY_GLOWSTONE = "LEGACY_GLOWSTONE",
    LEGACY_PORTAL = "LEGACY_PORTAL",
    LEGACY_JACK_O_LANTERN = "LEGACY_JACK_O_LANTERN",
    LEGACY_CAKE_BLOCK = "LEGACY_CAKE_BLOCK",
    LEGACY_DIODE_BLOCK_OFF = "LEGACY_DIODE_BLOCK_OFF",
    LEGACY_DIODE_BLOCK_ON = "LEGACY_DIODE_BLOCK_ON",
    LEGACY_STAINED_GLASS = "LEGACY_STAINED_GLASS",
    LEGACY_TRAP_DOOR = "LEGACY_TRAP_DOOR",
    LEGACY_MONSTER_EGGS = "LEGACY_MONSTER_EGGS",
    LEGACY_SMOOTH_BRICK = "LEGACY_SMOOTH_BRICK",
    LEGACY_HUGE_MUSHROOM_1 = "LEGACY_HUGE_MUSHROOM_1",
    LEGACY_HUGE_MUSHROOM_2 = "LEGACY_HUGE_MUSHROOM_2",
    LEGACY_IRON_FENCE = "LEGACY_IRON_FENCE",
    LEGACY_THIN_GLASS = "LEGACY_THIN_GLASS",
    LEGACY_MELON_BLOCK = "LEGACY_MELON_BLOCK",
    LEGACY_PUMPKIN_STEM = "LEGACY_PUMPKIN_STEM",
    LEGACY_MELON_STEM = "LEGACY_MELON_STEM",
    LEGACY_VINE = "LEGACY_VINE",
    LEGACY_FENCE_GATE = "LEGACY_FENCE_GATE",
    LEGACY_BRICK_STAIRS = "LEGACY_BRICK_STAIRS",
    LEGACY_SMOOTH_STAIRS = "LEGACY_SMOOTH_STAIRS",
    LEGACY_MYCEL = "LEGACY_MYCEL",
    LEGACY_WATER_LILY = "LEGACY_WATER_LILY",
    LEGACY_NETHER_BRICK = "LEGACY_NETHER_BRICK",
    LEGACY_NETHER_FENCE = "LEGACY_NETHER_FENCE",
    LEGACY_NETHER_BRICK_STAIRS = "LEGACY_NETHER_BRICK_STAIRS",
    LEGACY_NETHER_WARTS = "LEGACY_NETHER_WARTS",
    LEGACY_ENCHANTMENT_TABLE = "LEGACY_ENCHANTMENT_TABLE",
    LEGACY_BREWING_STAND = "LEGACY_BREWING_STAND",
    LEGACY_CAULDRON = "LEGACY_CAULDRON",
    LEGACY_ENDER_PORTAL = "LEGACY_ENDER_PORTAL",
    LEGACY_ENDER_PORTAL_FRAME = "LEGACY_ENDER_PORTAL_FRAME",
    LEGACY_ENDER_STONE = "LEGACY_ENDER_STONE",
    LEGACY_DRAGON_EGG = "LEGACY_DRAGON_EGG",
    LEGACY_REDSTONE_LAMP_OFF = "LEGACY_REDSTONE_LAMP_OFF",
    LEGACY_REDSTONE_LAMP_ON = "LEGACY_REDSTONE_LAMP_ON",
    LEGACY_WOOD_DOUBLE_STEP = "LEGACY_WOOD_DOUBLE_STEP",
    LEGACY_WOOD_STEP = "LEGACY_WOOD_STEP",
    LEGACY_COCOA = "LEGACY_COCOA",
    LEGACY_SANDSTONE_STAIRS = "LEGACY_SANDSTONE_STAIRS",
    LEGACY_EMERALD_ORE = "LEGACY_EMERALD_ORE",
    LEGACY_ENDER_CHEST = "LEGACY_ENDER_CHEST",
    LEGACY_TRIPWIRE_HOOK = "LEGACY_TRIPWIRE_HOOK",
    LEGACY_TRIPWIRE = "LEGACY_TRIPWIRE",
    LEGACY_EMERALD_BLOCK = "LEGACY_EMERALD_BLOCK",
    LEGACY_SPRUCE_WOOD_STAIRS = "LEGACY_SPRUCE_WOOD_STAIRS",
    LEGACY_BIRCH_WOOD_STAIRS = "LEGACY_BIRCH_WOOD_STAIRS",
    LEGACY_JUNGLE_WOOD_STAIRS = "LEGACY_JUNGLE_WOOD_STAIRS",
    LEGACY_COMMAND = "LEGACY_COMMAND",
    LEGACY_BEACON = "LEGACY_BEACON",
    LEGACY_COBBLE_WALL = "LEGACY_COBBLE_WALL",
    LEGACY_FLOWER_POT = "LEGACY_FLOWER_POT",
    LEGACY_CARROT = "LEGACY_CARROT",
    LEGACY_POTATO = "LEGACY_POTATO",
    LEGACY_WOOD_BUTTON = "LEGACY_WOOD_BUTTON",
    LEGACY_SKULL = "LEGACY_SKULL",
    LEGACY_ANVIL = "LEGACY_ANVIL",
    LEGACY_TRAPPED_CHEST = "LEGACY_TRAPPED_CHEST",
    LEGACY_GOLD_PLATE = "LEGACY_GOLD_PLATE",
    LEGACY_IRON_PLATE = "LEGACY_IRON_PLATE",
    LEGACY_REDSTONE_COMPARATOR_OFF = "LEGACY_REDSTONE_COMPARATOR_OFF",
    LEGACY_REDSTONE_COMPARATOR_ON = "LEGACY_REDSTONE_COMPARATOR_ON",
    LEGACY_DAYLIGHT_DETECTOR = "LEGACY_DAYLIGHT_DETECTOR",
    LEGACY_REDSTONE_BLOCK = "LEGACY_REDSTONE_BLOCK",
    LEGACY_QUARTZ_ORE = "LEGACY_QUARTZ_ORE",
    LEGACY_HOPPER = "LEGACY_HOPPER",
    LEGACY_QUARTZ_BLOCK = "LEGACY_QUARTZ_BLOCK",
    LEGACY_QUARTZ_STAIRS = "LEGACY_QUARTZ_STAIRS",
    LEGACY_ACTIVATOR_RAIL = "LEGACY_ACTIVATOR_RAIL",
    LEGACY_DROPPER = "LEGACY_DROPPER",
    LEGACY_STAINED_CLAY = "LEGACY_STAINED_CLAY",
    LEGACY_STAINED_GLASS_PANE = "LEGACY_STAINED_GLASS_PANE",
    LEGACY_LEAVES_2 = "LEGACY_LEAVES_2",
    LEGACY_LOG_2 = "LEGACY_LOG_2",
    LEGACY_ACACIA_STAIRS = "LEGACY_ACACIA_STAIRS",
    LEGACY_DARK_OAK_STAIRS = "LEGACY_DARK_OAK_STAIRS",
    LEGACY_SLIME_BLOCK = "LEGACY_SLIME_BLOCK",
    LEGACY_BARRIER = "LEGACY_BARRIER",
    LEGACY_IRON_TRAPDOOR = "LEGACY_IRON_TRAPDOOR",
    LEGACY_PRISMARINE = "LEGACY_PRISMARINE",
    LEGACY_SEA_LANTERN = "LEGACY_SEA_LANTERN",
    LEGACY_HAY_BLOCK = "LEGACY_HAY_BLOCK",
    LEGACY_CARPET = "LEGACY_CARPET",
    LEGACY_HARD_CLAY = "LEGACY_HARD_CLAY",
    LEGACY_COAL_BLOCK = "LEGACY_COAL_BLOCK",
    LEGACY_PACKED_ICE = "LEGACY_PACKED_ICE",
    LEGACY_DOUBLE_PLANT = "LEGACY_DOUBLE_PLANT",
    LEGACY_STANDING_BANNER = "LEGACY_STANDING_BANNER",
    LEGACY_WALL_BANNER = "LEGACY_WALL_BANNER",
    LEGACY_DAYLIGHT_DETECTOR_INVERTED = "LEGACY_DAYLIGHT_DETECTOR_INVERTED",
    LEGACY_RED_SANDSTONE = "LEGACY_RED_SANDSTONE",
    LEGACY_RED_SANDSTONE_STAIRS = "LEGACY_RED_SANDSTONE_STAIRS",
    LEGACY_DOUBLE_STONE_SLAB2 = "LEGACY_DOUBLE_STONE_SLAB2",
    LEGACY_STONE_SLAB2 = "LEGACY_STONE_SLAB2",
    LEGACY_SPRUCE_FENCE_GATE = "LEGACY_SPRUCE_FENCE_GATE",
    LEGACY_BIRCH_FENCE_GATE = "LEGACY_BIRCH_FENCE_GATE",
    LEGACY_JUNGLE_FENCE_GATE = "LEGACY_JUNGLE_FENCE_GATE",
    LEGACY_DARK_OAK_FENCE_GATE = "LEGACY_DARK_OAK_FENCE_GATE",
    LEGACY_ACACIA_FENCE_GATE = "LEGACY_ACACIA_FENCE_GATE",
    LEGACY_SPRUCE_FENCE = "LEGACY_SPRUCE_FENCE",
    LEGACY_BIRCH_FENCE = "LEGACY_BIRCH_FENCE",
    LEGACY_JUNGLE_FENCE = "LEGACY_JUNGLE_FENCE",
    LEGACY_DARK_OAK_FENCE = "LEGACY_DARK_OAK_FENCE",
    LEGACY_ACACIA_FENCE = "LEGACY_ACACIA_FENCE",
    LEGACY_SPRUCE_DOOR = "LEGACY_SPRUCE_DOOR",
    LEGACY_BIRCH_DOOR = "LEGACY_BIRCH_DOOR",
    LEGACY_JUNGLE_DOOR = "LEGACY_JUNGLE_DOOR",
    LEGACY_ACACIA_DOOR = "LEGACY_ACACIA_DOOR",
    LEGACY_DARK_OAK_DOOR = "LEGACY_DARK_OAK_DOOR",
    LEGACY_END_ROD = "LEGACY_END_ROD",
    LEGACY_CHORUS_PLANT = "LEGACY_CHORUS_PLANT",
    LEGACY_CHORUS_FLOWER = "LEGACY_CHORUS_FLOWER",
    LEGACY_PURPUR_BLOCK = "LEGACY_PURPUR_BLOCK",
    LEGACY_PURPUR_PILLAR = "LEGACY_PURPUR_PILLAR",
    LEGACY_PURPUR_STAIRS = "LEGACY_PURPUR_STAIRS",
    LEGACY_PURPUR_DOUBLE_SLAB = "LEGACY_PURPUR_DOUBLE_SLAB",
    LEGACY_PURPUR_SLAB = "LEGACY_PURPUR_SLAB",
    LEGACY_END_BRICKS = "LEGACY_END_BRICKS",
    LEGACY_BEETROOT_BLOCK = "LEGACY_BEETROOT_BLOCK",
    LEGACY_GRASS_PATH = "LEGACY_GRASS_PATH",
    LEGACY_END_GATEWAY = "LEGACY_END_GATEWAY",
    LEGACY_COMMAND_REPEATING = "LEGACY_COMMAND_REPEATING",
    LEGACY_COMMAND_CHAIN = "LEGACY_COMMAND_CHAIN",
    LEGACY_FROSTED_ICE = "LEGACY_FROSTED_ICE",
    LEGACY_MAGMA = "LEGACY_MAGMA",
    LEGACY_NETHER_WART_BLOCK = "LEGACY_NETHER_WART_BLOCK",
    LEGACY_RED_NETHER_BRICK = "LEGACY_RED_NETHER_BRICK",
    LEGACY_BONE_BLOCK = "LEGACY_BONE_BLOCK",
    LEGACY_STRUCTURE_VOID = "LEGACY_STRUCTURE_VOID",
    LEGACY_OBSERVER = "LEGACY_OBSERVER",
    LEGACY_WHITE_SHULKER_BOX = "LEGACY_WHITE_SHULKER_BOX",
    LEGACY_ORANGE_SHULKER_BOX = "LEGACY_ORANGE_SHULKER_BOX",
    LEGACY_MAGENTA_SHULKER_BOX = "LEGACY_MAGENTA_SHULKER_BOX",
    LEGACY_LIGHT_BLUE_SHULKER_BOX = "LEGACY_LIGHT_BLUE_SHULKER_BOX",
    LEGACY_YELLOW_SHULKER_BOX = "LEGACY_YELLOW_SHULKER_BOX",
    LEGACY_LIME_SHULKER_BOX = "LEGACY_LIME_SHULKER_BOX",
    LEGACY_PINK_SHULKER_BOX = "LEGACY_PINK_SHULKER_BOX",
    LEGACY_GRAY_SHULKER_BOX = "LEGACY_GRAY_SHULKER_BOX",
    LEGACY_SILVER_SHULKER_BOX = "LEGACY_SILVER_SHULKER_BOX",
    LEGACY_CYAN_SHULKER_BOX = "LEGACY_CYAN_SHULKER_BOX",
    LEGACY_PURPLE_SHULKER_BOX = "LEGACY_PURPLE_SHULKER_BOX",
    LEGACY_BLUE_SHULKER_BOX = "LEGACY_BLUE_SHULKER_BOX",
    LEGACY_BROWN_SHULKER_BOX = "LEGACY_BROWN_SHULKER_BOX",
    LEGACY_GREEN_SHULKER_BOX = "LEGACY_GREEN_SHULKER_BOX",
    LEGACY_RED_SHULKER_BOX = "LEGACY_RED_SHULKER_BOX",
    LEGACY_BLACK_SHULKER_BOX = "LEGACY_BLACK_SHULKER_BOX",
    LEGACY_WHITE_GLAZED_TERRACOTTA = "LEGACY_WHITE_GLAZED_TERRACOTTA",
    LEGACY_ORANGE_GLAZED_TERRACOTTA = "LEGACY_ORANGE_GLAZED_TERRACOTTA",
    LEGACY_MAGENTA_GLAZED_TERRACOTTA = "LEGACY_MAGENTA_GLAZED_TERRACOTTA",
    LEGACY_LIGHT_BLUE_GLAZED_TERRACOTTA = "LEGACY_LIGHT_BLUE_GLAZED_TERRACOTTA",
    LEGACY_YELLOW_GLAZED_TERRACOTTA = "LEGACY_YELLOW_GLAZED_TERRACOTTA",
    LEGACY_LIME_GLAZED_TERRACOTTA = "LEGACY_LIME_GLAZED_TERRACOTTA",
    LEGACY_PINK_GLAZED_TERRACOTTA = "LEGACY_PINK_GLAZED_TERRACOTTA",
    LEGACY_GRAY_GLAZED_TERRACOTTA = "LEGACY_GRAY_GLAZED_TERRACOTTA",
    LEGACY_SILVER_GLAZED_TERRACOTTA = "LEGACY_SILVER_GLAZED_TERRACOTTA",
    LEGACY_CYAN_GLAZED_TERRACOTTA = "LEGACY_CYAN_GLAZED_TERRACOTTA",
    LEGACY_PURPLE_GLAZED_TERRACOTTA = "LEGACY_PURPLE_GLAZED_TERRACOTTA",
    LEGACY_BLUE_GLAZED_TERRACOTTA = "LEGACY_BLUE_GLAZED_TERRACOTTA",
    LEGACY_BROWN_GLAZED_TERRACOTTA = "LEGACY_BROWN_GLAZED_TERRACOTTA",
    LEGACY_GREEN_GLAZED_TERRACOTTA = "LEGACY_GREEN_GLAZED_TERRACOTTA",
    LEGACY_RED_GLAZED_TERRACOTTA = "LEGACY_RED_GLAZED_TERRACOTTA",
    LEGACY_BLACK_GLAZED_TERRACOTTA = "LEGACY_BLACK_GLAZED_TERRACOTTA",
    LEGACY_CONCRETE = "LEGACY_CONCRETE",
    LEGACY_CONCRETE_POWDER = "LEGACY_CONCRETE_POWDER",
    LEGACY_STRUCTURE_BLOCK = "LEGACY_STRUCTURE_BLOCK",
    LEGACY_IRON_SPADE = "LEGACY_IRON_SPADE",
    LEGACY_IRON_PICKAXE = "LEGACY_IRON_PICKAXE",
    LEGACY_IRON_AXE = "LEGACY_IRON_AXE",
    LEGACY_FLINT_AND_STEEL = "LEGACY_FLINT_AND_STEEL",
    LEGACY_APPLE = "LEGACY_APPLE",
    LEGACY_BOW = "LEGACY_BOW",
    LEGACY_ARROW = "LEGACY_ARROW",
    LEGACY_COAL = "LEGACY_COAL",
    LEGACY_DIAMOND = "LEGACY_DIAMOND",
    LEGACY_IRON_INGOT = "LEGACY_IRON_INGOT",
    LEGACY_GOLD_INGOT = "LEGACY_GOLD_INGOT",
    LEGACY_IRON_SWORD = "LEGACY_IRON_SWORD",
    LEGACY_WOOD_SWORD = "LEGACY_WOOD_SWORD",
    LEGACY_WOOD_SPADE = "LEGACY_WOOD_SPADE",
    LEGACY_WOOD_PICKAXE = "LEGACY_WOOD_PICKAXE",
    LEGACY_WOOD_AXE = "LEGACY_WOOD_AXE",
    LEGACY_STONE_SWORD = "LEGACY_STONE_SWORD",
    LEGACY_STONE_SPADE = "LEGACY_STONE_SPADE",
    LEGACY_STONE_PICKAXE = "LEGACY_STONE_PICKAXE",
    LEGACY_STONE_AXE = "LEGACY_STONE_AXE",
    LEGACY_DIAMOND_SWORD = "LEGACY_DIAMOND_SWORD",
    LEGACY_DIAMOND_SPADE = "LEGACY_DIAMOND_SPADE",
    LEGACY_DIAMOND_PICKAXE = "LEGACY_DIAMOND_PICKAXE",
    LEGACY_DIAMOND_AXE = "LEGACY_DIAMOND_AXE",
    LEGACY_STICK = "LEGACY_STICK",
    LEGACY_BOWL = "LEGACY_BOWL",
    LEGACY_MUSHROOM_SOUP = "LEGACY_MUSHROOM_SOUP",
    LEGACY_GOLD_SWORD = "LEGACY_GOLD_SWORD",
    LEGACY_GOLD_SPADE = "LEGACY_GOLD_SPADE",
    LEGACY_GOLD_PICKAXE = "LEGACY_GOLD_PICKAXE",
    LEGACY_GOLD_AXE = "LEGACY_GOLD_AXE",
    LEGACY_STRING = "LEGACY_STRING",
    LEGACY_FEATHER = "LEGACY_FEATHER",
    LEGACY_SULPHUR = "LEGACY_SULPHUR",
    LEGACY_WOOD_HOE = "LEGACY_WOOD_HOE",
    LEGACY_STONE_HOE = "LEGACY_STONE_HOE",
    LEGACY_IRON_HOE = "LEGACY_IRON_HOE",
    LEGACY_DIAMOND_HOE = "LEGACY_DIAMOND_HOE",
    LEGACY_GOLD_HOE = "LEGACY_GOLD_HOE",
    LEGACY_SEEDS = "LEGACY_SEEDS",
    LEGACY_WHEAT = "LEGACY_WHEAT",
    LEGACY_BREAD = "LEGACY_BREAD",
    LEGACY_LEATHER_HELMET = "LEGACY_LEATHER_HELMET",
    LEGACY_LEATHER_CHESTPLATE = "LEGACY_LEATHER_CHESTPLATE",
    LEGACY_LEATHER_LEGGINGS = "LEGACY_LEATHER_LEGGINGS",
    LEGACY_LEATHER_BOOTS = "LEGACY_LEATHER_BOOTS",
    LEGACY_CHAINMAIL_HELMET = "LEGACY_CHAINMAIL_HELMET",
    LEGACY_CHAINMAIL_CHESTPLATE = "LEGACY_CHAINMAIL_CHESTPLATE",
    LEGACY_CHAINMAIL_LEGGINGS = "LEGACY_CHAINMAIL_LEGGINGS",
    LEGACY_CHAINMAIL_BOOTS = "LEGACY_CHAINMAIL_BOOTS",
    LEGACY_IRON_HELMET = "LEGACY_IRON_HELMET",
    LEGACY_IRON_CHESTPLATE = "LEGACY_IRON_CHESTPLATE",
    LEGACY_IRON_LEGGINGS = "LEGACY_IRON_LEGGINGS",
    LEGACY_IRON_BOOTS = "LEGACY_IRON_BOOTS",
    LEGACY_DIAMOND_HELMET = "LEGACY_DIAMOND_HELMET",
    LEGACY_DIAMOND_CHESTPLATE = "LEGACY_DIAMOND_CHESTPLATE",
    LEGACY_DIAMOND_LEGGINGS = "LEGACY_DIAMOND_LEGGINGS",
    LEGACY_DIAMOND_BOOTS = "LEGACY_DIAMOND_BOOTS",
    LEGACY_GOLD_HELMET = "LEGACY_GOLD_HELMET",
    LEGACY_GOLD_CHESTPLATE = "LEGACY_GOLD_CHESTPLATE",
    LEGACY_GOLD_LEGGINGS = "LEGACY_GOLD_LEGGINGS",
    LEGACY_GOLD_BOOTS = "LEGACY_GOLD_BOOTS",
    LEGACY_FLINT = "LEGACY_FLINT",
    LEGACY_PORK = "LEGACY_PORK",
    LEGACY_GRILLED_PORK = "LEGACY_GRILLED_PORK",
    LEGACY_PAINTING = "LEGACY_PAINTING",
    LEGACY_GOLDEN_APPLE = "LEGACY_GOLDEN_APPLE",
    LEGACY_SIGN = "LEGACY_SIGN",
    LEGACY_WOOD_DOOR = "LEGACY_WOOD_DOOR",
    LEGACY_BUCKET = "LEGACY_BUCKET",
    LEGACY_WATER_BUCKET = "LEGACY_WATER_BUCKET",
    LEGACY_LAVA_BUCKET = "LEGACY_LAVA_BUCKET",
    LEGACY_MINECART = "LEGACY_MINECART",
    LEGACY_SADDLE = "LEGACY_SADDLE",
    LEGACY_IRON_DOOR = "LEGACY_IRON_DOOR",
    LEGACY_REDSTONE = "LEGACY_REDSTONE",
    LEGACY_SNOW_BALL = "LEGACY_SNOW_BALL",
    LEGACY_BOAT = "LEGACY_BOAT",
    LEGACY_LEATHER = "LEGACY_LEATHER",
    LEGACY_MILK_BUCKET = "LEGACY_MILK_BUCKET",
    LEGACY_CLAY_BRICK = "LEGACY_CLAY_BRICK",
    LEGACY_CLAY_BALL = "LEGACY_CLAY_BALL",
    LEGACY_SUGAR_CANE = "LEGACY_SUGAR_CANE",
    LEGACY_PAPER = "LEGACY_PAPER",
    LEGACY_BOOK = "LEGACY_BOOK",
    LEGACY_SLIME_BALL = "LEGACY_SLIME_BALL",
    LEGACY_STORAGE_MINECART = "LEGACY_STORAGE_MINECART",
    LEGACY_POWERED_MINECART = "LEGACY_POWERED_MINECART",
    LEGACY_EGG = "LEGACY_EGG",
    LEGACY_COMPASS = "LEGACY_COMPASS",
    LEGACY_FISHING_ROD = "LEGACY_FISHING_ROD",
    LEGACY_WATCH = "LEGACY_WATCH",
    LEGACY_GLOWSTONE_DUST = "LEGACY_GLOWSTONE_DUST",
    LEGACY_RAW_FISH = "LEGACY_RAW_FISH",
    LEGACY_COOKED_FISH = "LEGACY_COOKED_FISH",
    LEGACY_INK_SACK = "LEGACY_INK_SACK",
    LEGACY_BONE = "LEGACY_BONE",
    LEGACY_SUGAR = "LEGACY_SUGAR",
    LEGACY_CAKE = "LEGACY_CAKE",
    LEGACY_BED = "LEGACY_BED",
    LEGACY_DIODE = "LEGACY_DIODE",
    LEGACY_COOKIE = "LEGACY_COOKIE",
    LEGACY_MAP = "LEGACY_MAP",
    LEGACY_SHEARS = "LEGACY_SHEARS",
    LEGACY_MELON = "LEGACY_MELON",
    LEGACY_PUMPKIN_SEEDS = "LEGACY_PUMPKIN_SEEDS",
    LEGACY_MELON_SEEDS = "LEGACY_MELON_SEEDS",
    LEGACY_RAW_BEEF = "LEGACY_RAW_BEEF",
    LEGACY_COOKED_BEEF = "LEGACY_COOKED_BEEF",
    LEGACY_RAW_CHICKEN = "LEGACY_RAW_CHICKEN",
    LEGACY_COOKED_CHICKEN = "LEGACY_COOKED_CHICKEN",
    LEGACY_ROTTEN_FLESH = "LEGACY_ROTTEN_FLESH",
    LEGACY_ENDER_PEARL = "LEGACY_ENDER_PEARL",
    LEGACY_BLAZE_ROD = "LEGACY_BLAZE_ROD",
    LEGACY_GHAST_TEAR = "LEGACY_GHAST_TEAR",
    LEGACY_GOLD_NUGGET = "LEGACY_GOLD_NUGGET",
    LEGACY_NETHER_STALK = "LEGACY_NETHER_STALK",
    LEGACY_POTION = "LEGACY_POTION",
    LEGACY_GLASS_BOTTLE = "LEGACY_GLASS_BOTTLE",
    LEGACY_SPIDER_EYE = "LEGACY_SPIDER_EYE",
    LEGACY_FERMENTED_SPIDER_EYE = "LEGACY_FERMENTED_SPIDER_EYE",
    LEGACY_BLAZE_POWDER = "LEGACY_BLAZE_POWDER",
    LEGACY_MAGMA_CREAM = "LEGACY_MAGMA_CREAM",
    LEGACY_BREWING_STAND_ITEM = "LEGACY_BREWING_STAND_ITEM",
    LEGACY_CAULDRON_ITEM = "LEGACY_CAULDRON_ITEM",
    LEGACY_EYE_OF_ENDER = "LEGACY_EYE_OF_ENDER",
    LEGACY_SPECKLED_MELON = "LEGACY_SPECKLED_MELON",
    LEGACY_MONSTER_EGG = "LEGACY_MONSTER_EGG",
    LEGACY_EXP_BOTTLE = "LEGACY_EXP_BOTTLE",
    LEGACY_FIREBALL = "LEGACY_FIREBALL",
    LEGACY_BOOK_AND_QUILL = "LEGACY_BOOK_AND_QUILL",
    LEGACY_WRITTEN_BOOK = "LEGACY_WRITTEN_BOOK",
    LEGACY_EMERALD = "LEGACY_EMERALD",
    LEGACY_ITEM_FRAME = "LEGACY_ITEM_FRAME",
    LEGACY_FLOWER_POT_ITEM = "LEGACY_FLOWER_POT_ITEM",
    LEGACY_CARROT_ITEM = "LEGACY_CARROT_ITEM",
    LEGACY_POTATO_ITEM = "LEGACY_POTATO_ITEM",
    LEGACY_BAKED_POTATO = "LEGACY_BAKED_POTATO",
    LEGACY_POISONOUS_POTATO = "LEGACY_POISONOUS_POTATO",
    LEGACY_EMPTY_MAP = "LEGACY_EMPTY_MAP",
    LEGACY_GOLDEN_CARROT = "LEGACY_GOLDEN_CARROT",
    LEGACY_SKULL_ITEM = "LEGACY_SKULL_ITEM",
    LEGACY_CARROT_STICK = "LEGACY_CARROT_STICK",
    LEGACY_NETHER_STAR = "LEGACY_NETHER_STAR",
    LEGACY_PUMPKIN_PIE = "LEGACY_PUMPKIN_PIE",
    LEGACY_FIREWORK = "LEGACY_FIREWORK",
    LEGACY_FIREWORK_CHARGE = "LEGACY_FIREWORK_CHARGE",
    LEGACY_ENCHANTED_BOOK = "LEGACY_ENCHANTED_BOOK",
    LEGACY_REDSTONE_COMPARATOR = "LEGACY_REDSTONE_COMPARATOR",
    LEGACY_NETHER_BRICK_ITEM = "LEGACY_NETHER_BRICK_ITEM",
    LEGACY_QUARTZ = "LEGACY_QUARTZ",
    LEGACY_EXPLOSIVE_MINECART = "LEGACY_EXPLOSIVE_MINECART",
    LEGACY_HOPPER_MINECART = "LEGACY_HOPPER_MINECART",
    LEGACY_PRISMARINE_SHARD = "LEGACY_PRISMARINE_SHARD",
    LEGACY_PRISMARINE_CRYSTALS = "LEGACY_PRISMARINE_CRYSTALS",
    LEGACY_RABBIT = "LEGACY_RABBIT",
    LEGACY_COOKED_RABBIT = "LEGACY_COOKED_RABBIT",
    LEGACY_RABBIT_STEW = "LEGACY_RABBIT_STEW",
    LEGACY_RABBIT_FOOT = "LEGACY_RABBIT_FOOT",
    LEGACY_RABBIT_HIDE = "LEGACY_RABBIT_HIDE",
    LEGACY_ARMOR_STAND = "LEGACY_ARMOR_STAND",
    LEGACY_IRON_BARDING = "LEGACY_IRON_BARDING",
    LEGACY_GOLD_BARDING = "LEGACY_GOLD_BARDING",
    LEGACY_DIAMOND_BARDING = "LEGACY_DIAMOND_BARDING",
    LEGACY_LEASH = "LEGACY_LEASH",
    LEGACY_NAME_TAG = "LEGACY_NAME_TAG",
    LEGACY_COMMAND_MINECART = "LEGACY_COMMAND_MINECART",
    LEGACY_MUTTON = "LEGACY_MUTTON",
    LEGACY_COOKED_MUTTON = "LEGACY_COOKED_MUTTON",
    LEGACY_BANNER = "LEGACY_BANNER",
    LEGACY_END_CRYSTAL = "LEGACY_END_CRYSTAL",
    LEGACY_SPRUCE_DOOR_ITEM = "LEGACY_SPRUCE_DOOR_ITEM",
    LEGACY_BIRCH_DOOR_ITEM = "LEGACY_BIRCH_DOOR_ITEM",
    LEGACY_JUNGLE_DOOR_ITEM = "LEGACY_JUNGLE_DOOR_ITEM",
    LEGACY_ACACIA_DOOR_ITEM = "LEGACY_ACACIA_DOOR_ITEM",
    LEGACY_DARK_OAK_DOOR_ITEM = "LEGACY_DARK_OAK_DOOR_ITEM",
    LEGACY_CHORUS_FRUIT = "LEGACY_CHORUS_FRUIT",
    LEGACY_CHORUS_FRUIT_POPPED = "LEGACY_CHORUS_FRUIT_POPPED",
    LEGACY_BEETROOT = "LEGACY_BEETROOT",
    LEGACY_BEETROOT_SEEDS = "LEGACY_BEETROOT_SEEDS",
    LEGACY_BEETROOT_SOUP = "LEGACY_BEETROOT_SOUP",
    LEGACY_DRAGONS_BREATH = "LEGACY_DRAGONS_BREATH",
    LEGACY_SPLASH_POTION = "LEGACY_SPLASH_POTION",
    LEGACY_SPECTRAL_ARROW = "LEGACY_SPECTRAL_ARROW",
    LEGACY_TIPPED_ARROW = "LEGACY_TIPPED_ARROW",
    LEGACY_LINGERING_POTION = "LEGACY_LINGERING_POTION",
    LEGACY_SHIELD = "LEGACY_SHIELD",
    LEGACY_ELYTRA = "LEGACY_ELYTRA",
    LEGACY_BOAT_SPRUCE = "LEGACY_BOAT_SPRUCE",
    LEGACY_BOAT_BIRCH = "LEGACY_BOAT_BIRCH",
    LEGACY_BOAT_JUNGLE = "LEGACY_BOAT_JUNGLE",
    LEGACY_BOAT_ACACIA = "LEGACY_BOAT_ACACIA",
    LEGACY_BOAT_DARK_OAK = "LEGACY_BOAT_DARK_OAK",
    LEGACY_TOTEM = "LEGACY_TOTEM",
    LEGACY_SHULKER_SHELL = "LEGACY_SHULKER_SHELL",
    LEGACY_IRON_NUGGET = "LEGACY_IRON_NUGGET",
    LEGACY_KNOWLEDGE_BOOK = "LEGACY_KNOWLEDGE_BOOK",
    LEGACY_GOLD_RECORD = "LEGACY_GOLD_RECORD",
    LEGACY_GREEN_RECORD = "LEGACY_GREEN_RECORD",
    LEGACY_RECORD_3 = "LEGACY_RECORD_3",
    LEGACY_RECORD_4 = "LEGACY_RECORD_4",
    LEGACY_RECORD_5 = "LEGACY_RECORD_5",
    LEGACY_RECORD_6 = "LEGACY_RECORD_6",
    LEGACY_RECORD_7 = "LEGACY_RECORD_7",
    LEGACY_RECORD_8 = "LEGACY_RECORD_8",
    LEGACY_RECORD_9 = "LEGACY_RECORD_9",
    LEGACY_RECORD_10 = "LEGACY_RECORD_10",
    LEGACY_RECORD_11 = "LEGACY_RECORD_11",
    LEGACY_RECORD_12 = "LEGACY_RECORD_12",
}

export interface geary$tamed {
    owner: string;
}

export type geary$become = EntityExpression;

export interface geary$holds_prefab {
    prefabKey: string;
    emptiedItem?: BaseSerializableItemStack | null;
}

export interface geary$set$block {
    blockType: BlockType;
    blockId: number;
}

export enum BlockType {
    NOTEBLOCK = "NOTEBLOCK",
    WIRE = "WIRE",
    CAVEVINE = "CAVEVINE",
    SLAB = "SLAB",
    STAIR = "STAIR",
    DOOR = "DOOR",
    TRAPDOOR = "TRAPDOOR",
    GRATE = "GRATE",
}

export type geary$on_damage_other = any;

export interface geary$prevent$riding {
}

export interface geary$get_target_block {
    maxDistance: Any;
}

export type Any = any;

export type geary$when = Base[];

export type geary$action_group = Base[];

export interface geary$backpack {
    canOpenInInventory?: boolean;
    canOpenInChest?: boolean;
    canOpenInEnderChest?: boolean;
    canOpenInBarrels?: boolean;
}

export type geary$display_name = string;

export interface geary$item_right_click {
}

export interface geary$copy_to_instances {
    temporary?: Base | null;
    persisting?: Base | null;
}

export type geary$mythic_conditions = string[];

export interface geary$smite {
}

export interface geary$on_sheared {
}

export type geary$cooldowns_complete = string[];

export interface geary$item_right_click_entity {
}

export type geary$on_fail = Base[];

export type geary$cooldowns = { [key: string]: StartedCooldown };

export interface StartedCooldown {
    endTime: number;
    length: string;
    display?: string | null;
}

export type geary$child = Any[];

export type geary$item_consumed = any;

export type geary$children = { [key: string]: Base };

export interface geary$deny_in_vanilla_recipes {
}

export interface geary$item_interact {
}

export type geary$observe = { [key: string]: ActionBase[] }

export type ULong = any;

export interface geary$prevent$interaction {
    type?: InteractionType[];
}

export enum InteractionType {
    ATTACK = "ATTACK",
    RIGHT_CLICK = "RIGHT_CLICK",
}

export type geary$bind$entity_type = string;

export interface geary$send_action_bar {
    text: Any;
}

export interface geary$max_nearby {
    amount: number;
    types?: Any;
    radius?: number;
}

export interface geary$has_consumable {
    type: BaseSerializableItemStack;
    minAmount?: number;
}

export type geary$item_drop = any;

export type geary$on_load = any;

export interface geary$play_sound {
    sound: Any;
    category?: Any;
    volume?: Any;
    pitch?: Any;
}

export type geary$gap = string;

export interface geary$set$potion_mixes {
    result?: BaseSerializableItemStack | null;
    potionmixes?: potionmix[];
}

export interface potionmix {
    input?: BaseSerializableItemStack;
    ingredient: BaseSerializableItemStack;
}

export type geary$replace_burned_drop = BaseSerializableItemStack;

export interface geary$backpack_contents {
    contents?: string[];
}

export interface geary$block_below {
    allow?: string[];
    deny?: string[];
}

export type geary$with = BaseOrString;

export interface geary$hat {
    sound?: Sound;
}

export enum Sound {
    AMBIENT_BASALT_DELTAS_ADDITIONS = "AMBIENT_BASALT_DELTAS_ADDITIONS",
    AMBIENT_BASALT_DELTAS_LOOP = "AMBIENT_BASALT_DELTAS_LOOP",
    AMBIENT_BASALT_DELTAS_MOOD = "AMBIENT_BASALT_DELTAS_MOOD",
    AMBIENT_CAVE = "AMBIENT_CAVE",
    AMBIENT_CRIMSON_FOREST_ADDITIONS = "AMBIENT_CRIMSON_FOREST_ADDITIONS",
    AMBIENT_CRIMSON_FOREST_LOOP = "AMBIENT_CRIMSON_FOREST_LOOP",
    AMBIENT_CRIMSON_FOREST_MOOD = "AMBIENT_CRIMSON_FOREST_MOOD",
    AMBIENT_NETHER_WASTES_ADDITIONS = "AMBIENT_NETHER_WASTES_ADDITIONS",
    AMBIENT_NETHER_WASTES_LOOP = "AMBIENT_NETHER_WASTES_LOOP",
    AMBIENT_NETHER_WASTES_MOOD = "AMBIENT_NETHER_WASTES_MOOD",
    AMBIENT_SOUL_SAND_VALLEY_ADDITIONS = "AMBIENT_SOUL_SAND_VALLEY_ADDITIONS",
    AMBIENT_SOUL_SAND_VALLEY_LOOP = "AMBIENT_SOUL_SAND_VALLEY_LOOP",
    AMBIENT_SOUL_SAND_VALLEY_MOOD = "AMBIENT_SOUL_SAND_VALLEY_MOOD",
    AMBIENT_UNDERWATER_ENTER = "AMBIENT_UNDERWATER_ENTER",
    AMBIENT_UNDERWATER_EXIT = "AMBIENT_UNDERWATER_EXIT",
    AMBIENT_UNDERWATER_LOOP = "AMBIENT_UNDERWATER_LOOP",
    AMBIENT_UNDERWATER_LOOP_ADDITIONS = "AMBIENT_UNDERWATER_LOOP_ADDITIONS",
    AMBIENT_UNDERWATER_LOOP_ADDITIONS_RARE = "AMBIENT_UNDERWATER_LOOP_ADDITIONS_RARE",
    AMBIENT_UNDERWATER_LOOP_ADDITIONS_ULTRA_RARE = "AMBIENT_UNDERWATER_LOOP_ADDITIONS_ULTRA_RARE",
    AMBIENT_WARPED_FOREST_ADDITIONS = "AMBIENT_WARPED_FOREST_ADDITIONS",
    AMBIENT_WARPED_FOREST_LOOP = "AMBIENT_WARPED_FOREST_LOOP",
    AMBIENT_WARPED_FOREST_MOOD = "AMBIENT_WARPED_FOREST_MOOD",
    BLOCK_AMETHYST_BLOCK_BREAK = "BLOCK_AMETHYST_BLOCK_BREAK",
    BLOCK_AMETHYST_BLOCK_CHIME = "BLOCK_AMETHYST_BLOCK_CHIME",
    BLOCK_AMETHYST_BLOCK_FALL = "BLOCK_AMETHYST_BLOCK_FALL",
    BLOCK_AMETHYST_BLOCK_HIT = "BLOCK_AMETHYST_BLOCK_HIT",
    BLOCK_AMETHYST_BLOCK_PLACE = "BLOCK_AMETHYST_BLOCK_PLACE",
    BLOCK_AMETHYST_BLOCK_RESONATE = "BLOCK_AMETHYST_BLOCK_RESONATE",
    BLOCK_AMETHYST_BLOCK_STEP = "BLOCK_AMETHYST_BLOCK_STEP",
    BLOCK_AMETHYST_CLUSTER_BREAK = "BLOCK_AMETHYST_CLUSTER_BREAK",
    BLOCK_AMETHYST_CLUSTER_FALL = "BLOCK_AMETHYST_CLUSTER_FALL",
    BLOCK_AMETHYST_CLUSTER_HIT = "BLOCK_AMETHYST_CLUSTER_HIT",
    BLOCK_AMETHYST_CLUSTER_PLACE = "BLOCK_AMETHYST_CLUSTER_PLACE",
    BLOCK_AMETHYST_CLUSTER_STEP = "BLOCK_AMETHYST_CLUSTER_STEP",
    BLOCK_ANCIENT_DEBRIS_BREAK = "BLOCK_ANCIENT_DEBRIS_BREAK",
    BLOCK_ANCIENT_DEBRIS_FALL = "BLOCK_ANCIENT_DEBRIS_FALL",
    BLOCK_ANCIENT_DEBRIS_HIT = "BLOCK_ANCIENT_DEBRIS_HIT",
    BLOCK_ANCIENT_DEBRIS_PLACE = "BLOCK_ANCIENT_DEBRIS_PLACE",
    BLOCK_ANCIENT_DEBRIS_STEP = "BLOCK_ANCIENT_DEBRIS_STEP",
    BLOCK_ANVIL_BREAK = "BLOCK_ANVIL_BREAK",
    BLOCK_ANVIL_DESTROY = "BLOCK_ANVIL_DESTROY",
    BLOCK_ANVIL_FALL = "BLOCK_ANVIL_FALL",
    BLOCK_ANVIL_HIT = "BLOCK_ANVIL_HIT",
    BLOCK_ANVIL_LAND = "BLOCK_ANVIL_LAND",
    BLOCK_ANVIL_PLACE = "BLOCK_ANVIL_PLACE",
    BLOCK_ANVIL_STEP = "BLOCK_ANVIL_STEP",
    BLOCK_ANVIL_USE = "BLOCK_ANVIL_USE",
    BLOCK_AZALEA_BREAK = "BLOCK_AZALEA_BREAK",
    BLOCK_AZALEA_FALL = "BLOCK_AZALEA_FALL",
    BLOCK_AZALEA_HIT = "BLOCK_AZALEA_HIT",
    BLOCK_AZALEA_LEAVES_BREAK = "BLOCK_AZALEA_LEAVES_BREAK",
    BLOCK_AZALEA_LEAVES_FALL = "BLOCK_AZALEA_LEAVES_FALL",
    BLOCK_AZALEA_LEAVES_HIT = "BLOCK_AZALEA_LEAVES_HIT",
    BLOCK_AZALEA_LEAVES_PLACE = "BLOCK_AZALEA_LEAVES_PLACE",
    BLOCK_AZALEA_LEAVES_STEP = "BLOCK_AZALEA_LEAVES_STEP",
    BLOCK_AZALEA_PLACE = "BLOCK_AZALEA_PLACE",
    BLOCK_AZALEA_STEP = "BLOCK_AZALEA_STEP",
    BLOCK_BAMBOO_BREAK = "BLOCK_BAMBOO_BREAK",
    BLOCK_BAMBOO_FALL = "BLOCK_BAMBOO_FALL",
    BLOCK_BAMBOO_HIT = "BLOCK_BAMBOO_HIT",
    BLOCK_BAMBOO_PLACE = "BLOCK_BAMBOO_PLACE",
    BLOCK_BAMBOO_SAPLING_BREAK = "BLOCK_BAMBOO_SAPLING_BREAK",
    BLOCK_BAMBOO_SAPLING_HIT = "BLOCK_BAMBOO_SAPLING_HIT",
    BLOCK_BAMBOO_SAPLING_PLACE = "BLOCK_BAMBOO_SAPLING_PLACE",
    BLOCK_BAMBOO_STEP = "BLOCK_BAMBOO_STEP",
    BLOCK_BAMBOO_WOOD_BREAK = "BLOCK_BAMBOO_WOOD_BREAK",
    BLOCK_BAMBOO_WOOD_BUTTON_CLICK_OFF = "BLOCK_BAMBOO_WOOD_BUTTON_CLICK_OFF",
    BLOCK_BAMBOO_WOOD_BUTTON_CLICK_ON = "BLOCK_BAMBOO_WOOD_BUTTON_CLICK_ON",
    BLOCK_BAMBOO_WOOD_DOOR_CLOSE = "BLOCK_BAMBOO_WOOD_DOOR_CLOSE",
    BLOCK_BAMBOO_WOOD_DOOR_OPEN = "BLOCK_BAMBOO_WOOD_DOOR_OPEN",
    BLOCK_BAMBOO_WOOD_FALL = "BLOCK_BAMBOO_WOOD_FALL",
    BLOCK_BAMBOO_WOOD_FENCE_GATE_CLOSE = "BLOCK_BAMBOO_WOOD_FENCE_GATE_CLOSE",
    BLOCK_BAMBOO_WOOD_FENCE_GATE_OPEN = "BLOCK_BAMBOO_WOOD_FENCE_GATE_OPEN",
    BLOCK_BAMBOO_WOOD_HANGING_SIGN_BREAK = "BLOCK_BAMBOO_WOOD_HANGING_SIGN_BREAK",
    BLOCK_BAMBOO_WOOD_HANGING_SIGN_FALL = "BLOCK_BAMBOO_WOOD_HANGING_SIGN_FALL",
    BLOCK_BAMBOO_WOOD_HANGING_SIGN_HIT = "BLOCK_BAMBOO_WOOD_HANGING_SIGN_HIT",
    BLOCK_BAMBOO_WOOD_HANGING_SIGN_PLACE = "BLOCK_BAMBOO_WOOD_HANGING_SIGN_PLACE",
    BLOCK_BAMBOO_WOOD_HANGING_SIGN_STEP = "BLOCK_BAMBOO_WOOD_HANGING_SIGN_STEP",
    BLOCK_BAMBOO_WOOD_HIT = "BLOCK_BAMBOO_WOOD_HIT",
    BLOCK_BAMBOO_WOOD_PLACE = "BLOCK_BAMBOO_WOOD_PLACE",
    BLOCK_BAMBOO_WOOD_PRESSURE_PLATE_CLICK_OFF = "BLOCK_BAMBOO_WOOD_PRESSURE_PLATE_CLICK_OFF",
    BLOCK_BAMBOO_WOOD_PRESSURE_PLATE_CLICK_ON = "BLOCK_BAMBOO_WOOD_PRESSURE_PLATE_CLICK_ON",
    BLOCK_BAMBOO_WOOD_STEP = "BLOCK_BAMBOO_WOOD_STEP",
    BLOCK_BAMBOO_WOOD_TRAPDOOR_CLOSE = "BLOCK_BAMBOO_WOOD_TRAPDOOR_CLOSE",
    BLOCK_BAMBOO_WOOD_TRAPDOOR_OPEN = "BLOCK_BAMBOO_WOOD_TRAPDOOR_OPEN",
    BLOCK_BARREL_CLOSE = "BLOCK_BARREL_CLOSE",
    BLOCK_BARREL_OPEN = "BLOCK_BARREL_OPEN",
    BLOCK_BASALT_BREAK = "BLOCK_BASALT_BREAK",
    BLOCK_BASALT_FALL = "BLOCK_BASALT_FALL",
    BLOCK_BASALT_HIT = "BLOCK_BASALT_HIT",
    BLOCK_BASALT_PLACE = "BLOCK_BASALT_PLACE",
    BLOCK_BASALT_STEP = "BLOCK_BASALT_STEP",
    BLOCK_BEACON_ACTIVATE = "BLOCK_BEACON_ACTIVATE",
    BLOCK_BEACON_AMBIENT = "BLOCK_BEACON_AMBIENT",
    BLOCK_BEACON_DEACTIVATE = "BLOCK_BEACON_DEACTIVATE",
    BLOCK_BEACON_POWER_SELECT = "BLOCK_BEACON_POWER_SELECT",
    BLOCK_BEEHIVE_DRIP = "BLOCK_BEEHIVE_DRIP",
    BLOCK_BEEHIVE_ENTER = "BLOCK_BEEHIVE_ENTER",
    BLOCK_BEEHIVE_EXIT = "BLOCK_BEEHIVE_EXIT",
    BLOCK_BEEHIVE_SHEAR = "BLOCK_BEEHIVE_SHEAR",
    BLOCK_BEEHIVE_WORK = "BLOCK_BEEHIVE_WORK",
    BLOCK_BELL_RESONATE = "BLOCK_BELL_RESONATE",
    BLOCK_BELL_USE = "BLOCK_BELL_USE",
    BLOCK_BIG_DRIPLEAF_BREAK = "BLOCK_BIG_DRIPLEAF_BREAK",
    BLOCK_BIG_DRIPLEAF_FALL = "BLOCK_BIG_DRIPLEAF_FALL",
    BLOCK_BIG_DRIPLEAF_HIT = "BLOCK_BIG_DRIPLEAF_HIT",
    BLOCK_BIG_DRIPLEAF_PLACE = "BLOCK_BIG_DRIPLEAF_PLACE",
    BLOCK_BIG_DRIPLEAF_STEP = "BLOCK_BIG_DRIPLEAF_STEP",
    BLOCK_BIG_DRIPLEAF_TILT_DOWN = "BLOCK_BIG_DRIPLEAF_TILT_DOWN",
    BLOCK_BIG_DRIPLEAF_TILT_UP = "BLOCK_BIG_DRIPLEAF_TILT_UP",
    BLOCK_BLASTFURNACE_FIRE_CRACKLE = "BLOCK_BLASTFURNACE_FIRE_CRACKLE",
    BLOCK_BONE_BLOCK_BREAK = "BLOCK_BONE_BLOCK_BREAK",
    BLOCK_BONE_BLOCK_FALL = "BLOCK_BONE_BLOCK_FALL",
    BLOCK_BONE_BLOCK_HIT = "BLOCK_BONE_BLOCK_HIT",
    BLOCK_BONE_BLOCK_PLACE = "BLOCK_BONE_BLOCK_PLACE",
    BLOCK_BONE_BLOCK_STEP = "BLOCK_BONE_BLOCK_STEP",
    BLOCK_BREWING_STAND_BREW = "BLOCK_BREWING_STAND_BREW",
    BLOCK_BUBBLE_COLUMN_BUBBLE_POP = "BLOCK_BUBBLE_COLUMN_BUBBLE_POP",
    BLOCK_BUBBLE_COLUMN_UPWARDS_AMBIENT = "BLOCK_BUBBLE_COLUMN_UPWARDS_AMBIENT",
    BLOCK_BUBBLE_COLUMN_UPWARDS_INSIDE = "BLOCK_BUBBLE_COLUMN_UPWARDS_INSIDE",
    BLOCK_BUBBLE_COLUMN_WHIRLPOOL_AMBIENT = "BLOCK_BUBBLE_COLUMN_WHIRLPOOL_AMBIENT",
    BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE = "BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE",
    BLOCK_CAKE_ADD_CANDLE = "BLOCK_CAKE_ADD_CANDLE",
    BLOCK_CALCITE_BREAK = "BLOCK_CALCITE_BREAK",
    BLOCK_CALCITE_FALL = "BLOCK_CALCITE_FALL",
    BLOCK_CALCITE_HIT = "BLOCK_CALCITE_HIT",
    BLOCK_CALCITE_PLACE = "BLOCK_CALCITE_PLACE",
    BLOCK_CALCITE_STEP = "BLOCK_CALCITE_STEP",
    BLOCK_CAMPFIRE_CRACKLE = "BLOCK_CAMPFIRE_CRACKLE",
    BLOCK_CANDLE_AMBIENT = "BLOCK_CANDLE_AMBIENT",
    BLOCK_CANDLE_BREAK = "BLOCK_CANDLE_BREAK",
    BLOCK_CANDLE_EXTINGUISH = "BLOCK_CANDLE_EXTINGUISH",
    BLOCK_CANDLE_FALL = "BLOCK_CANDLE_FALL",
    BLOCK_CANDLE_HIT = "BLOCK_CANDLE_HIT",
    BLOCK_CANDLE_PLACE = "BLOCK_CANDLE_PLACE",
    BLOCK_CANDLE_STEP = "BLOCK_CANDLE_STEP",
    BLOCK_CAVE_VINES_BREAK = "BLOCK_CAVE_VINES_BREAK",
    BLOCK_CAVE_VINES_FALL = "BLOCK_CAVE_VINES_FALL",
    BLOCK_CAVE_VINES_HIT = "BLOCK_CAVE_VINES_HIT",
    BLOCK_CAVE_VINES_PICK_BERRIES = "BLOCK_CAVE_VINES_PICK_BERRIES",
    BLOCK_CAVE_VINES_PLACE = "BLOCK_CAVE_VINES_PLACE",
    BLOCK_CAVE_VINES_STEP = "BLOCK_CAVE_VINES_STEP",
    BLOCK_CHAIN_BREAK = "BLOCK_CHAIN_BREAK",
    BLOCK_CHAIN_FALL = "BLOCK_CHAIN_FALL",
    BLOCK_CHAIN_HIT = "BLOCK_CHAIN_HIT",
    BLOCK_CHAIN_PLACE = "BLOCK_CHAIN_PLACE",
    BLOCK_CHAIN_STEP = "BLOCK_CHAIN_STEP",
    BLOCK_CHERRY_LEAVES_BREAK = "BLOCK_CHERRY_LEAVES_BREAK",
    BLOCK_CHERRY_LEAVES_FALL = "BLOCK_CHERRY_LEAVES_FALL",
    BLOCK_CHERRY_LEAVES_HIT = "BLOCK_CHERRY_LEAVES_HIT",
    BLOCK_CHERRY_LEAVES_PLACE = "BLOCK_CHERRY_LEAVES_PLACE",
    BLOCK_CHERRY_LEAVES_STEP = "BLOCK_CHERRY_LEAVES_STEP",
    BLOCK_CHERRY_SAPLING_BREAK = "BLOCK_CHERRY_SAPLING_BREAK",
    BLOCK_CHERRY_SAPLING_FALL = "BLOCK_CHERRY_SAPLING_FALL",
    BLOCK_CHERRY_SAPLING_HIT = "BLOCK_CHERRY_SAPLING_HIT",
    BLOCK_CHERRY_SAPLING_PLACE = "BLOCK_CHERRY_SAPLING_PLACE",
    BLOCK_CHERRY_SAPLING_STEP = "BLOCK_CHERRY_SAPLING_STEP",
    BLOCK_CHERRY_WOOD_BREAK = "BLOCK_CHERRY_WOOD_BREAK",
    BLOCK_CHERRY_WOOD_BUTTON_CLICK_OFF = "BLOCK_CHERRY_WOOD_BUTTON_CLICK_OFF",
    BLOCK_CHERRY_WOOD_BUTTON_CLICK_ON = "BLOCK_CHERRY_WOOD_BUTTON_CLICK_ON",
    BLOCK_CHERRY_WOOD_DOOR_CLOSE = "BLOCK_CHERRY_WOOD_DOOR_CLOSE",
    BLOCK_CHERRY_WOOD_DOOR_OPEN = "BLOCK_CHERRY_WOOD_DOOR_OPEN",
    BLOCK_CHERRY_WOOD_FALL = "BLOCK_CHERRY_WOOD_FALL",
    BLOCK_CHERRY_WOOD_FENCE_GATE_CLOSE = "BLOCK_CHERRY_WOOD_FENCE_GATE_CLOSE",
    BLOCK_CHERRY_WOOD_FENCE_GATE_OPEN = "BLOCK_CHERRY_WOOD_FENCE_GATE_OPEN",
    BLOCK_CHERRY_WOOD_HANGING_SIGN_BREAK = "BLOCK_CHERRY_WOOD_HANGING_SIGN_BREAK",
    BLOCK_CHERRY_WOOD_HANGING_SIGN_FALL = "BLOCK_CHERRY_WOOD_HANGING_SIGN_FALL",
    BLOCK_CHERRY_WOOD_HANGING_SIGN_HIT = "BLOCK_CHERRY_WOOD_HANGING_SIGN_HIT",
    BLOCK_CHERRY_WOOD_HANGING_SIGN_PLACE = "BLOCK_CHERRY_WOOD_HANGING_SIGN_PLACE",
    BLOCK_CHERRY_WOOD_HANGING_SIGN_STEP = "BLOCK_CHERRY_WOOD_HANGING_SIGN_STEP",
    BLOCK_CHERRY_WOOD_HIT = "BLOCK_CHERRY_WOOD_HIT",
    BLOCK_CHERRY_WOOD_PLACE = "BLOCK_CHERRY_WOOD_PLACE",
    BLOCK_CHERRY_WOOD_PRESSURE_PLATE_CLICK_OFF = "BLOCK_CHERRY_WOOD_PRESSURE_PLATE_CLICK_OFF",
    BLOCK_CHERRY_WOOD_PRESSURE_PLATE_CLICK_ON = "BLOCK_CHERRY_WOOD_PRESSURE_PLATE_CLICK_ON",
    BLOCK_CHERRY_WOOD_STEP = "BLOCK_CHERRY_WOOD_STEP",
    BLOCK_CHERRY_WOOD_TRAPDOOR_CLOSE = "BLOCK_CHERRY_WOOD_TRAPDOOR_CLOSE",
    BLOCK_CHERRY_WOOD_TRAPDOOR_OPEN = "BLOCK_CHERRY_WOOD_TRAPDOOR_OPEN",
    BLOCK_CHEST_CLOSE = "BLOCK_CHEST_CLOSE",
    BLOCK_CHEST_LOCKED = "BLOCK_CHEST_LOCKED",
    BLOCK_CHEST_OPEN = "BLOCK_CHEST_OPEN",
    BLOCK_CHISELED_BOOKSHELF_BREAK = "BLOCK_CHISELED_BOOKSHELF_BREAK",
    BLOCK_CHISELED_BOOKSHELF_FALL = "BLOCK_CHISELED_BOOKSHELF_FALL",
    BLOCK_CHISELED_BOOKSHELF_HIT = "BLOCK_CHISELED_BOOKSHELF_HIT",
    BLOCK_CHISELED_BOOKSHELF_INSERT = "BLOCK_CHISELED_BOOKSHELF_INSERT",
    BLOCK_CHISELED_BOOKSHELF_INSERT_ENCHANTED = "BLOCK_CHISELED_BOOKSHELF_INSERT_ENCHANTED",
    BLOCK_CHISELED_BOOKSHELF_PICKUP = "BLOCK_CHISELED_BOOKSHELF_PICKUP",
    BLOCK_CHISELED_BOOKSHELF_PICKUP_ENCHANTED = "BLOCK_CHISELED_BOOKSHELF_PICKUP_ENCHANTED",
    BLOCK_CHISELED_BOOKSHELF_PLACE = "BLOCK_CHISELED_BOOKSHELF_PLACE",
    BLOCK_CHISELED_BOOKSHELF_STEP = "BLOCK_CHISELED_BOOKSHELF_STEP",
    BLOCK_CHORUS_FLOWER_DEATH = "BLOCK_CHORUS_FLOWER_DEATH",
    BLOCK_CHORUS_FLOWER_GROW = "BLOCK_CHORUS_FLOWER_GROW",
    BLOCK_COBWEB_BREAK = "BLOCK_COBWEB_BREAK",
    BLOCK_COBWEB_FALL = "BLOCK_COBWEB_FALL",
    BLOCK_COBWEB_HIT = "BLOCK_COBWEB_HIT",
    BLOCK_COBWEB_PLACE = "BLOCK_COBWEB_PLACE",
    BLOCK_COBWEB_STEP = "BLOCK_COBWEB_STEP",
    BLOCK_COMPARATOR_CLICK = "BLOCK_COMPARATOR_CLICK",
    BLOCK_COMPOSTER_EMPTY = "BLOCK_COMPOSTER_EMPTY",
    BLOCK_COMPOSTER_FILL = "BLOCK_COMPOSTER_FILL",
    BLOCK_COMPOSTER_FILL_SUCCESS = "BLOCK_COMPOSTER_FILL_SUCCESS",
    BLOCK_COMPOSTER_READY = "BLOCK_COMPOSTER_READY",
    BLOCK_CONDUIT_ACTIVATE = "BLOCK_CONDUIT_ACTIVATE",
    BLOCK_CONDUIT_AMBIENT = "BLOCK_CONDUIT_AMBIENT",
    BLOCK_CONDUIT_AMBIENT_SHORT = "BLOCK_CONDUIT_AMBIENT_SHORT",
    BLOCK_CONDUIT_ATTACK_TARGET = "BLOCK_CONDUIT_ATTACK_TARGET",
    BLOCK_CONDUIT_DEACTIVATE = "BLOCK_CONDUIT_DEACTIVATE",
    BLOCK_COPPER_BREAK = "BLOCK_COPPER_BREAK",
    BLOCK_COPPER_BULB_BREAK = "BLOCK_COPPER_BULB_BREAK",
    BLOCK_COPPER_BULB_FALL = "BLOCK_COPPER_BULB_FALL",
    BLOCK_COPPER_BULB_HIT = "BLOCK_COPPER_BULB_HIT",
    BLOCK_COPPER_BULB_PLACE = "BLOCK_COPPER_BULB_PLACE",
    BLOCK_COPPER_BULB_STEP = "BLOCK_COPPER_BULB_STEP",
    BLOCK_COPPER_BULB_TURN_OFF = "BLOCK_COPPER_BULB_TURN_OFF",
    BLOCK_COPPER_BULB_TURN_ON = "BLOCK_COPPER_BULB_TURN_ON",
    BLOCK_COPPER_DOOR_CLOSE = "BLOCK_COPPER_DOOR_CLOSE",
    BLOCK_COPPER_DOOR_OPEN = "BLOCK_COPPER_DOOR_OPEN",
    BLOCK_COPPER_FALL = "BLOCK_COPPER_FALL",
    BLOCK_COPPER_GRATE_BREAK = "BLOCK_COPPER_GRATE_BREAK",
    BLOCK_COPPER_GRATE_FALL = "BLOCK_COPPER_GRATE_FALL",
    BLOCK_COPPER_GRATE_HIT = "BLOCK_COPPER_GRATE_HIT",
    BLOCK_COPPER_GRATE_PLACE = "BLOCK_COPPER_GRATE_PLACE",
    BLOCK_COPPER_GRATE_STEP = "BLOCK_COPPER_GRATE_STEP",
    BLOCK_COPPER_HIT = "BLOCK_COPPER_HIT",
    BLOCK_COPPER_PLACE = "BLOCK_COPPER_PLACE",
    BLOCK_COPPER_STEP = "BLOCK_COPPER_STEP",
    BLOCK_COPPER_TRAPDOOR_CLOSE = "BLOCK_COPPER_TRAPDOOR_CLOSE",
    BLOCK_COPPER_TRAPDOOR_OPEN = "BLOCK_COPPER_TRAPDOOR_OPEN",
    BLOCK_CORAL_BLOCK_BREAK = "BLOCK_CORAL_BLOCK_BREAK",
    BLOCK_CORAL_BLOCK_FALL = "BLOCK_CORAL_BLOCK_FALL",
    BLOCK_CORAL_BLOCK_HIT = "BLOCK_CORAL_BLOCK_HIT",
    BLOCK_CORAL_BLOCK_PLACE = "BLOCK_CORAL_BLOCK_PLACE",
    BLOCK_CORAL_BLOCK_STEP = "BLOCK_CORAL_BLOCK_STEP",
    BLOCK_CRAFTER_CRAFT = "BLOCK_CRAFTER_CRAFT",
    BLOCK_CRAFTER_FAIL = "BLOCK_CRAFTER_FAIL",
    BLOCK_CROP_BREAK = "BLOCK_CROP_BREAK",
    BLOCK_DECORATED_POT_BREAK = "BLOCK_DECORATED_POT_BREAK",
    BLOCK_DECORATED_POT_FALL = "BLOCK_DECORATED_POT_FALL",
    BLOCK_DECORATED_POT_HIT = "BLOCK_DECORATED_POT_HIT",
    BLOCK_DECORATED_POT_INSERT = "BLOCK_DECORATED_POT_INSERT",
    BLOCK_DECORATED_POT_INSERT_FAIL = "BLOCK_DECORATED_POT_INSERT_FAIL",
    BLOCK_DECORATED_POT_PLACE = "BLOCK_DECORATED_POT_PLACE",
    BLOCK_DECORATED_POT_SHATTER = "BLOCK_DECORATED_POT_SHATTER",
    BLOCK_DECORATED_POT_STEP = "BLOCK_DECORATED_POT_STEP",
    BLOCK_DEEPSLATE_BREAK = "BLOCK_DEEPSLATE_BREAK",
    BLOCK_DEEPSLATE_BRICKS_BREAK = "BLOCK_DEEPSLATE_BRICKS_BREAK",
    BLOCK_DEEPSLATE_BRICKS_FALL = "BLOCK_DEEPSLATE_BRICKS_FALL",
    BLOCK_DEEPSLATE_BRICKS_HIT = "BLOCK_DEEPSLATE_BRICKS_HIT",
    BLOCK_DEEPSLATE_BRICKS_PLACE = "BLOCK_DEEPSLATE_BRICKS_PLACE",
    BLOCK_DEEPSLATE_BRICKS_STEP = "BLOCK_DEEPSLATE_BRICKS_STEP",
    BLOCK_DEEPSLATE_FALL = "BLOCK_DEEPSLATE_FALL",
    BLOCK_DEEPSLATE_HIT = "BLOCK_DEEPSLATE_HIT",
    BLOCK_DEEPSLATE_PLACE = "BLOCK_DEEPSLATE_PLACE",
    BLOCK_DEEPSLATE_STEP = "BLOCK_DEEPSLATE_STEP",
    BLOCK_DEEPSLATE_TILES_BREAK = "BLOCK_DEEPSLATE_TILES_BREAK",
    BLOCK_DEEPSLATE_TILES_FALL = "BLOCK_DEEPSLATE_TILES_FALL",
    BLOCK_DEEPSLATE_TILES_HIT = "BLOCK_DEEPSLATE_TILES_HIT",
    BLOCK_DEEPSLATE_TILES_PLACE = "BLOCK_DEEPSLATE_TILES_PLACE",
    BLOCK_DEEPSLATE_TILES_STEP = "BLOCK_DEEPSLATE_TILES_STEP",
    BLOCK_DISPENSER_DISPENSE = "BLOCK_DISPENSER_DISPENSE",
    BLOCK_DISPENSER_FAIL = "BLOCK_DISPENSER_FAIL",
    BLOCK_DISPENSER_LAUNCH = "BLOCK_DISPENSER_LAUNCH",
    BLOCK_DRIPSTONE_BLOCK_BREAK = "BLOCK_DRIPSTONE_BLOCK_BREAK",
    BLOCK_DRIPSTONE_BLOCK_FALL = "BLOCK_DRIPSTONE_BLOCK_FALL",
    BLOCK_DRIPSTONE_BLOCK_HIT = "BLOCK_DRIPSTONE_BLOCK_HIT",
    BLOCK_DRIPSTONE_BLOCK_PLACE = "BLOCK_DRIPSTONE_BLOCK_PLACE",
    BLOCK_DRIPSTONE_BLOCK_STEP = "BLOCK_DRIPSTONE_BLOCK_STEP",
    BLOCK_ENCHANTMENT_TABLE_USE = "BLOCK_ENCHANTMENT_TABLE_USE",
    BLOCK_ENDER_CHEST_CLOSE = "BLOCK_ENDER_CHEST_CLOSE",
    BLOCK_ENDER_CHEST_OPEN = "BLOCK_ENDER_CHEST_OPEN",
    BLOCK_END_GATEWAY_SPAWN = "BLOCK_END_GATEWAY_SPAWN",
    BLOCK_END_PORTAL_FRAME_FILL = "BLOCK_END_PORTAL_FRAME_FILL",
    BLOCK_END_PORTAL_SPAWN = "BLOCK_END_PORTAL_SPAWN",
    BLOCK_FENCE_GATE_CLOSE = "BLOCK_FENCE_GATE_CLOSE",
    BLOCK_FENCE_GATE_OPEN = "BLOCK_FENCE_GATE_OPEN",
    BLOCK_FIRE_AMBIENT = "BLOCK_FIRE_AMBIENT",
    BLOCK_FIRE_EXTINGUISH = "BLOCK_FIRE_EXTINGUISH",
    BLOCK_FLOWERING_AZALEA_BREAK = "BLOCK_FLOWERING_AZALEA_BREAK",
    BLOCK_FLOWERING_AZALEA_FALL = "BLOCK_FLOWERING_AZALEA_FALL",
    BLOCK_FLOWERING_AZALEA_HIT = "BLOCK_FLOWERING_AZALEA_HIT",
    BLOCK_FLOWERING_AZALEA_PLACE = "BLOCK_FLOWERING_AZALEA_PLACE",
    BLOCK_FLOWERING_AZALEA_STEP = "BLOCK_FLOWERING_AZALEA_STEP",
    BLOCK_FROGLIGHT_BREAK = "BLOCK_FROGLIGHT_BREAK",
    BLOCK_FROGLIGHT_FALL = "BLOCK_FROGLIGHT_FALL",
    BLOCK_FROGLIGHT_HIT = "BLOCK_FROGLIGHT_HIT",
    BLOCK_FROGLIGHT_PLACE = "BLOCK_FROGLIGHT_PLACE",
    BLOCK_FROGLIGHT_STEP = "BLOCK_FROGLIGHT_STEP",
    BLOCK_FROGSPAWN_BREAK = "BLOCK_FROGSPAWN_BREAK",
    BLOCK_FROGSPAWN_FALL = "BLOCK_FROGSPAWN_FALL",
    BLOCK_FROGSPAWN_HATCH = "BLOCK_FROGSPAWN_HATCH",
    BLOCK_FROGSPAWN_HIT = "BLOCK_FROGSPAWN_HIT",
    BLOCK_FROGSPAWN_PLACE = "BLOCK_FROGSPAWN_PLACE",
    BLOCK_FROGSPAWN_STEP = "BLOCK_FROGSPAWN_STEP",
    BLOCK_FUNGUS_BREAK = "BLOCK_FUNGUS_BREAK",
    BLOCK_FUNGUS_FALL = "BLOCK_FUNGUS_FALL",
    BLOCK_FUNGUS_HIT = "BLOCK_FUNGUS_HIT",
    BLOCK_FUNGUS_PLACE = "BLOCK_FUNGUS_PLACE",
    BLOCK_FUNGUS_STEP = "BLOCK_FUNGUS_STEP",
    BLOCK_FURNACE_FIRE_CRACKLE = "BLOCK_FURNACE_FIRE_CRACKLE",
    BLOCK_GILDED_BLACKSTONE_BREAK = "BLOCK_GILDED_BLACKSTONE_BREAK",
    BLOCK_GILDED_BLACKSTONE_FALL = "BLOCK_GILDED_BLACKSTONE_FALL",
    BLOCK_GILDED_BLACKSTONE_HIT = "BLOCK_GILDED_BLACKSTONE_HIT",
    BLOCK_GILDED_BLACKSTONE_PLACE = "BLOCK_GILDED_BLACKSTONE_PLACE",
    BLOCK_GILDED_BLACKSTONE_STEP = "BLOCK_GILDED_BLACKSTONE_STEP",
    BLOCK_GLASS_BREAK = "BLOCK_GLASS_BREAK",
    BLOCK_GLASS_FALL = "BLOCK_GLASS_FALL",
    BLOCK_GLASS_HIT = "BLOCK_GLASS_HIT",
    BLOCK_GLASS_PLACE = "BLOCK_GLASS_PLACE",
    BLOCK_GLASS_STEP = "BLOCK_GLASS_STEP",
    BLOCK_GRASS_BREAK = "BLOCK_GRASS_BREAK",
    BLOCK_GRASS_FALL = "BLOCK_GRASS_FALL",
    BLOCK_GRASS_HIT = "BLOCK_GRASS_HIT",
    BLOCK_GRASS_PLACE = "BLOCK_GRASS_PLACE",
    BLOCK_GRASS_STEP = "BLOCK_GRASS_STEP",
    BLOCK_GRAVEL_BREAK = "BLOCK_GRAVEL_BREAK",
    BLOCK_GRAVEL_FALL = "BLOCK_GRAVEL_FALL",
    BLOCK_GRAVEL_HIT = "BLOCK_GRAVEL_HIT",
    BLOCK_GRAVEL_PLACE = "BLOCK_GRAVEL_PLACE",
    BLOCK_GRAVEL_STEP = "BLOCK_GRAVEL_STEP",
    BLOCK_GRINDSTONE_USE = "BLOCK_GRINDSTONE_USE",
    BLOCK_GROWING_PLANT_CROP = "BLOCK_GROWING_PLANT_CROP",
    BLOCK_HANGING_ROOTS_BREAK = "BLOCK_HANGING_ROOTS_BREAK",
    BLOCK_HANGING_ROOTS_FALL = "BLOCK_HANGING_ROOTS_FALL",
    BLOCK_HANGING_ROOTS_HIT = "BLOCK_HANGING_ROOTS_HIT",
    BLOCK_HANGING_ROOTS_PLACE = "BLOCK_HANGING_ROOTS_PLACE",
    BLOCK_HANGING_ROOTS_STEP = "BLOCK_HANGING_ROOTS_STEP",
    BLOCK_HANGING_SIGN_BREAK = "BLOCK_HANGING_SIGN_BREAK",
    BLOCK_HANGING_SIGN_FALL = "BLOCK_HANGING_SIGN_FALL",
    BLOCK_HANGING_SIGN_HIT = "BLOCK_HANGING_SIGN_HIT",
    BLOCK_HANGING_SIGN_PLACE = "BLOCK_HANGING_SIGN_PLACE",
    BLOCK_HANGING_SIGN_STEP = "BLOCK_HANGING_SIGN_STEP",
    BLOCK_HANGING_SIGN_WAXED_INTERACT_FAIL = "BLOCK_HANGING_SIGN_WAXED_INTERACT_FAIL",
    BLOCK_HEAVY_CORE_BREAK = "BLOCK_HEAVY_CORE_BREAK",
    BLOCK_HEAVY_CORE_FALL = "BLOCK_HEAVY_CORE_FALL",
    BLOCK_HEAVY_CORE_HIT = "BLOCK_HEAVY_CORE_HIT",
    BLOCK_HEAVY_CORE_PLACE = "BLOCK_HEAVY_CORE_PLACE",
    BLOCK_HEAVY_CORE_STEP = "BLOCK_HEAVY_CORE_STEP",
    BLOCK_HONEY_BLOCK_BREAK = "BLOCK_HONEY_BLOCK_BREAK",
    BLOCK_HONEY_BLOCK_FALL = "BLOCK_HONEY_BLOCK_FALL",
    BLOCK_HONEY_BLOCK_HIT = "BLOCK_HONEY_BLOCK_HIT",
    BLOCK_HONEY_BLOCK_PLACE = "BLOCK_HONEY_BLOCK_PLACE",
    BLOCK_HONEY_BLOCK_SLIDE = "BLOCK_HONEY_BLOCK_SLIDE",
    BLOCK_HONEY_BLOCK_STEP = "BLOCK_HONEY_BLOCK_STEP",
    BLOCK_IRON_DOOR_CLOSE = "BLOCK_IRON_DOOR_CLOSE",
    BLOCK_IRON_DOOR_OPEN = "BLOCK_IRON_DOOR_OPEN",
    BLOCK_IRON_TRAPDOOR_CLOSE = "BLOCK_IRON_TRAPDOOR_CLOSE",
    BLOCK_IRON_TRAPDOOR_OPEN = "BLOCK_IRON_TRAPDOOR_OPEN",
    BLOCK_LADDER_BREAK = "BLOCK_LADDER_BREAK",
    BLOCK_LADDER_FALL = "BLOCK_LADDER_FALL",
    BLOCK_LADDER_HIT = "BLOCK_LADDER_HIT",
    BLOCK_LADDER_PLACE = "BLOCK_LADDER_PLACE",
    BLOCK_LADDER_STEP = "BLOCK_LADDER_STEP",
    BLOCK_LANTERN_BREAK = "BLOCK_LANTERN_BREAK",
    BLOCK_LANTERN_FALL = "BLOCK_LANTERN_FALL",
    BLOCK_LANTERN_HIT = "BLOCK_LANTERN_HIT",
    BLOCK_LANTERN_PLACE = "BLOCK_LANTERN_PLACE",
    BLOCK_LANTERN_STEP = "BLOCK_LANTERN_STEP",
    BLOCK_LARGE_AMETHYST_BUD_BREAK = "BLOCK_LARGE_AMETHYST_BUD_BREAK",
    BLOCK_LARGE_AMETHYST_BUD_PLACE = "BLOCK_LARGE_AMETHYST_BUD_PLACE",
    BLOCK_LAVA_AMBIENT = "BLOCK_LAVA_AMBIENT",
    BLOCK_LAVA_EXTINGUISH = "BLOCK_LAVA_EXTINGUISH",
    BLOCK_LAVA_POP = "BLOCK_LAVA_POP",
    BLOCK_LEVER_CLICK = "BLOCK_LEVER_CLICK",
    BLOCK_LILY_PAD_PLACE = "BLOCK_LILY_PAD_PLACE",
    BLOCK_LODESTONE_BREAK = "BLOCK_LODESTONE_BREAK",
    BLOCK_LODESTONE_FALL = "BLOCK_LODESTONE_FALL",
    BLOCK_LODESTONE_HIT = "BLOCK_LODESTONE_HIT",
    BLOCK_LODESTONE_PLACE = "BLOCK_LODESTONE_PLACE",
    BLOCK_LODESTONE_STEP = "BLOCK_LODESTONE_STEP",
    BLOCK_MANGROVE_ROOTS_BREAK = "BLOCK_MANGROVE_ROOTS_BREAK",
    BLOCK_MANGROVE_ROOTS_FALL = "BLOCK_MANGROVE_ROOTS_FALL",
    BLOCK_MANGROVE_ROOTS_HIT = "BLOCK_MANGROVE_ROOTS_HIT",
    BLOCK_MANGROVE_ROOTS_PLACE = "BLOCK_MANGROVE_ROOTS_PLACE",
    BLOCK_MANGROVE_ROOTS_STEP = "BLOCK_MANGROVE_ROOTS_STEP",
    BLOCK_MEDIUM_AMETHYST_BUD_BREAK = "BLOCK_MEDIUM_AMETHYST_BUD_BREAK",
    BLOCK_MEDIUM_AMETHYST_BUD_PLACE = "BLOCK_MEDIUM_AMETHYST_BUD_PLACE",
    BLOCK_METAL_BREAK = "BLOCK_METAL_BREAK",
    BLOCK_METAL_FALL = "BLOCK_METAL_FALL",
    BLOCK_METAL_HIT = "BLOCK_METAL_HIT",
    BLOCK_METAL_PLACE = "BLOCK_METAL_PLACE",
    BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF = "BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF",
    BLOCK_METAL_PRESSURE_PLATE_CLICK_ON = "BLOCK_METAL_PRESSURE_PLATE_CLICK_ON",
    BLOCK_METAL_STEP = "BLOCK_METAL_STEP",
    BLOCK_MOSS_BREAK = "BLOCK_MOSS_BREAK",
    BLOCK_MOSS_CARPET_BREAK = "BLOCK_MOSS_CARPET_BREAK",
    BLOCK_MOSS_CARPET_FALL = "BLOCK_MOSS_CARPET_FALL",
    BLOCK_MOSS_CARPET_HIT = "BLOCK_MOSS_CARPET_HIT",
    BLOCK_MOSS_CARPET_PLACE = "BLOCK_MOSS_CARPET_PLACE",
    BLOCK_MOSS_CARPET_STEP = "BLOCK_MOSS_CARPET_STEP",
    BLOCK_MOSS_FALL = "BLOCK_MOSS_FALL",
    BLOCK_MOSS_HIT = "BLOCK_MOSS_HIT",
    BLOCK_MOSS_PLACE = "BLOCK_MOSS_PLACE",
    BLOCK_MOSS_STEP = "BLOCK_MOSS_STEP",
    BLOCK_MUDDY_MANGROVE_ROOTS_BREAK = "BLOCK_MUDDY_MANGROVE_ROOTS_BREAK",
    BLOCK_MUDDY_MANGROVE_ROOTS_FALL = "BLOCK_MUDDY_MANGROVE_ROOTS_FALL",
    BLOCK_MUDDY_MANGROVE_ROOTS_HIT = "BLOCK_MUDDY_MANGROVE_ROOTS_HIT",
    BLOCK_MUDDY_MANGROVE_ROOTS_PLACE = "BLOCK_MUDDY_MANGROVE_ROOTS_PLACE",
    BLOCK_MUDDY_MANGROVE_ROOTS_STEP = "BLOCK_MUDDY_MANGROVE_ROOTS_STEP",
    BLOCK_MUD_BREAK = "BLOCK_MUD_BREAK",
    BLOCK_MUD_BRICKS_BREAK = "BLOCK_MUD_BRICKS_BREAK",
    BLOCK_MUD_BRICKS_FALL = "BLOCK_MUD_BRICKS_FALL",
    BLOCK_MUD_BRICKS_HIT = "BLOCK_MUD_BRICKS_HIT",
    BLOCK_MUD_BRICKS_PLACE = "BLOCK_MUD_BRICKS_PLACE",
    BLOCK_MUD_BRICKS_STEP = "BLOCK_MUD_BRICKS_STEP",
    BLOCK_MUD_FALL = "BLOCK_MUD_FALL",
    BLOCK_MUD_HIT = "BLOCK_MUD_HIT",
    BLOCK_MUD_PLACE = "BLOCK_MUD_PLACE",
    BLOCK_MUD_STEP = "BLOCK_MUD_STEP",
    BLOCK_NETHERITE_BLOCK_BREAK = "BLOCK_NETHERITE_BLOCK_BREAK",
    BLOCK_NETHERITE_BLOCK_FALL = "BLOCK_NETHERITE_BLOCK_FALL",
    BLOCK_NETHERITE_BLOCK_HIT = "BLOCK_NETHERITE_BLOCK_HIT",
    BLOCK_NETHERITE_BLOCK_PLACE = "BLOCK_NETHERITE_BLOCK_PLACE",
    BLOCK_NETHERITE_BLOCK_STEP = "BLOCK_NETHERITE_BLOCK_STEP",
    BLOCK_NETHERRACK_BREAK = "BLOCK_NETHERRACK_BREAK",
    BLOCK_NETHERRACK_FALL = "BLOCK_NETHERRACK_FALL",
    BLOCK_NETHERRACK_HIT = "BLOCK_NETHERRACK_HIT",
    BLOCK_NETHERRACK_PLACE = "BLOCK_NETHERRACK_PLACE",
    BLOCK_NETHERRACK_STEP = "BLOCK_NETHERRACK_STEP",
    BLOCK_NETHER_BRICKS_BREAK = "BLOCK_NETHER_BRICKS_BREAK",
    BLOCK_NETHER_BRICKS_FALL = "BLOCK_NETHER_BRICKS_FALL",
    BLOCK_NETHER_BRICKS_HIT = "BLOCK_NETHER_BRICKS_HIT",
    BLOCK_NETHER_BRICKS_PLACE = "BLOCK_NETHER_BRICKS_PLACE",
    BLOCK_NETHER_BRICKS_STEP = "BLOCK_NETHER_BRICKS_STEP",
    BLOCK_NETHER_GOLD_ORE_BREAK = "BLOCK_NETHER_GOLD_ORE_BREAK",
    BLOCK_NETHER_GOLD_ORE_FALL = "BLOCK_NETHER_GOLD_ORE_FALL",
    BLOCK_NETHER_GOLD_ORE_HIT = "BLOCK_NETHER_GOLD_ORE_HIT",
    BLOCK_NETHER_GOLD_ORE_PLACE = "BLOCK_NETHER_GOLD_ORE_PLACE",
    BLOCK_NETHER_GOLD_ORE_STEP = "BLOCK_NETHER_GOLD_ORE_STEP",
    BLOCK_NETHER_ORE_BREAK = "BLOCK_NETHER_ORE_BREAK",
    BLOCK_NETHER_ORE_FALL = "BLOCK_NETHER_ORE_FALL",
    BLOCK_NETHER_ORE_HIT = "BLOCK_NETHER_ORE_HIT",
    BLOCK_NETHER_ORE_PLACE = "BLOCK_NETHER_ORE_PLACE",
    BLOCK_NETHER_ORE_STEP = "BLOCK_NETHER_ORE_STEP",
    BLOCK_NETHER_SPROUTS_BREAK = "BLOCK_NETHER_SPROUTS_BREAK",
    BLOCK_NETHER_SPROUTS_FALL = "BLOCK_NETHER_SPROUTS_FALL",
    BLOCK_NETHER_SPROUTS_HIT = "BLOCK_NETHER_SPROUTS_HIT",
    BLOCK_NETHER_SPROUTS_PLACE = "BLOCK_NETHER_SPROUTS_PLACE",
    BLOCK_NETHER_SPROUTS_STEP = "BLOCK_NETHER_SPROUTS_STEP",
    BLOCK_NETHER_WART_BREAK = "BLOCK_NETHER_WART_BREAK",
    BLOCK_NETHER_WOOD_BREAK = "BLOCK_NETHER_WOOD_BREAK",
    BLOCK_NETHER_WOOD_BUTTON_CLICK_OFF = "BLOCK_NETHER_WOOD_BUTTON_CLICK_OFF",
    BLOCK_NETHER_WOOD_BUTTON_CLICK_ON = "BLOCK_NETHER_WOOD_BUTTON_CLICK_ON",
    BLOCK_NETHER_WOOD_DOOR_CLOSE = "BLOCK_NETHER_WOOD_DOOR_CLOSE",
    BLOCK_NETHER_WOOD_DOOR_OPEN = "BLOCK_NETHER_WOOD_DOOR_OPEN",
    BLOCK_NETHER_WOOD_FALL = "BLOCK_NETHER_WOOD_FALL",
    BLOCK_NETHER_WOOD_FENCE_GATE_CLOSE = "BLOCK_NETHER_WOOD_FENCE_GATE_CLOSE",
    BLOCK_NETHER_WOOD_FENCE_GATE_OPEN = "BLOCK_NETHER_WOOD_FENCE_GATE_OPEN",
    BLOCK_NETHER_WOOD_HANGING_SIGN_BREAK = "BLOCK_NETHER_WOOD_HANGING_SIGN_BREAK",
    BLOCK_NETHER_WOOD_HANGING_SIGN_FALL = "BLOCK_NETHER_WOOD_HANGING_SIGN_FALL",
    BLOCK_NETHER_WOOD_HANGING_SIGN_HIT = "BLOCK_NETHER_WOOD_HANGING_SIGN_HIT",
    BLOCK_NETHER_WOOD_HANGING_SIGN_PLACE = "BLOCK_NETHER_WOOD_HANGING_SIGN_PLACE",
    BLOCK_NETHER_WOOD_HANGING_SIGN_STEP = "BLOCK_NETHER_WOOD_HANGING_SIGN_STEP",
    BLOCK_NETHER_WOOD_HIT = "BLOCK_NETHER_WOOD_HIT",
    BLOCK_NETHER_WOOD_PLACE = "BLOCK_NETHER_WOOD_PLACE",
    BLOCK_NETHER_WOOD_PRESSURE_PLATE_CLICK_OFF = "BLOCK_NETHER_WOOD_PRESSURE_PLATE_CLICK_OFF",
    BLOCK_NETHER_WOOD_PRESSURE_PLATE_CLICK_ON = "BLOCK_NETHER_WOOD_PRESSURE_PLATE_CLICK_ON",
    BLOCK_NETHER_WOOD_STEP = "BLOCK_NETHER_WOOD_STEP",
    BLOCK_NETHER_WOOD_TRAPDOOR_CLOSE = "BLOCK_NETHER_WOOD_TRAPDOOR_CLOSE",
    BLOCK_NETHER_WOOD_TRAPDOOR_OPEN = "BLOCK_NETHER_WOOD_TRAPDOOR_OPEN",
    BLOCK_NOTE_BLOCK_BANJO = "BLOCK_NOTE_BLOCK_BANJO",
    BLOCK_NOTE_BLOCK_BASEDRUM = "BLOCK_NOTE_BLOCK_BASEDRUM",
    BLOCK_NOTE_BLOCK_BASS = "BLOCK_NOTE_BLOCK_BASS",
    BLOCK_NOTE_BLOCK_BELL = "BLOCK_NOTE_BLOCK_BELL",
    BLOCK_NOTE_BLOCK_BIT = "BLOCK_NOTE_BLOCK_BIT",
    BLOCK_NOTE_BLOCK_CHIME = "BLOCK_NOTE_BLOCK_CHIME",
    BLOCK_NOTE_BLOCK_COW_BELL = "BLOCK_NOTE_BLOCK_COW_BELL",
    BLOCK_NOTE_BLOCK_DIDGERIDOO = "BLOCK_NOTE_BLOCK_DIDGERIDOO",
    BLOCK_NOTE_BLOCK_FLUTE = "BLOCK_NOTE_BLOCK_FLUTE",
    BLOCK_NOTE_BLOCK_GUITAR = "BLOCK_NOTE_BLOCK_GUITAR",
    BLOCK_NOTE_BLOCK_HARP = "BLOCK_NOTE_BLOCK_HARP",
    BLOCK_NOTE_BLOCK_HAT = "BLOCK_NOTE_BLOCK_HAT",
    BLOCK_NOTE_BLOCK_IMITATE_CREEPER = "BLOCK_NOTE_BLOCK_IMITATE_CREEPER",
    BLOCK_NOTE_BLOCK_IMITATE_ENDER_DRAGON = "BLOCK_NOTE_BLOCK_IMITATE_ENDER_DRAGON",
    BLOCK_NOTE_BLOCK_IMITATE_PIGLIN = "BLOCK_NOTE_BLOCK_IMITATE_PIGLIN",
    BLOCK_NOTE_BLOCK_IMITATE_SKELETON = "BLOCK_NOTE_BLOCK_IMITATE_SKELETON",
    BLOCK_NOTE_BLOCK_IMITATE_WITHER_SKELETON = "BLOCK_NOTE_BLOCK_IMITATE_WITHER_SKELETON",
    BLOCK_NOTE_BLOCK_IMITATE_ZOMBIE = "BLOCK_NOTE_BLOCK_IMITATE_ZOMBIE",
    BLOCK_NOTE_BLOCK_IRON_XYLOPHONE = "BLOCK_NOTE_BLOCK_IRON_XYLOPHONE",
    BLOCK_NOTE_BLOCK_PLING = "BLOCK_NOTE_BLOCK_PLING",
    BLOCK_NOTE_BLOCK_SNARE = "BLOCK_NOTE_BLOCK_SNARE",
    BLOCK_NOTE_BLOCK_XYLOPHONE = "BLOCK_NOTE_BLOCK_XYLOPHONE",
    BLOCK_NYLIUM_BREAK = "BLOCK_NYLIUM_BREAK",
    BLOCK_NYLIUM_FALL = "BLOCK_NYLIUM_FALL",
    BLOCK_NYLIUM_HIT = "BLOCK_NYLIUM_HIT",
    BLOCK_NYLIUM_PLACE = "BLOCK_NYLIUM_PLACE",
    BLOCK_NYLIUM_STEP = "BLOCK_NYLIUM_STEP",
    BLOCK_PACKED_MUD_BREAK = "BLOCK_PACKED_MUD_BREAK",
    BLOCK_PACKED_MUD_FALL = "BLOCK_PACKED_MUD_FALL",
    BLOCK_PACKED_MUD_HIT = "BLOCK_PACKED_MUD_HIT",
    BLOCK_PACKED_MUD_PLACE = "BLOCK_PACKED_MUD_PLACE",
    BLOCK_PACKED_MUD_STEP = "BLOCK_PACKED_MUD_STEP",
    BLOCK_PINK_PETALS_BREAK = "BLOCK_PINK_PETALS_BREAK",
    BLOCK_PINK_PETALS_FALL = "BLOCK_PINK_PETALS_FALL",
    BLOCK_PINK_PETALS_HIT = "BLOCK_PINK_PETALS_HIT",
    BLOCK_PINK_PETALS_PLACE = "BLOCK_PINK_PETALS_PLACE",
    BLOCK_PINK_PETALS_STEP = "BLOCK_PINK_PETALS_STEP",
    BLOCK_PISTON_CONTRACT = "BLOCK_PISTON_CONTRACT",
    BLOCK_PISTON_EXTEND = "BLOCK_PISTON_EXTEND",
    BLOCK_POINTED_DRIPSTONE_BREAK = "BLOCK_POINTED_DRIPSTONE_BREAK",
    BLOCK_POINTED_DRIPSTONE_DRIP_LAVA = "BLOCK_POINTED_DRIPSTONE_DRIP_LAVA",
    BLOCK_POINTED_DRIPSTONE_DRIP_LAVA_INTO_CAULDRON = "BLOCK_POINTED_DRIPSTONE_DRIP_LAVA_INTO_CAULDRON",
    BLOCK_POINTED_DRIPSTONE_DRIP_WATER = "BLOCK_POINTED_DRIPSTONE_DRIP_WATER",
    BLOCK_POINTED_DRIPSTONE_DRIP_WATER_INTO_CAULDRON = "BLOCK_POINTED_DRIPSTONE_DRIP_WATER_INTO_CAULDRON",
    BLOCK_POINTED_DRIPSTONE_FALL = "BLOCK_POINTED_DRIPSTONE_FALL",
    BLOCK_POINTED_DRIPSTONE_HIT = "BLOCK_POINTED_DRIPSTONE_HIT",
    BLOCK_POINTED_DRIPSTONE_LAND = "BLOCK_POINTED_DRIPSTONE_LAND",
    BLOCK_POINTED_DRIPSTONE_PLACE = "BLOCK_POINTED_DRIPSTONE_PLACE",
    BLOCK_POINTED_DRIPSTONE_STEP = "BLOCK_POINTED_DRIPSTONE_STEP",
    BLOCK_POLISHED_DEEPSLATE_BREAK = "BLOCK_POLISHED_DEEPSLATE_BREAK",
    BLOCK_POLISHED_DEEPSLATE_FALL = "BLOCK_POLISHED_DEEPSLATE_FALL",
    BLOCK_POLISHED_DEEPSLATE_HIT = "BLOCK_POLISHED_DEEPSLATE_HIT",
    BLOCK_POLISHED_DEEPSLATE_PLACE = "BLOCK_POLISHED_DEEPSLATE_PLACE",
    BLOCK_POLISHED_DEEPSLATE_STEP = "BLOCK_POLISHED_DEEPSLATE_STEP",
    BLOCK_POLISHED_TUFF_BREAK = "BLOCK_POLISHED_TUFF_BREAK",
    BLOCK_POLISHED_TUFF_FALL = "BLOCK_POLISHED_TUFF_FALL",
    BLOCK_POLISHED_TUFF_HIT = "BLOCK_POLISHED_TUFF_HIT",
    BLOCK_POLISHED_TUFF_PLACE = "BLOCK_POLISHED_TUFF_PLACE",
    BLOCK_POLISHED_TUFF_STEP = "BLOCK_POLISHED_TUFF_STEP",
    BLOCK_PORTAL_AMBIENT = "BLOCK_PORTAL_AMBIENT",
    BLOCK_PORTAL_TRAVEL = "BLOCK_PORTAL_TRAVEL",
    BLOCK_PORTAL_TRIGGER = "BLOCK_PORTAL_TRIGGER",
    BLOCK_POWDER_SNOW_BREAK = "BLOCK_POWDER_SNOW_BREAK",
    BLOCK_POWDER_SNOW_FALL = "BLOCK_POWDER_SNOW_FALL",
    BLOCK_POWDER_SNOW_HIT = "BLOCK_POWDER_SNOW_HIT",
    BLOCK_POWDER_SNOW_PLACE = "BLOCK_POWDER_SNOW_PLACE",
    BLOCK_POWDER_SNOW_STEP = "BLOCK_POWDER_SNOW_STEP",
    BLOCK_PUMPKIN_CARVE = "BLOCK_PUMPKIN_CARVE",
    BLOCK_REDSTONE_TORCH_BURNOUT = "BLOCK_REDSTONE_TORCH_BURNOUT",
    BLOCK_RESPAWN_ANCHOR_AMBIENT = "BLOCK_RESPAWN_ANCHOR_AMBIENT",
    BLOCK_RESPAWN_ANCHOR_CHARGE = "BLOCK_RESPAWN_ANCHOR_CHARGE",
    BLOCK_RESPAWN_ANCHOR_DEPLETE = "BLOCK_RESPAWN_ANCHOR_DEPLETE",
    BLOCK_RESPAWN_ANCHOR_SET_SPAWN = "BLOCK_RESPAWN_ANCHOR_SET_SPAWN",
    BLOCK_ROOTED_DIRT_BREAK = "BLOCK_ROOTED_DIRT_BREAK",
    BLOCK_ROOTED_DIRT_FALL = "BLOCK_ROOTED_DIRT_FALL",
    BLOCK_ROOTED_DIRT_HIT = "BLOCK_ROOTED_DIRT_HIT",
    BLOCK_ROOTED_DIRT_PLACE = "BLOCK_ROOTED_DIRT_PLACE",
    BLOCK_ROOTED_DIRT_STEP = "BLOCK_ROOTED_DIRT_STEP",
    BLOCK_ROOTS_BREAK = "BLOCK_ROOTS_BREAK",
    BLOCK_ROOTS_FALL = "BLOCK_ROOTS_FALL",
    BLOCK_ROOTS_HIT = "BLOCK_ROOTS_HIT",
    BLOCK_ROOTS_PLACE = "BLOCK_ROOTS_PLACE",
    BLOCK_ROOTS_STEP = "BLOCK_ROOTS_STEP",
    BLOCK_SAND_BREAK = "BLOCK_SAND_BREAK",
    BLOCK_SAND_FALL = "BLOCK_SAND_FALL",
    BLOCK_SAND_HIT = "BLOCK_SAND_HIT",
    BLOCK_SAND_PLACE = "BLOCK_SAND_PLACE",
    BLOCK_SAND_STEP = "BLOCK_SAND_STEP",
    BLOCK_SCAFFOLDING_BREAK = "BLOCK_SCAFFOLDING_BREAK",
    BLOCK_SCAFFOLDING_FALL = "BLOCK_SCAFFOLDING_FALL",
    BLOCK_SCAFFOLDING_HIT = "BLOCK_SCAFFOLDING_HIT",
    BLOCK_SCAFFOLDING_PLACE = "BLOCK_SCAFFOLDING_PLACE",
    BLOCK_SCAFFOLDING_STEP = "BLOCK_SCAFFOLDING_STEP",
    BLOCK_SCULK_BREAK = "BLOCK_SCULK_BREAK",
    BLOCK_SCULK_CATALYST_BLOOM = "BLOCK_SCULK_CATALYST_BLOOM",
    BLOCK_SCULK_CATALYST_BREAK = "BLOCK_SCULK_CATALYST_BREAK",
    BLOCK_SCULK_CATALYST_FALL = "BLOCK_SCULK_CATALYST_FALL",
    BLOCK_SCULK_CATALYST_HIT = "BLOCK_SCULK_CATALYST_HIT",
    BLOCK_SCULK_CATALYST_PLACE = "BLOCK_SCULK_CATALYST_PLACE",
    BLOCK_SCULK_CATALYST_STEP = "BLOCK_SCULK_CATALYST_STEP",
    BLOCK_SCULK_CHARGE = "BLOCK_SCULK_CHARGE",
    BLOCK_SCULK_FALL = "BLOCK_SCULK_FALL",
    BLOCK_SCULK_HIT = "BLOCK_SCULK_HIT",
    BLOCK_SCULK_PLACE = "BLOCK_SCULK_PLACE",
    BLOCK_SCULK_SENSOR_BREAK = "BLOCK_SCULK_SENSOR_BREAK",
    BLOCK_SCULK_SENSOR_CLICKING = "BLOCK_SCULK_SENSOR_CLICKING",
    BLOCK_SCULK_SENSOR_CLICKING_STOP = "BLOCK_SCULK_SENSOR_CLICKING_STOP",
    BLOCK_SCULK_SENSOR_FALL = "BLOCK_SCULK_SENSOR_FALL",
    BLOCK_SCULK_SENSOR_HIT = "BLOCK_SCULK_SENSOR_HIT",
    BLOCK_SCULK_SENSOR_PLACE = "BLOCK_SCULK_SENSOR_PLACE",
    BLOCK_SCULK_SENSOR_STEP = "BLOCK_SCULK_SENSOR_STEP",
    BLOCK_SCULK_SHRIEKER_BREAK = "BLOCK_SCULK_SHRIEKER_BREAK",
    BLOCK_SCULK_SHRIEKER_FALL = "BLOCK_SCULK_SHRIEKER_FALL",
    BLOCK_SCULK_SHRIEKER_HIT = "BLOCK_SCULK_SHRIEKER_HIT",
    BLOCK_SCULK_SHRIEKER_PLACE = "BLOCK_SCULK_SHRIEKER_PLACE",
    BLOCK_SCULK_SHRIEKER_SHRIEK = "BLOCK_SCULK_SHRIEKER_SHRIEK",
    BLOCK_SCULK_SHRIEKER_STEP = "BLOCK_SCULK_SHRIEKER_STEP",
    BLOCK_SCULK_SPREAD = "BLOCK_SCULK_SPREAD",
    BLOCK_SCULK_STEP = "BLOCK_SCULK_STEP",
    BLOCK_SCULK_VEIN_BREAK = "BLOCK_SCULK_VEIN_BREAK",
    BLOCK_SCULK_VEIN_FALL = "BLOCK_SCULK_VEIN_FALL",
    BLOCK_SCULK_VEIN_HIT = "BLOCK_SCULK_VEIN_HIT",
    BLOCK_SCULK_VEIN_PLACE = "BLOCK_SCULK_VEIN_PLACE",
    BLOCK_SCULK_VEIN_STEP = "BLOCK_SCULK_VEIN_STEP",
    BLOCK_SHROOMLIGHT_BREAK = "BLOCK_SHROOMLIGHT_BREAK",
    BLOCK_SHROOMLIGHT_FALL = "BLOCK_SHROOMLIGHT_FALL",
    BLOCK_SHROOMLIGHT_HIT = "BLOCK_SHROOMLIGHT_HIT",
    BLOCK_SHROOMLIGHT_PLACE = "BLOCK_SHROOMLIGHT_PLACE",
    BLOCK_SHROOMLIGHT_STEP = "BLOCK_SHROOMLIGHT_STEP",
    BLOCK_SHULKER_BOX_CLOSE = "BLOCK_SHULKER_BOX_CLOSE",
    BLOCK_SHULKER_BOX_OPEN = "BLOCK_SHULKER_BOX_OPEN",
    BLOCK_SIGN_WAXED_INTERACT_FAIL = "BLOCK_SIGN_WAXED_INTERACT_FAIL",
    BLOCK_SLIME_BLOCK_BREAK = "BLOCK_SLIME_BLOCK_BREAK",
    BLOCK_SLIME_BLOCK_FALL = "BLOCK_SLIME_BLOCK_FALL",
    BLOCK_SLIME_BLOCK_HIT = "BLOCK_SLIME_BLOCK_HIT",
    BLOCK_SLIME_BLOCK_PLACE = "BLOCK_SLIME_BLOCK_PLACE",
    BLOCK_SLIME_BLOCK_STEP = "BLOCK_SLIME_BLOCK_STEP",
    BLOCK_SMALL_AMETHYST_BUD_BREAK = "BLOCK_SMALL_AMETHYST_BUD_BREAK",
    BLOCK_SMALL_AMETHYST_BUD_PLACE = "BLOCK_SMALL_AMETHYST_BUD_PLACE",
    BLOCK_SMALL_DRIPLEAF_BREAK = "BLOCK_SMALL_DRIPLEAF_BREAK",
    BLOCK_SMALL_DRIPLEAF_FALL = "BLOCK_SMALL_DRIPLEAF_FALL",
    BLOCK_SMALL_DRIPLEAF_HIT = "BLOCK_SMALL_DRIPLEAF_HIT",
    BLOCK_SMALL_DRIPLEAF_PLACE = "BLOCK_SMALL_DRIPLEAF_PLACE",
    BLOCK_SMALL_DRIPLEAF_STEP = "BLOCK_SMALL_DRIPLEAF_STEP",
    BLOCK_SMITHING_TABLE_USE = "BLOCK_SMITHING_TABLE_USE",
    BLOCK_SMOKER_SMOKE = "BLOCK_SMOKER_SMOKE",
    BLOCK_SNIFFER_EGG_CRACK = "BLOCK_SNIFFER_EGG_CRACK",
    BLOCK_SNIFFER_EGG_HATCH = "BLOCK_SNIFFER_EGG_HATCH",
    BLOCK_SNIFFER_EGG_PLOP = "BLOCK_SNIFFER_EGG_PLOP",
    BLOCK_SNOW_BREAK = "BLOCK_SNOW_BREAK",
    BLOCK_SNOW_FALL = "BLOCK_SNOW_FALL",
    BLOCK_SNOW_HIT = "BLOCK_SNOW_HIT",
    BLOCK_SNOW_PLACE = "BLOCK_SNOW_PLACE",
    BLOCK_SNOW_STEP = "BLOCK_SNOW_STEP",
    BLOCK_SOUL_SAND_BREAK = "BLOCK_SOUL_SAND_BREAK",
    BLOCK_SOUL_SAND_FALL = "BLOCK_SOUL_SAND_FALL",
    BLOCK_SOUL_SAND_HIT = "BLOCK_SOUL_SAND_HIT",
    BLOCK_SOUL_SAND_PLACE = "BLOCK_SOUL_SAND_PLACE",
    BLOCK_SOUL_SAND_STEP = "BLOCK_SOUL_SAND_STEP",
    BLOCK_SOUL_SOIL_BREAK = "BLOCK_SOUL_SOIL_BREAK",
    BLOCK_SOUL_SOIL_FALL = "BLOCK_SOUL_SOIL_FALL",
    BLOCK_SOUL_SOIL_HIT = "BLOCK_SOUL_SOIL_HIT",
    BLOCK_SOUL_SOIL_PLACE = "BLOCK_SOUL_SOIL_PLACE",
    BLOCK_SOUL_SOIL_STEP = "BLOCK_SOUL_SOIL_STEP",
    BLOCK_SPONGE_ABSORB = "BLOCK_SPONGE_ABSORB",
    BLOCK_SPONGE_BREAK = "BLOCK_SPONGE_BREAK",
    BLOCK_SPONGE_FALL = "BLOCK_SPONGE_FALL",
    BLOCK_SPONGE_HIT = "BLOCK_SPONGE_HIT",
    BLOCK_SPONGE_PLACE = "BLOCK_SPONGE_PLACE",
    BLOCK_SPONGE_STEP = "BLOCK_SPONGE_STEP",
    BLOCK_SPORE_BLOSSOM_BREAK = "BLOCK_SPORE_BLOSSOM_BREAK",
    BLOCK_SPORE_BLOSSOM_FALL = "BLOCK_SPORE_BLOSSOM_FALL",
    BLOCK_SPORE_BLOSSOM_HIT = "BLOCK_SPORE_BLOSSOM_HIT",
    BLOCK_SPORE_BLOSSOM_PLACE = "BLOCK_SPORE_BLOSSOM_PLACE",
    BLOCK_SPORE_BLOSSOM_STEP = "BLOCK_SPORE_BLOSSOM_STEP",
    BLOCK_STEM_BREAK = "BLOCK_STEM_BREAK",
    BLOCK_STEM_FALL = "BLOCK_STEM_FALL",
    BLOCK_STEM_HIT = "BLOCK_STEM_HIT",
    BLOCK_STEM_PLACE = "BLOCK_STEM_PLACE",
    BLOCK_STEM_STEP = "BLOCK_STEM_STEP",
    BLOCK_STONE_BREAK = "BLOCK_STONE_BREAK",
    BLOCK_STONE_BUTTON_CLICK_OFF = "BLOCK_STONE_BUTTON_CLICK_OFF",
    BLOCK_STONE_BUTTON_CLICK_ON = "BLOCK_STONE_BUTTON_CLICK_ON",
    BLOCK_STONE_FALL = "BLOCK_STONE_FALL",
    BLOCK_STONE_HIT = "BLOCK_STONE_HIT",
    BLOCK_STONE_PLACE = "BLOCK_STONE_PLACE",
    BLOCK_STONE_PRESSURE_PLATE_CLICK_OFF = "BLOCK_STONE_PRESSURE_PLATE_CLICK_OFF",
    BLOCK_STONE_PRESSURE_PLATE_CLICK_ON = "BLOCK_STONE_PRESSURE_PLATE_CLICK_ON",
    BLOCK_STONE_STEP = "BLOCK_STONE_STEP",
    BLOCK_SUSPICIOUS_GRAVEL_BREAK = "BLOCK_SUSPICIOUS_GRAVEL_BREAK",
    BLOCK_SUSPICIOUS_GRAVEL_FALL = "BLOCK_SUSPICIOUS_GRAVEL_FALL",
    BLOCK_SUSPICIOUS_GRAVEL_HIT = "BLOCK_SUSPICIOUS_GRAVEL_HIT",
    BLOCK_SUSPICIOUS_GRAVEL_PLACE = "BLOCK_SUSPICIOUS_GRAVEL_PLACE",
    BLOCK_SUSPICIOUS_GRAVEL_STEP = "BLOCK_SUSPICIOUS_GRAVEL_STEP",
    BLOCK_SUSPICIOUS_SAND_BREAK = "BLOCK_SUSPICIOUS_SAND_BREAK",
    BLOCK_SUSPICIOUS_SAND_FALL = "BLOCK_SUSPICIOUS_SAND_FALL",
    BLOCK_SUSPICIOUS_SAND_HIT = "BLOCK_SUSPICIOUS_SAND_HIT",
    BLOCK_SUSPICIOUS_SAND_PLACE = "BLOCK_SUSPICIOUS_SAND_PLACE",
    BLOCK_SUSPICIOUS_SAND_STEP = "BLOCK_SUSPICIOUS_SAND_STEP",
    BLOCK_SWEET_BERRY_BUSH_BREAK = "BLOCK_SWEET_BERRY_BUSH_BREAK",
    BLOCK_SWEET_BERRY_BUSH_PICK_BERRIES = "BLOCK_SWEET_BERRY_BUSH_PICK_BERRIES",
    BLOCK_SWEET_BERRY_BUSH_PLACE = "BLOCK_SWEET_BERRY_BUSH_PLACE",
    BLOCK_TRIAL_SPAWNER_ABOUT_TO_SPAWN_ITEM = "BLOCK_TRIAL_SPAWNER_ABOUT_TO_SPAWN_ITEM",
    BLOCK_TRIAL_SPAWNER_AMBIENT = "BLOCK_TRIAL_SPAWNER_AMBIENT",
    BLOCK_TRIAL_SPAWNER_AMBIENT_OMINOUS = "BLOCK_TRIAL_SPAWNER_AMBIENT_OMINOUS",
    BLOCK_TRIAL_SPAWNER_BREAK = "BLOCK_TRIAL_SPAWNER_BREAK",
    BLOCK_TRIAL_SPAWNER_CLOSE_SHUTTER = "BLOCK_TRIAL_SPAWNER_CLOSE_SHUTTER",
    BLOCK_TRIAL_SPAWNER_DETECT_PLAYER = "BLOCK_TRIAL_SPAWNER_DETECT_PLAYER",
    BLOCK_TRIAL_SPAWNER_EJECT_ITEM = "BLOCK_TRIAL_SPAWNER_EJECT_ITEM",
    BLOCK_TRIAL_SPAWNER_FALL = "BLOCK_TRIAL_SPAWNER_FALL",
    BLOCK_TRIAL_SPAWNER_HIT = "BLOCK_TRIAL_SPAWNER_HIT",
    BLOCK_TRIAL_SPAWNER_OMINOUS_ACTIVATE = "BLOCK_TRIAL_SPAWNER_OMINOUS_ACTIVATE",
    BLOCK_TRIAL_SPAWNER_OPEN_SHUTTER = "BLOCK_TRIAL_SPAWNER_OPEN_SHUTTER",
    BLOCK_TRIAL_SPAWNER_PLACE = "BLOCK_TRIAL_SPAWNER_PLACE",
    BLOCK_TRIAL_SPAWNER_SPAWN_ITEM = "BLOCK_TRIAL_SPAWNER_SPAWN_ITEM",
    BLOCK_TRIAL_SPAWNER_SPAWN_ITEM_BEGIN = "BLOCK_TRIAL_SPAWNER_SPAWN_ITEM_BEGIN",
    BLOCK_TRIAL_SPAWNER_SPAWN_MOB = "BLOCK_TRIAL_SPAWNER_SPAWN_MOB",
    BLOCK_TRIAL_SPAWNER_STEP = "BLOCK_TRIAL_SPAWNER_STEP",
    BLOCK_TRIPWIRE_ATTACH = "BLOCK_TRIPWIRE_ATTACH",
    BLOCK_TRIPWIRE_CLICK_OFF = "BLOCK_TRIPWIRE_CLICK_OFF",
    BLOCK_TRIPWIRE_CLICK_ON = "BLOCK_TRIPWIRE_CLICK_ON",
    BLOCK_TRIPWIRE_DETACH = "BLOCK_TRIPWIRE_DETACH",
    BLOCK_TUFF_BREAK = "BLOCK_TUFF_BREAK",
    BLOCK_TUFF_BRICKS_BREAK = "BLOCK_TUFF_BRICKS_BREAK",
    BLOCK_TUFF_BRICKS_FALL = "BLOCK_TUFF_BRICKS_FALL",
    BLOCK_TUFF_BRICKS_HIT = "BLOCK_TUFF_BRICKS_HIT",
    BLOCK_TUFF_BRICKS_PLACE = "BLOCK_TUFF_BRICKS_PLACE",
    BLOCK_TUFF_BRICKS_STEP = "BLOCK_TUFF_BRICKS_STEP",
    BLOCK_TUFF_FALL = "BLOCK_TUFF_FALL",
    BLOCK_TUFF_HIT = "BLOCK_TUFF_HIT",
    BLOCK_TUFF_PLACE = "BLOCK_TUFF_PLACE",
    BLOCK_TUFF_STEP = "BLOCK_TUFF_STEP",
    BLOCK_VAULT_ACTIVATE = "BLOCK_VAULT_ACTIVATE",
    BLOCK_VAULT_AMBIENT = "BLOCK_VAULT_AMBIENT",
    BLOCK_VAULT_BREAK = "BLOCK_VAULT_BREAK",
    BLOCK_VAULT_CLOSE_SHUTTER = "BLOCK_VAULT_CLOSE_SHUTTER",
    BLOCK_VAULT_DEACTIVATE = "BLOCK_VAULT_DEACTIVATE",
    BLOCK_VAULT_EJECT_ITEM = "BLOCK_VAULT_EJECT_ITEM",
    BLOCK_VAULT_FALL = "BLOCK_VAULT_FALL",
    BLOCK_VAULT_HIT = "BLOCK_VAULT_HIT",
    BLOCK_VAULT_INSERT_ITEM = "BLOCK_VAULT_INSERT_ITEM",
    BLOCK_VAULT_INSERT_ITEM_FAIL = "BLOCK_VAULT_INSERT_ITEM_FAIL",
    BLOCK_VAULT_OPEN_SHUTTER = "BLOCK_VAULT_OPEN_SHUTTER",
    BLOCK_VAULT_PLACE = "BLOCK_VAULT_PLACE",
    BLOCK_VAULT_REJECT_REWARDED_PLAYER = "BLOCK_VAULT_REJECT_REWARDED_PLAYER",
    BLOCK_VAULT_STEP = "BLOCK_VAULT_STEP",
    BLOCK_VINE_BREAK = "BLOCK_VINE_BREAK",
    BLOCK_VINE_FALL = "BLOCK_VINE_FALL",
    BLOCK_VINE_HIT = "BLOCK_VINE_HIT",
    BLOCK_VINE_PLACE = "BLOCK_VINE_PLACE",
    BLOCK_VINE_STEP = "BLOCK_VINE_STEP",
    BLOCK_WART_BLOCK_BREAK = "BLOCK_WART_BLOCK_BREAK",
    BLOCK_WART_BLOCK_FALL = "BLOCK_WART_BLOCK_FALL",
    BLOCK_WART_BLOCK_HIT = "BLOCK_WART_BLOCK_HIT",
    BLOCK_WART_BLOCK_PLACE = "BLOCK_WART_BLOCK_PLACE",
    BLOCK_WART_BLOCK_STEP = "BLOCK_WART_BLOCK_STEP",
    BLOCK_WATER_AMBIENT = "BLOCK_WATER_AMBIENT",
    BLOCK_WEEPING_VINES_BREAK = "BLOCK_WEEPING_VINES_BREAK",
    BLOCK_WEEPING_VINES_FALL = "BLOCK_WEEPING_VINES_FALL",
    BLOCK_WEEPING_VINES_HIT = "BLOCK_WEEPING_VINES_HIT",
    BLOCK_WEEPING_VINES_PLACE = "BLOCK_WEEPING_VINES_PLACE",
    BLOCK_WEEPING_VINES_STEP = "BLOCK_WEEPING_VINES_STEP",
    BLOCK_WET_GRASS_BREAK = "BLOCK_WET_GRASS_BREAK",
    BLOCK_WET_GRASS_FALL = "BLOCK_WET_GRASS_FALL",
    BLOCK_WET_GRASS_HIT = "BLOCK_WET_GRASS_HIT",
    BLOCK_WET_GRASS_PLACE = "BLOCK_WET_GRASS_PLACE",
    BLOCK_WET_GRASS_STEP = "BLOCK_WET_GRASS_STEP",
    BLOCK_WET_SPONGE_BREAK = "BLOCK_WET_SPONGE_BREAK",
    BLOCK_WET_SPONGE_DRIES = "BLOCK_WET_SPONGE_DRIES",
    BLOCK_WET_SPONGE_FALL = "BLOCK_WET_SPONGE_FALL",
    BLOCK_WET_SPONGE_HIT = "BLOCK_WET_SPONGE_HIT",
    BLOCK_WET_SPONGE_PLACE = "BLOCK_WET_SPONGE_PLACE",
    BLOCK_WET_SPONGE_STEP = "BLOCK_WET_SPONGE_STEP",
    BLOCK_WOODEN_BUTTON_CLICK_OFF = "BLOCK_WOODEN_BUTTON_CLICK_OFF",
    BLOCK_WOODEN_BUTTON_CLICK_ON = "BLOCK_WOODEN_BUTTON_CLICK_ON",
    BLOCK_WOODEN_DOOR_CLOSE = "BLOCK_WOODEN_DOOR_CLOSE",
    BLOCK_WOODEN_DOOR_OPEN = "BLOCK_WOODEN_DOOR_OPEN",
    BLOCK_WOODEN_PRESSURE_PLATE_CLICK_OFF = "BLOCK_WOODEN_PRESSURE_PLATE_CLICK_OFF",
    BLOCK_WOODEN_PRESSURE_PLATE_CLICK_ON = "BLOCK_WOODEN_PRESSURE_PLATE_CLICK_ON",
    BLOCK_WOODEN_TRAPDOOR_CLOSE = "BLOCK_WOODEN_TRAPDOOR_CLOSE",
    BLOCK_WOODEN_TRAPDOOR_OPEN = "BLOCK_WOODEN_TRAPDOOR_OPEN",
    BLOCK_WOOD_BREAK = "BLOCK_WOOD_BREAK",
    BLOCK_WOOD_FALL = "BLOCK_WOOD_FALL",
    BLOCK_WOOD_HIT = "BLOCK_WOOD_HIT",
    BLOCK_WOOD_PLACE = "BLOCK_WOOD_PLACE",
    BLOCK_WOOD_STEP = "BLOCK_WOOD_STEP",
    BLOCK_WOOL_BREAK = "BLOCK_WOOL_BREAK",
    BLOCK_WOOL_FALL = "BLOCK_WOOL_FALL",
    BLOCK_WOOL_HIT = "BLOCK_WOOL_HIT",
    BLOCK_WOOL_PLACE = "BLOCK_WOOL_PLACE",
    BLOCK_WOOL_STEP = "BLOCK_WOOL_STEP",
    ENCHANT_THORNS_HIT = "ENCHANT_THORNS_HIT",
    ENTITY_ALLAY_AMBIENT_WITHOUT_ITEM = "ENTITY_ALLAY_AMBIENT_WITHOUT_ITEM",
    ENTITY_ALLAY_AMBIENT_WITH_ITEM = "ENTITY_ALLAY_AMBIENT_WITH_ITEM",
    ENTITY_ALLAY_DEATH = "ENTITY_ALLAY_DEATH",
    ENTITY_ALLAY_HURT = "ENTITY_ALLAY_HURT",
    ENTITY_ALLAY_ITEM_GIVEN = "ENTITY_ALLAY_ITEM_GIVEN",
    ENTITY_ALLAY_ITEM_TAKEN = "ENTITY_ALLAY_ITEM_TAKEN",
    ENTITY_ALLAY_ITEM_THROWN = "ENTITY_ALLAY_ITEM_THROWN",
    ENTITY_ARMADILLO_AMBIENT = "ENTITY_ARMADILLO_AMBIENT",
    ENTITY_ARMADILLO_BRUSH = "ENTITY_ARMADILLO_BRUSH",
    ENTITY_ARMADILLO_DEATH = "ENTITY_ARMADILLO_DEATH",
    ENTITY_ARMADILLO_EAT = "ENTITY_ARMADILLO_EAT",
    ENTITY_ARMADILLO_HURT = "ENTITY_ARMADILLO_HURT",
    ENTITY_ARMADILLO_HURT_REDUCED = "ENTITY_ARMADILLO_HURT_REDUCED",
    ENTITY_ARMADILLO_LAND = "ENTITY_ARMADILLO_LAND",
    ENTITY_ARMADILLO_PEEK = "ENTITY_ARMADILLO_PEEK",
    ENTITY_ARMADILLO_ROLL = "ENTITY_ARMADILLO_ROLL",
    ENTITY_ARMADILLO_SCUTE_DROP = "ENTITY_ARMADILLO_SCUTE_DROP",
    ENTITY_ARMADILLO_STEP = "ENTITY_ARMADILLO_STEP",
    ENTITY_ARMADILLO_UNROLL_FINISH = "ENTITY_ARMADILLO_UNROLL_FINISH",
    ENTITY_ARMADILLO_UNROLL_START = "ENTITY_ARMADILLO_UNROLL_START",
    ENTITY_ARMOR_STAND_BREAK = "ENTITY_ARMOR_STAND_BREAK",
    ENTITY_ARMOR_STAND_FALL = "ENTITY_ARMOR_STAND_FALL",
    ENTITY_ARMOR_STAND_HIT = "ENTITY_ARMOR_STAND_HIT",
    ENTITY_ARMOR_STAND_PLACE = "ENTITY_ARMOR_STAND_PLACE",
    ENTITY_ARROW_HIT = "ENTITY_ARROW_HIT",
    ENTITY_ARROW_HIT_PLAYER = "ENTITY_ARROW_HIT_PLAYER",
    ENTITY_ARROW_SHOOT = "ENTITY_ARROW_SHOOT",
    ENTITY_AXOLOTL_ATTACK = "ENTITY_AXOLOTL_ATTACK",
    ENTITY_AXOLOTL_DEATH = "ENTITY_AXOLOTL_DEATH",
    ENTITY_AXOLOTL_HURT = "ENTITY_AXOLOTL_HURT",
    ENTITY_AXOLOTL_IDLE_AIR = "ENTITY_AXOLOTL_IDLE_AIR",
    ENTITY_AXOLOTL_IDLE_WATER = "ENTITY_AXOLOTL_IDLE_WATER",
    ENTITY_AXOLOTL_SPLASH = "ENTITY_AXOLOTL_SPLASH",
    ENTITY_AXOLOTL_SWIM = "ENTITY_AXOLOTL_SWIM",
    ENTITY_BAT_AMBIENT = "ENTITY_BAT_AMBIENT",
    ENTITY_BAT_DEATH = "ENTITY_BAT_DEATH",
    ENTITY_BAT_HURT = "ENTITY_BAT_HURT",
    ENTITY_BAT_LOOP = "ENTITY_BAT_LOOP",
    ENTITY_BAT_TAKEOFF = "ENTITY_BAT_TAKEOFF",
    ENTITY_BEE_DEATH = "ENTITY_BEE_DEATH",
    ENTITY_BEE_HURT = "ENTITY_BEE_HURT",
    ENTITY_BEE_LOOP = "ENTITY_BEE_LOOP",
    ENTITY_BEE_LOOP_AGGRESSIVE = "ENTITY_BEE_LOOP_AGGRESSIVE",
    ENTITY_BEE_POLLINATE = "ENTITY_BEE_POLLINATE",
    ENTITY_BEE_STING = "ENTITY_BEE_STING",
    ENTITY_BLAZE_AMBIENT = "ENTITY_BLAZE_AMBIENT",
    ENTITY_BLAZE_BURN = "ENTITY_BLAZE_BURN",
    ENTITY_BLAZE_DEATH = "ENTITY_BLAZE_DEATH",
    ENTITY_BLAZE_HURT = "ENTITY_BLAZE_HURT",
    ENTITY_BLAZE_SHOOT = "ENTITY_BLAZE_SHOOT",
    ENTITY_BOAT_PADDLE_LAND = "ENTITY_BOAT_PADDLE_LAND",
    ENTITY_BOAT_PADDLE_WATER = "ENTITY_BOAT_PADDLE_WATER",
    ENTITY_BOGGED_AMBIENT = "ENTITY_BOGGED_AMBIENT",
    ENTITY_BOGGED_DEATH = "ENTITY_BOGGED_DEATH",
    ENTITY_BOGGED_HURT = "ENTITY_BOGGED_HURT",
    ENTITY_BOGGED_SHEAR = "ENTITY_BOGGED_SHEAR",
    ENTITY_BOGGED_STEP = "ENTITY_BOGGED_STEP",
    ENTITY_BREEZE_CHARGE = "ENTITY_BREEZE_CHARGE",
    ENTITY_BREEZE_DEATH = "ENTITY_BREEZE_DEATH",
    ENTITY_BREEZE_DEFLECT = "ENTITY_BREEZE_DEFLECT",
    ENTITY_BREEZE_HURT = "ENTITY_BREEZE_HURT",
    ENTITY_BREEZE_IDLE_AIR = "ENTITY_BREEZE_IDLE_AIR",
    ENTITY_BREEZE_IDLE_GROUND = "ENTITY_BREEZE_IDLE_GROUND",
    ENTITY_BREEZE_INHALE = "ENTITY_BREEZE_INHALE",
    ENTITY_BREEZE_JUMP = "ENTITY_BREEZE_JUMP",
    ENTITY_BREEZE_LAND = "ENTITY_BREEZE_LAND",
    ENTITY_BREEZE_SHOOT = "ENTITY_BREEZE_SHOOT",
    ENTITY_BREEZE_SLIDE = "ENTITY_BREEZE_SLIDE",
    ENTITY_BREEZE_WHIRL = "ENTITY_BREEZE_WHIRL",
    ENTITY_BREEZE_WIND_BURST = "ENTITY_BREEZE_WIND_BURST",
    ENTITY_CAMEL_AMBIENT = "ENTITY_CAMEL_AMBIENT",
    ENTITY_CAMEL_DASH = "ENTITY_CAMEL_DASH",
    ENTITY_CAMEL_DASH_READY = "ENTITY_CAMEL_DASH_READY",
    ENTITY_CAMEL_DEATH = "ENTITY_CAMEL_DEATH",
    ENTITY_CAMEL_EAT = "ENTITY_CAMEL_EAT",
    ENTITY_CAMEL_HURT = "ENTITY_CAMEL_HURT",
    ENTITY_CAMEL_SADDLE = "ENTITY_CAMEL_SADDLE",
    ENTITY_CAMEL_SIT = "ENTITY_CAMEL_SIT",
    ENTITY_CAMEL_STAND = "ENTITY_CAMEL_STAND",
    ENTITY_CAMEL_STEP = "ENTITY_CAMEL_STEP",
    ENTITY_CAMEL_STEP_SAND = "ENTITY_CAMEL_STEP_SAND",
    ENTITY_CAT_AMBIENT = "ENTITY_CAT_AMBIENT",
    ENTITY_CAT_BEG_FOR_FOOD = "ENTITY_CAT_BEG_FOR_FOOD",
    ENTITY_CAT_DEATH = "ENTITY_CAT_DEATH",
    ENTITY_CAT_EAT = "ENTITY_CAT_EAT",
    ENTITY_CAT_HISS = "ENTITY_CAT_HISS",
    ENTITY_CAT_HURT = "ENTITY_CAT_HURT",
    ENTITY_CAT_PURR = "ENTITY_CAT_PURR",
    ENTITY_CAT_PURREOW = "ENTITY_CAT_PURREOW",
    ENTITY_CAT_STRAY_AMBIENT = "ENTITY_CAT_STRAY_AMBIENT",
    ENTITY_CHICKEN_AMBIENT = "ENTITY_CHICKEN_AMBIENT",
    ENTITY_CHICKEN_DEATH = "ENTITY_CHICKEN_DEATH",
    ENTITY_CHICKEN_EGG = "ENTITY_CHICKEN_EGG",
    ENTITY_CHICKEN_HURT = "ENTITY_CHICKEN_HURT",
    ENTITY_CHICKEN_STEP = "ENTITY_CHICKEN_STEP",
    ENTITY_COD_AMBIENT = "ENTITY_COD_AMBIENT",
    ENTITY_COD_DEATH = "ENTITY_COD_DEATH",
    ENTITY_COD_FLOP = "ENTITY_COD_FLOP",
    ENTITY_COD_HURT = "ENTITY_COD_HURT",
    ENTITY_COW_AMBIENT = "ENTITY_COW_AMBIENT",
    ENTITY_COW_DEATH = "ENTITY_COW_DEATH",
    ENTITY_COW_HURT = "ENTITY_COW_HURT",
    ENTITY_COW_MILK = "ENTITY_COW_MILK",
    ENTITY_COW_STEP = "ENTITY_COW_STEP",
    ENTITY_CREEPER_DEATH = "ENTITY_CREEPER_DEATH",
    ENTITY_CREEPER_HURT = "ENTITY_CREEPER_HURT",
    ENTITY_CREEPER_PRIMED = "ENTITY_CREEPER_PRIMED",
    ENTITY_DOLPHIN_AMBIENT = "ENTITY_DOLPHIN_AMBIENT",
    ENTITY_DOLPHIN_AMBIENT_WATER = "ENTITY_DOLPHIN_AMBIENT_WATER",
    ENTITY_DOLPHIN_ATTACK = "ENTITY_DOLPHIN_ATTACK",
    ENTITY_DOLPHIN_DEATH = "ENTITY_DOLPHIN_DEATH",
    ENTITY_DOLPHIN_EAT = "ENTITY_DOLPHIN_EAT",
    ENTITY_DOLPHIN_HURT = "ENTITY_DOLPHIN_HURT",
    ENTITY_DOLPHIN_JUMP = "ENTITY_DOLPHIN_JUMP",
    ENTITY_DOLPHIN_PLAY = "ENTITY_DOLPHIN_PLAY",
    ENTITY_DOLPHIN_SPLASH = "ENTITY_DOLPHIN_SPLASH",
    ENTITY_DOLPHIN_SWIM = "ENTITY_DOLPHIN_SWIM",
    ENTITY_DONKEY_AMBIENT = "ENTITY_DONKEY_AMBIENT",
    ENTITY_DONKEY_ANGRY = "ENTITY_DONKEY_ANGRY",
    ENTITY_DONKEY_CHEST = "ENTITY_DONKEY_CHEST",
    ENTITY_DONKEY_DEATH = "ENTITY_DONKEY_DEATH",
    ENTITY_DONKEY_EAT = "ENTITY_DONKEY_EAT",
    ENTITY_DONKEY_HURT = "ENTITY_DONKEY_HURT",
    ENTITY_DONKEY_JUMP = "ENTITY_DONKEY_JUMP",
    ENTITY_DRAGON_FIREBALL_EXPLODE = "ENTITY_DRAGON_FIREBALL_EXPLODE",
    ENTITY_DROWNED_AMBIENT = "ENTITY_DROWNED_AMBIENT",
    ENTITY_DROWNED_AMBIENT_WATER = "ENTITY_DROWNED_AMBIENT_WATER",
    ENTITY_DROWNED_DEATH = "ENTITY_DROWNED_DEATH",
    ENTITY_DROWNED_DEATH_WATER = "ENTITY_DROWNED_DEATH_WATER",
    ENTITY_DROWNED_HURT = "ENTITY_DROWNED_HURT",
    ENTITY_DROWNED_HURT_WATER = "ENTITY_DROWNED_HURT_WATER",
    ENTITY_DROWNED_SHOOT = "ENTITY_DROWNED_SHOOT",
    ENTITY_DROWNED_STEP = "ENTITY_DROWNED_STEP",
    ENTITY_DROWNED_SWIM = "ENTITY_DROWNED_SWIM",
    ENTITY_EGG_THROW = "ENTITY_EGG_THROW",
    ENTITY_ELDER_GUARDIAN_AMBIENT = "ENTITY_ELDER_GUARDIAN_AMBIENT",
    ENTITY_ELDER_GUARDIAN_AMBIENT_LAND = "ENTITY_ELDER_GUARDIAN_AMBIENT_LAND",
    ENTITY_ELDER_GUARDIAN_CURSE = "ENTITY_ELDER_GUARDIAN_CURSE",
    ENTITY_ELDER_GUARDIAN_DEATH = "ENTITY_ELDER_GUARDIAN_DEATH",
    ENTITY_ELDER_GUARDIAN_DEATH_LAND = "ENTITY_ELDER_GUARDIAN_DEATH_LAND",
    ENTITY_ELDER_GUARDIAN_FLOP = "ENTITY_ELDER_GUARDIAN_FLOP",
    ENTITY_ELDER_GUARDIAN_HURT = "ENTITY_ELDER_GUARDIAN_HURT",
    ENTITY_ELDER_GUARDIAN_HURT_LAND = "ENTITY_ELDER_GUARDIAN_HURT_LAND",
    ENTITY_ENDERMAN_AMBIENT = "ENTITY_ENDERMAN_AMBIENT",
    ENTITY_ENDERMAN_DEATH = "ENTITY_ENDERMAN_DEATH",
    ENTITY_ENDERMAN_HURT = "ENTITY_ENDERMAN_HURT",
    ENTITY_ENDERMAN_SCREAM = "ENTITY_ENDERMAN_SCREAM",
    ENTITY_ENDERMAN_STARE = "ENTITY_ENDERMAN_STARE",
    ENTITY_ENDERMAN_TELEPORT = "ENTITY_ENDERMAN_TELEPORT",
    ENTITY_ENDERMITE_AMBIENT = "ENTITY_ENDERMITE_AMBIENT",
    ENTITY_ENDERMITE_DEATH = "ENTITY_ENDERMITE_DEATH",
    ENTITY_ENDERMITE_HURT = "ENTITY_ENDERMITE_HURT",
    ENTITY_ENDERMITE_STEP = "ENTITY_ENDERMITE_STEP",
    ENTITY_ENDER_DRAGON_AMBIENT = "ENTITY_ENDER_DRAGON_AMBIENT",
    ENTITY_ENDER_DRAGON_DEATH = "ENTITY_ENDER_DRAGON_DEATH",
    ENTITY_ENDER_DRAGON_FLAP = "ENTITY_ENDER_DRAGON_FLAP",
    ENTITY_ENDER_DRAGON_GROWL = "ENTITY_ENDER_DRAGON_GROWL",
    ENTITY_ENDER_DRAGON_HURT = "ENTITY_ENDER_DRAGON_HURT",
    ENTITY_ENDER_DRAGON_SHOOT = "ENTITY_ENDER_DRAGON_SHOOT",
    ENTITY_ENDER_EYE_DEATH = "ENTITY_ENDER_EYE_DEATH",
    ENTITY_ENDER_EYE_LAUNCH = "ENTITY_ENDER_EYE_LAUNCH",
    ENTITY_ENDER_PEARL_THROW = "ENTITY_ENDER_PEARL_THROW",
    ENTITY_EVOKER_AMBIENT = "ENTITY_EVOKER_AMBIENT",
    ENTITY_EVOKER_CAST_SPELL = "ENTITY_EVOKER_CAST_SPELL",
    ENTITY_EVOKER_CELEBRATE = "ENTITY_EVOKER_CELEBRATE",
    ENTITY_EVOKER_DEATH = "ENTITY_EVOKER_DEATH",
    ENTITY_EVOKER_FANGS_ATTACK = "ENTITY_EVOKER_FANGS_ATTACK",
    ENTITY_EVOKER_HURT = "ENTITY_EVOKER_HURT",
    ENTITY_EVOKER_PREPARE_ATTACK = "ENTITY_EVOKER_PREPARE_ATTACK",
    ENTITY_EVOKER_PREPARE_SUMMON = "ENTITY_EVOKER_PREPARE_SUMMON",
    ENTITY_EVOKER_PREPARE_WOLOLO = "ENTITY_EVOKER_PREPARE_WOLOLO",
    ENTITY_EXPERIENCE_BOTTLE_THROW = "ENTITY_EXPERIENCE_BOTTLE_THROW",
    ENTITY_EXPERIENCE_ORB_PICKUP = "ENTITY_EXPERIENCE_ORB_PICKUP",
    ENTITY_FIREWORK_ROCKET_BLAST = "ENTITY_FIREWORK_ROCKET_BLAST",
    ENTITY_FIREWORK_ROCKET_BLAST_FAR = "ENTITY_FIREWORK_ROCKET_BLAST_FAR",
    ENTITY_FIREWORK_ROCKET_LARGE_BLAST = "ENTITY_FIREWORK_ROCKET_LARGE_BLAST",
    ENTITY_FIREWORK_ROCKET_LARGE_BLAST_FAR = "ENTITY_FIREWORK_ROCKET_LARGE_BLAST_FAR",
    ENTITY_FIREWORK_ROCKET_LAUNCH = "ENTITY_FIREWORK_ROCKET_LAUNCH",
    ENTITY_FIREWORK_ROCKET_SHOOT = "ENTITY_FIREWORK_ROCKET_SHOOT",
    ENTITY_FIREWORK_ROCKET_TWINKLE = "ENTITY_FIREWORK_ROCKET_TWINKLE",
    ENTITY_FIREWORK_ROCKET_TWINKLE_FAR = "ENTITY_FIREWORK_ROCKET_TWINKLE_FAR",
    ENTITY_FISHING_BOBBER_RETRIEVE = "ENTITY_FISHING_BOBBER_RETRIEVE",
    ENTITY_FISHING_BOBBER_SPLASH = "ENTITY_FISHING_BOBBER_SPLASH",
    ENTITY_FISHING_BOBBER_THROW = "ENTITY_FISHING_BOBBER_THROW",
    ENTITY_FISH_SWIM = "ENTITY_FISH_SWIM",
    ENTITY_FOX_AGGRO = "ENTITY_FOX_AGGRO",
    ENTITY_FOX_AMBIENT = "ENTITY_FOX_AMBIENT",
    ENTITY_FOX_BITE = "ENTITY_FOX_BITE",
    ENTITY_FOX_DEATH = "ENTITY_FOX_DEATH",
    ENTITY_FOX_EAT = "ENTITY_FOX_EAT",
    ENTITY_FOX_HURT = "ENTITY_FOX_HURT",
    ENTITY_FOX_SCREECH = "ENTITY_FOX_SCREECH",
    ENTITY_FOX_SLEEP = "ENTITY_FOX_SLEEP",
    ENTITY_FOX_SNIFF = "ENTITY_FOX_SNIFF",
    ENTITY_FOX_SPIT = "ENTITY_FOX_SPIT",
    ENTITY_FOX_TELEPORT = "ENTITY_FOX_TELEPORT",
    ENTITY_FROG_AMBIENT = "ENTITY_FROG_AMBIENT",
    ENTITY_FROG_DEATH = "ENTITY_FROG_DEATH",
    ENTITY_FROG_EAT = "ENTITY_FROG_EAT",
    ENTITY_FROG_HURT = "ENTITY_FROG_HURT",
    ENTITY_FROG_LAY_SPAWN = "ENTITY_FROG_LAY_SPAWN",
    ENTITY_FROG_LONG_JUMP = "ENTITY_FROG_LONG_JUMP",
    ENTITY_FROG_STEP = "ENTITY_FROG_STEP",
    ENTITY_FROG_TONGUE = "ENTITY_FROG_TONGUE",
    ENTITY_GENERIC_BIG_FALL = "ENTITY_GENERIC_BIG_FALL",
    ENTITY_GENERIC_BURN = "ENTITY_GENERIC_BURN",
    ENTITY_GENERIC_DEATH = "ENTITY_GENERIC_DEATH",
    ENTITY_GENERIC_DRINK = "ENTITY_GENERIC_DRINK",
    ENTITY_GENERIC_EAT = "ENTITY_GENERIC_EAT",
    ENTITY_GENERIC_EXPLODE = "ENTITY_GENERIC_EXPLODE",
    ENTITY_GENERIC_EXTINGUISH_FIRE = "ENTITY_GENERIC_EXTINGUISH_FIRE",
    ENTITY_GENERIC_HURT = "ENTITY_GENERIC_HURT",
    ENTITY_GENERIC_SMALL_FALL = "ENTITY_GENERIC_SMALL_FALL",
    ENTITY_GENERIC_SPLASH = "ENTITY_GENERIC_SPLASH",
    ENTITY_GENERIC_SWIM = "ENTITY_GENERIC_SWIM",
    ENTITY_GHAST_AMBIENT = "ENTITY_GHAST_AMBIENT",
    ENTITY_GHAST_DEATH = "ENTITY_GHAST_DEATH",
    ENTITY_GHAST_HURT = "ENTITY_GHAST_HURT",
    ENTITY_GHAST_SCREAM = "ENTITY_GHAST_SCREAM",
    ENTITY_GHAST_SHOOT = "ENTITY_GHAST_SHOOT",
    ENTITY_GHAST_WARN = "ENTITY_GHAST_WARN",
    ENTITY_GLOW_ITEM_FRAME_ADD_ITEM = "ENTITY_GLOW_ITEM_FRAME_ADD_ITEM",
    ENTITY_GLOW_ITEM_FRAME_BREAK = "ENTITY_GLOW_ITEM_FRAME_BREAK",
    ENTITY_GLOW_ITEM_FRAME_PLACE = "ENTITY_GLOW_ITEM_FRAME_PLACE",
    ENTITY_GLOW_ITEM_FRAME_REMOVE_ITEM = "ENTITY_GLOW_ITEM_FRAME_REMOVE_ITEM",
    ENTITY_GLOW_ITEM_FRAME_ROTATE_ITEM = "ENTITY_GLOW_ITEM_FRAME_ROTATE_ITEM",
    ENTITY_GLOW_SQUID_AMBIENT = "ENTITY_GLOW_SQUID_AMBIENT",
    ENTITY_GLOW_SQUID_DEATH = "ENTITY_GLOW_SQUID_DEATH",
    ENTITY_GLOW_SQUID_HURT = "ENTITY_GLOW_SQUID_HURT",
    ENTITY_GLOW_SQUID_SQUIRT = "ENTITY_GLOW_SQUID_SQUIRT",
    ENTITY_GOAT_AMBIENT = "ENTITY_GOAT_AMBIENT",
    ENTITY_GOAT_DEATH = "ENTITY_GOAT_DEATH",
    ENTITY_GOAT_EAT = "ENTITY_GOAT_EAT",
    ENTITY_GOAT_HORN_BREAK = "ENTITY_GOAT_HORN_BREAK",
    ENTITY_GOAT_HURT = "ENTITY_GOAT_HURT",
    ENTITY_GOAT_LONG_JUMP = "ENTITY_GOAT_LONG_JUMP",
    ENTITY_GOAT_MILK = "ENTITY_GOAT_MILK",
    ENTITY_GOAT_PREPARE_RAM = "ENTITY_GOAT_PREPARE_RAM",
    ENTITY_GOAT_RAM_IMPACT = "ENTITY_GOAT_RAM_IMPACT",
    ENTITY_GOAT_SCREAMING_AMBIENT = "ENTITY_GOAT_SCREAMING_AMBIENT",
    ENTITY_GOAT_SCREAMING_DEATH = "ENTITY_GOAT_SCREAMING_DEATH",
    ENTITY_GOAT_SCREAMING_EAT = "ENTITY_GOAT_SCREAMING_EAT",
    ENTITY_GOAT_SCREAMING_HORN_BREAK = "ENTITY_GOAT_SCREAMING_HORN_BREAK",
    ENTITY_GOAT_SCREAMING_HURT = "ENTITY_GOAT_SCREAMING_HURT",
    ENTITY_GOAT_SCREAMING_LONG_JUMP = "ENTITY_GOAT_SCREAMING_LONG_JUMP",
    ENTITY_GOAT_SCREAMING_MILK = "ENTITY_GOAT_SCREAMING_MILK",
    ENTITY_GOAT_SCREAMING_PREPARE_RAM = "ENTITY_GOAT_SCREAMING_PREPARE_RAM",
    ENTITY_GOAT_SCREAMING_RAM_IMPACT = "ENTITY_GOAT_SCREAMING_RAM_IMPACT",
    ENTITY_GOAT_STEP = "ENTITY_GOAT_STEP",
    ENTITY_GUARDIAN_AMBIENT = "ENTITY_GUARDIAN_AMBIENT",
    ENTITY_GUARDIAN_AMBIENT_LAND = "ENTITY_GUARDIAN_AMBIENT_LAND",
    ENTITY_GUARDIAN_ATTACK = "ENTITY_GUARDIAN_ATTACK",
    ENTITY_GUARDIAN_DEATH = "ENTITY_GUARDIAN_DEATH",
    ENTITY_GUARDIAN_DEATH_LAND = "ENTITY_GUARDIAN_DEATH_LAND",
    ENTITY_GUARDIAN_FLOP = "ENTITY_GUARDIAN_FLOP",
    ENTITY_GUARDIAN_HURT = "ENTITY_GUARDIAN_HURT",
    ENTITY_GUARDIAN_HURT_LAND = "ENTITY_GUARDIAN_HURT_LAND",
    ENTITY_HOGLIN_AMBIENT = "ENTITY_HOGLIN_AMBIENT",
    ENTITY_HOGLIN_ANGRY = "ENTITY_HOGLIN_ANGRY",
    ENTITY_HOGLIN_ATTACK = "ENTITY_HOGLIN_ATTACK",
    ENTITY_HOGLIN_CONVERTED_TO_ZOMBIFIED = "ENTITY_HOGLIN_CONVERTED_TO_ZOMBIFIED",
    ENTITY_HOGLIN_DEATH = "ENTITY_HOGLIN_DEATH",
    ENTITY_HOGLIN_HURT = "ENTITY_HOGLIN_HURT",
    ENTITY_HOGLIN_RETREAT = "ENTITY_HOGLIN_RETREAT",
    ENTITY_HOGLIN_STEP = "ENTITY_HOGLIN_STEP",
    ENTITY_HORSE_AMBIENT = "ENTITY_HORSE_AMBIENT",
    ENTITY_HORSE_ANGRY = "ENTITY_HORSE_ANGRY",
    ENTITY_HORSE_ARMOR = "ENTITY_HORSE_ARMOR",
    ENTITY_HORSE_BREATHE = "ENTITY_HORSE_BREATHE",
    ENTITY_HORSE_DEATH = "ENTITY_HORSE_DEATH",
    ENTITY_HORSE_EAT = "ENTITY_HORSE_EAT",
    ENTITY_HORSE_GALLOP = "ENTITY_HORSE_GALLOP",
    ENTITY_HORSE_HURT = "ENTITY_HORSE_HURT",
    ENTITY_HORSE_JUMP = "ENTITY_HORSE_JUMP",
    ENTITY_HORSE_LAND = "ENTITY_HORSE_LAND",
    ENTITY_HORSE_SADDLE = "ENTITY_HORSE_SADDLE",
    ENTITY_HORSE_STEP = "ENTITY_HORSE_STEP",
    ENTITY_HORSE_STEP_WOOD = "ENTITY_HORSE_STEP_WOOD",
    ENTITY_HOSTILE_BIG_FALL = "ENTITY_HOSTILE_BIG_FALL",
    ENTITY_HOSTILE_DEATH = "ENTITY_HOSTILE_DEATH",
    ENTITY_HOSTILE_HURT = "ENTITY_HOSTILE_HURT",
    ENTITY_HOSTILE_SMALL_FALL = "ENTITY_HOSTILE_SMALL_FALL",
    ENTITY_HOSTILE_SPLASH = "ENTITY_HOSTILE_SPLASH",
    ENTITY_HOSTILE_SWIM = "ENTITY_HOSTILE_SWIM",
    ENTITY_HUSK_AMBIENT = "ENTITY_HUSK_AMBIENT",
    ENTITY_HUSK_CONVERTED_TO_ZOMBIE = "ENTITY_HUSK_CONVERTED_TO_ZOMBIE",
    ENTITY_HUSK_DEATH = "ENTITY_HUSK_DEATH",
    ENTITY_HUSK_HURT = "ENTITY_HUSK_HURT",
    ENTITY_HUSK_STEP = "ENTITY_HUSK_STEP",
    ENTITY_ILLUSIONER_AMBIENT = "ENTITY_ILLUSIONER_AMBIENT",
    ENTITY_ILLUSIONER_CAST_SPELL = "ENTITY_ILLUSIONER_CAST_SPELL",
    ENTITY_ILLUSIONER_DEATH = "ENTITY_ILLUSIONER_DEATH",
    ENTITY_ILLUSIONER_HURT = "ENTITY_ILLUSIONER_HURT",
    ENTITY_ILLUSIONER_MIRROR_MOVE = "ENTITY_ILLUSIONER_MIRROR_MOVE",
    ENTITY_ILLUSIONER_PREPARE_BLINDNESS = "ENTITY_ILLUSIONER_PREPARE_BLINDNESS",
    ENTITY_ILLUSIONER_PREPARE_MIRROR = "ENTITY_ILLUSIONER_PREPARE_MIRROR",
    ENTITY_IRON_GOLEM_ATTACK = "ENTITY_IRON_GOLEM_ATTACK",
    ENTITY_IRON_GOLEM_DAMAGE = "ENTITY_IRON_GOLEM_DAMAGE",
    ENTITY_IRON_GOLEM_DEATH = "ENTITY_IRON_GOLEM_DEATH",
    ENTITY_IRON_GOLEM_HURT = "ENTITY_IRON_GOLEM_HURT",
    ENTITY_IRON_GOLEM_REPAIR = "ENTITY_IRON_GOLEM_REPAIR",
    ENTITY_IRON_GOLEM_STEP = "ENTITY_IRON_GOLEM_STEP",
    ENTITY_ITEM_BREAK = "ENTITY_ITEM_BREAK",
    ENTITY_ITEM_FRAME_ADD_ITEM = "ENTITY_ITEM_FRAME_ADD_ITEM",
    ENTITY_ITEM_FRAME_BREAK = "ENTITY_ITEM_FRAME_BREAK",
    ENTITY_ITEM_FRAME_PLACE = "ENTITY_ITEM_FRAME_PLACE",
    ENTITY_ITEM_FRAME_REMOVE_ITEM = "ENTITY_ITEM_FRAME_REMOVE_ITEM",
    ENTITY_ITEM_FRAME_ROTATE_ITEM = "ENTITY_ITEM_FRAME_ROTATE_ITEM",
    ENTITY_ITEM_PICKUP = "ENTITY_ITEM_PICKUP",
    ENTITY_LEASH_KNOT_BREAK = "ENTITY_LEASH_KNOT_BREAK",
    ENTITY_LEASH_KNOT_PLACE = "ENTITY_LEASH_KNOT_PLACE",
    ENTITY_LIGHTNING_BOLT_IMPACT = "ENTITY_LIGHTNING_BOLT_IMPACT",
    ENTITY_LIGHTNING_BOLT_THUNDER = "ENTITY_LIGHTNING_BOLT_THUNDER",
    ENTITY_LINGERING_POTION_THROW = "ENTITY_LINGERING_POTION_THROW",
    ENTITY_LLAMA_AMBIENT = "ENTITY_LLAMA_AMBIENT",
    ENTITY_LLAMA_ANGRY = "ENTITY_LLAMA_ANGRY",
    ENTITY_LLAMA_CHEST = "ENTITY_LLAMA_CHEST",
    ENTITY_LLAMA_DEATH = "ENTITY_LLAMA_DEATH",
    ENTITY_LLAMA_EAT = "ENTITY_LLAMA_EAT",
    ENTITY_LLAMA_HURT = "ENTITY_LLAMA_HURT",
    ENTITY_LLAMA_SPIT = "ENTITY_LLAMA_SPIT",
    ENTITY_LLAMA_STEP = "ENTITY_LLAMA_STEP",
    ENTITY_LLAMA_SWAG = "ENTITY_LLAMA_SWAG",
    ENTITY_MAGMA_CUBE_DEATH = "ENTITY_MAGMA_CUBE_DEATH",
    ENTITY_MAGMA_CUBE_DEATH_SMALL = "ENTITY_MAGMA_CUBE_DEATH_SMALL",
    ENTITY_MAGMA_CUBE_HURT = "ENTITY_MAGMA_CUBE_HURT",
    ENTITY_MAGMA_CUBE_HURT_SMALL = "ENTITY_MAGMA_CUBE_HURT_SMALL",
    ENTITY_MAGMA_CUBE_JUMP = "ENTITY_MAGMA_CUBE_JUMP",
    ENTITY_MAGMA_CUBE_SQUISH = "ENTITY_MAGMA_CUBE_SQUISH",
    ENTITY_MAGMA_CUBE_SQUISH_SMALL = "ENTITY_MAGMA_CUBE_SQUISH_SMALL",
    ENTITY_MINECART_INSIDE = "ENTITY_MINECART_INSIDE",
    ENTITY_MINECART_INSIDE_UNDERWATER = "ENTITY_MINECART_INSIDE_UNDERWATER",
    ENTITY_MINECART_RIDING = "ENTITY_MINECART_RIDING",
    ENTITY_MOOSHROOM_CONVERT = "ENTITY_MOOSHROOM_CONVERT",
    ENTITY_MOOSHROOM_EAT = "ENTITY_MOOSHROOM_EAT",
    ENTITY_MOOSHROOM_MILK = "ENTITY_MOOSHROOM_MILK",
    ENTITY_MOOSHROOM_SHEAR = "ENTITY_MOOSHROOM_SHEAR",
    ENTITY_MOOSHROOM_SUSPICIOUS_MILK = "ENTITY_MOOSHROOM_SUSPICIOUS_MILK",
    ENTITY_MULE_AMBIENT = "ENTITY_MULE_AMBIENT",
    ENTITY_MULE_ANGRY = "ENTITY_MULE_ANGRY",
    ENTITY_MULE_CHEST = "ENTITY_MULE_CHEST",
    ENTITY_MULE_DEATH = "ENTITY_MULE_DEATH",
    ENTITY_MULE_EAT = "ENTITY_MULE_EAT",
    ENTITY_MULE_HURT = "ENTITY_MULE_HURT",
    ENTITY_MULE_JUMP = "ENTITY_MULE_JUMP",
    ENTITY_OCELOT_AMBIENT = "ENTITY_OCELOT_AMBIENT",
    ENTITY_OCELOT_DEATH = "ENTITY_OCELOT_DEATH",
    ENTITY_OCELOT_HURT = "ENTITY_OCELOT_HURT",
    ENTITY_PAINTING_BREAK = "ENTITY_PAINTING_BREAK",
    ENTITY_PAINTING_PLACE = "ENTITY_PAINTING_PLACE",
    ENTITY_PANDA_AGGRESSIVE_AMBIENT = "ENTITY_PANDA_AGGRESSIVE_AMBIENT",
    ENTITY_PANDA_AMBIENT = "ENTITY_PANDA_AMBIENT",
    ENTITY_PANDA_BITE = "ENTITY_PANDA_BITE",
    ENTITY_PANDA_CANT_BREED = "ENTITY_PANDA_CANT_BREED",
    ENTITY_PANDA_DEATH = "ENTITY_PANDA_DEATH",
    ENTITY_PANDA_EAT = "ENTITY_PANDA_EAT",
    ENTITY_PANDA_HURT = "ENTITY_PANDA_HURT",
    ENTITY_PANDA_PRE_SNEEZE = "ENTITY_PANDA_PRE_SNEEZE",
    ENTITY_PANDA_SNEEZE = "ENTITY_PANDA_SNEEZE",
    ENTITY_PANDA_STEP = "ENTITY_PANDA_STEP",
    ENTITY_PANDA_WORRIED_AMBIENT = "ENTITY_PANDA_WORRIED_AMBIENT",
    ENTITY_PARROT_AMBIENT = "ENTITY_PARROT_AMBIENT",
    ENTITY_PARROT_DEATH = "ENTITY_PARROT_DEATH",
    ENTITY_PARROT_EAT = "ENTITY_PARROT_EAT",
    ENTITY_PARROT_FLY = "ENTITY_PARROT_FLY",
    ENTITY_PARROT_HURT = "ENTITY_PARROT_HURT",
    ENTITY_PARROT_IMITATE_BLAZE = "ENTITY_PARROT_IMITATE_BLAZE",
    ENTITY_PARROT_IMITATE_BOGGED = "ENTITY_PARROT_IMITATE_BOGGED",
    ENTITY_PARROT_IMITATE_BREEZE = "ENTITY_PARROT_IMITATE_BREEZE",
    ENTITY_PARROT_IMITATE_CREEPER = "ENTITY_PARROT_IMITATE_CREEPER",
    ENTITY_PARROT_IMITATE_DROWNED = "ENTITY_PARROT_IMITATE_DROWNED",
    ENTITY_PARROT_IMITATE_ELDER_GUARDIAN = "ENTITY_PARROT_IMITATE_ELDER_GUARDIAN",
    ENTITY_PARROT_IMITATE_ENDERMITE = "ENTITY_PARROT_IMITATE_ENDERMITE",
    ENTITY_PARROT_IMITATE_ENDER_DRAGON = "ENTITY_PARROT_IMITATE_ENDER_DRAGON",
    ENTITY_PARROT_IMITATE_EVOKER = "ENTITY_PARROT_IMITATE_EVOKER",
    ENTITY_PARROT_IMITATE_GHAST = "ENTITY_PARROT_IMITATE_GHAST",
    ENTITY_PARROT_IMITATE_GUARDIAN = "ENTITY_PARROT_IMITATE_GUARDIAN",
    ENTITY_PARROT_IMITATE_HOGLIN = "ENTITY_PARROT_IMITATE_HOGLIN",
    ENTITY_PARROT_IMITATE_HUSK = "ENTITY_PARROT_IMITATE_HUSK",
    ENTITY_PARROT_IMITATE_ILLUSIONER = "ENTITY_PARROT_IMITATE_ILLUSIONER",
    ENTITY_PARROT_IMITATE_MAGMA_CUBE = "ENTITY_PARROT_IMITATE_MAGMA_CUBE",
    ENTITY_PARROT_IMITATE_PHANTOM = "ENTITY_PARROT_IMITATE_PHANTOM",
    ENTITY_PARROT_IMITATE_PIGLIN = "ENTITY_PARROT_IMITATE_PIGLIN",
    ENTITY_PARROT_IMITATE_PIGLIN_BRUTE = "ENTITY_PARROT_IMITATE_PIGLIN_BRUTE",
    ENTITY_PARROT_IMITATE_PILLAGER = "ENTITY_PARROT_IMITATE_PILLAGER",
    ENTITY_PARROT_IMITATE_RAVAGER = "ENTITY_PARROT_IMITATE_RAVAGER",
    ENTITY_PARROT_IMITATE_SHULKER = "ENTITY_PARROT_IMITATE_SHULKER",
    ENTITY_PARROT_IMITATE_SILVERFISH = "ENTITY_PARROT_IMITATE_SILVERFISH",
    ENTITY_PARROT_IMITATE_SKELETON = "ENTITY_PARROT_IMITATE_SKELETON",
    ENTITY_PARROT_IMITATE_SLIME = "ENTITY_PARROT_IMITATE_SLIME",
    ENTITY_PARROT_IMITATE_SPIDER = "ENTITY_PARROT_IMITATE_SPIDER",
    ENTITY_PARROT_IMITATE_STRAY = "ENTITY_PARROT_IMITATE_STRAY",
    ENTITY_PARROT_IMITATE_VEX = "ENTITY_PARROT_IMITATE_VEX",
    ENTITY_PARROT_IMITATE_VINDICATOR = "ENTITY_PARROT_IMITATE_VINDICATOR",
    ENTITY_PARROT_IMITATE_WARDEN = "ENTITY_PARROT_IMITATE_WARDEN",
    ENTITY_PARROT_IMITATE_WITCH = "ENTITY_PARROT_IMITATE_WITCH",
    ENTITY_PARROT_IMITATE_WITHER = "ENTITY_PARROT_IMITATE_WITHER",
    ENTITY_PARROT_IMITATE_WITHER_SKELETON = "ENTITY_PARROT_IMITATE_WITHER_SKELETON",
    ENTITY_PARROT_IMITATE_ZOGLIN = "ENTITY_PARROT_IMITATE_ZOGLIN",
    ENTITY_PARROT_IMITATE_ZOMBIE = "ENTITY_PARROT_IMITATE_ZOMBIE",
    ENTITY_PARROT_IMITATE_ZOMBIE_VILLAGER = "ENTITY_PARROT_IMITATE_ZOMBIE_VILLAGER",
    ENTITY_PARROT_STEP = "ENTITY_PARROT_STEP",
    ENTITY_PHANTOM_AMBIENT = "ENTITY_PHANTOM_AMBIENT",
    ENTITY_PHANTOM_BITE = "ENTITY_PHANTOM_BITE",
    ENTITY_PHANTOM_DEATH = "ENTITY_PHANTOM_DEATH",
    ENTITY_PHANTOM_FLAP = "ENTITY_PHANTOM_FLAP",
    ENTITY_PHANTOM_HURT = "ENTITY_PHANTOM_HURT",
    ENTITY_PHANTOM_SWOOP = "ENTITY_PHANTOM_SWOOP",
    ENTITY_PIGLIN_ADMIRING_ITEM = "ENTITY_PIGLIN_ADMIRING_ITEM",
    ENTITY_PIGLIN_AMBIENT = "ENTITY_PIGLIN_AMBIENT",
    ENTITY_PIGLIN_ANGRY = "ENTITY_PIGLIN_ANGRY",
    ENTITY_PIGLIN_BRUTE_AMBIENT = "ENTITY_PIGLIN_BRUTE_AMBIENT",
    ENTITY_PIGLIN_BRUTE_ANGRY = "ENTITY_PIGLIN_BRUTE_ANGRY",
    ENTITY_PIGLIN_BRUTE_CONVERTED_TO_ZOMBIFIED = "ENTITY_PIGLIN_BRUTE_CONVERTED_TO_ZOMBIFIED",
    ENTITY_PIGLIN_BRUTE_DEATH = "ENTITY_PIGLIN_BRUTE_DEATH",
    ENTITY_PIGLIN_BRUTE_HURT = "ENTITY_PIGLIN_BRUTE_HURT",
    ENTITY_PIGLIN_BRUTE_STEP = "ENTITY_PIGLIN_BRUTE_STEP",
    ENTITY_PIGLIN_CELEBRATE = "ENTITY_PIGLIN_CELEBRATE",
    ENTITY_PIGLIN_CONVERTED_TO_ZOMBIFIED = "ENTITY_PIGLIN_CONVERTED_TO_ZOMBIFIED",
    ENTITY_PIGLIN_DEATH = "ENTITY_PIGLIN_DEATH",
    ENTITY_PIGLIN_HURT = "ENTITY_PIGLIN_HURT",
    ENTITY_PIGLIN_JEALOUS = "ENTITY_PIGLIN_JEALOUS",
    ENTITY_PIGLIN_RETREAT = "ENTITY_PIGLIN_RETREAT",
    ENTITY_PIGLIN_STEP = "ENTITY_PIGLIN_STEP",
    ENTITY_PIG_AMBIENT = "ENTITY_PIG_AMBIENT",
    ENTITY_PIG_DEATH = "ENTITY_PIG_DEATH",
    ENTITY_PIG_HURT = "ENTITY_PIG_HURT",
    ENTITY_PIG_SADDLE = "ENTITY_PIG_SADDLE",
    ENTITY_PIG_STEP = "ENTITY_PIG_STEP",
    ENTITY_PILLAGER_AMBIENT = "ENTITY_PILLAGER_AMBIENT",
    ENTITY_PILLAGER_CELEBRATE = "ENTITY_PILLAGER_CELEBRATE",
    ENTITY_PILLAGER_DEATH = "ENTITY_PILLAGER_DEATH",
    ENTITY_PILLAGER_HURT = "ENTITY_PILLAGER_HURT",
    ENTITY_PLAYER_ATTACK_CRIT = "ENTITY_PLAYER_ATTACK_CRIT",
    ENTITY_PLAYER_ATTACK_KNOCKBACK = "ENTITY_PLAYER_ATTACK_KNOCKBACK",
    ENTITY_PLAYER_ATTACK_NODAMAGE = "ENTITY_PLAYER_ATTACK_NODAMAGE",
    ENTITY_PLAYER_ATTACK_STRONG = "ENTITY_PLAYER_ATTACK_STRONG",
    ENTITY_PLAYER_ATTACK_SWEEP = "ENTITY_PLAYER_ATTACK_SWEEP",
    ENTITY_PLAYER_ATTACK_WEAK = "ENTITY_PLAYER_ATTACK_WEAK",
    ENTITY_PLAYER_BIG_FALL = "ENTITY_PLAYER_BIG_FALL",
    ENTITY_PLAYER_BREATH = "ENTITY_PLAYER_BREATH",
    ENTITY_PLAYER_BURP = "ENTITY_PLAYER_BURP",
    ENTITY_PLAYER_DEATH = "ENTITY_PLAYER_DEATH",
    ENTITY_PLAYER_HURT = "ENTITY_PLAYER_HURT",
    ENTITY_PLAYER_HURT_DROWN = "ENTITY_PLAYER_HURT_DROWN",
    ENTITY_PLAYER_HURT_FREEZE = "ENTITY_PLAYER_HURT_FREEZE",
    ENTITY_PLAYER_HURT_ON_FIRE = "ENTITY_PLAYER_HURT_ON_FIRE",
    ENTITY_PLAYER_HURT_SWEET_BERRY_BUSH = "ENTITY_PLAYER_HURT_SWEET_BERRY_BUSH",
    ENTITY_PLAYER_LEVELUP = "ENTITY_PLAYER_LEVELUP",
    ENTITY_PLAYER_SMALL_FALL = "ENTITY_PLAYER_SMALL_FALL",
    ENTITY_PLAYER_SPLASH = "ENTITY_PLAYER_SPLASH",
    ENTITY_PLAYER_SPLASH_HIGH_SPEED = "ENTITY_PLAYER_SPLASH_HIGH_SPEED",
    ENTITY_PLAYER_SWIM = "ENTITY_PLAYER_SWIM",
    ENTITY_PLAYER_TELEPORT = "ENTITY_PLAYER_TELEPORT",
    ENTITY_POLAR_BEAR_AMBIENT = "ENTITY_POLAR_BEAR_AMBIENT",
    ENTITY_POLAR_BEAR_AMBIENT_BABY = "ENTITY_POLAR_BEAR_AMBIENT_BABY",
    ENTITY_POLAR_BEAR_DEATH = "ENTITY_POLAR_BEAR_DEATH",
    ENTITY_POLAR_BEAR_HURT = "ENTITY_POLAR_BEAR_HURT",
    ENTITY_POLAR_BEAR_STEP = "ENTITY_POLAR_BEAR_STEP",
    ENTITY_POLAR_BEAR_WARNING = "ENTITY_POLAR_BEAR_WARNING",
    ENTITY_PUFFER_FISH_AMBIENT = "ENTITY_PUFFER_FISH_AMBIENT",
    ENTITY_PUFFER_FISH_BLOW_OUT = "ENTITY_PUFFER_FISH_BLOW_OUT",
    ENTITY_PUFFER_FISH_BLOW_UP = "ENTITY_PUFFER_FISH_BLOW_UP",
    ENTITY_PUFFER_FISH_DEATH = "ENTITY_PUFFER_FISH_DEATH",
    ENTITY_PUFFER_FISH_FLOP = "ENTITY_PUFFER_FISH_FLOP",
    ENTITY_PUFFER_FISH_HURT = "ENTITY_PUFFER_FISH_HURT",
    ENTITY_PUFFER_FISH_STING = "ENTITY_PUFFER_FISH_STING",
    ENTITY_RABBIT_AMBIENT = "ENTITY_RABBIT_AMBIENT",
    ENTITY_RABBIT_ATTACK = "ENTITY_RABBIT_ATTACK",
    ENTITY_RABBIT_DEATH = "ENTITY_RABBIT_DEATH",
    ENTITY_RABBIT_HURT = "ENTITY_RABBIT_HURT",
    ENTITY_RABBIT_JUMP = "ENTITY_RABBIT_JUMP",
    ENTITY_RAVAGER_AMBIENT = "ENTITY_RAVAGER_AMBIENT",
    ENTITY_RAVAGER_ATTACK = "ENTITY_RAVAGER_ATTACK",
    ENTITY_RAVAGER_CELEBRATE = "ENTITY_RAVAGER_CELEBRATE",
    ENTITY_RAVAGER_DEATH = "ENTITY_RAVAGER_DEATH",
    ENTITY_RAVAGER_HURT = "ENTITY_RAVAGER_HURT",
    ENTITY_RAVAGER_ROAR = "ENTITY_RAVAGER_ROAR",
    ENTITY_RAVAGER_STEP = "ENTITY_RAVAGER_STEP",
    ENTITY_RAVAGER_STUNNED = "ENTITY_RAVAGER_STUNNED",
    ENTITY_SALMON_AMBIENT = "ENTITY_SALMON_AMBIENT",
    ENTITY_SALMON_DEATH = "ENTITY_SALMON_DEATH",
    ENTITY_SALMON_FLOP = "ENTITY_SALMON_FLOP",
    ENTITY_SALMON_HURT = "ENTITY_SALMON_HURT",
    ENTITY_SHEEP_AMBIENT = "ENTITY_SHEEP_AMBIENT",
    ENTITY_SHEEP_DEATH = "ENTITY_SHEEP_DEATH",
    ENTITY_SHEEP_HURT = "ENTITY_SHEEP_HURT",
    ENTITY_SHEEP_SHEAR = "ENTITY_SHEEP_SHEAR",
    ENTITY_SHEEP_STEP = "ENTITY_SHEEP_STEP",
    ENTITY_SHULKER_AMBIENT = "ENTITY_SHULKER_AMBIENT",
    ENTITY_SHULKER_BULLET_HIT = "ENTITY_SHULKER_BULLET_HIT",
    ENTITY_SHULKER_BULLET_HURT = "ENTITY_SHULKER_BULLET_HURT",
    ENTITY_SHULKER_CLOSE = "ENTITY_SHULKER_CLOSE",
    ENTITY_SHULKER_DEATH = "ENTITY_SHULKER_DEATH",
    ENTITY_SHULKER_HURT = "ENTITY_SHULKER_HURT",
    ENTITY_SHULKER_HURT_CLOSED = "ENTITY_SHULKER_HURT_CLOSED",
    ENTITY_SHULKER_OPEN = "ENTITY_SHULKER_OPEN",
    ENTITY_SHULKER_SHOOT = "ENTITY_SHULKER_SHOOT",
    ENTITY_SHULKER_TELEPORT = "ENTITY_SHULKER_TELEPORT",
    ENTITY_SILVERFISH_AMBIENT = "ENTITY_SILVERFISH_AMBIENT",
    ENTITY_SILVERFISH_DEATH = "ENTITY_SILVERFISH_DEATH",
    ENTITY_SILVERFISH_HURT = "ENTITY_SILVERFISH_HURT",
    ENTITY_SILVERFISH_STEP = "ENTITY_SILVERFISH_STEP",
    ENTITY_SKELETON_AMBIENT = "ENTITY_SKELETON_AMBIENT",
    ENTITY_SKELETON_CONVERTED_TO_STRAY = "ENTITY_SKELETON_CONVERTED_TO_STRAY",
    ENTITY_SKELETON_DEATH = "ENTITY_SKELETON_DEATH",
    ENTITY_SKELETON_HORSE_AMBIENT = "ENTITY_SKELETON_HORSE_AMBIENT",
    ENTITY_SKELETON_HORSE_AMBIENT_WATER = "ENTITY_SKELETON_HORSE_AMBIENT_WATER",
    ENTITY_SKELETON_HORSE_DEATH = "ENTITY_SKELETON_HORSE_DEATH",
    ENTITY_SKELETON_HORSE_GALLOP_WATER = "ENTITY_SKELETON_HORSE_GALLOP_WATER",
    ENTITY_SKELETON_HORSE_HURT = "ENTITY_SKELETON_HORSE_HURT",
    ENTITY_SKELETON_HORSE_JUMP_WATER = "ENTITY_SKELETON_HORSE_JUMP_WATER",
    ENTITY_SKELETON_HORSE_STEP_WATER = "ENTITY_SKELETON_HORSE_STEP_WATER",
    ENTITY_SKELETON_HORSE_SWIM = "ENTITY_SKELETON_HORSE_SWIM",
    ENTITY_SKELETON_HURT = "ENTITY_SKELETON_HURT",
    ENTITY_SKELETON_SHOOT = "ENTITY_SKELETON_SHOOT",
    ENTITY_SKELETON_STEP = "ENTITY_SKELETON_STEP",
    ENTITY_SLIME_ATTACK = "ENTITY_SLIME_ATTACK",
    ENTITY_SLIME_DEATH = "ENTITY_SLIME_DEATH",
    ENTITY_SLIME_DEATH_SMALL = "ENTITY_SLIME_DEATH_SMALL",
    ENTITY_SLIME_HURT = "ENTITY_SLIME_HURT",
    ENTITY_SLIME_HURT_SMALL = "ENTITY_SLIME_HURT_SMALL",
    ENTITY_SLIME_JUMP = "ENTITY_SLIME_JUMP",
    ENTITY_SLIME_JUMP_SMALL = "ENTITY_SLIME_JUMP_SMALL",
    ENTITY_SLIME_SQUISH = "ENTITY_SLIME_SQUISH",
    ENTITY_SLIME_SQUISH_SMALL = "ENTITY_SLIME_SQUISH_SMALL",
    ENTITY_SNIFFER_DEATH = "ENTITY_SNIFFER_DEATH",
    ENTITY_SNIFFER_DIGGING = "ENTITY_SNIFFER_DIGGING",
    ENTITY_SNIFFER_DIGGING_STOP = "ENTITY_SNIFFER_DIGGING_STOP",
    ENTITY_SNIFFER_DROP_SEED = "ENTITY_SNIFFER_DROP_SEED",
    ENTITY_SNIFFER_EAT = "ENTITY_SNIFFER_EAT",
    ENTITY_SNIFFER_HAPPY = "ENTITY_SNIFFER_HAPPY",
    ENTITY_SNIFFER_HURT = "ENTITY_SNIFFER_HURT",
    ENTITY_SNIFFER_IDLE = "ENTITY_SNIFFER_IDLE",
    ENTITY_SNIFFER_SCENTING = "ENTITY_SNIFFER_SCENTING",
    ENTITY_SNIFFER_SEARCHING = "ENTITY_SNIFFER_SEARCHING",
    ENTITY_SNIFFER_SNIFFING = "ENTITY_SNIFFER_SNIFFING",
    ENTITY_SNIFFER_STEP = "ENTITY_SNIFFER_STEP",
    ENTITY_SNOWBALL_THROW = "ENTITY_SNOWBALL_THROW",
    ENTITY_SNOW_GOLEM_AMBIENT = "ENTITY_SNOW_GOLEM_AMBIENT",
    ENTITY_SNOW_GOLEM_DEATH = "ENTITY_SNOW_GOLEM_DEATH",
    ENTITY_SNOW_GOLEM_HURT = "ENTITY_SNOW_GOLEM_HURT",
    ENTITY_SNOW_GOLEM_SHEAR = "ENTITY_SNOW_GOLEM_SHEAR",
    ENTITY_SNOW_GOLEM_SHOOT = "ENTITY_SNOW_GOLEM_SHOOT",
    ENTITY_SPIDER_AMBIENT = "ENTITY_SPIDER_AMBIENT",
    ENTITY_SPIDER_DEATH = "ENTITY_SPIDER_DEATH",
    ENTITY_SPIDER_HURT = "ENTITY_SPIDER_HURT",
    ENTITY_SPIDER_STEP = "ENTITY_SPIDER_STEP",
    ENTITY_SPLASH_POTION_BREAK = "ENTITY_SPLASH_POTION_BREAK",
    ENTITY_SPLASH_POTION_THROW = "ENTITY_SPLASH_POTION_THROW",
    ENTITY_SQUID_AMBIENT = "ENTITY_SQUID_AMBIENT",
    ENTITY_SQUID_DEATH = "ENTITY_SQUID_DEATH",
    ENTITY_SQUID_HURT = "ENTITY_SQUID_HURT",
    ENTITY_SQUID_SQUIRT = "ENTITY_SQUID_SQUIRT",
    ENTITY_STRAY_AMBIENT = "ENTITY_STRAY_AMBIENT",
    ENTITY_STRAY_DEATH = "ENTITY_STRAY_DEATH",
    ENTITY_STRAY_HURT = "ENTITY_STRAY_HURT",
    ENTITY_STRAY_STEP = "ENTITY_STRAY_STEP",
    ENTITY_STRIDER_AMBIENT = "ENTITY_STRIDER_AMBIENT",
    ENTITY_STRIDER_DEATH = "ENTITY_STRIDER_DEATH",
    ENTITY_STRIDER_EAT = "ENTITY_STRIDER_EAT",
    ENTITY_STRIDER_HAPPY = "ENTITY_STRIDER_HAPPY",
    ENTITY_STRIDER_HURT = "ENTITY_STRIDER_HURT",
    ENTITY_STRIDER_RETREAT = "ENTITY_STRIDER_RETREAT",
    ENTITY_STRIDER_SADDLE = "ENTITY_STRIDER_SADDLE",
    ENTITY_STRIDER_STEP = "ENTITY_STRIDER_STEP",
    ENTITY_STRIDER_STEP_LAVA = "ENTITY_STRIDER_STEP_LAVA",
    ENTITY_TADPOLE_DEATH = "ENTITY_TADPOLE_DEATH",
    ENTITY_TADPOLE_FLOP = "ENTITY_TADPOLE_FLOP",
    ENTITY_TADPOLE_GROW_UP = "ENTITY_TADPOLE_GROW_UP",
    ENTITY_TADPOLE_HURT = "ENTITY_TADPOLE_HURT",
    ENTITY_TNT_PRIMED = "ENTITY_TNT_PRIMED",
    ENTITY_TROPICAL_FISH_AMBIENT = "ENTITY_TROPICAL_FISH_AMBIENT",
    ENTITY_TROPICAL_FISH_DEATH = "ENTITY_TROPICAL_FISH_DEATH",
    ENTITY_TROPICAL_FISH_FLOP = "ENTITY_TROPICAL_FISH_FLOP",
    ENTITY_TROPICAL_FISH_HURT = "ENTITY_TROPICAL_FISH_HURT",
    ENTITY_TURTLE_AMBIENT_LAND = "ENTITY_TURTLE_AMBIENT_LAND",
    ENTITY_TURTLE_DEATH = "ENTITY_TURTLE_DEATH",
    ENTITY_TURTLE_DEATH_BABY = "ENTITY_TURTLE_DEATH_BABY",
    ENTITY_TURTLE_EGG_BREAK = "ENTITY_TURTLE_EGG_BREAK",
    ENTITY_TURTLE_EGG_CRACK = "ENTITY_TURTLE_EGG_CRACK",
    ENTITY_TURTLE_EGG_HATCH = "ENTITY_TURTLE_EGG_HATCH",
    ENTITY_TURTLE_HURT = "ENTITY_TURTLE_HURT",
    ENTITY_TURTLE_HURT_BABY = "ENTITY_TURTLE_HURT_BABY",
    ENTITY_TURTLE_LAY_EGG = "ENTITY_TURTLE_LAY_EGG",
    ENTITY_TURTLE_SHAMBLE = "ENTITY_TURTLE_SHAMBLE",
    ENTITY_TURTLE_SHAMBLE_BABY = "ENTITY_TURTLE_SHAMBLE_BABY",
    ENTITY_TURTLE_SWIM = "ENTITY_TURTLE_SWIM",
    ENTITY_VEX_AMBIENT = "ENTITY_VEX_AMBIENT",
    ENTITY_VEX_CHARGE = "ENTITY_VEX_CHARGE",
    ENTITY_VEX_DEATH = "ENTITY_VEX_DEATH",
    ENTITY_VEX_HURT = "ENTITY_VEX_HURT",
    ENTITY_VILLAGER_AMBIENT = "ENTITY_VILLAGER_AMBIENT",
    ENTITY_VILLAGER_CELEBRATE = "ENTITY_VILLAGER_CELEBRATE",
    ENTITY_VILLAGER_DEATH = "ENTITY_VILLAGER_DEATH",
    ENTITY_VILLAGER_HURT = "ENTITY_VILLAGER_HURT",
    ENTITY_VILLAGER_NO = "ENTITY_VILLAGER_NO",
    ENTITY_VILLAGER_TRADE = "ENTITY_VILLAGER_TRADE",
    ENTITY_VILLAGER_WORK_ARMORER = "ENTITY_VILLAGER_WORK_ARMORER",
    ENTITY_VILLAGER_WORK_BUTCHER = "ENTITY_VILLAGER_WORK_BUTCHER",
    ENTITY_VILLAGER_WORK_CARTOGRAPHER = "ENTITY_VILLAGER_WORK_CARTOGRAPHER",
    ENTITY_VILLAGER_WORK_CLERIC = "ENTITY_VILLAGER_WORK_CLERIC",
    ENTITY_VILLAGER_WORK_FARMER = "ENTITY_VILLAGER_WORK_FARMER",
    ENTITY_VILLAGER_WORK_FISHERMAN = "ENTITY_VILLAGER_WORK_FISHERMAN",
    ENTITY_VILLAGER_WORK_FLETCHER = "ENTITY_VILLAGER_WORK_FLETCHER",
    ENTITY_VILLAGER_WORK_LEATHERWORKER = "ENTITY_VILLAGER_WORK_LEATHERWORKER",
    ENTITY_VILLAGER_WORK_LIBRARIAN = "ENTITY_VILLAGER_WORK_LIBRARIAN",
    ENTITY_VILLAGER_WORK_MASON = "ENTITY_VILLAGER_WORK_MASON",
    ENTITY_VILLAGER_WORK_SHEPHERD = "ENTITY_VILLAGER_WORK_SHEPHERD",
    ENTITY_VILLAGER_WORK_TOOLSMITH = "ENTITY_VILLAGER_WORK_TOOLSMITH",
    ENTITY_VILLAGER_WORK_WEAPONSMITH = "ENTITY_VILLAGER_WORK_WEAPONSMITH",
    ENTITY_VILLAGER_YES = "ENTITY_VILLAGER_YES",
    ENTITY_VINDICATOR_AMBIENT = "ENTITY_VINDICATOR_AMBIENT",
    ENTITY_VINDICATOR_CELEBRATE = "ENTITY_VINDICATOR_CELEBRATE",
    ENTITY_VINDICATOR_DEATH = "ENTITY_VINDICATOR_DEATH",
    ENTITY_VINDICATOR_HURT = "ENTITY_VINDICATOR_HURT",
    ENTITY_WANDERING_TRADER_AMBIENT = "ENTITY_WANDERING_TRADER_AMBIENT",
    ENTITY_WANDERING_TRADER_DEATH = "ENTITY_WANDERING_TRADER_DEATH",
    ENTITY_WANDERING_TRADER_DISAPPEARED = "ENTITY_WANDERING_TRADER_DISAPPEARED",
    ENTITY_WANDERING_TRADER_DRINK_MILK = "ENTITY_WANDERING_TRADER_DRINK_MILK",
    ENTITY_WANDERING_TRADER_DRINK_POTION = "ENTITY_WANDERING_TRADER_DRINK_POTION",
    ENTITY_WANDERING_TRADER_HURT = "ENTITY_WANDERING_TRADER_HURT",
    ENTITY_WANDERING_TRADER_NO = "ENTITY_WANDERING_TRADER_NO",
    ENTITY_WANDERING_TRADER_REAPPEARED = "ENTITY_WANDERING_TRADER_REAPPEARED",
    ENTITY_WANDERING_TRADER_TRADE = "ENTITY_WANDERING_TRADER_TRADE",
    ENTITY_WANDERING_TRADER_YES = "ENTITY_WANDERING_TRADER_YES",
    ENTITY_WARDEN_AGITATED = "ENTITY_WARDEN_AGITATED",
    ENTITY_WARDEN_AMBIENT = "ENTITY_WARDEN_AMBIENT",
    ENTITY_WARDEN_ANGRY = "ENTITY_WARDEN_ANGRY",
    ENTITY_WARDEN_ATTACK_IMPACT = "ENTITY_WARDEN_ATTACK_IMPACT",
    ENTITY_WARDEN_DEATH = "ENTITY_WARDEN_DEATH",
    ENTITY_WARDEN_DIG = "ENTITY_WARDEN_DIG",
    ENTITY_WARDEN_EMERGE = "ENTITY_WARDEN_EMERGE",
    ENTITY_WARDEN_HEARTBEAT = "ENTITY_WARDEN_HEARTBEAT",
    ENTITY_WARDEN_HURT = "ENTITY_WARDEN_HURT",
    ENTITY_WARDEN_LISTENING = "ENTITY_WARDEN_LISTENING",
    ENTITY_WARDEN_LISTENING_ANGRY = "ENTITY_WARDEN_LISTENING_ANGRY",
    ENTITY_WARDEN_NEARBY_CLOSE = "ENTITY_WARDEN_NEARBY_CLOSE",
    ENTITY_WARDEN_NEARBY_CLOSER = "ENTITY_WARDEN_NEARBY_CLOSER",
    ENTITY_WARDEN_NEARBY_CLOSEST = "ENTITY_WARDEN_NEARBY_CLOSEST",
    ENTITY_WARDEN_ROAR = "ENTITY_WARDEN_ROAR",
    ENTITY_WARDEN_SNIFF = "ENTITY_WARDEN_SNIFF",
    ENTITY_WARDEN_SONIC_BOOM = "ENTITY_WARDEN_SONIC_BOOM",
    ENTITY_WARDEN_SONIC_CHARGE = "ENTITY_WARDEN_SONIC_CHARGE",
    ENTITY_WARDEN_STEP = "ENTITY_WARDEN_STEP",
    ENTITY_WARDEN_TENDRIL_CLICKS = "ENTITY_WARDEN_TENDRIL_CLICKS",
    ENTITY_WIND_CHARGE_THROW = "ENTITY_WIND_CHARGE_THROW",
    ENTITY_WIND_CHARGE_WIND_BURST = "ENTITY_WIND_CHARGE_WIND_BURST",
    ENTITY_WITCH_AMBIENT = "ENTITY_WITCH_AMBIENT",
    ENTITY_WITCH_CELEBRATE = "ENTITY_WITCH_CELEBRATE",
    ENTITY_WITCH_DEATH = "ENTITY_WITCH_DEATH",
    ENTITY_WITCH_DRINK = "ENTITY_WITCH_DRINK",
    ENTITY_WITCH_HURT = "ENTITY_WITCH_HURT",
    ENTITY_WITCH_THROW = "ENTITY_WITCH_THROW",
    ENTITY_WITHER_AMBIENT = "ENTITY_WITHER_AMBIENT",
    ENTITY_WITHER_BREAK_BLOCK = "ENTITY_WITHER_BREAK_BLOCK",
    ENTITY_WITHER_DEATH = "ENTITY_WITHER_DEATH",
    ENTITY_WITHER_HURT = "ENTITY_WITHER_HURT",
    ENTITY_WITHER_SHOOT = "ENTITY_WITHER_SHOOT",
    ENTITY_WITHER_SKELETON_AMBIENT = "ENTITY_WITHER_SKELETON_AMBIENT",
    ENTITY_WITHER_SKELETON_DEATH = "ENTITY_WITHER_SKELETON_DEATH",
    ENTITY_WITHER_SKELETON_HURT = "ENTITY_WITHER_SKELETON_HURT",
    ENTITY_WITHER_SKELETON_STEP = "ENTITY_WITHER_SKELETON_STEP",
    ENTITY_WITHER_SPAWN = "ENTITY_WITHER_SPAWN",
    ENTITY_WOLF_AMBIENT = "ENTITY_WOLF_AMBIENT",
    ENTITY_WOLF_DEATH = "ENTITY_WOLF_DEATH",
    ENTITY_WOLF_GROWL = "ENTITY_WOLF_GROWL",
    ENTITY_WOLF_HOWL = "ENTITY_WOLF_HOWL",
    ENTITY_WOLF_HURT = "ENTITY_WOLF_HURT",
    ENTITY_WOLF_PANT = "ENTITY_WOLF_PANT",
    ENTITY_WOLF_SHAKE = "ENTITY_WOLF_SHAKE",
    ENTITY_WOLF_STEP = "ENTITY_WOLF_STEP",
    ENTITY_WOLF_WHINE = "ENTITY_WOLF_WHINE",
    ENTITY_ZOGLIN_AMBIENT = "ENTITY_ZOGLIN_AMBIENT",
    ENTITY_ZOGLIN_ANGRY = "ENTITY_ZOGLIN_ANGRY",
    ENTITY_ZOGLIN_ATTACK = "ENTITY_ZOGLIN_ATTACK",
    ENTITY_ZOGLIN_DEATH = "ENTITY_ZOGLIN_DEATH",
    ENTITY_ZOGLIN_HURT = "ENTITY_ZOGLIN_HURT",
    ENTITY_ZOGLIN_STEP = "ENTITY_ZOGLIN_STEP",
    ENTITY_ZOMBIE_AMBIENT = "ENTITY_ZOMBIE_AMBIENT",
    ENTITY_ZOMBIE_ATTACK_IRON_DOOR = "ENTITY_ZOMBIE_ATTACK_IRON_DOOR",
    ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR = "ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR",
    ENTITY_ZOMBIE_BREAK_WOODEN_DOOR = "ENTITY_ZOMBIE_BREAK_WOODEN_DOOR",
    ENTITY_ZOMBIE_CONVERTED_TO_DROWNED = "ENTITY_ZOMBIE_CONVERTED_TO_DROWNED",
    ENTITY_ZOMBIE_DEATH = "ENTITY_ZOMBIE_DEATH",
    ENTITY_ZOMBIE_DESTROY_EGG = "ENTITY_ZOMBIE_DESTROY_EGG",
    ENTITY_ZOMBIE_HORSE_AMBIENT = "ENTITY_ZOMBIE_HORSE_AMBIENT",
    ENTITY_ZOMBIE_HORSE_DEATH = "ENTITY_ZOMBIE_HORSE_DEATH",
    ENTITY_ZOMBIE_HORSE_HURT = "ENTITY_ZOMBIE_HORSE_HURT",
    ENTITY_ZOMBIE_HURT = "ENTITY_ZOMBIE_HURT",
    ENTITY_ZOMBIE_INFECT = "ENTITY_ZOMBIE_INFECT",
    ENTITY_ZOMBIE_STEP = "ENTITY_ZOMBIE_STEP",
    ENTITY_ZOMBIE_VILLAGER_AMBIENT = "ENTITY_ZOMBIE_VILLAGER_AMBIENT",
    ENTITY_ZOMBIE_VILLAGER_CONVERTED = "ENTITY_ZOMBIE_VILLAGER_CONVERTED",
    ENTITY_ZOMBIE_VILLAGER_CURE = "ENTITY_ZOMBIE_VILLAGER_CURE",
    ENTITY_ZOMBIE_VILLAGER_DEATH = "ENTITY_ZOMBIE_VILLAGER_DEATH",
    ENTITY_ZOMBIE_VILLAGER_HURT = "ENTITY_ZOMBIE_VILLAGER_HURT",
    ENTITY_ZOMBIE_VILLAGER_STEP = "ENTITY_ZOMBIE_VILLAGER_STEP",
    ENTITY_ZOMBIFIED_PIGLIN_AMBIENT = "ENTITY_ZOMBIFIED_PIGLIN_AMBIENT",
    ENTITY_ZOMBIFIED_PIGLIN_ANGRY = "ENTITY_ZOMBIFIED_PIGLIN_ANGRY",
    ENTITY_ZOMBIFIED_PIGLIN_DEATH = "ENTITY_ZOMBIFIED_PIGLIN_DEATH",
    ENTITY_ZOMBIFIED_PIGLIN_HURT = "ENTITY_ZOMBIFIED_PIGLIN_HURT",
    EVENT_MOB_EFFECT_BAD_OMEN = "EVENT_MOB_EFFECT_BAD_OMEN",
    EVENT_MOB_EFFECT_RAID_OMEN = "EVENT_MOB_EFFECT_RAID_OMEN",
    EVENT_MOB_EFFECT_TRIAL_OMEN = "EVENT_MOB_EFFECT_TRIAL_OMEN",
    EVENT_RAID_HORN = "EVENT_RAID_HORN",
    INTENTIONALLY_EMPTY = "INTENTIONALLY_EMPTY",
    ITEM_ARMOR_EQUIP_CHAIN = "ITEM_ARMOR_EQUIP_CHAIN",
    ITEM_ARMOR_EQUIP_DIAMOND = "ITEM_ARMOR_EQUIP_DIAMOND",
    ITEM_ARMOR_EQUIP_ELYTRA = "ITEM_ARMOR_EQUIP_ELYTRA",
    ITEM_ARMOR_EQUIP_GENERIC = "ITEM_ARMOR_EQUIP_GENERIC",
    ITEM_ARMOR_EQUIP_GOLD = "ITEM_ARMOR_EQUIP_GOLD",
    ITEM_ARMOR_EQUIP_IRON = "ITEM_ARMOR_EQUIP_IRON",
    ITEM_ARMOR_EQUIP_LEATHER = "ITEM_ARMOR_EQUIP_LEATHER",
    ITEM_ARMOR_EQUIP_NETHERITE = "ITEM_ARMOR_EQUIP_NETHERITE",
    ITEM_ARMOR_EQUIP_TURTLE = "ITEM_ARMOR_EQUIP_TURTLE",
    ITEM_ARMOR_EQUIP_WOLF = "ITEM_ARMOR_EQUIP_WOLF",
    ITEM_ARMOR_UNEQUIP_WOLF = "ITEM_ARMOR_UNEQUIP_WOLF",
    ITEM_AXE_SCRAPE = "ITEM_AXE_SCRAPE",
    ITEM_AXE_STRIP = "ITEM_AXE_STRIP",
    ITEM_AXE_WAX_OFF = "ITEM_AXE_WAX_OFF",
    ITEM_BONE_MEAL_USE = "ITEM_BONE_MEAL_USE",
    ITEM_BOOK_PAGE_TURN = "ITEM_BOOK_PAGE_TURN",
    ITEM_BOOK_PUT = "ITEM_BOOK_PUT",
    ITEM_BOTTLE_EMPTY = "ITEM_BOTTLE_EMPTY",
    ITEM_BOTTLE_FILL = "ITEM_BOTTLE_FILL",
    ITEM_BOTTLE_FILL_DRAGONBREATH = "ITEM_BOTTLE_FILL_DRAGONBREATH",
    ITEM_BRUSH_BRUSHING_GENERIC = "ITEM_BRUSH_BRUSHING_GENERIC",
    ITEM_BRUSH_BRUSHING_GRAVEL = "ITEM_BRUSH_BRUSHING_GRAVEL",
    ITEM_BRUSH_BRUSHING_GRAVEL_COMPLETE = "ITEM_BRUSH_BRUSHING_GRAVEL_COMPLETE",
    ITEM_BRUSH_BRUSHING_SAND = "ITEM_BRUSH_BRUSHING_SAND",
    ITEM_BRUSH_BRUSHING_SAND_COMPLETE = "ITEM_BRUSH_BRUSHING_SAND_COMPLETE",
    ITEM_BUCKET_EMPTY = "ITEM_BUCKET_EMPTY",
    ITEM_BUCKET_EMPTY_AXOLOTL = "ITEM_BUCKET_EMPTY_AXOLOTL",
    ITEM_BUCKET_EMPTY_FISH = "ITEM_BUCKET_EMPTY_FISH",
    ITEM_BUCKET_EMPTY_LAVA = "ITEM_BUCKET_EMPTY_LAVA",
    ITEM_BUCKET_EMPTY_POWDER_SNOW = "ITEM_BUCKET_EMPTY_POWDER_SNOW",
    ITEM_BUCKET_EMPTY_TADPOLE = "ITEM_BUCKET_EMPTY_TADPOLE",
    ITEM_BUCKET_FILL = "ITEM_BUCKET_FILL",
    ITEM_BUCKET_FILL_AXOLOTL = "ITEM_BUCKET_FILL_AXOLOTL",
    ITEM_BUCKET_FILL_FISH = "ITEM_BUCKET_FILL_FISH",
    ITEM_BUCKET_FILL_LAVA = "ITEM_BUCKET_FILL_LAVA",
    ITEM_BUCKET_FILL_POWDER_SNOW = "ITEM_BUCKET_FILL_POWDER_SNOW",
    ITEM_BUCKET_FILL_TADPOLE = "ITEM_BUCKET_FILL_TADPOLE",
    ITEM_BUNDLE_DROP_CONTENTS = "ITEM_BUNDLE_DROP_CONTENTS",
    ITEM_BUNDLE_INSERT = "ITEM_BUNDLE_INSERT",
    ITEM_BUNDLE_REMOVE_ONE = "ITEM_BUNDLE_REMOVE_ONE",
    ITEM_CHORUS_FRUIT_TELEPORT = "ITEM_CHORUS_FRUIT_TELEPORT",
    ITEM_CROP_PLANT = "ITEM_CROP_PLANT",
    ITEM_CROSSBOW_HIT = "ITEM_CROSSBOW_HIT",
    ITEM_CROSSBOW_LOADING_END = "ITEM_CROSSBOW_LOADING_END",
    ITEM_CROSSBOW_LOADING_MIDDLE = "ITEM_CROSSBOW_LOADING_MIDDLE",
    ITEM_CROSSBOW_LOADING_START = "ITEM_CROSSBOW_LOADING_START",
    ITEM_CROSSBOW_QUICK_CHARGE_1 = "ITEM_CROSSBOW_QUICK_CHARGE_1",
    ITEM_CROSSBOW_QUICK_CHARGE_2 = "ITEM_CROSSBOW_QUICK_CHARGE_2",
    ITEM_CROSSBOW_QUICK_CHARGE_3 = "ITEM_CROSSBOW_QUICK_CHARGE_3",
    ITEM_CROSSBOW_SHOOT = "ITEM_CROSSBOW_SHOOT",
    ITEM_DYE_USE = "ITEM_DYE_USE",
    ITEM_ELYTRA_FLYING = "ITEM_ELYTRA_FLYING",
    ITEM_FIRECHARGE_USE = "ITEM_FIRECHARGE_USE",
    ITEM_FLINTANDSTEEL_USE = "ITEM_FLINTANDSTEEL_USE",
    ITEM_GLOW_INK_SAC_USE = "ITEM_GLOW_INK_SAC_USE",
    ITEM_GOAT_HORN_PLAY = "ITEM_GOAT_HORN_PLAY",
    ITEM_GOAT_HORN_SOUND_0 = "ITEM_GOAT_HORN_SOUND_0",
    ITEM_GOAT_HORN_SOUND_1 = "ITEM_GOAT_HORN_SOUND_1",
    ITEM_GOAT_HORN_SOUND_2 = "ITEM_GOAT_HORN_SOUND_2",
    ITEM_GOAT_HORN_SOUND_3 = "ITEM_GOAT_HORN_SOUND_3",
    ITEM_GOAT_HORN_SOUND_4 = "ITEM_GOAT_HORN_SOUND_4",
    ITEM_GOAT_HORN_SOUND_5 = "ITEM_GOAT_HORN_SOUND_5",
    ITEM_GOAT_HORN_SOUND_6 = "ITEM_GOAT_HORN_SOUND_6",
    ITEM_GOAT_HORN_SOUND_7 = "ITEM_GOAT_HORN_SOUND_7",
    ITEM_HOE_TILL = "ITEM_HOE_TILL",
    ITEM_HONEYCOMB_WAX_ON = "ITEM_HONEYCOMB_WAX_ON",
    ITEM_HONEY_BOTTLE_DRINK = "ITEM_HONEY_BOTTLE_DRINK",
    ITEM_INK_SAC_USE = "ITEM_INK_SAC_USE",
    ITEM_LODESTONE_COMPASS_LOCK = "ITEM_LODESTONE_COMPASS_LOCK",
    ITEM_MACE_SMASH_AIR = "ITEM_MACE_SMASH_AIR",
    ITEM_MACE_SMASH_GROUND = "ITEM_MACE_SMASH_GROUND",
    ITEM_MACE_SMASH_GROUND_HEAVY = "ITEM_MACE_SMASH_GROUND_HEAVY",
    ITEM_NETHER_WART_PLANT = "ITEM_NETHER_WART_PLANT",
    ITEM_OMINOUS_BOTTLE_DISPOSE = "ITEM_OMINOUS_BOTTLE_DISPOSE",
    ITEM_SHIELD_BLOCK = "ITEM_SHIELD_BLOCK",
    ITEM_SHIELD_BREAK = "ITEM_SHIELD_BREAK",
    ITEM_SHOVEL_FLATTEN = "ITEM_SHOVEL_FLATTEN",
    ITEM_SPYGLASS_STOP_USING = "ITEM_SPYGLASS_STOP_USING",
    ITEM_SPYGLASS_USE = "ITEM_SPYGLASS_USE",
    ITEM_TOTEM_USE = "ITEM_TOTEM_USE",
    ITEM_TRIDENT_HIT = "ITEM_TRIDENT_HIT",
    ITEM_TRIDENT_HIT_GROUND = "ITEM_TRIDENT_HIT_GROUND",
    ITEM_TRIDENT_RETURN = "ITEM_TRIDENT_RETURN",
    ITEM_TRIDENT_RIPTIDE_1 = "ITEM_TRIDENT_RIPTIDE_1",
    ITEM_TRIDENT_RIPTIDE_2 = "ITEM_TRIDENT_RIPTIDE_2",
    ITEM_TRIDENT_RIPTIDE_3 = "ITEM_TRIDENT_RIPTIDE_3",
    ITEM_TRIDENT_THROW = "ITEM_TRIDENT_THROW",
    ITEM_TRIDENT_THUNDER = "ITEM_TRIDENT_THUNDER",
    ITEM_WOLF_ARMOR_BREAK = "ITEM_WOLF_ARMOR_BREAK",
    ITEM_WOLF_ARMOR_CRACK = "ITEM_WOLF_ARMOR_CRACK",
    ITEM_WOLF_ARMOR_DAMAGE = "ITEM_WOLF_ARMOR_DAMAGE",
    ITEM_WOLF_ARMOR_REPAIR = "ITEM_WOLF_ARMOR_REPAIR",
    MUSIC_CREATIVE = "MUSIC_CREATIVE",
    MUSIC_CREDITS = "MUSIC_CREDITS",
    MUSIC_DISC_11 = "MUSIC_DISC_11",
    MUSIC_DISC_13 = "MUSIC_DISC_13",
    MUSIC_DISC_5 = "MUSIC_DISC_5",
    MUSIC_DISC_BLOCKS = "MUSIC_DISC_BLOCKS",
    MUSIC_DISC_CAT = "MUSIC_DISC_CAT",
    MUSIC_DISC_CHIRP = "MUSIC_DISC_CHIRP",
    MUSIC_DISC_CREATOR = "MUSIC_DISC_CREATOR",
    MUSIC_DISC_CREATOR_MUSIC_BOX = "MUSIC_DISC_CREATOR_MUSIC_BOX",
    MUSIC_DISC_FAR = "MUSIC_DISC_FAR",
    MUSIC_DISC_MALL = "MUSIC_DISC_MALL",
    MUSIC_DISC_MELLOHI = "MUSIC_DISC_MELLOHI",
    MUSIC_DISC_OTHERSIDE = "MUSIC_DISC_OTHERSIDE",
    MUSIC_DISC_PIGSTEP = "MUSIC_DISC_PIGSTEP",
    MUSIC_DISC_PRECIPICE = "MUSIC_DISC_PRECIPICE",
    MUSIC_DISC_RELIC = "MUSIC_DISC_RELIC",
    MUSIC_DISC_STAL = "MUSIC_DISC_STAL",
    MUSIC_DISC_STRAD = "MUSIC_DISC_STRAD",
    MUSIC_DISC_WAIT = "MUSIC_DISC_WAIT",
    MUSIC_DISC_WARD = "MUSIC_DISC_WARD",
    MUSIC_DRAGON = "MUSIC_DRAGON",
    MUSIC_END = "MUSIC_END",
    MUSIC_GAME = "MUSIC_GAME",
    MUSIC_MENU = "MUSIC_MENU",
    MUSIC_NETHER_BASALT_DELTAS = "MUSIC_NETHER_BASALT_DELTAS",
    MUSIC_NETHER_CRIMSON_FOREST = "MUSIC_NETHER_CRIMSON_FOREST",
    MUSIC_NETHER_NETHER_WASTES = "MUSIC_NETHER_NETHER_WASTES",
    MUSIC_NETHER_SOUL_SAND_VALLEY = "MUSIC_NETHER_SOUL_SAND_VALLEY",
    MUSIC_NETHER_WARPED_FOREST = "MUSIC_NETHER_WARPED_FOREST",
    MUSIC_OVERWORLD_BADLANDS = "MUSIC_OVERWORLD_BADLANDS",
    MUSIC_OVERWORLD_BAMBOO_JUNGLE = "MUSIC_OVERWORLD_BAMBOO_JUNGLE",
    MUSIC_OVERWORLD_CHERRY_GROVE = "MUSIC_OVERWORLD_CHERRY_GROVE",
    MUSIC_OVERWORLD_DEEP_DARK = "MUSIC_OVERWORLD_DEEP_DARK",
    MUSIC_OVERWORLD_DESERT = "MUSIC_OVERWORLD_DESERT",
    MUSIC_OVERWORLD_DRIPSTONE_CAVES = "MUSIC_OVERWORLD_DRIPSTONE_CAVES",
    MUSIC_OVERWORLD_FLOWER_FOREST = "MUSIC_OVERWORLD_FLOWER_FOREST",
    MUSIC_OVERWORLD_FOREST = "MUSIC_OVERWORLD_FOREST",
    MUSIC_OVERWORLD_FROZEN_PEAKS = "MUSIC_OVERWORLD_FROZEN_PEAKS",
    MUSIC_OVERWORLD_GROVE = "MUSIC_OVERWORLD_GROVE",
    MUSIC_OVERWORLD_JAGGED_PEAKS = "MUSIC_OVERWORLD_JAGGED_PEAKS",
    MUSIC_OVERWORLD_JUNGLE = "MUSIC_OVERWORLD_JUNGLE",
    MUSIC_OVERWORLD_LUSH_CAVES = "MUSIC_OVERWORLD_LUSH_CAVES",
    MUSIC_OVERWORLD_MEADOW = "MUSIC_OVERWORLD_MEADOW",
    MUSIC_OVERWORLD_OLD_GROWTH_TAIGA = "MUSIC_OVERWORLD_OLD_GROWTH_TAIGA",
    MUSIC_OVERWORLD_SNOWY_SLOPES = "MUSIC_OVERWORLD_SNOWY_SLOPES",
    MUSIC_OVERWORLD_SPARSE_JUNGLE = "MUSIC_OVERWORLD_SPARSE_JUNGLE",
    MUSIC_OVERWORLD_STONY_PEAKS = "MUSIC_OVERWORLD_STONY_PEAKS",
    MUSIC_OVERWORLD_SWAMP = "MUSIC_OVERWORLD_SWAMP",
    MUSIC_UNDER_WATER = "MUSIC_UNDER_WATER",
    PARTICLE_SOUL_ESCAPE = "PARTICLE_SOUL_ESCAPE",
    UI_BUTTON_CLICK = "UI_BUTTON_CLICK",
    UI_CARTOGRAPHY_TABLE_TAKE_RESULT = "UI_CARTOGRAPHY_TABLE_TAKE_RESULT",
    UI_LOOM_SELECT_PATTERN = "UI_LOOM_SELECT_PATTERN",
    UI_LOOM_TAKE_RESULT = "UI_LOOM_TAKE_RESULT",
    UI_STONECUTTER_SELECT_RECIPE = "UI_STONECUTTER_SELECT_RECIPE",
    UI_STONECUTTER_TAKE_RESULT = "UI_STONECUTTER_TAKE_RESULT",
    UI_TOAST_CHALLENGE_COMPLETE = "UI_TOAST_CHALLENGE_COMPLETE",
    UI_TOAST_IN = "UI_TOAST_IN",
    UI_TOAST_OUT = "UI_TOAST_OUT",
    WEATHER_RAIN = "WEATHER_RAIN",
    WEATHER_RAIN_ABOVE = "WEATHER_RAIN_ABOVE",
}

export interface geary$item_left_click_block {
}

export interface geary$tamable {
    tameItem?: BaseSerializableItemStack | null;
    saddleModelId?: string | null;
}

export interface geary$is_source_liquid {
}

export interface geary$start_cooldown {
    length: string;
    display?: string | null;
    id: string;
}

export interface geary$block {
    allow?: string[];
    deny?: string[];
}

export interface geary$check$entity {
    sleeping?: boolean | null;
    swimming?: boolean | null;
    climbing?: boolean | null;
    jumping?: boolean | null;
    inLava?: boolean | null;
    inWater?: boolean | null;
    inBubbleColumn?: boolean | null;
    inRain?: boolean | null;
    onGround?: boolean | null;
    gliding?: boolean | null;
    frozen?: boolean | null;
    inPowderedSnow?: boolean | null;
    inCobweb?: boolean | null;
    insideVehicle?: boolean | null;
    riptiding?: boolean | null;
    invisible?: boolean | null;
    glowing?: boolean | null;
    invurnerable?: boolean | null;
    silent?: boolean | null;
    leashed?: boolean | null;
}

export type geary$on_damaged = any;

export interface geary$prevent$breeding {
}

export interface geary$on_death {
}

export interface geary$block_above {
    allow?: string[];
    deny?: string[];
}

export type geary$ensure = Base;

export interface geary$sounds {
    step?: geary$sound | null;
    ambient?: geary$sound | null;
    death?: geary$sound | null;
    hurt?: geary$sound | null;
    splash?: geary$sound | null;
    swim?: geary$sound | null;
    ambientRate?: string;
    ambientChance?: number;
}

export interface geary$sound {
    sound: string;
    volume?: number;
    pitch?: number;
    pitchRange?: number;
    category?: SoundCategory;
}

export enum SoundCategory {
    MASTER = "MASTER",
    MUSIC = "MUSIC",
    RECORDS = "RECORDS",
    WEATHER = "WEATHER",
    BLOCKS = "BLOCKS",
    HOSTILE = "HOSTILE",
    NEUTRAL = "NEUTRAL",
    PLAYERS = "PLAYERS",
    AMBIENT = "AMBIENT",
    VOICE = "VOICE",
}

export interface geary$resourcepack {
    baseMaterial?: string | null;
    model?: string | null;
    parentModel?: string;
    textures?: ModelTexturesSurrogate;
    itemPredicates?: ItemPredicates;
}

export type ModelTexturesSurrogate = any;

export interface ItemPredicates {
    customModelData?: number | null;
    blockingModel?: string | null;
    blockingTexture?: string | null;
    brokenModel?: string | null;
    brokenTexture?: string | null;
    castModel?: string | null;
    castTexture?: string | null;
    chargedModel?: string | null;
    chargedTexture?: string | null;
    fireworkModel?: string | null;
    fireworkTexture?: string | null;
    lefthandedModel?: string | null;
    lefthandedTexture?: string | null;
    throwingModel?: string | null;
    throwingTexture?: string | null;
    angleModels?: { [key: string]: number };
    angleTextures?: { [key: string]: number };
    cooldownModels?: { [key: string]: number };
    cooldownTextures?: { [key: string]: number };
    damageModels?: { [key: string]: number };
    damageTextures?: { [key: string]: number };
    pullingModels?: { [key: string]: number };
    pullingTextures?: { [key: string]: number };
    timeModels?: { [key: string]: number };
    timeTextures?: { [key: string]: number };
}

export interface geary$set$item {
    item: BaseSerializableItemStack;
}

export interface geary$player {
    sneaking?: boolean | null;
    sprinting?: boolean | null;
    blocking?: boolean | null;
    sleeping?: boolean | null;
    deeplySleeping?: boolean | null;
    swimming?: boolean | null;
    climbing?: boolean | null;
    jumping?: boolean | null;
    inLava?: boolean | null;
    inWater?: boolean | null;
    inBubbleColumn?: boolean | null;
    inRain?: boolean | null;
    flying?: boolean | null;
    gliding?: boolean | null;
    frozen?: boolean | null;
    freezeTickingLocked?: boolean | null;
    inPowderedSnow?: boolean | null;
    inCobweb?: boolean | null;
    insideVehicle?: boolean | null;
    conversing?: boolean | null;
    riptiding?: boolean | null;
    invisible?: boolean | null;
    glowing?: boolean | null;
    invurnerable?: boolean | null;
    silent?: boolean | null;
    op?: boolean | null;
}

export interface geary$relation {
    target: string;
    data: Any;
}

export interface geary$consume_item {
    type: BaseSerializableItemStack;
    amount?: number;
}

export interface geary$sound {
    sound: string;
    volume?: number;
    pitch?: number;
    pitchRange?: number;
    category?: SoundCategory;
}

export interface geary$get_location {
}

export interface geary$particle {
    particle: Any;
    offsetX?: Any;
    offsetY?: Any;
    offsetZ?: Any;
    color?: Any;
    count?: Any;
    radius?: Any;
    speed?: Any;
}

export interface geary$item_left_click {
}

export type geary$item_break = any;

export type geary$instances = { [key: string]: Base };

export type geary$passive = SystemBind[];

export interface SystemBind {
    match: ULong[];
    every?: string;
    run: Base[];
}

export type geary$inherit = string[];

export interface geary$explode {
    breakBlocks?: Any;
    setFire?: Any;
    power?: Any;
}

export interface geary$disable_item_interactions {
}

export type geary$chance = number;

export type geary$set$mythic_mob = string;

export type geary$on_spawn = any;

export interface geary$get_nearby_entities {
    radius: Any;
}

export type geary$set$entity_type = string;

export interface geary$prevent$regeneration {
    reason?: RegainReason[];
}

export enum RegainReason {
    REGEN = "REGEN",
    SATIATED = "SATIATED",
    EATING = "EATING",
    ENDER_CRYSTAL = "ENDER_CRYSTAL",
    MAGIC = "MAGIC",
    MAGIC_REGEN = "MAGIC_REGEN",
    WITHER_SPAWN = "WITHER_SPAWN",
    WITHER = "WITHER",
    CUSTOM = "CUSTOM",
}

export type geary$apply_potion_effects = PotionEffect[];

export type geary$mythic_skills = string[];

export interface geary$set$recipes {
    recipes: SerializableRecipeIngredients[];
    discoverRecipes?: boolean;
    group?: string;
    category?: string;
    removeRecipes?: string[];
    result?: BaseSerializableItemStack | null;
}

export type SerializableRecipeIngredients =
    | SerializableRecipeIngredients.blasting
    | SerializableRecipeIngredients.campfire
    | SerializableRecipeIngredients.furnace
    | SerializableRecipeIngredients.shaped
    | SerializableRecipeIngredients.shapeless
    | SerializableRecipeIngredients.smithing_transform
    | SerializableRecipeIngredients.smithing_trim
    | SerializableRecipeIngredients.smoking
    | SerializableRecipeIngredients.stonecutting;

export namespace SerializableRecipeIngredients {
    export enum Type {
        blasting = "blasting",
        campfire = "campfire",
        furnace = "furnace",
        shaped = "shaped",
        shapeless = "shapeless",
        smithing_transform = "smithing_transform",
        smithing_trim = "smithing_trim",
        smoking = "smoking",
        stonecutting = "stonecutting",
    }

    export interface blasting {
        type: SerializableRecipeIngredients.Type.blasting;
        input: BaseSerializableItemStack;
        experience: number;
        cookingTime: number;
    }

    export interface campfire {
        type: SerializableRecipeIngredients.Type.campfire;
        input: BaseSerializableItemStack;
        experience: number;
        cookingTime: number;
    }

    export interface furnace {
        type: SerializableRecipeIngredients.Type.furnace;
        input: BaseSerializableItemStack;
        experience: number;
        cookingTime: number;
    }

    export interface shaped {
        type: SerializableRecipeIngredients.Type.shaped;
        items: { [key: string]: BaseSerializableItemStack };
        configuration?: string;
    }

    export interface shapeless {
        type: SerializableRecipeIngredients.Type.shapeless;
        items: BaseSerializableItemStack[];
    }

    export interface smithing_transform {
        type: SerializableRecipeIngredients.Type.smithing_transform;
        input: BaseSerializableItemStack;
        template?: BaseSerializableItemStack;
        addition: BaseSerializableItemStack;
        copyNbt?: boolean;
    }

    export interface smithing_trim {
        type: SerializableRecipeIngredients.Type.smithing_trim;
        input: BaseSerializableItemStack;
        template?: BaseSerializableItemStack;
        addition: BaseSerializableItemStack;
        copyNbt?: boolean;
    }

    export interface smoking {
        type: SerializableRecipeIngredients.Type.smoking;
        input: BaseSerializableItemStack;
        experience: number;
        cookingTime: number;
    }

    export interface stonecutting {
        type: SerializableRecipeIngredients.Type.stonecutting;
        input: BaseSerializableItemStack;
    }
}

export interface geary$in_inventory {
}

export interface blocky$sound {
    placeSound?: string | null;
    breakSound?: string | null;
    hitSound?: string | null;
    stepSound?: string | null;
    fallSound?: string | null;
    openSound?: string | null;
    closeSound?: string | null;
}

export interface blocky$prevent_itemstack_update {
    forceWhenDifferentMaterial?: boolean;
}

export interface blocky$pack {
    model?: string | null;
    parentModel?: string | null;
    textures?: { [key: string]: string } | null;
}

export interface blocky$info {
    isUnbreakable?: boolean;
}

export type blocky$light = number;

export type blocky$collision_hitbox = BlockLocation;

export interface BlockLocation {
    x?: number;
    y?: number;
    z?: number;
}

export interface blocky$furniture_color {
    color: Color;
}

export interface blocky$directional {
    yBlock?: string | null;
    xBlock?: string | null;
    zBlock?: string | null;
    northBlock?: string | null;
    southBlock?: string | null;
    westBlock?: string | null;
    eastBlock?: string | null;
    upBlock?: string | null;
    downBlock?: string | null;
    parentBlock?: string | null;
}

export interface blocky$modifier {
    heldItems?: BlockySerializableItemModifier[];
    heldTypes?: BlockyToolModifier[];
}

export interface BlockySerializableItemModifier {
    item: BaseSerializableItemStack;
    value: number;
}

export interface BlockyToolModifier {
    toolType: ToolType;
    value: number;
}

export enum ToolType {
    PICKAXE = "PICKAXE",
    AXE = "AXE",
    SHOVEL = "SHOVEL",
    HOE = "HOE",
    SWORD = "SWORD",
    SHEARS = "SHEARS",
    ANY = "ANY",
}

export interface blocky$vanilla_note_block {
    note?: number;
    powered?: boolean;
}

export interface blocky$modelengine {
    modelId: string;
}

export interface blocky$placable_on {
    floor?: boolean;
    wall?: boolean;
    ceiling?: boolean;
    type?: AllowType;
    blocks?: Material[];
    blockTags?: string[];
    blockyBlocks?: string[];
}

export enum AllowType {
    ALLOW = "ALLOW",
    DENY = "DENY",
}

export interface blocky$burnable {
}

export interface blocky$furniture {
    properties?: blocky$furniture_properties;
    rotationType?: RotationType;
    collisionHitbox?: blocky$collision_hitbox[];
    interactionHitbox?: blocky$interaction_hitbox[];
}

export interface blocky$furniture_properties {
    persistent?: boolean;
    itemStack?: BaseSerializableItemStack | null;
    displayTransform?: ItemDisplayTransform;
    scale?: Vector;
    translation?: Vector;
    displayWidth?: number;
    displayHeight?: number;
    trackingRotation?: Billboard;
    brightness?: Brightness | null;
    viewRange?: number | null;
    shadowStrength?: number | null;
    shadowRadius?: number | null;
}

export enum RotationType {
    NONE = "NONE",
    STRICT = "STRICT",
    VERY_STRICT = "VERY_STRICT",
}

export enum ItemDisplayTransform {
    NONE = "NONE",
    THIRDPERSON_LEFTHAND = "THIRDPERSON_LEFTHAND",
    THIRDPERSON_RIGHTHAND = "THIRDPERSON_RIGHTHAND",
    FIRSTPERSON_LEFTHAND = "FIRSTPERSON_LEFTHAND",
    FIRSTPERSON_RIGHTHAND = "FIRSTPERSON_RIGHTHAND",
    HEAD = "HEAD",
    GUI = "GUI",
    GROUND = "GROUND",
    FIXED = "FIXED",
}

export interface Vector {
    x?: number;
    y?: number;
    z?: number;
}

export enum Billboard {
    FIXED = "FIXED",
    VERTICAL = "VERTICAL",
    HORIZONTAL = "HORIZONTAL",
    CENTER = "CENTER",
}

export interface Brightness {
    blockLight?: number;
    skyLight?: number;
}

export interface blocky$interaction_hitbox {
    offset?: Vector;
    width: number;
    height: number;
    outline?: BaseSerializableItemStack;
}

export interface blocky$mining {
    toolTypes?: ToolType[];
}

export interface blocky$waxed_copper_block {
}

export interface blocky$drops {
    acceptedToolTypes?: ToolType[];
    onlyDropWithCorrectTool?: boolean;
    drops?: BlockyDrop[];
}

export interface BlockyDrop {
    item?: BaseSerializableItemStack | null;
    amount?: string;
    exp?: number;
    affectedByFortune?: boolean;
    silkTouchedDrop?: BaseSerializableItemStack | null;
}

export interface blocky$associated_seats {
    _seats?: string[];
}

export interface blocky$instrument {
    instrument?: string;
}

export interface blocky$breaking {
    hardness: number;
    modifiers?: blocky$modifier;
}

export type blocky$seats = Vector[];

export interface blocky$tall_wire {
    _baseWire?: Location | null;
}

export interface Location {
    world?: string;
    x: number;
    y: number;
    z: number;
}

export interface packy$packy_data {
    templates?: { [key: string]: boolean };
    bypassForced?: boolean;
}

export type packy$templates = { [key: string]: PackyTemplate };

export interface PackyTemplate {
    default?: boolean;
    required?: boolean;
    conflictsWith?: string[];
    githubDownload?: GithubDownload | null;
    loadTrigger?: LoadTrigger;
    filePath?: string | null;
}

export interface GithubDownload {
    org: string;
    repo: string;
    branch: string;
    subFolder?: string | null;
}

export type LoadTrigger =
    | LoadTrigger.Crucible
    | LoadTrigger.ModelEngine
    | LoadTrigger.None
    | LoadTrigger.Oraxen;

export namespace LoadTrigger {
    export enum Type {
        Crucible = "Crucible",
        ModelEngine = "ModelEngine",
        None = "None",
        Oraxen = "Oraxen",
    }

    export interface Crucible {
        type: LoadTrigger.Type.Crucible;
    }

    export interface ModelEngine {
        type: LoadTrigger.Type.ModelEngine;
    }

    export interface None {
        type: LoadTrigger.Type.None;
    }

    export interface Oraxen {
        type: LoadTrigger.Type.Oraxen;
    }
}

export interface chatty$command_spy {
}

export interface chatty$chatty_data {
    channelId?: string;
    lastChannelUsedId?: string;
    disablePingSound?: boolean;
    pingSound?: string | null;
    lastMessager?: string | null;
}

export interface chatty$spy_on_channels {
    channels?: string[];
}

export interface chatty$hide_join_leave {
}

export interface chatty$nickname {
    nickname: string;
}

export interface minecraft$constant {
    value: number;
}

export interface mineinabyss$show_depthmeter_hud {
}

export interface mineinabyss$toggle_depth_hud {
}

export interface mineinabyss$sickle {
    radius?: number;
}

export interface mineinabyss$patreon_item {
}

export interface mineinabyss$okibotravel {
}

export interface mineinabyss$okibo_map_hitbox {
    destStation: string;
    offset: Vector;
    hitbox?: Hitbox;
}

export interface Hitbox {
    width?: number;
    height?: number;
}

export interface mineinabyss$lockable {
    owner: string;
    lockState: boolean;
    allowedAccess: string[];
    bypassPermission?: string;
}

export interface mineinabyss$loot_location {
    location: Location;
}

export interface mineinabyss$bird {
}

export interface mineinabyss$unlocked_gondolas {
    keys?: string[];
}

export interface mineinabyss$insect {
}

export interface mineinabyss$depthmeter {
    sectionXOffset?: number;
    sectionYOffset?: number;
    abyssStartingHeightInOrth?: number;
}

export interface mineinabyss$player_profile {
    background?: string;
    displayProfileArmor?: boolean;
}

export interface mineinabyss$orthbound {
}

export interface mineinabyss$orthbanker {
}

export interface mineinabyss$grappling_hook {
    range: number;
    hookSpeed: number;
    pullSpeed: number;
    pullStrength: number;
    type: GrapplingHookType;
}

export enum GrapplingHookType {
    MECHANICAL = "MECHANICAL",
    MANUAL = "MANUAL",
}

export interface mineinabyss$sign_owner {
    owner: string;
}

export interface mineinabyss$patreon {
    tier?: number;
    kitUsedMonth?: Month | null;
}

export enum Month {
    JANUARY = "JANUARY",
    FEBRUARY = "FEBRUARY",
    MARCH = "MARCH",
    APRIL = "APRIL",
    MAY = "MAY",
    JUNE = "JUNE",
    JULY = "JULY",
    AUGUST = "AUGUST",
    SEPTEMBER = "SEPTEMBER",
    OCTOBER = "OCTOBER",
    NOVEMBER = "NOVEMBER",
    DECEMBER = "DECEMBER",
}

export interface minecraft$set_count {
    conditions?: LootCondition[];
    count: Roll;
}

export type Roll =
    | Roll.minecraft$binomial
    | Roll.minecraft$constant
    | Roll.minecraft$uniform;

export namespace Roll {
    export enum Type {
        minecraft$binomial = "minecraft:binomial",
        minecraft$constant = "minecraft:constant",
        minecraft$uniform = "minecraft:uniform",
    }

    export interface minecraft$binomial {
        type: Roll.Type.minecraft$binomial;
        n: number;
        p: number;
    }

    export interface minecraft$constant {
        type: Roll.Type.minecraft$constant;
        value: number;
    }

    export interface minecraft$uniform {
        type: Roll.Type.minecraft$uniform;
        min: number;
        max: number;
    }
}

export type LootCondition =
    | LootCondition.minecraft$random_chance;

export namespace LootCondition {
    export enum Type {
        minecraft$random_chance = "minecraft:random_chance",
    }

    export interface minecraft$random_chance {
        type: LootCondition.Type.minecraft$random_chance;
        chance: number;
    }
}

export interface minecraft$group {
    weight?: number;
    functions?: LootFunction[];
    conditions?: LootCondition[];
    children: LootEntry[];
}

export type LootFunction =
    | LootFunction.minecraft$set_count;

export namespace LootFunction {
    export enum Type {
        minecraft$set_count = "minecraft:set_count",
    }

    export interface minecraft$set_count {
        type: LootFunction.Type.minecraft$set_count;
        conditions?: LootCondition[];
        count: Roll;
    }
}

export type LootEntry =
    | LootEntry.minecraft$group
    | LootEntry.minecraft$item
    | LootEntry.mineinabyss$item;

export namespace LootEntry {
    export enum Type {
        minecraft$group = "minecraft:group",
        mineinabyss$item = "mineinabyss:item",
        minecraft$item = "minecraft:item",
    }

    export interface minecraft$group {
        type: LootEntry.Type.minecraft$group;
        weight?: number;
        functions?: LootFunction[];
        conditions?: LootCondition[];
        children: LootEntry[];
    }

    export interface mineinabyss$item {
        type: LootEntry.Type.mineinabyss$item;
        weight?: number;
        functions?: LootFunction[];
        conditions?: LootCondition[];
        item: BaseSerializableItemStack;
    }

    export interface minecraft$item {
        type: LootEntry.Type.minecraft$item;
        weight?: number;
        functions?: LootFunction[];
        conditions?: LootCondition[];
        name: string;
    }
}

export interface mineinabyss$starcompass {
}

export interface mineinabyss$tutorial_entity {
    location: Location;
    text: string;
    backgroundColor?: Color;
    shadow?: boolean;
    alignment?: TextAlignment;
    billboard?: Billboard;
    scale?: Vector;
    seeThrough?: boolean;
}

export enum TextAlignment {
    CENTER = "CENTER",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
}

export interface mineinabyss$contains_loot {
    table: string;
}

export interface mineinabyss$okibo_map {
    station: string;
    noticeBoardFurniture?: NoticeBoardFurniture | null;
    offset?: Vector;
    yaw?: number;
    text?: string;
    scale?: Vector;
    hitboxes: mineinabyss$okibo_map_hitbox[];
    icon?: Icon | null;
}

export interface NoticeBoardFurniture {
    prefab?: string;
    offset?: Vector;
    yaw?: number;
}

export interface Icon {
    text?: string;
    offset?: Vector;
}

export interface mineinabyss$backpack {
    backpackContent?: BaseSerializableItemStack[];
}

export interface mineinabyss$okibo_line_station {
    name: string;
    location: Location;
    subStations?: mineinabyss$okibo_line_station[];
}

export interface minecraft$uniform {
    min: number;
    max: number;
}

export interface mineinabyss$spy_on_guild_chat {
}

export interface mineinabyss$toggle_starcompass_hud {
}

export interface mineinabyss$guildmaster {
}

export interface mineinabyss$splitjaw {
}

export interface mineinabyss$shopkeeper {
    name?: string;
    menu?: string;
    buying?: ShopTrade[];
    selling?: ShopTrade[];
    specialTrades?: ShopTrade[];
}

export interface ShopTrade {
    item: BaseSerializableItemStack;
    currency?: BaseSerializableItemStack | null;
    currencyType?: ShopCurrency;
    price: number;
    tradeAction?: ShopTrade;
}

export enum ShopCurrency {
    ORTH_COIN = "ORTH_COIN",
    MITTY_TOKEN = "MITTY_TOKEN",
    ITEM = "ITEM",
}

export interface mineinabyss$remove_in_orth {
}

export interface mineinabyss$loot_table {
    pools: LootPool[];
    itemName?: string | null;
}

export interface LootPool {
    rolls?: Roll;
    entries: LootEntry[];
    functions?: LootFunction[];
    conditions?: LootCondition[];
}

export interface mineinabyss$item {
    weight?: number;
    functions?: LootFunction[];
    conditions?: LootCondition[];
    item: BaseSerializableItemStack;
}

export interface minecraft$random_chance {
    chance: number;
}

export interface minecraft$item {
    weight?: number;
    functions?: LootFunction[];
    conditions?: LootCondition[];
    name: string;
}

export interface mineinabyss$descent_context {
    startDate?: number;
    expOnDescent?: number;
    pinUsedLayers?: LayerKey[];
    lowestDepth?: number;
}

export type LayerKey = string;

export interface mineinabyss$custom_hud_data {
    showBackgrounds?: boolean;
    alwaysShowAir?: boolean;
    alwaysShowArmor?: boolean;
    showStarCompassHud?: boolean;
    showDepthMeterHud?: boolean;
}

export interface mineinabyss$player_data {
    isAffectedByCurse?: boolean;
    curseAccrued?: number;
    exp?: number;
    keepInvStatus?: boolean;
    showPvpPrompt?: boolean;
    pvpUndecided?: boolean;
    pvpStatus?: boolean;
    orthCoinsHeld?: number;
    mittyTokensHeld?: number;
    showPlayerBalance?: boolean;
    displayProfileArmor?: boolean;
    defaultDisplayLockState?: boolean;
    recentInteractEntity?: string | null;
    replant?: boolean;
}

export interface mineinabyss$show_starcompass_hud {
}

export interface cosmetics$equipped_backpack_storage {
    backpack: string;
}

export interface minecraft$binomial {
    n: number;
    p: number;
}

export interface mineinabyss$show_depth {
}

export interface mineinabyss$gondola {
    location: Location;
    name: string;
    displayItem: BaseSerializableItemStack;
}

export interface mineinabyss$mittytoken {
}

export interface mineinabyss$orthcoin {
}

export interface mineinabyss$okibo_traveler {
    selectedDestination: mineinabyss$okibo_line_station;
}

export interface mineinabyss$cosmetics {
    gesture?: string;
    cosmeticBackpack?: string | null;
}

export interface climb$stamina_modifier {
    modifier: number;
    operation: ModifierOperation;
}

export enum ModifierOperation {
    ADD = "ADD",
    MULTIPLY_BASE = "MULTIPLY_BASE",
    MULTIPLY = "MULTIPLY",
}

export interface bonfire$bonfire_removed {
}

export interface bonfire$effect_area {
    uuid: string;
}

export interface bonfire$bonfire_respawn {
    bonfireUuid: string;
    bonfireLocation: Location;
}

export interface bonfire$bonfire {
    bonfireOwner?: string | null;
    bonfirePlayers?: string[];
    maxPlayerCount?: number;
    bonfireExpirationTime?: string;
    states: BonfireStates;
    addons?: string[];
}

export interface BonfireStates {
    unlit: string;
    lit: string;
    set: string;
}

export interface bonfire$expiration_time {
    totalUnlitTime: string;
    lastUnlitTimeStamp: number;
}

export interface bonfire$bonfire_debug {
}
class ActionBase extends Base {
    register?: string;
    loop?: string;
    eval?: string;
}
