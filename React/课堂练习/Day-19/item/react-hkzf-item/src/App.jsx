import React from 'react'
import { renderRoutes } from 'react-router-config'
import { TabBar } from 'antd-mobile'
class App extends React.Component {
  state = {
    // 选中标识
    selectedTab: this.props.history.location.pathname,
    tarbar: [
      {
        title: "首页",
        icon: "icon-ind",
        path: "/home"
      },
      {
        title: "找房",
        icon: "icon-findHouse",
        path: "/findhouse"
      },
      {
        title: "资讯",
        icon: "icon-infom",
        path: "/news"
      },
      {
        title: "我的",
        icon: "icon-my",
        path: "/profile"
      },
    ]
  }
  componentDidUpdate(prevProps) {
    // curPath 每次地址栏的结果路由
    // prevPath 地址栏上一次的路由
    const curPath = this.props.history.location.pathname;
    const prevPath = prevProps.location.pathname;
    if (curPath !== prevPath) {
      // 更新路由标识
      this.setState({ selectedTab: curPath })
    }
  }
  render() {
    return (
      <div className="App">
        {/* 路由对应视图渲染 */}
        {
          renderRoutes(this.props.route.routes)
        }
        {/* TabBar: tintColor选中的字体颜色 */}
        {/* TabBar.Item: key唯一标识 title标题文字 selected是否选中 icon默认图标 selectedIcon选中图标 onPress点击触发事件 用来改变自己的state选中标识 */}
        <div className="tabbar">
          <TabBar tintColor="#21b97a">
            {
              this.state.tarbar.map(item => (
                <TabBar.Item
                  key={item.path}
                  title={item.title}
                  selected={this.state.selectedTab === item.path}
                  icon={<i className={`iconfont ${item.icon}`}></i>}
                  selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
                  onPress={() => {
                    this.props.history.push(item.path);
                  }}
                ></TabBar.Item>
              ))
            }
          </TabBar>
        </div>
      </div>
    )

  }
}

export default App;
