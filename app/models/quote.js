



export default class Quote {
  constructor(data) {
    this.body = data.body
    this.author = data.author
  }
  get Template() {
    return `
  
     ${this.body}

  `
  }
  get Template2() {
    return `
  ${this.author}
  `
  }
}

{/* <p class=" white-trans"> ${this.body} <br> <span class="extra">${this.author}</span></p> */ }