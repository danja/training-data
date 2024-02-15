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

cd src
node pdf2txt.js ../pdfs/llm-kg-completion.pdf ../output/llm-kg-completion.md

next, markdown formatting

instructions at :

https://github.com/mozilla/pdf.js

got me a browser pdf viewer, but I can't see where it gets the original formatting from the pdf.

http://localhost:8888/web/viewer.html

check pdf-js-notes.md

node pdf2txt.js sample.pdf ../output/sample.md

below 6, plain?

a little google, and I found this : https://krasjet.com/voice/pdf.tocgen/

a Python thing, you give it examples of headings and it makes a recipe to extract them from the whole document.

---

may be clues in https://pymupdf.readthedocs.io/en/latest/recipes-text.html

https://github.com/mozilla/pdf.js/pull/10753

OR use a tool like that to create a bunch of pdf-extracted-bits + md pairs, and train a model

maybe get it to make svg, convert that to md

https://github.com/mozilla/pdf.js/blob/382be22c111c4d14373660a6c894a5f609b23486/examples/node/pdf2svg.js

https://github.com/mozilla/pdf.js/issues/11661

also https://raw.githubusercontent.com/Kenneth-Tuan/pdf2html2json/main/pdf2html.js
