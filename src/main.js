import { createApp } from 'vue';
import { Filter } from '@ant-design/icons-vue';
import Dayjs from 'vue-dayjs';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

/* import font awesome icon component */
import {
  Layout,
  Button,
  Spin,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Tag,
  Menu,
  PageHeader,
  Pagination,
  List,
  Input,
  Checkbox,
  Icon,
  Select,
  DatePicker,
  Avatar,
} from 'ant-design-vue';
import App from './App.vue';

/* add icons to the library */
library.add(faUserSecret);

const app = createApp(App, Dayjs, Filter);
app.config.productionTip = false;
app.use(Layout);
app.use(Button);
app.use(Spin);
app.use(Result);
app.use(Card);
app.use(Divider);
app.use(Col);
app.use(Row);
app.use(Drawer);
app.use(Table);
app.use(Form);
app.use(InputNumber);
app.use(Input);
app.use(Tag);
app.use(Menu);
app.use(PageHeader);
app.use(Pagination);
app.use(Checkbox);
app.use(Avatar);
app.use(Icon);
app.use(List);
app.use(Select);
app.use(DatePicker);
app.mount('#app');
