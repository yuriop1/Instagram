import instagramData from './assets/InstagramData.js';
import axios from 'axios';

export default (await import('vue')).defineComponent({
name: 'App',
components: {
Container,
},
data() {
return {
instaData: instagramData,
moreButton: 0,
};
},
methods: {
more() {
// eslint-disable-next-line no-debugger
debugger;
console.log('첫번쨰' + this.moreButton);
this.moreButton++;

console.log('두번쨰' + this.moreButton);
const addr = 'https://codingapple1.github.io/vue/more' + this.moreButton + '.json';
axios.get(addr)
.then((d) => {
this.instaData.push(d.data);
});
}
},
});
