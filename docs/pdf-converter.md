https://github.com/modesty/pdf2json

npm install pdf2json

didn't look promising

npm install pdf-parse

grr. docs lacking. It uses pdf.js, so I might as well use that directly.

https://www.npmjs.com/package/pdfjs-dist

npm install pdfjs-dist

cd src

npm uninstall pdf2json
npm uninstall pdf-parse

npm uninstall pdfjs-dist
npm install pdfjs-dist

cd src
node pdf2txt.js ../pdfs/llm-kg-completion.pdf

next, markdown formatting

instructions at :

https://github.com/mozilla/pdf.js

got me a browser pdf viewer, but I can't see where it gets the original formatting from the pdf.

http://localhost:8888/web/viewer.html

check pdf-js-notes.md

node pdf2txt.js sample.pdf ../output/sample.md

below 6, plain?
