

export default {
  config: {
    locales: ["en"],
    head:{
      title: 'Nickelfox'
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Nickelfox",
        "Auth.form.welcome.subtitle": "Login to your account to continue.",
        "X-Powered-By": "Nickelfox",
      }
    },
    theme: {
      light: {
        colors: {
          primary100: "#7fb3d5",
          primary200: "#2980b9",
          primary500: "#1f618d",
          primary600: "#1f618d",
          primary700: "#1a5276",
          danger700: "#154360",
        },
      },
      dark: {
        // ...
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};