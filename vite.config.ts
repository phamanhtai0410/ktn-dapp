import { defineConfig } from 'vite'
// import vitApp from '@vitjs/vit'
import { join } from 'path'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import autoImport from 'unplugin-auto-import/vite'
// import windiCSS from 'vite-plugin-windicss'
import tsconfigPaths from 'vite-tsconfig-paths'
import nodePolyfills from 'rollup-plugin-polyfill-node'

const production = process.env.NODE_ENV === 'production'
const resolve = (dir: string) => join(__dirname, dir)

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  define: {
    "process.env.NODE_ENV": `"${mode}"`,
  },

  resolve: {
    alias: {
      'node:stream': 'stream-browserify',
      '@': resolve('src'),
    },
  },
 
  server: {
    host: "0.0.0.0",
    port: 3000
  },

  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      },
    }),
    tsconfigPaths(),
    autoImport({
      imports: [
        'react',
        {
          react: [
            'createElement',
            'cloneElement',
            'createContext',
            // 'useLayoutEffect',
            // 'forwardRef',
          ],
        },
      ],
    }),
    // vitApp({
    //   routes,
    //   dynamicImport: {
    //     loading: './components/PageLoading',
    //   },
    //   exportStatic: {},
    // }),
    //windiCSS(),
    visualizer(),
    // !production &&
    //   nodePolyfills({
    //     include: [
    //       'node_modules/**/*.js',
    //       new RegExp('node_modules/.vite/.*js'),
    //     ],
    //   }),
      
  ]

})
