import {Component} from '../core/component'
import {apiService} from '../services/api.service'
import {TransformService} from '../services/transform.service'
import {renderPost} from '../templates/post.template'

export class PostsComponent extends Component {
  constructor(id, {loader}) {
    super(id)
    this.loader = loader
  }

  init() {
    this.$el.addEventListener('click', btnHandler.bind(this))
  }

  async onShow() {
    this.loader.show()
    const fbData = await apiService.fetchPosts()
    const posts = TransformService.fbObjectToArr(fbData)
    const html = posts.map(post => renderPost(post, {withBtn: true}))
    this.loader.hide()
    this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
    // console.log('posts show', fbData)
  }

  onHide() {
    this.$el.innerHTML = ''
  }
}



function btnHandler(e) {
  const $el = e.target
  const id = $el.dataset.id
  if (id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    if (favorites.includes(id)) {
      //  delete el

      $el.textContent = 'Save'
      $el.classList.add('button-primary')
      $el.classList.remove('button-danger')
      favorites = favorites.filter(fId => fId !== id)
    } else {
      //  add el
      $el.textContent = 'Delete'
      $el.classList.add('button-danger')
      $el.classList.remove('button-primary')
      favorites.push(id)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
}