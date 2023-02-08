# orchard-fed-test

A FED test for Orchard written in ReactJS.

### Tooling

**JS library/framework: React + Typescript**
- I have more experience with ReactJS more than other FED libraries/frameworks. I've also decided to integrate Typescript as in my experience, it has prevented a lot of what would've been careless mistakes. Typescript is also helpful as documentation for anyone looking through the code.

**CSS / Component Library: None.**
- Initially, I went with MUI, but soon realized it might be overkill for a one-page sample application. I would use it in more complex project, but in this case, SCSS modules are enough for quick customization. SCSS should be easy to pick up for anyone who has worked with CSS, and the extended features are always useful. It's also easy to operate with it with any downloadable package compared to MUI's in-the-box CSS-in-JS. I also used several lightweight packages such as yet-another-react-lightbox for the modal requirement, and scroll-out/splitting for a bit of animation to liven up the page.

**Build: Vite**
- I reached out for Vite simply because it's easier to configure and setup compared to Webpack. Vite also has great out-of-the-box support for frequently-used developer tools such as HMR, Typescript and CSS pre-processors, some of which were used in this project.

**Others: Lint, Prettier, and Husky**
- These tools are a must-have for anyone who wants to keep their codebase clean, consistent, and up to standards, no matter how many people are on the team.
