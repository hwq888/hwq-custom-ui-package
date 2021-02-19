<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="closeDialog">
      <span>{{dialogData.msg}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="closeDialog">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Dialog',
  props: {
    dialogVisible: {
      type: Boolean
    },
    dialogData: {
      type: Object
    }
  },
  data () {
    return {
      // visible: this.dialogVisible
    }
  },
  watch: {
    async dialogVisible (val, oldVal) {
      // type 1: 申请 2：审核 3:查看
      // this.visible = val
      if (val) {
        console.log('弹窗可见')
      } else {
        console.log('弹窗不可见')
      }
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    closeDialog () {
      this.$emit('update:dialogVisible', false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
