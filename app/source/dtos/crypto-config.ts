
export interface PeerOrg {
    Name: string;
    Domain: string;
    EnableNodeOUs: string;
    Template: Template;
    Users: Users;
}

export interface Template {
    Count: number;
}

export interface Users {
    Count: number;
}


export interface Spec {
    Hostname: string;
}

export interface OrdererOrg {
    Name: string;
    Domain: string;
    Specs: Spec[];
}

export interface CryptoConfig {
    PeerOrgs?: PeerOrg[];
    OrdererOrgs?: OrdererOrg[];
}


