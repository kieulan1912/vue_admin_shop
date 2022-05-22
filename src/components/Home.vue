/* eslint-disable no-console */
<template>
  <a-row>
    <a-col :span="8" style="text-align: left"><h2>Danh sách shop</h2></a-col>
    <a-col :span="8" :offset="8">
      <a-button class="btn-primary" style="float: right">
        <template #icon>
          <plus-outlined />
        </template>
        Thêm shop
      </a-button>
    </a-col>
  </a-row>
  <!-- Filter -->
  <a-row>
    <a-col :span="6" style="display: flex">
      <a-input-search
        v-model:value="value"
        placeholder="Nhập mã shop, tên shop, SĐT để tìm kiếm"
        style="width: 600px"
        @search="onSearch"
    /></a-col>
    <a-col :span="18" style="display: flex; justify-content: end">
      <a-row>
        <a-space>
          <a-select
            ref="select"
            v-model:value="value1"
            style="width: 190px"
            @focus="focus"
            @change="handleChange"
            placeholder="Tỉnh/TP"
          >
            <a-select-option value="1">Hà Nội</a-select-option>
            <a-select-option value="2">Hồ Chí Minh</a-select-option>
          </a-select>
        </a-space>
        <a-space>
          <a-select
            ref="select"
            v-model:value="value1"
            style="width: 190px"
            class="ml-2"
            @focus="focus"
            @change="handleChange"
            placeholder="Quận/ Huyện"
          >
            <a-select-option value="1">value 1</a-select-option>
            <a-select-option value="2">value 2</a-select-option>
          </a-select>
        </a-space>
        <a-space>
          <a-select
            ref="select"
            v-model:value="value1"
            style="width: 190px"
            class="ml-2"
            @focus="focus"
            @change="handleChange"
            placeholder="Loại shop"
          >
            <a-select-option value="1">value 1</a-select-option>
            <a-select-option value="2">value 2</a-select-option>
          </a-select>
        </a-space>
        <a-space>
          <a-select
            ref="select"
            v-model:value="value1"
            style="width: 190px"
            class="ml-2"
            @focus="focus"
            @change="handleChange"
            placeholder="CS care"
          >
            <a-select-option value="1">value 1</a-select-option>
            <a-select-option value="2">value 2</a-select-option>
          </a-select>
        </a-space>
        <a-space>
          <a-select
            ref="select"
            v-model:value="value1"
            style="width: 190px"
            class="ml-2"
            @focus="focus"
            @change="handleChange"
            placeholder="Kích hoạt"
          >
            <a-select-option value="1">value 1</a-select-option>
            <a-select-option value="2">value 2</a-select-option>
          </a-select>
        </a-space>
        <a-space>
          <a-select
            ref="select"
            v-model:value="value1"
            style="width: 190px"
            class="ml-2"
            @focus="focus"
            @change="handleChange"
            placeholder="Trạng thái sử dụng"
          >
            <a-select-option value="1">value 1</a-select-option>
            <a-select-option value="2">value 2</a-select-option>
          </a-select>
        </a-space>
      </a-row>
    </a-col>
  </a-row>
  <br />
  <a-row>
    <a-space>
      <a-date-picker
        v-model:value="valueDate"
        placeholder="Thời gian tạo shop"
        style="width: 220px"
      />
    </a-space>
    <a-space class="ml-2">
      <a-date-picker
        v-model:value="valueDate1"
        placeholder="Thời gian ngừng đơn"
        style="width: 220px"
      />
    </a-space>
    <a-space class="ml-2">
      <a-date-picker
        v-model:value="valueDate2"
        style="width: 220px"
        placeholder="Tiềm năng"
      />
    </a-space>
    <a-select
      ref="select"
      v-model:value="value1"
      style="width: 190px"
      class="ml-2"
      @focus="focus"
      @change="handleChange"
      placeholder="Tư vấn"
    >
      <a-select-option value="1">value</a-select-option>
    </a-select>
    <a-select
      ref="select"
      v-model:value="value1"
      style="width: 190px"
      class="ml-2"
      @focus="focus"
      @change="handleChange"
      placeholder="Nhu cầu"
    >
      <a-select-option value="1">value</a-select-option>
    </a-select>
    <a-select
      ref="select"
      v-model:value="value1"
      style="width: 190px"
      class="ml-2"
      @focus="focus"
      @change="handleChange"
      placeholder="Kiểu đối soát"
    >
      <a-select-option value="1">value</a-select-option>
    </a-select>
    <a-select
      ref="select"
      v-model:value="value1"
      style="width: 190px"
      class="ml-2"
      @focus="focus"
      @change="handleChange"
      placeholder="Người đăng ký"
    >
      <a-select-option value="1">value</a-select-option>
    </a-select>
    <a-select
      ref="select"
      v-model:value="value1"
      style="width: 190px"
      class="ml-2"
      @focus="focus"
      @change="handleChange"
      placeholder="Người tạo shop"
    >
      <a-select-option value="1">value</a-select-option>
    </a-select>
  </a-row>
  <br />
  <a-row>
    <a-col :span="8" style="text-align: left"
      ><span>Kết quả tìm kiếm: 120 shop</span></a-col
    >
    <a-col :span="12" :offset="4" class="left-content">
      <a-row>
        <span style="margin-top: 5px">Xóa bộ lọc</span>
        <div style="width: 125px" class="ml-2">
          <a-button block class="btn-primary" style="float: right">
            Thu gọn bộ lọc
          </a-button>
        </div>
        <div style="width: 125px" class="ml-2">
          <a-button block class="btn-primary-bg" style="float: right">
            Tìm kiếm
          </a-button>
        </div>
      </a-row>
    </a-col>
  </a-row>
  <br />
  <a-table
    :columns="columns"
    :data-source="data"
    bordered
    :pagination="{ pageSize: 10 }"
    :scroll="{ y: 520 }"
  >
    <a-table-column
      key="nameColumn"
      title="Mã/tên shop"
      data-index="nameColumn"
    >
      <template #default="{ text: nameColumn }">
        <template v-for="n in nameColumn" :key="n">
          <a-col>
            <a-tag color="#00904a">{{ n.type }}</a-tag>
            <a-tag color="#a8babc">{{ n.type2 }}</a-tag>
          </a-col>
          <a-col style="font-weight: bold">
            <p>{{ n.nameShop }}</p>
            <p>{{ n.code }}</p>
          </a-col>
        </template>
      </template>
    </a-table-column>
    <a-table-column
      key="registersColumn"
      title="Thông tin đăng ký"
      data-index="registersColumn"
    >
      <template #default="{ text: registersColumn }">
        <a-column
          v-for="r in registersColumn"
          :key="r"
          class="content__on__top"
        >
          <a-row>
            <p style="font-weight: bold">SĐT:</p>
            <p color="blue">{{ r.phone }}</p>
          </a-row>
          <a-row>
            <p style="font-weight: bold">Email:</p>
            <p color="blue">Email: {{ r.email }}</p>
          </a-row>
          <a-row>
            <p style="font-weight: bold">Địa chỉ:</p>
            <p color="blue">{{ r.address }}</p>
          </a-row>
          <a-row>
            <p style="font-weight: bold">Nguồn đăng ký:</p>
            <p color="blue">{{ r.homeRegister }}</p>
          </a-row>
          <a-row>
            <p style="font-weight: bold">Thời gian tạo:</p>
            <p color="blue">{{ r.time }}</p>
          </a-row>
        </a-column>
      </template>
    </a-table-column>
    <a-table-column
      key="attributeColumn"
      title="Đặc điểm"
      data-index="attributeColumn"
    >
      <template #default="{ text: attributeColumn }">
        <a-column
          v-for="a in attributeColumn"
          :key="a"
          class="content__on__top"
        >
          <a-row>
            <p style="font-weight: bold">Ngành hàng:</p>
            <p>{{ a.industry }}</p>
          </a-row>
          <a-row>
            <p style="font-weight: bold">Sản phẩm:</p>
            <p>Email: {{ a.product }}</p>
          </a-row>
          <a-row>
            <p style="font-weight: bold">Nhu cầu vận chuyển:</p>
            <p>{{ a.transportation }}</p>
          </a-row>
          <a-row>
            <p style="font-weight: bold">Kiểu đối soát:</p>
            <p>{{ a.control }}</p>
          </a-row>
          <a-row>
            <p>Đối soát hàng ngày thứ 2,3,4,5,6</p>
          </a-row>
        </a-column>
      </template>
    </a-table-column>
    <a-table-column
      key="stateColumn"
      title="Trạng thái"
      data-index="stateColumn"
    >
      <template #default="{ text: stateColumn }">
        <a-column
          v-for="item in stateColumn"
          :key="item"
          class="content__on__top"
        >
          <a-row>
            <a-tag color="#f49b57">{{ item.state }}</a-tag>
            <form-outlined
              style="color: #00904a; font-size: 20px"
            ></form-outlined>
          </a-row>
          <br />
          <a-row>
            <a-checkbox v-model:checked="checked">Shop tiềm năng</a-checkbox>
          </a-row>
          <br />
          <a-row>
            <p style="font-weight: bold">Sản lượng:</p>
            <p color="blue">{{ item.quantity }}</p>
          </a-row>
        </a-column>
      </template>
    </a-table-column>
    <a-table-column key="careColumn" title="Care shop" data-index="careColumn">
      <template #default="{ text: careColumn }">
        <a-column v-for="c in careColumn" :key="c" class="content__on__top">
          <a-row>
            <p style="font-weight: bold">CSKH:</p>
            <p>{{ c.cskh }}</p>
          </a-row>
          <a-row>
            <p style="font-weight: bold">Resale:</p>
            <p>{{ c.resale }}</p>
          </a-row>
          <a-row>
            <p style="font-weight: bold">PK onsite:</p>
            <p>{{ c.pk }}</p>
          </a-row>
          <a-row>
            <p style="font-weight: bold">Kho phụ trách:</p>
            <p>{{ c.house }}</p>
          </a-row>
        </a-column>
      </template>
    </a-table-column>
    <a-table-column key="noteColumn" title="CS ghi chú" data-index="noteColumn">
      <template #default="{ record }">
        <a-column class="content__on__top">
          <a-row>
            <span>{{ record.noteColumn }}</span>
          </a-row>
          <br />
          <a-row>
            <a-textarea
              v-model:value="value2"
              placeholder="Nhập ghi chú"
              allow-clear
            />
          </a-row>
          <br />
          <a-row class="left-content">
            <a-button class="btn-primary">Lưu</a-button>
          </a-row>
        </a-column>
      </template>
    </a-table-column>
    <a-table-column
      key="actionColumn"
      title="Thao tác"
      data-index="actionColumn"
      fixed="right"
      :width="150"
    >
      <a-column class="content__on__top">
        <a-row><a-button block class="btn-primary">Chỉnh sửa</a-button></a-row>
        <br />
        <a-row><a-button block class="btn-primary">Đăng nhập</a-button></a-row>
        <br />
        <a-row><a-button block class="btn-primary">Gửi email</a-button></a-row>
      </a-column>
    </a-table-column>
  </a-table>
</template>

<script>
import { Dayjs } from 'vue-dayjs';
import { PlusOutlined, FormOutlined } from '@ant-design/icons-vue';

const data = [];
const value2 = '';
const checked = false;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 35; i++) {
  data.push({
    key: i,
    nameColumn: [
      {
        type: 'Pro',
        type2: 'Pshop',
        nameShop: `Shop Phượng ớt ${i}`,
        code: 'S274563506',
      },
    ],
    registersColumn: [
      {
        phone: '0986500682',
        email: 'kieulan826@gmail.com',
        address: 'Hà Nội',
        homeRegister: 'Web khách hàng | Shop tự đăng ký',
        time: '15:47:18 25/05/2022',
      },
    ],
    attributeColumn: [
      {
        industry: 'Thực phẩm chức năng',
        product: 'Hàng chất lỏng dễ vỡ',
        transportation: 'Từ 1000 DH/tháng',
        control: 'Tự động',
      },
    ],
    careColumn: [
      {
        cskh: 'Nguyễn Thị Thu Hiền',
        resale: 'Chưa có',
        pk: 'Chưa có',
        house: 'Kho Trần Phú (HN)',
      },
    ],
    noteColumn:
      '(25/4/2022 16:00) quent thêm ghi chú: 25/4/2022 hienntt112 care shop',
    stateColumn: [
      {
        state: 'Chưa kiểm duyệt',
        quantity: '1000 ĐH (Tháng 4/2022)',
      },
    ],
    actionColumn: {
      fixed: 'right',
      width: '100',
    },
  });
}

export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  data() {
    return {
      data,
      value2,
      valueDate: Dayjs,
      valueDate1: Dayjs,
      valueDate2: Dayjs,
      checked,
      handleChange,
    };
  },
  components: {
    PlusOutlined,
    FormOutlined,
  },
  methods: {},
};
</script>
