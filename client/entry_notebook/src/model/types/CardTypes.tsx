export interface CardProfile {
    name: String;
    joined: Date;
    profile: Desc;
    connections: Number;
}

export interface CardProp {
    url: String;
    info: CardProfile;
}

type Desc = String | null;