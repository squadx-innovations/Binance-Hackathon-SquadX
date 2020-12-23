const tokenContractAddress = '0x0581a579604203b9D3A2936eD23c8E81249ffa51';

const tokenAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amt",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amt",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]


let tokenContract

const nfttokencontractaddress = '0x3d27C15Dd3FDC1cd983BF5E830C8e3C5c7A0dAE2';

const nftAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "PlayersMap",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "objectID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gameID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "attack",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "defense",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "heal",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "mana",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "baseURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "gameMaster",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "changeGameMaster",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "objectID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gameID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "attack",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "defense",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "heal",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "mana",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenID",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "updatedValue",
        "type": "uint256"
      }
    ],
    "name": "updateLevel",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "updatedValue",
        "type": "uint256"
      }
    ],
    "name": "updateAttack",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "updatedValue",
        "type": "uint256"
      }
    ],
    "name": "updateDefense",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "updatedValue",
        "type": "uint256"
      }
    ],
    "name": "updateHeal",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "updatedValue",
        "type": "uint256"
      }
    ],
    "name": "updateMana",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const lendingContractaddress = '0xB3F3734DC11Dcc626ca59D1e8Fe430F3cDb2FaA9'

const lendAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_ONFTAddr",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_USDTAddr",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenID",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_lender",
        "type": "address"
      }
    ],
    "name": "eventForfiet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_borrorer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_lender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_repaymentAMt",
        "type": "uint256"
      }
    ],
    "name": "eventrepayment",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_lender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_borrorer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenID",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_startBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_endblock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_lendvalue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_rate",
        "type": "uint256"
      }
    ],
    "name": "mortgageEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_lender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_rate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_limit",
        "type": "uint256"
      }
    ],
    "name": "setLendingRate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint8",
        "name": "_type",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_multipler",
        "type": "uint256"
      }
    ],
    "name": "setMultipler",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "LendingBook",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "startBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "Lender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "Borrower",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "valueAtPoint",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "LendAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "InterestRate",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "ONFT",
    "outputs": [
      {
        "internalType": "contract ObjectNFT",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "USDT",
    "outputs": [
      {
        "internalType": "contract VUSDT",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "attackMultiplier",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "baseValue",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "defenseMultiplier",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "fundingRate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "healMultiplier",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "levelMultiplier",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "manaMultiplier",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_base",
        "type": "uint256"
      }
    ],
    "name": "setBase",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_multipler",
        "type": "uint256"
      }
    ],
    "name": "setLevelMultipler",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_multipler",
        "type": "uint256"
      }
    ],
    "name": "setattackMultiplier",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_multipler",
        "type": "uint256"
      }
    ],
    "name": "setdefenseMultiplier",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_multipler",
        "type": "uint256"
      }
    ],
    "name": "sethealMultiplier",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_multipler",
        "type": "uint256"
      }
    ],
    "name": "setmanaMultiplier",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_objectID",
        "type": "uint256"
      }
    ],
    "name": "calculateValue",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "rate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "limit",
        "type": "uint256"
      }
    ],
    "name": "fundLiquidty",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenID",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_Lender",
        "type": "address"
      }
    ],
    "name": "mortgageNFT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenValue",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_rate",
        "type": "uint256"
      }
    ],
    "name": "calculateLendValue",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_paymentblock",
        "type": "uint256"
      }
    ],
    "name": "calculateInterest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenID",
        "type": "uint256"
      }
    ],
    "name": "repay",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenID",
        "type": "uint256"
      }
    ],
    "name": "forfiet",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

let nfttokenaddress

let lendTokenInstance

const initialize = async () => {
    const { ethereum } = window;
    window.web3 = new Web3(ethereum);
  
    tokenContract = new web3.eth.Contract(
      JSON.parse(JSON.stringify(tokenAbi)),
      tokenContractAddress,
    );

    nfttokenaddress = new web3.eth.Contract(
      JSON.parse(JSON.stringify(nftAbi)),
      nfttokencontractaddress,
    );

    lendTokenInstance = new web3.eth.Contract(
      JSON.parse(JSON.stringify(lendAbi)),
      lendingContractaddress,
    );
  };
  
  function requestAccount() {
    return ethereum.request({
      method: 'eth_requestAccounts',
    });
  }


async function mintVusdt(){
  const tokens = $('#stake-modal input[name=no-of-tokens]').val();
  const userAddress = $('#stake-modal input[name=user-address]').val();
  console.log('---=-=-=')
  const account = await requestAccount();
  console.log("inside mint",account[0])
  console.log("inside mint user",userAddress)
  console.log("inside mint token",tokens)
  const amount = web3.utils.toWei(tokens.toString(), 'ether');
    const bntokens = web3.utils.toBN(amount);
    tokenContract.methods.mint(userAddress,bntokens).send({
        from: account[0],
        gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
      }).on('receipt', (receipt) => {
          console.log(receipt)
          window.location.reload();
      })
}

async function burnVusdt(){
    const tokens = $('#burn-modal input[name=no-of-tokens]').val();
    const userAddress = $('#burn-modal input[name=user-address]').val();
    const account = await requestAccount();
    const amount = web3.utils.toWei(tokens.toString(), 'ether');
    const bntokens = web3.utils.toBN(amount);
    tokenContract.methods.burn(userAddress,bntokens).send({
        from: account[0],
        gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
      }).on('receipt', (receipt) => {
          console.log(receipt)
          window.location.reload();
      })
}

async function transferOwnership(){
  const userAddress = $('#transferowner-modal input[name=user-address]').val();
  const account = await requestAccount();
  tokenContract.methods.transferOwnership(userAddress).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}



async function mintNft(){
  const objectID = $('#mint-nft-modal input[name=objectid]').val();
  const gameID = $('#mint-nft-modal input[name=gameid]').val();
  const level = $('#mint-nft-modal input[name=level]').val();
  const attack = $('#mint-nft-modal input[name=attack]').val();
  const defense = $('#mint-nft-modal input[name=defense]').val();
  const heal = $('#mint-nft-modal input[name=heal]').val();
  const mana = $('#mint-nft-modal input[name=mana]').val();
  const owner = $('#mint-nft-modal input[name=owner]').val();
  const account = await requestAccount();
    nfttokenaddress.methods.mint(objectID, gameID, level, attack, defense, heal, mana, owner).send({
        from: account[0],
        gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
      }).on('receipt', (receipt) => {
          console.log(receipt)
          window.location.reload();
      })
}

async function changeGameMaster(){
    const userAddress = $('#gamemaster-modal input[name=user-address]').val();
    const account = await requestAccount();
    nfttokenaddress.methods.changeGameMaster(userAddress).send({
        from: account[0],
        gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
      }).on('receipt', (receipt) => {
          console.log(receipt)
          window.location.reload();
      })
}

async function transfernftowner(){
  const userAddress = $('#transfernftowner-modal input[name=user-address]').val();
  const account = await requestAccount();
  nfttokenaddress.methods.transferOwnership(userAddress).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}

async function setBase(){
  const value = $('#setBase-modal input[name=value]').val();
  const account = await requestAccount();
  lendTokenInstance.methods.setBase(value).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}

async function setLevelMultipler(){
  const value = $('#setLevelMultipler-modal input[name=value]').val();
  const account = await requestAccount();
  lendTokenInstance.methods.setLevelMultipler(value).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}


async function setattackMultiplier(){
  const value = $('#setattackMultiplier-modal input[name=value]').val();
  const account = await requestAccount();
  lendTokenInstance.methods.setattackMultiplier(value).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}



async function setdefenseMultiplier(){
  const value = $('#setdefenseMultiplier-modal input[name=value]').val();
  const account = await requestAccount();
  lendTokenInstance.methods.setdefenseMultiplier(value).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}




async function sethealMultiplier(){
  const value = $('#sethealMultiplier-modal input[name=value]').val();
  const account = await requestAccount();
  lendTokenInstance.methods.sethealMultiplier(value).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}




async function setmanaMultiplier(){
  const value = $('#setmanaMultiplier-modal input[name=value]').val();
  const account = await requestAccount();
  lendTokenInstance.methods.setmanaMultiplier(value).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}




async function mortgageNFT(){
  const tokenId = $('#mortgageNFT-modal input[name=id]').val();
  const address = $('#mortgageNFT-modal input[name=address]').val();
  const account = await requestAccount();
  lendTokenInstance.methods.mortgageNFT(tokenId, address).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}

async function repay(){
  const tokenId = $('#repay-modal input[name=id]').val();
  const account = await requestAccount();
  lendTokenInstance.methods.repay(tokenId).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}

async function fundLiquidty(){
  const rate = $('#fundLiquidty-modal input[name=rate]').val();
  const limit = $('#fundLiquidty-modal input[name=limit]').val();
  const account = await requestAccount();
  lendTokenInstance.methods.fundLiquidty(rate, limit).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}

async function forfiet(){
  const tokenId = $('#forfiet-modal input[name=id]').val();
  const account = await requestAccount();
  lendTokenInstance.methods.forfiet(tokenId).send({
      from: account[0],
      gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'Gwei')),
    }).on('receipt', (receipt) => {
        console.log(receipt)
        window.location.reload();
    })
}



window.addEventListener('DOMContentLoaded', initialize);