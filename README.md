# MeteoVista

Aplicativo de previsão do tempo desenvolvido com Next.js.

## Acesse o site para ver o resultado
[MeteoVista](https://meteovista.vercel.app/)

## Estrutura do Projeto

```plaintext
.
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.js
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public/
├── README.md
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Card.tsx
│   │   │   ├── CitySelect.tsx
│   │   │   ├── ErroMessage.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Previsao.tsx
│   │   ├── types/
│   │   │   └── Current.ts
│   │   │   └── Forecast.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │   └── favicon.ico
├── tailwind.config.ts
└── tsconfig.json
```

## Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```

### Scripts Disponíveis

No diretório do projeto, você pode executar:

`npm install`

Instala as dependências do projeto.

`npm run dev`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

`npm run build`

Compila o aplicativo para produção na pasta `build`.

`npm run start`

Inicia o servidor de produção.

`npm run lint`

Executa o linter para verificar problemas no código.

### Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Vercel](https://vercel.com/)

### Estrutura de Componentes

<span style="color: blue;">⚛</span> `Card.tsx`

Componente para exibir as informações meteorológicas.

<span style="color: blue;">⚛</span> `Header.tsx`

Componente para exibir o cabeçalho.

<span style="color: blue;">⚛</span> `CitySelect.tsx`

Componente para exibir o Formulário de seleção da cidade.

<span style="color: blue;">⚛</span> `ErroMessage.tsx`

Componente para exibir a mensagem de erro.

<span style="color: blue;">⚛</span> `Previsao.tsx`

Componente para exibir os dados.

### Licença

Este projeto está licenciado sob a Licença MIT.