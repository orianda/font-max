# Max #

Max web font package with font files, less, scss, and CSS.  Why? Because Google's font CDN is slow and occasionally doesn't work.

## Use ##

1. Use Bower to install the max package
  ```sh
  bower install font-max --save
  ```

2. Import the max.less, max.scss or max.css file into your project
  ```css
  @import: "../some/path/font-max/css/max.css";
  ```
  ```less
  @import: "../some/path/font-max/less/max.less";
  ```
  ```scss
  @import: "../some/path/font-max/scss/max";
  ```
  
  If you just need the regular font without the expert one, then import just `common` packages
  ```css
  @import: "../some/path/font-max/css/max-common.css";
  ```
  ```less
  @import: "../some/path/font-max/less/max-common.less";
  ```
  ```scss
  @import: "../some/path/font-max/scss/max-common";
  ```

3. Override the Max font path if nessesary 
  ```less
  @max-font-path: '../font';
  ```
  ```scss
  max-font-path: '../font';
  ```
  

## Development Info ##
* Homepage: https://github.com/orianda/font-max
* Repo: https://github.com/orianda/font-max

## Contributors ##
* [orianda](https://github.com/orianda)

## License ##

Software: Licenced under the MIT License (MIT)

  http://opensource.org/licenses/MIT

Fonts: Licensed under version 1.1 of the SIL Open Font License

  http://scripts.sil.org/OFL

