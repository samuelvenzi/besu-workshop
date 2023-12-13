# Rode o Hyperledger Besu com Teku como cliente de consenso

Antes de iniciar, instale o Hyperledger Besu e o Teku de acordo com as respectivas documentações.

Neste exemplo rodaremos o Teku como um beacon node apenas. O beacon node é um nó essencial na rede Ethereum 2.0, responsável por processar e validar blocos da Beacon Chain, mas sem estar envolvido diretamente na produção de blocos ou na validação de transações como um validador. Ele mantém e atualiza o estado da rede, fornecendo informações vitais e participando do mecanismo de consenso, mas sem estar atrelado à atividade de staking de 32 ETH, que é requisito para ser um validador completo.

## Gere um segredo compartilhado

O segredo será usado para assinar os tokens JWT de comunicação entre o Besu e o Teku. O segredo deve ser um valor hexadecimal de 32 bytes. Você pode gerar um segredo usando o comando `openssl`:

```bash
openssl rand -hex 32 | tr -d "\n" > jwtsecret.hex
```

## Rode o Besu

Para rodar o Besu na rede Goerli, execute o seguinte comando:

```bash
besu \
  --network=goerli            \
  --p2p-host=<external-ip>   \
  --p2p-port=30303            \
  --rpc-http-enabled=true     \
  --rpc-http-host=0.0.0.0     \
  --rpc-http-cors-origins="*" \
  --rpc-ws-enabled=true       \
  --rpc-ws-host=0.0.0.0       \
  --host-allowlist="*"        \
  --engine-host-allowlist="*" \
  --engine-rpc-enabled        \
  --engine-jwt-secret=jwtsecret.hex
```

## Rode o Teku

Para rodar o Teku na rede Goerli, execute o seguinte comando:

```bash
teku \
  --network=goerli                             \
  --ee-endpoint=http://localhost:8551          \
  --ee-jwt-secret-file=jwtsecret.hex           \
  --metrics-enabled=true                       \
  --rest-api-enabled=true                      \
  --initial-state=https://checkpoint-sync.goerli.ethpandaops.io/eth/v2/debug/beacon/states/finalized
```

Observação: o Teku precisa de um estado inicial para sincronizar com a rede. O estado inicial pode ser obtido através de um snapshot ou de um endpoint de checkpoint. Neste exemplo, utilizamos o endpoint de checkpoint do EthPandaOps. Para mais informações sobre como obter um estado inicial, consulte a documentação do Teku: [https://docs.teku.consensys.io/concepts/weak-subjectivity/](https://docs.teku.consensys.io/concepts/weak-subjectivity/)