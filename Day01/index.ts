// 安裝 ts 
// npm install -g typescript 記得用 -g 因為我們要讓該指令工具可以在任何地方使用
// tsc --init 會建立一個 TypeScript 編譯器的設定檔 tsconfig.json
// 在同一個資料夾下，使用 tsc 指令 TypeScript 編譯器就會幫我們自動掃描所有 .ts 結尾的檔案並且產出 JS 檔案

const message = 'Hello World';

const say = (something: string): void => {
    console.log(something);
};

say(message);


// console.log(message.touppercase());
// TS 幫助我們辨識該錯誤 是不是不小心把 toUpperCase 寫成 touppercase 呢？
// 這個情況下使用 tsc 編譯的話，一樣會有錯誤訊息