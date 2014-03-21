cL-styles [![Build Status](https://travis-ci.org/creativelive/cl-styles.png?branch=master)](https://travis-ci.org/creativelive/cl-styles)
=========

Contains creativeLIVE Less, and is used as a submodule in the Style Guide, and as an NPM dependency in Rind-based projects.



### Compiling cl-icon-font

If you wish to add a new glyph to the icon font used in creativeLIVE you need to get up an running with `fontcustom`. In order to install font custom:

````
brew install fontforge eot-utils
gem install fontcustom
````

Add a .svg to the `modules/styles.mod/assets/icons` folder and then execute:

````
fontcustom compile
````

This should output a bunch of webfonts into `modules/styles.mod/assets/font`, as well as some templated css/html into an ignored folder. Add your css rule to `icons.less` and voila!


### Running Tests

In order to keep our css clean and tidy we use csslint to check for errors in the code. https://github.com/stubbornella/csslint. In order to run tests:

````
npm i
npm test
````
