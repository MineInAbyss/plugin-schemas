export class Model {
    Id: string;
    Nameplate?: string;
    Step?: number = 0.5;
    ViewRadius?: number = 0;
    Hitbox?: boolean = true;
    Invisible?: boolean = true;
    DamageTint?: boolean = true;
    Drive?: boolean = false;
    Ride?: boolean = false;
    LockPitch?: boolean = false;
    LockYaw?: boolean = false;
}
