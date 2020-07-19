import QuoteService from "../services/quote-service.js";
import store from "../store.js"


//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function _drawQuote() {
  document.getElementById("quote").innerText = store.State.quotes.Template
  document.getElementById("author").innerText = store.State.quotes.Template2
}


export default class QuoteController {
  constructor() {
    console.log(Date.now());
    store.subscribe("quotes", _drawQuote)
  }
}
