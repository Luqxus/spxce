/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Spxce, SpxceInterface } from "../Spxce";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "cid",
        type: "string",
      },
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "addFile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getFiles",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
          {
            internalType: "string",
            name: "key",
            type: "string",
          },
        ],
        internalType: "struct Spxce.File[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSharedFiles",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
          {
            internalType: "string",
            name: "key",
            type: "string",
          },
        ],
        internalType: "struct Spxce.File[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUser",
    outputs: [
      {
        internalType: "address",
        name: "uid",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isUser",
    outputs: [
      {
        internalType: "bool",
        name: "isuser",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "uid",
        type: "address",
      },
      {
        internalType: "string",
        name: "cid",
        type: "string",
      },
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "shareFile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611aec806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80634c22c1191161005b5780634c22c119146100c6578063832880e7146100e4578063914e314414610102578063f76a961a146101205761007d565b8063248bfc3b1461008257806325ad91ce1461009e5780632da96d73146100a8575b600080fd5b61009c60048036038101906100979190611199565b61013c565b005b6100a66104a9565b005b6100b06105fa565b6040516100bd9190611404565b60405180910390f35b6100ce61098e565b6040516100db9190611441565b60405180910390f35b6100ec610a35565b6040516100f9919061146b565b60405180910390f35b61010a610b6f565b6040516101179190611404565b60405180910390f35b61013a600480360381019061013591906115e2565b610f03565b005b336000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908161033b9190611883565b5060408201518160020190816103519190611883565b50505060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200183838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508152506001858560405161041f929190611985565b908152602001604051809103902060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816104899190611883565b50604082015181600201908161049f9190611883565b5090505050505050565b3373ffffffffffffffffffffffffffffffffffffffff166000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610578576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056f906119fb565b60405180910390fd5b336000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6060333373ffffffffffffffffffffffffffffffffffffffff166000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c390611a67565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054905067ffffffffffffffff81111561072c5761072b6114b7565b5b60405190808252806020026020018201604052801561076557816020015b6107526110e9565b81526020019060019003908161074a5790505b50905060005b8151811015610985576000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181815481106107c7576107c6611a87565b5b90600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546108469061169c565b80601f01602080910402602001604051908101604052809291908181526020018280546108729061169c565b80156108bf5780601f10610894576101008083540402835291602001916108bf565b820191906000526020600020905b8154815290600101906020018083116108a257829003601f168201915b505050505081526020016002820180546108d89061169c565b80601f01602080910402602001604051908101604052809291908181526020018280546109049061169c565b80156109515780601f1061092657610100808354040283529160200191610951565b820191906000526020600020905b81548152906001019060200180831161093457829003601f168201915b50505050508152505082828151811061096d5761096c611a87565b5b6020026020010181905250808060010191505061076b565b50809250505090565b60003373ffffffffffffffffffffffffffffffffffffffff166000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610a2d5760019050610a32565b600090505b90565b6000333373ffffffffffffffffffffffffffffffffffffffff166000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610afe90611a67565b60405180910390fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b6060333373ffffffffffffffffffffffffffffffffffffffff166000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3890611a67565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018054905067ffffffffffffffff811115610ca157610ca06114b7565b5b604051908082528060200260200182016040528015610cda57816020015b610cc76110e9565b815260200190600190039081610cbf5790505b50905060005b8151811015610efa576000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018181548110610d3c57610d3b611a87565b5b90600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054610dbb9061169c565b80601f0160208091040260200160405190810160405280929190818152602001828054610de79061169c565b8015610e345780601f10610e0957610100808354040283529160200191610e34565b820191906000526020600020905b815481529060010190602001808311610e1757829003601f168201915b50505050508152602001600282018054610e4d9061169c565b80601f0160208091040260200160405190810160405280929190818152602001828054610e799061169c565b8015610ec65780601f10610e9b57610100808354040283529160200191610ec6565b820191906000526020600020905b815481529060010190602001808311610ea957829003601f168201915b505050505081525050828281518110610ee257610ee1611a87565b5b60200260200101819052508080600101915050610ce0565b50809250505090565b823373ffffffffffffffffffffffffffffffffffffffff166000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610fd3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fca90611a67565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816110ca9190611883565b5060408201518160020190816110e09190611883565b50505050505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261115957611158611134565b5b8235905067ffffffffffffffff81111561117657611175611139565b5b6020830191508360018202830111156111925761119161113e565b5b9250929050565b600080600080604085870312156111b3576111b261112a565b5b600085013567ffffffffffffffff8111156111d1576111d061112f565b5b6111dd87828801611143565b9450945050602085013567ffffffffffffffff811115611200576111ff61112f565b5b61120c87828801611143565b925092505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061127182611246565b9050919050565b61128181611266565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156112c15780820151818401526020810190506112a6565b60008484015250505050565b6000601f19601f8301169050919050565b60006112e982611287565b6112f38185611292565b93506113038185602086016112a3565b61130c816112cd565b840191505092915050565b600060608301600083015161132f6000860182611278565b506020830151848203602086015261134782826112de565b9150506040830151848203604086015261136182826112de565b9150508091505092915050565b600061137a8383611317565b905092915050565b6000602082019050919050565b600061139a8261121a565b6113a48185611225565b9350836020820285016113b685611236565b8060005b858110156113f257848403895281516113d3858261136e565b94506113de83611382565b925060208a019950506001810190506113ba565b50829750879550505050505092915050565b6000602082019050818103600083015261141e818461138f565b905092915050565b60008115159050919050565b61143b81611426565b82525050565b60006020820190506114566000830184611432565b92915050565b61146581611266565b82525050565b6000602082019050611480600083018461145c565b92915050565b61148f81611266565b811461149a57600080fd5b50565b6000813590506114ac81611486565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6114ef826112cd565b810181811067ffffffffffffffff8211171561150e5761150d6114b7565b5b80604052505050565b6000611521611120565b905061152d82826114e6565b919050565b600067ffffffffffffffff82111561154d5761154c6114b7565b5b611556826112cd565b9050602081019050919050565b82818337600083830152505050565b600061158561158084611532565b611517565b9050828152602081018484840111156115a1576115a06114b2565b5b6115ac848285611563565b509392505050565b600082601f8301126115c9576115c8611134565b5b81356115d9848260208601611572565b91505092915050565b6000806000606084860312156115fb576115fa61112a565b5b60006116098682870161149d565b935050602084013567ffffffffffffffff81111561162a5761162961112f565b5b611636868287016115b4565b925050604084013567ffffffffffffffff8111156116575761165661112f565b5b611663868287016115b4565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806116b457607f821691505b6020821081036116c7576116c661166d565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261172f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826116f2565b61173986836116f2565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061178061177b61177684611751565b61175b565b611751565b9050919050565b6000819050919050565b61179a83611765565b6117ae6117a682611787565b8484546116ff565b825550505050565b600090565b6117c36117b6565b6117ce818484611791565b505050565b5b818110156117f2576117e76000826117bb565b6001810190506117d4565b5050565b601f82111561183757611808816116cd565b611811846116e2565b81016020851015611820578190505b61183461182c856116e2565b8301826117d3565b50505b505050565b600082821c905092915050565b600061185a6000198460080261183c565b1980831691505092915050565b60006118738383611849565b9150826002028217905092915050565b61188c82611287565b67ffffffffffffffff8111156118a5576118a46114b7565b5b6118af825461169c565b6118ba8282856117f6565b600060209050601f8311600181146118ed57600084156118db578287015190505b6118e58582611867565b86555061194d565b601f1984166118fb866116cd565b60005b82811015611923578489015182556001820191506020850194506020810190506118fe565b86831015611940578489015161193c601f891682611849565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b600061196c8385611955565b9350611979838584611563565b82840190509392505050565b6000611992828486611960565b91508190509392505050565b600082825260208201905092915050565b7f5553455220414c52454144590000000000000000000000000000000000000000600082015250565b60006119e5600c8361199e565b91506119f0826119af565b602082019050919050565b60006020820190508181036000830152611a14816119d8565b9050919050565b7f55534552204e4f5420464f554e44000000000000000000000000000000000000600082015250565b6000611a51600e8361199e565b9150611a5c82611a1b565b602082019050919050565b60006020820190508181036000830152611a8081611a44565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220e09563b979d6d839bf68bbc9c6355dc5b8b4c7ddfbd228f21c8ea5b0f93a256c64736f6c63430008180033";

type SpxceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SpxceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Spxce__factory extends ContractFactory {
  constructor(...args: SpxceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Spxce & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Spxce__factory {
    return super.connect(runner) as Spxce__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SpxceInterface {
    return new Interface(_abi) as SpxceInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Spxce {
    return new Contract(address, _abi, runner) as unknown as Spxce;
  }
}