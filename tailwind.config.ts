import type { ModuleOptions } from '@nuxtjs/tailwindcss'

type TailwindConfig = ModuleOptions['config']

export default <Partial<TailwindConfig>> {
  darkMode: 'class',
}
