import Vue from 'vue';

export default Vue.directive('scroll', {
  inserted(el, binding) {
    let func = (evt) => {
      binding.value(evt);
    };
    window.addEventListener(`scroll`, func);
  },
});