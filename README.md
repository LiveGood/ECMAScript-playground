# ES-2019-playground

## Intall packages

### `npm install`

## Run

### `node private-classes-compiled.js`


If you change something to the main file recompile:

### `npx babel private-classes.js -o private-classes-compiled.js`

## Or add shell allias to compile and run directly:

## 
```bash
babl() {
   jsFile="$1.js"
   compiledJsFile="$1-compiled.js"
   npx babel $jsFile -o $compiledJsFile && node $compiledJsFile  
}
```

## Then use like this:

### `babl private-classes`


