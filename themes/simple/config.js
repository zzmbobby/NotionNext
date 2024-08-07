const CONFIG = {

  SIMPLE_LOGO_IMG: 'https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/629d846dly8haupojr9fkj20u00u0410.jpg?KID=imgbed,tva&Expires=1723012245&ssig=8%2BBzRF%2B%2B%2Fi',
  SIMPLE_TOP_BAR: true, // 显示顶栏
  SIMPLE_TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || '',
  SIMPLE_LOGO_DESCRIPTION: process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION || '<div>互联网冲浪选手<br/>',

  SIMPLE_AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',

  SIMPLE_POST_AD_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_AD_ENABLE || false, // 文章列表是否插入广告

  SIMPLE_POST_COVER_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_COVER_ENABLE || false, // 是否展示博客封面

  SIMPLE_ARTICLE_RECOMMEND_POSTS: process.env.NEXT_PUBLIC_SIMPLE_ARTICLE_RECOMMEND_POSTS || true, // 文章详情底部显示推荐

  // 菜单配置
  SIMPLE_MENU_CATEGORY: true, // 显示分类
  SIMPLE_MENU_TAG: true, // 显示标签
  SIMPLE_MENU_ARCHIVE: true, // 显示归档
  SIMPLE_MENU_SEARCH: true // 显示搜索
}
export default CONFIG
