// require helpers
// require image-preview
class Portfolios {
  constructor() {
    const portfolios = [...document.getElementsByClassName('post-images')];
    portfolios.map((portfolio) => new Portfolio(portfolio));
  }
}

class Portfolio {
  constructor(portfolio) {
    this.portfolio = portfolio;
    this.registerEvents();
  }

  registerEvents() {
    this.portfolio.querySelector(".project-img").onclick = e => { this.showImage(e); };
  }

  showImage(e) {
    e.preventDefault();
    const index = window.Helpers.getTarget(e).getAttribute('data-index');
    const imagePreview = new ImagePreview(this.imagesList(), index);
    imagePreview.showImage();
  }

  imagesList() {
    const thumbs = this.portfolio.getElementsByClassName('thumb');
    if (!thumbs.length) {return [{src: null, title: 'No image', id: 0}];}

    return [...thumbs].map((thumb,index) => {
      thumb.onclick = e => (this.showImage(e));
      return { src: thumb.href, title: thumb.title, id: index };
    });
  }
}

window.Portfolios = new Portfolios();
