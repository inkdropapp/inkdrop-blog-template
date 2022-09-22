# Inkdrop Blog Template

A template for creating simple blogs using [live-export](https://github.com/inkdropapp/inkdrop-live-export).

## Tutorial

Coming soon

## Stack

- [Astro](https://astro.build/) - Static Website Framework
- [Tailwind CSS](https://tailwindui.com/) - CSS Framework
- [React](https://reactjs.org/) - Component-based UI framework for JS
- [React Icons](https://react-icons.github.io/react-icons/) - Icon set

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
PROJECT_ROOT
├── public              # static assets
│   └── posts           # images of posts
├── src
│   ├── components      # Astro & React components
│   │   └── icons
│   ├── layouts         # page layouts
│   ├── pages           # page files
│   │   ├── tags        # tags pages
│   │   └── posts       # .md files
│   └── styles          # global stylesheets
└── tools               # Inkdrop integration
```

## How to use it

First off, clone this repository:

```sh
git clone git@github.com:inkdropapp/inkdrop-blog-template.git ./your-blog
```

### Import notes from your Inkdrop local server

Please check out the [live-export](https://github.com/inkdropapp/inkdrop-live-export) documentation.

Create `.env` file as following:

```
DEBUG='inkdrop:export:info,inkdrop:export:error'
INKDROP_USERNAME='***'
INKDROP_PASSWORD='***'
INKDROP_PORT=***
INKDROP_BOOKID='***'
```

Then, run the following command:

```sh
npm run live-import
```

## License

MIT License.

