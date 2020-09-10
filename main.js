const root = document.querySelector('html')
const deviceWidth = root.clientWidth
root.style.fontSize = ( deviceWidth / 375 ) * 16 + 'px'

// 設計稿 375px
// 默認字大小 16px

window.addEventListener('resize', () => {
  root.style.fontSize = ( deviceWidth / 375 ) * 16 + 'px'
})

// root.style.fontSize = `$( deviceWidth / 375 ) * 16}px`
