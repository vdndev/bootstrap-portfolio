import path from "path";

export default {
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "~bootstrap-icons": path.resolve(__dirname, "node_modules/bootstrap-icons"),
    },
  },
  server: {
    port: 5173,
    hot: true,
  },
}
