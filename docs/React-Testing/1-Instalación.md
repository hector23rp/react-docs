# React Testing - Instalación

Para poder testear una aplicación en React, podemos utilizar la librería `@testing-library/react`.

Si hemos creado la aplicación mediante la línea de comandos `create-react-app`, ya estará configurado para poder empezar a testear. De lo contrario, si quisiéramos añadir test a una aplicación React que no está create con `create-react-app`, debemos seguir los siguientes pasos:

1. Instalamos las siguientes dependencias:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest @babel/preset-env @babel/preset-react
```

En el caso de que nuestra aplicación sea en `Typescript`, también necesitaremos las siguientes dependencias:

```bash
npm install --save-dev @types/jest ts-jest @babel/preset-typescript
```

2. Si no está creado, creamos el fichero `babel.config.js` en la carpeta del proyecto y añadimos el siguiente contenido:

`babel.config.js`
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript' // Si utilizamos Typescript
  ]
}
```

3. Creamos el fichero `jest-setup.js`:

`jest-setup.js`
```js
import '@testing-library/jest-dom'
``` 

4. Por último, creamos el archivo de configuración de jest:

`jest.config.js`
```js
module.exports = {
  transform: { // En el caso de utilizar Typescript
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/.*\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
}
```

5. Añadimos un script test al `package.json` y ya estará listo para crear los test.

`package.json`
```json
{
  ....
  "scripts": {
    "test": "jest",
    ...
  }
}
```
