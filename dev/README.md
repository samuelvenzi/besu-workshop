# Rodando Besu com rede dev

Para rodar o Besu em seu formato mais básico, basta executar o comando abaixo:

```bash
besu --network=dev --rpc-http-enabled
```

Isso sobe um nó do Besu com o seguinte `genesis.json`: [https://github.com/hyperledger/besu/blob/main/config/src/main/resources/dev.json](https://github.com/hyperledger/besu/blob/main/config/src/main/resources/dev.json)

Para checar o saldo de uma conta utilizando a API JSON-RPC, basta executar o comando abaixo:

```bash
curl http://localhost:8545/ \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{
           "method":"eth_getBalance",
           "params":["0x627306090abaB3A6e1400e9345bC60c78a8BEf57", "latest"],
           "id":1,
           "json-rpc":"2.0"
}'
```

## Conectando o MetaMask

Para isso é necessário rodar o Besu com permissões de CORS. 

```bash
besu --network=dev --rpc-http-enabled --rpc-http-cors-origins="all"
```

Agora é necessário configurar o MetaMask para conectar com o Besu. Para isso, conectar o MetaMask com a rede `http://localhost:8545` e importar a chave privada da conta `0x627306090abaB3A6e1400e9345bC60c78a8BEf57`.