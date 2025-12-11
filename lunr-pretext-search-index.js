var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-vectors-in-the-plane",
  "level": "1",
  "url": "sec-vectors-in-the-plane.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vectors in the plane",
  "body": " Vectors in the plane  Text of section.  "
},
{
  "id": "sec-vector-algebra",
  "level": "1",
  "url": "sec-vector-algebra.html",
  "type": "Section",
  "number": "1.2",
  "title": "Vector algebra",
  "body": " Vector algebra  Text of section.  "
},
{
  "id": "sec-vectors-in-Rn",
  "level": "1",
  "url": "sec-vectors-in-Rn.html",
  "type": "Section",
  "number": "1.3",
  "title": "Vectors in <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>",
  "body": " Vectors in  Text of section.  "
},
{
  "id": "sec-length-of-a-vector",
  "level": "1",
  "url": "sec-length-of-a-vector.html",
  "type": "Section",
  "number": "1.4",
  "title": "Length of a vector",
  "body": " Length of a vector  Text of section.  "
},
{
  "id": "sec-vector-spaces",
  "level": "1",
  "url": "sec-vector-spaces.html",
  "type": "Section",
  "number": "1.5",
  "title": "Vector Spaces",
  "body": " Vector Spaces  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "2.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "3.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "4.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "5.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "6.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "7.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "8.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "9.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "10.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "11.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "12.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "13.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
