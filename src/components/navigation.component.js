import {Component} from '../core/component'

export class NavigationComponent extends Component {
  constructor(id) {
    super(id)
    this.tabs = []
  }

  init() {
    this.$el.addEventListener('click', tabClickHandler.bind(this))
  }

  registrationTabs(tabs) {
    this.tabs = tabs
  }
}

function tabClickHandler(e) {
  e.preventDefault()
  if (e.target.classList.contains('tab')) {
    Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
      tab.classList.remove('active')
      // document.querySelector(`#${tab.dataset.name}`).classList.add('hide')
    })
    e.target.classList.add('active')


    const activeTab = this.tabs.find(t => t.name === e.target.dataset.name)
    this.tabs.forEach(t => t.component.hide())
    activeTab.component.show()
    // document.querySelector(`#${e.target.dataset.name}`).classList.remove('hide')
  }

}

