const app = Vue.createApp({
  data() {
    return {
      name: "Sandro",
      age: 20,
      imageLink:
        "https://wwwmpa.mpa-garching.mpg.de/gadget/cr/CR_TCDM_dump40_400_170000_12000_100_blue.gif",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
