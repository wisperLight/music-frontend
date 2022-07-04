<template>
  <div class="menu">
    <div class="tab">
      <!-- 发现 -->
      <ul class="find">
        <div class="group-title" v-show="!isCollapse">发现</div>
        <li
          v-for="(f, index) in find"
          :key="index"
          @click="changeLight(1, index)"
        >
          <router-link active-class="active" :to="f.url">
            <div
              class="light"
              :class="{ 'up-to-down': toggleLight, 'down-to-up': !toggleLight }"
            ></div>
            <div><i :class="f.icon"></i></div>
            <div :class="{ come: !isCollapse, go: isCollapse }">
              {{ f.title }}
            </div>
          </router-link>
        </li>
      </ul>

      <!-- 我的音乐 -->
      <ul class="my-music">
        <div class="group-title" v-show="!isCollapse">我的音乐</div>
        <li
          v-for="(m, index) in myMusic"
          :key="index"
          @click="changeLight(2, index)"
        >
          <router-link active-class="active" :to="m.url">
            <div
              class="light"
              :class="{ 'up-to-down': toggleLight, 'down-to-up': !toggleLight }"
            ></div>
            <div><i :class="m.icon"></i></div>
            <div :class="{ come: !isCollapse, go: isCollapse }">
              {{ m.title }}
            </div>
          </router-link>
        </li>
      </ul>

      <!-- 我的歌单 -->
      <ul class="my-list" v-show="!isCollapse">
        <div class="group-title">我的歌单</div>
        <li
          v-for="(l, index) in myPlayList"
          :key="index"
          @click="changeLight(3, index)"
        >
          <router-link
            active-class="active"
            :to="`/home/playlistdetail/${l.id}`"
          >
            <div
              class="light"
              :class="{ 'up-to-down': toggleLight, 'down-to-up': !toggleLight }"
            ></div>
            <div v-if="index === 0"><i class="icon-heart"></i></div>
            <div v-else><i class="icon-document-list"></i></div>
            <div v-if="index === 0">我喜欢的音乐</div>
            <div v-else>{{ l.name }}</div>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 个人中心 -->
    <div class="footer">
      <ul>
        <li @click="changeLight(4, 1)">
          <router-link
            active-class="active"
            :to="`/home/userdetail/${profile.userId}`"
          >
            <div
              class="light"
              :class="{ 'up-to-down': toggleLight, 'down-to-up': !toggleLight }"
            ></div>
            <div><i class="icon-user-circle-o"></i></div>
            <div>{{ profile.nickname }}</div>
          </router-link>
        </li>
        <li @click="changeLight(4, 2)">
          <router-link active-class="active" to="/home/setting">
            <div
              class="light"
              :class="{ 'up-to-down': toggleLight, 'down-to-up': !toggleLight }"
            ></div>
            <div><i class="icon-cog"></i></div>
            <div>设置</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Menu",
  props: ["isCollapse"],
  data() {
    return {
      find: [
        {
          title: "搜索",
          icon: "icon-search",
          url: "/home/search",
        },
        {
          title: "个性推荐",
          icon: "icon-bookmark",
          url: "/home/recommend",
        },
        {
          title: "浏览",
          icon: "icon-globe",
          url: "/home/browse",
        },
        {
          title: "私人FM",
          icon: "icon-feed",
          url: "/home/personalfm",
        },
      ],
      myMusic: [
        {
          title: "我的收藏",
          icon: "icon-books",
          url: "/home/mycollection",
        },
        {
          title: "音乐云盘",
          icon: "icon-cloud",
          url: "/home/mycloud",
        },
        {
          title: "最近播放",
          icon: "icon-clock2",
          url: "/home/recentplay",
        },
      ],
      pre: 4,
      toggleLight: false,
    };
  },
  computed: {
    ...mapState(["profile", "myPlayList"]),
  },
  methods: {
    changeLight(outIndex, inIndex) {
      const cur = outIndex + "" + inIndex;

      console.log(cur);
      if (this.pre < cur) {
        //up->down
        this.toggleLight = true;
        console.log("up->down", this.toggleLight);
      } else if (this.pre > cur) {
        //down -> up
        this.toggleLight = false;
        console.log("down->up", this.toggleLight);
      }
      this.pre = cur;
    },
  },
};
</script>

<style lang="less" scoped>
.menu {
  font-size: 14px;
  overflow-x: hidden;
  white-space: nowrap;
  height: 435px;
}

.tab {
  overflow-x: hidden;
  overflow-y: auto;
  // 让文字不换行

  ul {
    margin-top: 34px;
    &:nth-child(1) {
      margin-top: 15px;
    }
  }
}

.group-title {
  margin-left: 16px;
  margin-bottom: 13px;
  font-weight: 600;
  color: #7b7b7b;
}

a {
  position: relative;
  height: 36px;
  margin-top: 5px;
  line-height: 36px;
  border-radius: 6px;
  display: flex;

  padding-left: 16px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: rgba(0, 0, 0, 5%);
  }

  &:active {
    color: #595959;
    background-color: rgba(0, 0, 0, 3%);
  }
}

i {
  color: black;
  font-size: 10px;
  margin-right: 16px;
}

.footer {
  position: absolute;
  width: 100%;
  height: 95px;
  bottom: 0px;
  border-top: 1px solid rgba(0, 0, 0, 10%);

  ul {
    margin-top: 12px;
  }
}

.light {
  position: absolute;
  width: 4px;
  height: 16px;
  left: 0px;
  top: 11px;
  background-color: #26a69a;
  border-radius: 10px;
  opacity: 1;
  animation: none;
}

.active {
  background-color: rgba(0, 0, 0, 5%);
  // .light {
  //   opacity: 1;
  // }
}

// 文字的渐隐动画
.come {
  animation: fade1 0.5s forwards;
}

.go {
  animation: fade2 0.5s forwards;
}

@keyframes fade1 {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
}

@keyframes fade2 {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translate(-100%);
    opacity: 0;
  }
}

.up-to-down {
  animation: up-to-down 0.3s 1s ease-out;
}

.down-to-up {
  animation: down-to-up 0.3s 1s ease-out;
}

@keyframes up-to-down {
  from {
    top: 0px;
    height: 27px;
  }
  to {
    top: 11px;
    height: 16px;
  }
}

@keyframes down-to-up {
  from {
    top: 11px;
    height: 27px;
  }
  to {
    top: 11px;
    height: 16px;
  }
}
</style>
