// VUE SLIDER
const app = new Vue ({
  el: '#app',
  data: {
    indexPhoto: 0,
    photo: [
      './img/image1.jpg',
      './img/image2.jpg',
      './img/image3.jpg',
      './img/image4.jpg',
    ],
    intervalId: 0,
  },
  created() {
    this.startLoop();
  },
  methods: {
    prevPhoto() {
      this.indexPhoto--
      if (this.indexPhoto < 0) {
        this.indexPhoto = this.photo.length - 1;
      }
    },
    nextPhoto() {
      this.indexPhoto++
      if (this.indexPhoto > this.photo.length -1) {
        this.indexPhoto = 0;
      }
    },
    choosePhoto(index) {
      this.indexPhoto = index;
    },
    startLoop() {
      this.intervalId = setInterval(() => {
      this.nextPhoto();
      }, 3000);
    },
    stopLoop() {
      clearInterval(this.intervalId);
    },
  },
});
