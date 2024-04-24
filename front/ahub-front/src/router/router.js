import {createRouter, createWebHistory} from 'vue-router';


const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/board/fairs',
            component: () => import('../views/FairBoard.vue')
        },
        {
            path: '/',
            component: () => import('../views/MainPage.vue')
        },
        {
            path: '/board/fairs/:fairId',
            component: () => import('../views/FairPost.vue')
        },
        {
            path: '/board/fairs/edit',
            component: () => import('../views/FairPostEdit.vue')
        },
        {
            path: '/post/content/:id', 
            component: () => import('../views/PostReplyView.vue')
        },
        {
            path: '/post/posts',
            component: () => import('../views/PostMainView.vue')
        },
        {
            path: '/member/regist',
            component: () => import('../views/registPage.vue')
        },
        {
            path: '/login',
            component: () => import('../views/loginPage.vue')
        },
        {
            path: '/member/findMyprofile/:id',
            component: () => import('../views/profilePage.vue')
        }

    ]
})

export default router;