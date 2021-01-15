import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:()=> import('../components/index.vue'),
            children:[
                {
                    path:'menu',
                    component:()=>import('../components/menu.vue'),
                    meta:{selected:'/menu'}
                },
                {
                    path:'menu/add',
                    component:()=>import('../components/info.vue'),
                    meta:{selected:'/menu'}
                },
                {
                    path:'user',
                    component:()=>import('../components/role.vue'),
                    meta:{selected:'/role'}
                }

            ]
        }
    ]
})
export default router