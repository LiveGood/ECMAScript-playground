# ES-2019-playground

## Intall packages

### `npm install`

## Run

### `node private-classes-compiled.js`


If you change something to the main file recompile:

### `npx babel private-classes.js -o private-classes-compiled.js`

## Or add shell allias:

## 
```shell
babl() {
   jsFile="$1.js"
   compiledJsFile="$1-compiled.js"
   npx babel $jsFile -o $compiledJsFile && node $compiledJsFile  
}
```


