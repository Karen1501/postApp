# Post App

## Descripción

Este es un proyecto de React Native que muestra una lista de publicaciones desde una API pública de JSONPlaceholder. Permite a los usuarios navegar a la vista de detalles de cada publicación.

## Requisitos

### Dependencias necesarias:

Asegúrate de tener las siguientes dependencias instaladas:

- **Node.js**: Recomendado usar la versión LTS de Node.js.
- **Expo CLI**: Si aún no tienes Expo CLI, instálalo con:

  ```bash
  npm install -g expo-cli

  ** Para instalar las dependencias necesarias del proyecto, ejecuta el siguiente comando después de clonar el repositorio:
  npm install

  Las dependencias principales de este proyecto son:

    ~ axios: Para hacer solicitudes HTTP a la API de JSONPlaceholder.
    ~ react-navigation: Para la navegación entre pantallas dentro de la aplicación.
    ~ react-native: La biblioteca principal para crear aplicaciones móviles.
    ~ react-native-gesture-handler: Requerido por react-navigation para gestionar gestos en la interfaz.
    ~ react-native-safe-area-context: Para manejar los márgenes seguros en dispositivos con notch.
    ~ react-native-screens: También utilizado por react-navigation para optimizar la navegación.

   ``Instalación
  ```

1.  Clona este repositorio en tu máquina local:
    git clone https://github.com/Karen1501/postApp

2.  Navega al directorio del proyecto
    cd postApp

3.  Instala las dependencias del proyecto
    npm install

4.  Inicia el proyecto en modo desarrollo
    expo start

        Esto abrirá una nueva ventana en tu navegador con un código QR que puedes escanear con la aplicación Expo Go (disponible en iOS y Android).

- Uso
  - En la pantalla principal, podrás ver una lista de publicaciones.
  - Puedes hacer clic en cada publicación para ver más detalles.
  - Desafíos enfrentados y soluciones
- Desafíos:
  - Manejo de errores: Asegurarse de que la aplicación maneje correctamente los errores de la API, especialmente si hay problemas de conexión.
  - Navegación: Implementar la navegación entre pantallas de manera que sea clara y eficiente.
  - Estilos: Darle un estilo atractivo a los componentes utilizando React Native y personalizar los botones.
- Soluciones:
  - Usé try...catch para manejar errores en las solicitudes de API y mostrar mensajes apropiados al usuario.
  - Implementé la navegación con react-navigation para que el flujo entre pantallas fuera sencillo.
  - Apliqué estilos personalizados utilizando StyleSheet de React Native para mejorar la apariencia y accesibilidad de la aplicación.
- Autor
    Karen1501
