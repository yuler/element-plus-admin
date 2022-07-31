import path from 'node:path'
import {defineConfig} from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		},
	},

	plugins: [
		Vue({
			include: [/\.vue$/, /\.md$/],
			reactivityTransform: true,
		}),

		// https://github.com/hannoeru/vite-plugin-pages
		Pages({
			exclude: ['**/components/*.vue'],
			extensions: ['vue'],
		}),

		// https://github.com/JohnCampionJr/vite-plugin-vue-layouts
		Layouts(),

		// https://github.com/antfu/unplugin-auto-import
		AutoImport({
			imports: [
				'vue',
				'vue-router',
				'vue/macros',
				'@vueuse/head',
				'@vueuse/core',
			],
			dts: 'src/auto-imports.d.ts',
			dirs: ['src/composables', 'src/store'],
			vueTemplate: true,
		}),

		// https://github.com/antfu/unplugin-vue-components
		Components({
			resolvers: [
				IconsResolver(),
				ElementPlusResolver({
					importStyle: 'css',
					ssr: true,
				}),
			],
			extensions: ['vue', 'md'],
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			dts: 'src/components.d.ts',
		}),

		Icons({compiler: 'vue3'}),

		// https://github.com/antfu/unocss
		// see unocss.config.ts for config
		Unocss(),

		// https://github.com/antfu/vite-plugin-inspect
		// Visit http://localhost:3333/__inspect/ to see the inspector
		Inspect(),
	],
})
