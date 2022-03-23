<template>
  <div class="host-container">
    <div class="box-shadow">
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="base.id" label="实例Id" width="180">
        </el-table-column>
        <el-table-column prop="information.name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="information.private_ip" label="内网Ip">
        </el-table-column>
        <el-table-column prop="information.type" label="类型">
        </el-table-column>
      </el-table>

      <pagination-com
        v-show="total > 0"
        :total="total"
        :page.sync="query.page_number"
        :limit.sync="query.page_size"
        @pagination="get_hosts"
      />
    </div>
  </div>
</template>

<script>
import { HOST_LIST } from "@/api/host";

export default {
  name: "CmdbHost",
  components: {},
  data() {
    return {
      tableData: [],
      total: 0,
      loading: false,
      query: {
        page_number: 1,
        page_size: 20,
      },
    };
  },
  created() {
    this.get_hosts();
  },
  methods: {
    // 传递分页参数
    async get_hosts() {
      this.loading = true;
      try {
        let resp = await HOST_LIST(this.query);
        this.tableData = resp.data.items;
        this.total = resp.data.total;
      } catch (error) {
        this.$message({
          message: `请求主机列表数据异常, ${error}`,
          type: "error",
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
