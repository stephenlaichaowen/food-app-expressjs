const root = document.querySelector('html')
const deviceWidth = root.clientWidth

// 設計稿 375px
// 默認字大小 16px

root.style.fontSize = ( deviceWidth / 375 ) * 16 + 'px'
// root.style.fontSize = `$( deviceWidth / 375 ) * 16}px`
