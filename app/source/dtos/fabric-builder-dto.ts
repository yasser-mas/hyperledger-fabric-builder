export class NetworkVer {
  private _peer: string;
  private _orderer: string;
  private _couchdb: string;
  private _ca: string;

  /**
   * Getter peer
   * @return {string}
   */
  public get peer(): string {
    return this._peer;
  }

  /**
   * Getter orderer
   * @return {string}
   */
  public get orderer(): string {
    return this._orderer;
  }

  /**
   * Getter couchdb
   * @return {string}
   */
  public get couchdb(): string {
    return this._couchdb;
  }

  /**
   * Getter ca
   * @return {string}
   */
  public get ca(): string {
    return this._ca;
  }

  /**
   * Setter peer
   * @param {string} value
   */
  public set peer(value: string) {
    this._peer = value;
  }

  /**
   * Setter orderer
   * @param {string} value
   */
  public set orderer(value: string) {
    this._orderer = value;
  }

  /**
   * Setter couchdb
   * @param {string} value
   */
  public set couchdb(value: string) {
    this._couchdb = value;
  }

  /**
   * Setter ca
   * @param {string} value
   */
  public set ca(value: string) {
    this._ca = value;
  }
}

export class NetworkConfig {
  private _isLocalHost: boolean;
  private _tlsEnabled: boolean;
  private _networkVer: NetworkVer;

  /**
   * Getter isLocalHost
   * @return {boolean}
   */
  public get isLocalHost(): boolean {
    return this._isLocalHost;
  }

  /**
   * Getter tlsEnabled
   * @return {boolean}
   */
  public get tlsEnabled(): boolean {
    return this._tlsEnabled;
  }

  /**
   * Getter networkVer
   * @return {NetworkVer}
   */
  public get networkVer(): NetworkVer {
    return this._networkVer;
  }

  /**
   * Setter isLocalHost
   * @param {boolean} value
   */
  public set isLocalHost(value: boolean) {
    this._isLocalHost = value;
  }

  /**
   * Setter tlsEnabled
   * @param {boolean} value
   */
  public set tlsEnabled(value: boolean) {
    this._tlsEnabled = value;
  }

  /**
   * Setter networkVer
   * @param {NetworkVer} value
   */
  public set networkVer(value: NetworkVer) {
    this._networkVer = value;
  }
}

export class BatchSize {
  private _maxMessageCount: number;
  private _absoluteMaxBytes: string;
  private _PreferredMaxBytes: string;

  /**
   * Getter maxMessageCount
   * @return {number}
   */
  public get maxMessageCount(): number {
    return this._maxMessageCount;
  }

  /**
   * Getter absoluteMaxBytes
   * @return {string}
   */
  public get absoluteMaxBytes(): string {
    return this._absoluteMaxBytes;
  }

  /**
   * Getter PreferredMaxBytes
   * @return {string}
   */
  public get PreferredMaxBytes(): string {
    return this._PreferredMaxBytes;
  }

  /**
   * Setter maxMessageCount
   * @param {number} value
   */
  public set maxMessageCount(value: number) {
    this._maxMessageCount = value;
  }

  /**
   * Setter absoluteMaxBytes
   * @param {string} value
   */
  public set absoluteMaxBytes(value: string) {
    this._absoluteMaxBytes = value;
  }

  /**
   * Setter PreferredMaxBytes
   * @param {string} value
   */
  public set PreferredMaxBytes(value: string) {
    this._PreferredMaxBytes = value;
  }
}

export class Replica {
  private _hostName: string;
  private _publishedPort: number;

  /**
   * Getter hostName
   * @return {string}
   */
  public get hostName(): string {
    return this._hostName;
  }

  /**
   * Getter publishedPort
   * @return {number}
   */
  public get publishedPort(): number {
    return this._publishedPort;
  }

  /**
   * Setter hostName
   * @param {string} value
   */
  public set hostName(value: string) {
    this._hostName = value;
  }

  /**
   * Setter publishedPort
   * @param {number} value
   */
  public set publishedPort(value: number) {
    this._publishedPort = value;
  }
}

export class Orderer {
  private _name: string;
  private _mspid: string;
  private _batchTimeout: string;
  private _batchSize: BatchSize;
  private _domain: string;
  private _replicas: Replica[];

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter mspid
   * @return {string}
   */
  public get mspid(): string {
    return this._mspid;
  }

  /**
   * Getter batchTimeout
   * @return {string}
   */
  public get batchTimeout(): string {
    return this._batchTimeout;
  }

  /**
   * Getter batchSize
   * @return {BatchSize}
   */
  public get batchSize(): BatchSize {
    return this._batchSize;
  }

  /**
   * Getter domain
   * @return {string}
   */
  public get domain(): string {
    return this._domain;
  }

  /**
   * Getter replicas
   * @return {Replica[]}
   */
  public get replicas(): Replica[] {
    return this._replicas;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter mspid
   * @param {string} value
   */
  public set mspid(value: string) {
    this._mspid = value;
  }

  /**
   * Setter batchTimeout
   * @param {string} value
   */
  public set batchTimeout(value: string) {
    this._batchTimeout = value;
  }

  /**
   * Setter batchSize
   * @param {BatchSize} value
   */
  public set batchSize(value: BatchSize) {
    this._batchSize = value;
  }

  /**
   * Setter domain
   * @param {string} value
   */
  public set domain(value: string) {
    this._domain = value;
  }

  /**
   * Setter replicas
   * @param {Replica[]} value
   */
  public set replicas(value: Replica[]) {
    this._replicas = value;
  }
}

export class CertificateAuthority {
  private _caName: string;
  private _publishedCAPort: string;
  private _caUsername: string;
  private _caPassword: string;

  /**
   * Getter caName
   * @return {string}
   */
  public get caName(): string {
    return this._caName;
  }

  /**
   * Getter publishedCAPort
   * @return {string}
   */
  public get publishedCAPort(): string {
    return this._publishedCAPort;
  }

  /**
   * Getter caUsername
   * @return {string}
   */
  public get caUsername(): string {
    return this._caUsername;
  }

  /**
   * Getter caPassword
   * @return {string}
   */
  public get caPassword(): string {
    return this._caPassword;
  }

  /**
   * Setter caName
   * @param {string} value
   */
  public set caName(value: string) {
    this._caName = value;
  }

  /**
   * Setter publishedCAPort
   * @param {string} value
   */
  public set publishedCAPort(value: string) {
    this._publishedCAPort = value;
  }

  /**
   * Setter caUsername
   * @param {string} value
   */
  public set caUsername(value: string) {
    this._caUsername = value;
  }

  /**
   * Setter caPassword
   * @param {string} value
   */
  public set caPassword(value: string) {
    this._caPassword = value;
  }
}

export class Peer {
  private _name: string;
  private _couchdbUsername: string;
  private _couchdbPassword: string;
  private _isAnchor: boolean;
  private _publishedCouchdbPort: number;
  private _publishedPort: number;
  private _publishedEventPort: number;

  /**
   * Getter isAnchor
   * @return {string}
   */
  public get isAnchor(): boolean {
    return this._isAnchor;
  }

  /**
   * Setter isAnchor
   * @return {string}
   */
  public set isAnchor( value : boolean) {
    this._isAnchor = value ;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter couchdbUsername
   * @return {string}
   */
  public get couchdbUsername(): string {
    return this._couchdbUsername;
  }

  /**
   * Getter couchdbPassword
   * @return {string}
   */
  public get couchdbPassword(): string {
    return this._couchdbPassword;
  }

  /**
   * Getter publishedCouchdbPort
   * @return {number}
   */
  public get publishedCouchdbPort(): number {
    return this._publishedCouchdbPort;
  }

  /**
   * Getter publishedPort
   * @return {number}
   */
  public get publishedPort(): number {
    return this._publishedPort;
  }

  /**
   * Getter publishedEventPort
   * @return {number}
   */
  public get publishedEventPort(): number {
    return this._publishedEventPort;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter couchdbUsername
   * @param {string} value
   */
  public set couchdbUsername(value: string) {
    this._couchdbUsername = value;
  }

  /**
   * Setter couchdbPassword
   * @param {string} value
   */
  public set couchdbPassword(value: string) {
    this._couchdbPassword = value;
  }

  /**
   * Setter publishedCouchdbPort
   * @param {number} value
   */
  public set publishedCouchdbPort(value: number) {
    this._publishedCouchdbPort = value;
  }

  /**
   * Setter publishedPort
   * @param {number} value
   */
  public set publishedPort(value: number) {
    this._publishedPort = value;
  }

  /**
   * Setter publishedEventPort
   * @param {number} value
   */
  public set publishedEventPort(value: number) {
    this._publishedEventPort = value;
  }
}

export class Org {
  private _name: string;
  private _mspid: string;
  private _domain: string;
  private _enableNodeOUs: string;
  private _usersCount: number;
  private _certificateAuthorities: CertificateAuthority[];
  private _peers: Peer[];

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter mspid
   * @return {string}
   */
  public get mspid(): string {
    return this._mspid;
  }

  /**
   * Getter domain
   * @return {string}
   */
  public get domain(): string {
    return this._domain;
  }

  /**
   * Getter enableNodeOUs
   * @return {string}
   */
  public get enableNodeOUs(): string {
    return this._enableNodeOUs;
  }

  /**
   * Getter usersCount
   * @return {number}
   */
  public get usersCount(): number {
    return this._usersCount;
  }

  /**
   * Getter certificateAuthorities
   * @return {CertificateAuthority[]}
   */
  public get certificateAuthorities(): CertificateAuthority[] {
    return this._certificateAuthorities;
  }

  /**
   * Getter peers
   * @return {Peer[]}
   */
  public get peers(): Peer[] {
    return this._peers;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter mspid
   * @param {string} value
   */
  public set mspid(value: string) {
    this._mspid = value;
  }

  /**
   * Setter domain
   * @param {string} value
   */
  public set domain(value: string) {
    this._domain = value;
  }

  /**
   * Setter enableNodeOUs
   * @param {string} value
   */
  public set enableNodeOUs(value: string) {
    this._enableNodeOUs = value;
  }

  /**
   * Setter usersCount
   * @param {number} value
   */
  public set usersCount(value: number) {
    this._usersCount = value;
  }

  /**
   * Setter certificateAuthorities
   * @param {CertificateAuthority[]} value
   */
  public set certificateAuthorities(value: CertificateAuthority[]) {
    this._certificateAuthorities = value;
  }

  /**
   * Setter peers
   * @param {Peer[]} value
   */
  public set peers(value: Peer[]) {
    this._peers = value;
  }
}

export class LifecycleEndorsement {
  private _type: string;
  private _rule: string;

  /**
   * Getter type
   * @return {string}
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Getter rule
   * @return {string}
   */
  public get rule(): string {
    return this._rule;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }

  /**
   * Setter rule
   * @param {string} value
   */
  public set rule(value: string) {
    this._rule = value;
  }
}
export class Endorsement {
  private _type: string;
  private _rule: string;

  /**
   * Getter type
   * @return {string}
   */
  public get type(): string {
    return this._type;
  }

  /**
   * Getter rule
   * @return {string}
   */
  public get rule(): string {
    return this._rule;
  }

  /**
   * Setter type
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }

  /**
   * Setter rule
   * @param {string} value
   */
  public set rule(value: string) {
    this._rule = value;
  }
}

export class Endorser {
  private _name: string;

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }
}

export class Org2 {
  private _mspid: string;
  private _endorsers: Endorser[];

  /**
   * Getter mspid
   * @return {string}
   */
  public get mspid(): string {
    return this._mspid;
  }

  /**
   * Getter endorsers
   * @return {Endorser[]}
   */
  public get endorsers(): Endorser[] {
    return this._endorsers;
  }

  /**
   * Setter mspid
   * @param {string} value
   */
  public set mspid(value: string) {
    this._mspid = value;
  }

  /**
   * Setter endorsers
   * @param {Endorser[]} value
   */
  public set endorsers(value: Endorser[]) {
    this._endorsers = value;
  }
}

export class Channel {
  private _consortiumName: string;
  private _name: string;
  private _chaincodeLang: string;
  private _chaincodeLifecycleManager: string;
  private _chaincodeName: string;
  private _lifecycleEndorsement: LifecycleEndorsement;
  private _endorsement: Endorsement;
  private _orgs: Org2[];

  /**
   * Getter consortiumName
   * @return {string}
   */
  public get consortiumName(): string {
    return this._consortiumName;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter chaincodeLang
   * @return {string}
   */
  public get chaincodeLang(): string {
    return this._chaincodeLang;
  }

  /**
   * Getter chaincodeLifecycleManager
   * @return {string}
   */
  public get chaincodeLifecycleManager(): string {
    return this._chaincodeLifecycleManager;
  }

  /**
   * Getter chaincodeName
   * @return {string}
   */
  public get chaincodeName(): string {
    return this._chaincodeName;
  }

  /**
   * Getter lifecycleEndorsement
   * @return {LifecycleEndorsement}
   */
  public get lifecycleEndorsement(): LifecycleEndorsement {
    return this._lifecycleEndorsement;
  }

  /**
   * Getter endorsement
   * @return {Endorsement}
   */
  public get endorsement(): Endorsement {
    return this._endorsement;
  }

  /**
   * Setter consortiumName
   * @param {string} value
   */
  public set consortiumName(value: string) {
    this._consortiumName = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter chaincodeLang
   * @param {string} value
   */
  public set chaincodeLang(value: string) {
    this._chaincodeLang = value;
  }

  /**
   * Setter chaincodeLifecycleManager
   * @param {string} value
   */
  public set chaincodeLifecycleManager(value: string) {
    this._chaincodeLifecycleManager = value;
  }

  /**
   * Setter chaincodeName
   * @param {string} value
   */
  public set chaincodeName(value: string) {
    this._chaincodeName = value;
  }

  /**
   * Setter lifecycleEndorsement
   * @param {LifecycleEndorsement} value
   */
  public set lifecycleEndorsement(value: LifecycleEndorsement) {
    this._lifecycleEndorsement = value;
  }

  /**
   * Setter endorsement
   * @param {Endorsement} value
   */
  public set endorsement(value: Endorsement) {
    this._endorsement = value;
  }
}

export class FabricBuilderDto {
  private _projectId: string;
  private _projectName: string;
  private _networkConfig: NetworkConfig;
  private _orderer: Orderer;
  private _orgs: Org[];
  private _channels: Channel[];

  /**
   * Getter projectId
   * @return {string}
   */
  public get projectId(): string {
    return this._projectId;
  }

  /**
   * Setter projectId
   * @param {string} value
   */
  public set projectId(value: string) {
    this._projectId = value;
  }

  /**
   * Getter projectName
   * @return {string}
   */
  public get projectName(): string {
    return this._projectName;
  }

  /**
   * Setter projectName
   * @param {string} value
   */
  public set projectName(value: string) {
    this._projectName = value;
  }

  /**
   * Getter networkConfig
   * @return {NetworkConfig}
   */
  public get networkConfig(): NetworkConfig {
    return this._networkConfig;
  }

  /**
   * Getter orderer
   * @return {Orderer}
   */
  public get orderer(): Orderer {
    return this._orderer;
  }

  /**
   * Getter orgs
   * @return {Org[]}
   */
  public get orgs(): Org[] {
    return this._orgs;
  }

  /**
   * Getter channels
   * @return {Channel[]}
   */
  public get channels(): Channel[] {
    return this._channels;
  }

  /**
   * Setter networkConfig
   * @param {NetworkConfig} value
   */
  public set networkConfig(value: NetworkConfig) {
    this._networkConfig = value;
  }

  /**
   * Setter orderer
   * @param {Orderer} value
   */
  public set orderer(value: Orderer) {
    this._orderer = value;
  }

  /**
   * Setter orgs
   * @param {Org[]} value
   */
  public set orgs(value: Org[]) {
    this._orgs = value;
  }

  /**
   * Setter channels
   * @param {Channel[]} value
   */
  public set channels(value: Channel[]) {
    this._channels = value;
  }
}
