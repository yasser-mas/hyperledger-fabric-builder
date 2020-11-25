export interface ConfigTxCapability {
  V2_0: boolean;
}

export interface ConfigTxPolicy {
  Type: string;
  Rule: string;
}

export interface ConfigTxBasePolicies {
  Readers: ConfigTxPolicy;
  Writers: ConfigTxPolicy;
  Admins: ConfigTxPolicy;
}

export interface ConfigTxOrgPolicies extends ConfigTxBasePolicies {
  Endorsement: ConfigTxPolicy;
}

export interface ConfigTxOrdererPolicies extends ConfigTxBasePolicies {
  BlockValidation: ConfigTxPolicy;
}

export interface ConfigTxAnchorPeer {
  Host: string;
  Port: number;
}

export interface ConfigTxOrganization {
  Name: string;
  ID: string;
  MSPDir: string;
  Policies: ConfigTxOrgPolicies | ConfigTxBasePolicies;
  AnchorPeers?: ConfigTxAnchorPeer[];
}

export interface ConfigTxCapabilities {
  Channel: ConfigTxCapability;
  Orderer: ConfigTxCapability;
  Application: ConfigTxCapability;
}

export interface ConfigTxOrdererBatchSize {
  MaxMessageCount: number;
  AbsoluteMaxBytes: string;
  PreferredMaxBytes: string;
}

export interface ConfigTxChannel {
  Policies: ConfigTxBasePolicies;
  Capabilities: ConfigTxCapability;
}

export interface ConfigTxOrdererPolicy extends ConfigTxBasePolicies {
  Endorsement: ConfigTxPolicy;
}

export interface Consenter {
  Host: string;
  Port: number;
  ClientTLSCert: string;
  ServerTLSCert: string;
}

export interface ConfigTxGenesisEtcdRaft extends ConfigTxOrderer {
  EtcdRaft: { Consenters: Consenter[] };
  Organizations: ConfigTxOrganization[];
  Capabilities: ConfigTxCapability;
}

export interface ConfigTxConsortiumApplication extends ConfigTxApplication {
  Organizations: ConfigTxOrganization[];
}

export interface ConfigTxChannelConsortium extends ConfigTxChannel {
  Consortium: string;
  Application: ConfigTxApplication;
}

export interface ConfigTxOrderer {
  OrdererType: string;
  Addresses: string[];
  BatchTimeout: string;
  BatchSize: ConfigTxOrdererBatchSize;
  Organizations?: ConfigTxOrganization[];
  Policies: ConfigTxOrdererPolicies;
}

export interface ConfigTxOrdererGenesis extends ConfigTxChannel {
  Consortium: string;
  Orderer: ConfigTxGenesisEtcdRaft;
  Application: ConfigTxConsortiumApplication;
  Consortiums: { [key: string]: ConfigTxOrganization[] };
}

export interface ConfigTxProfiles {
  [key: string]: ConfigTxChannelConsortium | ConfigTxOrdererGenesis;
}

export interface ConfigTxApplicationPolicies extends ConfigTxBasePolicies {
  LifecycleEndorsement: ConfigTxPolicy;
  Endorsement: ConfigTxPolicy;
}

export interface ConfigTxApplication {
  Organizations?: ConfigTxOrganization[];
  Policies: ConfigTxApplicationPolicies;
  Capabilities: ConfigTxCapability;
}

export interface ConfigTxDto {
  Organizations: ConfigTxOrganization[];
  Capabilities: ConfigTxCapabilities;
  Application: ConfigTxApplication;
  Orderer: ConfigTxOrderer;
  Channel: ConfigTxChannel;
  Profiles: ConfigTxProfiles;
}
