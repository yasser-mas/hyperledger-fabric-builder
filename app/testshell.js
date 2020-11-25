const { exec } = require("child_process");
const { writeFileSync } = require('fs');



writeFileSync('./gen.sh', `
function generateCerts() {
    which cryptogen
    if [ "$?" -ne 0 ]; then
      echo "cryptogen tool not found. exiting"
      exit 1
    fi
    echo
    echo "##########################################################"
    echo "##### Generate certificates using cryptogen tool  #########"
    echo "##########################################################"
  
    set -x
    cryptogen generate --config=./asiacell/crypto-config.yaml --output=./asiacell/crypto-config
    res=$?
    set +x
    if [ $res -ne 0 ]; then
      echo "Failed to generate certificates for asiacell ..."
      exit 1
    fi
    echo
  
  
    set -x
    cryptogen generate --config=./regulator/crypto-config.yaml --output=./regulator/crypto-config
    res=$?
    set +x
    if [ $res -ne 0 ]; then
      echo "Failed to generate certificates..."
      exit 1
    fi
    echo
  
  
  
    set -x
    cryptogen generate --config=./zain/crypto-config.yaml --output=./zain/crypto-config
    res=$?
    set +x
    if [ $res -ne 0 ]; then
      echo "Failed to generate certificates..."
      exit 1
    fi
    echo
  
  
  
    set -x
    cryptogen generate --config=./korek/crypto-config.yaml --output=./korek/crypto-config
    res=$?
    set +x
    if [ $res -ne 0 ]; then
      echo "Failed to generate certificates..."
      exit 1
    fi
    echo
  
  
  
  
    set -x
    cryptogen generate --config=./orderers-crypto-config.yaml --output=./regulator/crypto-config
    res=$?
    set +x
    if [ $res -ne 0 ]; then
      echo "Failed to generate certificates..."
      exit 1
    fi
    echo
  
    cp -r regulator/crypto-config/ordererOrganizations korek/crypto-config/ordererOrganizations
    cp -r regulator/crypto-config/ordererOrganizations asiacell/crypto-config/ordererOrganizations
    cp -r regulator/crypto-config/ordererOrganizations zain/crypto-config/ordererOrganizations
  
    echo "Generate CCP files for Regulator, Zain and Asiacell"
    ./ccp-generate.sh
  }
  
  

`);
