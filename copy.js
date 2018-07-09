function copyIconFont() {
  console.log('欢迎使用iconfont自动添加工具！有问题请前往 https://github.com/ShanaMaid/copy-icon-font 提问！');

  const ul = document.querySelectorAll('.collection-detail .block-icon-list')[0];

  if (!ul) {
    console.log('页面可能错了？请确认');
    return;
  }

  const length = ul.childNodes.length;
  console.log(`检测到${length}个图标！开始往购物车中添加！`);

  for (let index = 0; index < length; index++) {
    const element = ul.childNodes[index];
    element.childNodes[2].childNodes[0].click();
  }

  console.log(`操作已完成！${length}个图标已经添加到购物车!`)

  console.log('大量click操作会引起浏览器卡顿，请静等浏览器响应！若长时间没响应请刷新浏览器查看购物车。')
}

copyIconFont();
