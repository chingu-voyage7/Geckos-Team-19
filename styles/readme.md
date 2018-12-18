Folder structure inspired by 7-1 pattern from sass guidelines

https://sass-guidelin.es/#architecture

No main.scss file where all files are imported. All files are directly imported in corresponding react component -> the goal is to lower the loading time.

No need to use _ for partials as they are not partials

Let's see how it will work...

** Folders
*** Base
Should hold boilerplate code - reset files, typography, base (core) styles

*** Layout
Should hold styles for layout react components

*** Components
One react component = one style file in this folder

*** Abstract
Helpers, variables, mixins, functions
No line from this folder should ends up in the bundled css file