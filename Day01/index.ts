// 安裝typescript - npm install -g typescript (-g為全域)
// 建立tsconfig.json這個檔案 - tsc --init
// tsc - 將 .ts 編譯為 .js

const message = 'Hello World'

function say(something: string): void {
    console.log(something)
}

say(message)
