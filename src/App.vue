<script>
export default {
  onLaunch: function () {},
  onShow: function () {},
  onHide: function () {},
  globalData: {},
};
</script>
<style>
@import url("@/common/colorui/main.css");
@import url("@/common/colorui/icon.css");
@import url("@/common/iconfont.css");
/* 样式初始化 */
view,
text,
input,
image,
video,
scroll-view,
swiper,
textarea,
label,
navigator,
button {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
button::after {
  border: none;
}
button {
  background-color: transparent;
  padding-left: 0;
  padding-right: 0;
  line-height: inherit;
}
button {
  border-radius: 0;
}
page {
  background-color: #fff;
}
image {
  display: block;
}
/* 一行省略 */
.a-single-file {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
/* 两行省略 */
.two-lines {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

