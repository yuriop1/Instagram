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
url: '',
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
this.url = URL.createObjectURL(a[0]);
debugger;
this.step = 1;
},
publish() {
var 내게시물 = {
name: "Kim Hyun",
userImage: "https://picsum.photos/100?random=3",
postImage: this.url,
likes: 36,
date: "May 15",
liked: false,
content: this.containerParam,
filter: "perpeua"
};
this.instaData.unshift(내게시물);
this.step = 0;
},
},
});
