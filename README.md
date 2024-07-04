
# Desafio Desbravador Frontend
Foi desenvolvido um portal de consulta de usuário github baseado no desafio proposto [nesse link](https://github.com/DesbravadorSoftware/desafioFront).
> Link da demo https://github-user-finder.up.railway.app/




## Rodando localmente
Finalizado o clone do repositório, instale as dependências. 
> OBS: Certifique que a versão do node instalada seja >= 20.15.0 

```bash
  npm install
```

> Crie uma cópia do arquivo ```env.example``` e renomeie para ```.env```.
Como o Github impõe um limite de requisições não autenticadas para um determinado IP, será necessário gerar um token para a variável ```VITE_APP_GITHUB_TOKEN```, acesso o [link](https://docs.github.com/pt/rest/authentication/authenticating-to-the-rest-api) para entender como gerar um Github Token. 

>  Após ter configurado o Github token, rode o seguinte comando para startar a aplicação localmente

```bash
  npm run dev
```

    
## Demonstração

![Demo](https://github.com/marcelloJr/desafio-desbravador-frontend/blob/develop/docs/demo.gif?raw=true)
