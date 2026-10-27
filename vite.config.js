import path from "node:path";
const localModules = process.env.APP_LOCAL_DEPS;
export default {
  base: "/pricing-dashboard/",
  resolve: {
    alias: localModules ? [
      { find: "react-dom/client", replacement: path.join(localModules, "react-dom", "client.js") },
      { find: "react/jsx-runtime", replacement: path.join(localModules, "react", "jsx-runtime.js") },
      { find: "react/jsx-dev-runtime", replacement: path.join(localModules, "react", "jsx-dev-runtime.js") },
      { find: /^react$/, replacement: path.join(localModules, "react") }
    ] : []
  }
};
