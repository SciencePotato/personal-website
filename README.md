# Personal Website

## Deployment
- [Github Page Version](https://sciencepotato.github.io/personal-website/)
- [Herku Deployment](https://tacoscience.herokuapp.com/)
- [My Domain](http://www.houchic.com/)

## Project Overview
Using React and Sass, I am aiming to create a new personalize website. This website was long over due as the last `update` was back in Junior year of High School (2019). This time, I am highly inspired by Arknight's one page layout, and thought, hey, I should do something similar to theirs. There was no plan going to it, and hence no Figma design or anything.

## Technology Used
- React
- Javascript
- Sass/Css
- HTML/Jsx

## Future Plans
- [ ] **FINISHING**, the actual website.
- [ ] Modular for different size of website.
- [ ] DarkMode is what I want to add in the future. The priority of this update is at the very minimal, so I don't have to worry about much of this.

### Local development

```bash
npm ci
npm start
```

Open http://localhost:3000. The app imports the checked-in CSS under
`src/assets/Css/`, so Sass is not required just to run it.
The lowercase `.gitignore` keeps installed dependencies and local environment
files out of Git on both case-sensitive and case-insensitive filesystems.

### Production build

```bash
npm run build
```

Create React App writes the static site to `build/`. This command builds
locally only; it does not publish to GitHub Pages.

### SASS Watch
If you edit `src/assets/Sass/`, use an independently installed Dart Sass CLI
(not included in this project's dependencies) to regenerate the imported CSS:

```bash
sass --watch src/assets/Sass:src/assets/Css
```

### Deployment (Updates Github Page)
`npm run deploy`

### Credits
Website Inspiration
[Yostar](https://yo-star.com/pc/index.html)

Projects Inspiration and Code
[FlexBox Exercise](https://codepen.io/veronicadev/pen/yjgjvL)
- [veronicadev](https://codepen.io/veronicadev)

About Me Inspiration and Code
[Responsive Timeline](https://codepen.io/celiberion/pen/VwexbVr)
- [celiberion](https://codepen.io/celiberion)
