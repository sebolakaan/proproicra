import buroList from './views/buro/buroList.vue';
import buroEkle from './views/buro/buroEkle.vue';


export const routes = [
    { path:'/burolar', component: buroList },
    { path:'/buroekle/:id', component: buroEkle },
];