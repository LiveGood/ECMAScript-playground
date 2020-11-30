# ES-2019-playground

## Intall packages

### `npm install`

## Compile
### `npx babel ./private-classes/privateClasses.js -o./private-classes/privateClasses-compiled.js`

## Run 
### `cd private-classes`
### `node private-classes-compiled.js`


If you change something to the main file, recompile:

## Or add shell allias to compile and run directly:

## 
```bash
babl() {
   jsFile="$1.js"
   compiledJsFile="$1-compiled.js"
   npx babel $jsFile -o $compiledJsFile && node $compiledJsFile  
}
```

## Then run like this:

### `babl ./private-classes/privateClasses`
