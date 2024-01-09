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
step: 0,
};
},
methods: {
more() {
const addr = 'https://codingapple1.github.io/vue/more' + this.moreButton + '.json';
axios.get(addr)
.then((d) => {
this.instaData.push(d.data);
if (this.moreButton != 1) {
this.moreButton++;
}
});
},
upload(e) {
let a = e.target.files;
console.log(a[0]);
},
},
});
