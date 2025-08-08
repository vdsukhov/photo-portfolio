function gallery(images) {
  return {
    images: images,
    isOpen: false,
    current: 0,
    open(i) {
      this.current = i;
      this.isOpen = true;
    },
    next() {
      this.current = (this.current + 1) % this.images.length;
    },
    prev() {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
    }
  };
}
