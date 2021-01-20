import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage'
import RobotBuilder from '../build/RobotBuilder'
import PartInfo from '../parts/PartInfo'
import BrowseParts from '../parts/BrowseParts'
import RobotHeads from '../parts/RobotHeads'
import RobotArms from '../parts/RobotArms'
import RobotTorsos from '../parts/RobotTorsos'
import RobotBases from '../parts/RobotBases'
import SidebarStandard from '../sidebars/SidebarStandard'
import SidebarBuild from '../sidebars/SidebarBuild'
import ShoppingCart from '../cart/ShoppingCart'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:
    [
        {
            path: '/',
            name: 'Home',
            components: {
                default: HomePage,
                sidebar: SidebarStandard
            },
        },
        {
            path: '/build',
            name: 'Build',
            components: {
                default: RobotBuilder,
                sidebar: SidebarBuild
            },
        },
        {
            path: '/parts/browse',
            name: 'Browse',
            component: BrowseParts,
            children:[
                {
                    name: 'BrowseHeads',
                    path: 'Heads',
                    component: RobotHeads
                },
                {
                    name: 'BrowseArms',
                    path: 'Arms',
                    component: RobotArms
                },
                {
                    name: 'BrowseTorsos',
                    path: 'Torsos',
                    component: RobotTorsos
                },
                {
                    name: 'BrowseBases',
                    path: 'Bases',
                    component: RobotBases
                },
            ]
        },
        {
            path: '/parts/:partType/:id',
            name: 'Parts',
            component: PartInfo,
            props: true,
            beforeEnter(to,from,next){
                const isValidId = Number.isInteger(Number(to.params.id));
                next(isValidId);
            }
        },
        {
            path: '/cart',
            name: 'Cart',
            component: ShoppingCart
        }
    ],
});