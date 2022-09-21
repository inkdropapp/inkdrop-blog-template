import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import addClasses from 'rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  site: 'https://uses.craftz.dog/',
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    },
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold font-mplus my-2',
          h2: 'text-2xl font-bold font-mplus my-2',
          h3: 'text-xl font-bold font-mplus my-2',
          h4: 'text-lg font-bold font-mplus my-2',
          h5: 'font-bold font-mplus my-2',
          h6: 'font-bold font-mplus my-2',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 text-indigo-600 dark:text-indigo-400 decoration-indigo-400 dark:decoration-indigo-600',
          code: 'border border-slate-200 dark:border-zinc-700/50 rounded-lg px-2 py-1',
          ul: 'list-disc list-outside',
          ol: 'list-decimal list-outside',
          table: 'table-auto border border-slate-200 dark:border-zinc-700 rounded-lg',
          th: 'border dark:border-zinc-700 font-bold p-4 pb-3 text-left',
          td: 'border border-slate-200 dark:border-zinc-700 p-4',
          hr: 'border-slate-200 dark:border-zinc-500 my-4',
          blockquote: 'px-4 my-4 border-l-4 border-l-slate-200 dark:border-l-zinc-500 italic'
        }
      ]
    ]
  }
})
