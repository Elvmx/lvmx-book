<template>
  <div class="page-home">
    <van-nav-bar title="标题" left-arrow @click-left="$router.back()" />

    <van-swipe class="my-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>

    <h2 class="block__title">热门图书</h2>

    <van-row>
      <van-col span="12">
        <div class="hot">
          <img src="https://img13.360buyimg.com/babel/s320x320_jfs/t1/46902/16/2263/614215/5d020006E314033b5/bafc4cb59ba2aef3.jpg!cc_320x320.webp" alt="">
          <p>一看就停不下来的中国shi.我的天呀</p>
        </div>
      </van-col>
      <van-col span="12">
        <div class="hot">
          <img src="https://img13.360buyimg.com/babel/s320x320_jfs/t1/46902/16/2263/614215/5d020006E314033b5/bafc4cb59ba2aef3.jpg!cc_320x320.webp" alt="">
          <p>wodetian</p>
        </div>
      </van-col>
      <van-col span="12">
        <div class="hot">
          <img src="https://img13.360buyimg.com/babel/s320x320_jfs/t1/46902/16/2263/614215/5d020006E314033b5/bafc4cb59ba2aef3.jpg!cc_320x320.webp" alt="">
          <p>wodedi</p>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'

export default {
  name: 'Home',

  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },

  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  .my-swipe {
    height: 210px;

    img {
      width: 100%;
    }
  }

  .block__title {
    font-size: 18px;
    padding: 32px 16px;
  }

  .hot {
    img {
      width: 100%;
    }
    p {
      font-size: 16px;
      text-align: center;
      margin: 10px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
