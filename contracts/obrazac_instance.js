import web3 from './web3'

const address = '' // THE CONTRACT ADDRESS
const abi = [
  {
    inputs: [],
    stateMutability: 'payable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [],
    name: 'documentAccepted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [],
    name: 'documentBlocked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [],
    name: 'documentRecieved',
    type: 'event'
  },
  {
    inputs: [],
    name: 'acceptDocument',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'blockDocument',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'state',
    outputs: [
      {
        internalType: 'enum Obrazac.State',
        name: '',
        type: 'uint8'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'value',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]

const instance = new web3.eth.Contract(abi, address)

export default instance
