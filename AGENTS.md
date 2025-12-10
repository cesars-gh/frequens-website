# Frequens Website

Frquens is a neuro-clinin on transcranial magnetic stimulation (tms) located in Merida, Mexico.
The therapies offered in the clinic help to treat different conditions such as ADHD, Depresion, Addiction and Autism.

## Colors

Our colors are sophisticated and warm.
Main: #B98739
Secondary: #6F8F80
Accents: #713A16
Background: #F6F4EC

You can find the CSS classes for these colors in `styles/global.css`.

## Icons

If you create a new icon, add it to the `/src/icons` folder as a SVG file to be reused later.
If the code you generate includes SVG code for an existing icon, use the icon component and the existing icon in SVG:

```
---
import { Icon } from 'astro-icon/components';
---
...
  <Icon
    name="chevron-down"
    class="w-4 h-4 transition-transform duration-200" />
```


## Development

The project uses Astro to build all the pages. Try to build reusing components as much as possible.
TailwindCSS is used for styling, try to use Tailwind's CSS classes most of the time except for commonly used components in which case a custom Tailwind class is prefered.

*Main Folders*
- Pages: `/src/pages`
- Components: `/src/components/(page)`
- CSS: `/styles`

*Running Dev Server*
`pnpm dev`

*Buidling the Website*
`pnpm build`

*Format the code*
`pnpm format`

