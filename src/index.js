class LazyLoad {
    constructor(customOptions) {
      // Các tùy chọn mặc định
      const defaultOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
  
      // Kết hợp tùy chọn mặc định và tùy chọn tùy chỉnh
      this.options = { ...defaultOptions, ...customOptions };
      this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);
      this.targets = [];
      this.init();
    }
  
    init() {
      const images = document.querySelectorAll('img.lazyload[data-src]');
      const iframes = document.querySelectorAll('iframe.lazyload[data-src]');
      
      images.forEach(image => {
        this.observe(image);
      });
      
      iframes.forEach(iframe => {
        this.observe(iframe);
      });
    }
  
    observe(target) {
      if (!this.targets.includes(target)) {
        this.targets.push(target);
        this.observer.observe(target);
      }
    }
  
    unobserve(target) {
      this.targets = this.targets.filter(t => t !== target);
      this.observer.unobserve(target);
    }
  
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          this.loadImage(target);
          this.unobserve(target);
        }
      });
    }
  
    loadImage(target) {
      if (target.tagName === 'IMG') {
        const src = target.getAttribute('data-src');
        if (src) {
          target.src = src;
          target.removeAttribute('data-src');
          target.classList.remove('lazyload');
          target.classList.add('loaded'); 
        }
      } else if (target.tagName === 'IFRAME') {
        const src = target.getAttribute('data-sr');
        if (src) {
          target.src = src;
          target.removeAttribute('data-src');
          target.classList.remove('lazyload'); 
          target.classList.add('loaded'); 
        }
      }
    }
  }
  
  const lazyLoadInstance = new LazyLoad();
  
  export default lazyLoadInstance;
  