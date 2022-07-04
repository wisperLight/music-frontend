import Vue from 'vue'

import {
  Card,
  Message,
  Container,
  header,
  Aside,
  Main
} from 'element-ui';

Vue.use(Card)
Vue.use(Container)
Vue.use(header)
Vue.use(Aside)
Vue.use(Main)


// Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;


