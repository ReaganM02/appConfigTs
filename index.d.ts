declare module 'nuxt/schema' {
  interface AppConfigInput {
    ui: {
      notifications: {
        position: string; // Assuming position can be any string
      };
    };
    as: {
      layout: {
        nav: {
          isOpen: boolean;
        };
      };
    };
  }
}

// It is always important to ensure you import/export something when augmenting a type
export { }