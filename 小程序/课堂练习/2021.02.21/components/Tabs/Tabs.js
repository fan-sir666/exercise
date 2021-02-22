// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTab(e){
      // console.log(e);
      // 查找每项的索引
      const {index} = e.currentTarget.dataset

      // 子传父
      this.triggerEvent("itemChange",{index})
    }
  }
})
