import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {FavoriteComponent} from './components/favorite.component'
import {PostsComponent} from './components/posts.components'
import {CreateComponent} from './components/create.component'
import {LoaderComponent} from './components/loader.component'

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader')

const favorite = new FavoriteComponent('favorite', {loader})
const posts = new PostsComponent('posts', {loader})
const create = new CreateComponent('create')

navigation.registrationTabs([
                              {name: 'create', component: create},
                              {name: 'posts', component: posts},
                              {name: 'favorite', component: favorite}
                            ])
// in dist/index.html you should add type="text to id="title"