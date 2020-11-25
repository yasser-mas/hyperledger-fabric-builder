const yaml = require('js-yaml');

let orgs = [
  {
    Name: 'Regulator',
    ID: 'Regulator',
    MSPDir: 'regulator/crypto-config/peerOrganizations/regulator.com/msp',
    Policies: {
      Readers: {
        Type: 'Signature',
        Rule: "OR('Regulator.admin', 'Regulator.peer', 'Regulator.client')",
      },
      Writers: {
        Type: 'Signature',
        Rule: "OR('Regulator.admin', 'Regulator.client')",
      },
      Admins: {
        Type: 'Signature',
        Rule: "OR('Regulator.admin')",
      },
      Endorsement: {
        Type: 'Signature',
        Rule: "OR('Regulator.peer')",
      },
    },
    AnchorPeers: [
      {
        Host: 'peer0.regulator.com',
        Port: 7051,
      },
    ],
  },
  {
    Name: 'Zain',
    ID: 'Zain',
    MSPDir: 'zain/crypto-config/peerOrganizations/zain.com/msp',
    Policies: {
      Readers: {
        Type: 'Signature',
        Rule: "OR('Zain.admin', 'Zain.peer', 'Zain.client')",
      },
      Writers: {
        Type: 'Signature',
        Rule: "OR('Zain.admin', 'Zain.client')",
      },
      Admins: {
        Type: 'Signature',
        Rule: "OR('Zain.admin')",
      },
      Endorsement: {
        Type: 'Signature',
        Rule: "OR('Zain.peer')",
      },
    },
    AnchorPeers: [
      {
        Host: 'peer0.zain.com',
        Port: 8051,
      },
    ],
  },
  {
    Name: 'Asiacell',
    ID: 'Asiacell',
    MSPDir: 'asiacell/crypto-config/peerOrganizations/asiacell.com/msp',
    Policies: {
      Readers: {
        Type: 'Signature',
        Rule: "OR('Asiacell.admin', 'Asiacell.peer', 'Asiacell.client')",
      },
      Writers: {
        Type: 'Signature',
        Rule: "OR('Asiacell.admin', 'Asiacell.client')",
      },
      Admins: {
        Type: 'Signature',
        Rule: "OR('Asiacell.admin')",
      },
      Endorsement: {
        Type: 'Signature',
        Rule: "OR('Asiacell.peer')",
      },
    },
    AnchorPeers: [
      {
        Host: 'peer0.asiacell.com',
        Port: 9051,
      },
    ],
  },
  {
    Name: 'Korek',
    ID: 'Korek',
    MSPDir: 'korek/crypto-config/peerOrganizations/korek.com/msp',
    Policies: {
      Readers: {
        Type: 'Signature',
        Rule: "OR('Korek.admin', 'Korek.peer', 'Korek.client')",
      },
      Writers: {
        Type: 'Signature',
        Rule: "OR('Korek.admin', 'Korek.client')",
      },
      Admins: {
        Type: 'Signature',
        Rule: "OR('Korek.admin')",
      },
      Endorsement: {
        Type: 'Signature',
        Rule: "OR('Korek.peer')",
      },
    },
    AnchorPeers: [
      {
        Host: 'peer0.korek.com',
        Port: 6051,
      },
    ],
  },
];

let policies = {
  Readers: {
    // Fixed
    Type: 'ImplicitMeta',
    Rule: 'ANY Readers',
  },
  Writers: {
    // Fixed
    Type: 'ImplicitMeta',
    Rule: 'ANY Writers',
  },
  Admins: {
    // Fixed
    Type: 'ImplicitMeta',
    Rule: 'MAJORITY Admins',
  },
  LifecycleEndorsement: {
    // Channels[].lifecycleEndorsement
    Type: 'ImplicitMeta',
    Rule: 'MAJORITY Endorsement',
  },
  Endorsement: {
    // Channels[].endorsement
    Type: 'ImplicitMeta',
    Rule: 'MAJORITY Endorsement',
  },
};

let doc = {
  Organizations: orgs,
  profiles: {
    FourOrgsChannel: {
      // consortiumName
      Consortium: 'SampleConsortium', // channels.consortiumName
      Policies: {
        // Fixed From channel Defaults
        Readers: {
          Type: 'ImplicitMeta',
          Rule: 'ANY Readers',
        },
        Writers: {
          Type: 'ImplicitMeta',
          Rule: 'ANY Writers',
        },
        Admins: {
          Type: 'ImplicitMeta',
          Rule: 'MAJORITY Admins',
        },
      },
      Capabilities: {
        // Fixed From channel Defaults
        V2_0: true,
      },
      Application: {
        Organizations: orgs,
        Policies: policies,
        Capabilities: {
          // Fixed
          V2_0: true,
        },
      },
    },
    SampleMultiNodeEtcdRaft: {
      // Fixed Name
      Policies: {
        // Fixed
        Readers: {
          Type: 'ImplicitMeta',
          Rule: 'ANY Readers',
        },
        Writers: {
          Type: 'ImplicitMeta',
          Rule: 'ANY Writers',
        },
        Admins: {
          Type: 'ImplicitMeta',
          Rule: 'MAJORITY Admins',
        },
      },
      Capabilities: {
        // Fixed
        V2_0: true,
      },
      Orderer: {
        OrdererType: 'etcdraft', // Fixed
        Addresses: [
          // orderer.replicas[].hostname + orderer.domain : orderer.replicas[].publishedPort
          'orderer.com:7050',
          'orderer2.com:8050',
          'orderer3.com:9050',
          'orderer4.com:10050',
        ],
        BatchTimeout: '2s', // orderer.batchTimeout
        BatchSize: {
          // orderer.batchSize
          MaxMessageCount: 10,
          AbsoluteMaxBytes: '99 MB',
          PreferredMaxBytes: '512 KB',
        },
        Organizations: [
          {
            Name: 'OrdererOrg', // orderer.name
            ID: 'OrdererMSP', // orderer.mspid
            MSPDir: 'asiacell/crypto-config/ordererOrganizations/com/msp', // aggregated form crypto conf
            Policies: {
              // Fixed
              Readers: {
                Type: 'Signature',
                Rule: "OR('OrdererMSP.member')",
              },
              Writers: {
                Type: 'Signature',
                Rule: "OR('OrdererMSP.member')",
              },
              Admins: {
                Type: 'Signature',
                Rule: "OR('OrdererMSP.admin')",
              },
            },
          },
        ],
        Policies: {
          // Fixed
          Readers: {
            Type: 'ImplicitMeta',
            Rule: 'ANY Readers',
          },
          Writers: {
            Type: 'ImplicitMeta',
            Rule: 'ANY Writers',
          },
          Admins: {
            Type: 'ImplicitMeta',
            Rule: 'MAJORITY Admins',
          },
          BlockValidation: {
            Type: 'ImplicitMeta',
            Rule: 'ANY Writers',
          },
        },
        EtcdRaft: {
          Consenters: [
            // orderer.replicas[]
            {
              Host: 'orderer.com',
              Port: 7050,
              ClientTLSCert:
                'asiacell/crypto-config/ordererOrganizations/com/orderers/orderer.com/tls/server.crt',
              ServerTLSCert:
                'asiacell/crypto-config/ordererOrganizations/com/orderers/orderer.com/tls/server.crt',
            },
            {
              Host: 'orderer2.com',
              Port: 8050,
              ClientTLSCert:
                'korek/crypto-config/ordererOrganizations/com/orderers/orderer2.com/tls/server.crt',
              ServerTLSCert:
                'korek/crypto-config/ordererOrganizations/com/orderers/orderer2.com/tls/server.crt',
            },
            {
              Host: 'orderer3.com',
              Port: 9050,
              ClientTLSCert:
                'regulator/crypto-config/ordererOrganizations/com/orderers/orderer3.com/tls/server.crt',
              ServerTLSCert:
                'regulator/crypto-config/ordererOrganizations/com/orderers/orderer3.com/tls/server.crt',
            },
            {
              Host: 'orderer4.com',
              Port: 10050,
              ClientTLSCert:
                'zain/crypto-config/ordererOrganizations/com/orderers/orderer4.com/tls/server.crt',
              ServerTLSCert:
                'zain/crypto-config/ordererOrganizations/com/orderers/orderer4.com/tls/server.crt',
            },
          ],
        },
        Capabilities: {
          // Fixed
          V2_0: true,
        },
      },
      Application: {
        Organizations: [
          {
            Name: 'OrdererOrg', // orderer.name
            ID: 'OrdererMSP', // orderer.mspid
            MSPDir: 'asiacell/crypto-config/ordererOrganizations/com/msp', // aggregated form crypto conf
            Policies: {
              // Fixed
              Readers: {
                Type: 'Signature',
                Rule: "OR('OrdererMSP.member')",
              },
              Writers: {
                Type: 'Signature',
                Rule: "OR('OrdererMSP.member')",
              },
              Admins: {
                Type: 'Signature',
                Rule: "OR('OrdererMSP.admin')",
              },
            },
          },
        ],
        Policies: policies,
        Capabilities: {
          // Fixed
          V2_0: true,
        },
      },
      Consortiums: {
        SampleConsortium: {
          // This.consortium.application.orgnaizations
          Organizations: orgs,
        },
      },
    },
  },
};

const output = yaml.safeDump(doc);
console.log(output);
