import React from 'react'
import Odiv from './style'
import { Carousel, Flex } from 'antd-mobile'
import { httpGet } from '../../utils/axios/http'
import { HomeAPI } from '../../api/index'
import getCurCity from '../../utils/currentCity/getCurCity'
//#region 图片引入
import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'
//#endregion
//#region nav列表数据
const navList = [
    {
        title: "整租",
        path: "/tab/findhouse",
        imgSrc: nav1
    },
    {
        title: "合租",
        path: "/tab/findhouse",
        imgSrc: nav2
    },
    {
        title: "地图找房",
        path: "/tab/findhouse",
        imgSrc: nav3
    },
    {
        title: "去出租",
        path: "/tab/findhouse",
        imgSrc: nav4
    }
]
//#endregion
class Home extends React.Component {
    state = {
        imgHeight: 176,
        swiperData: [],
        isFinished: false,
        groupData: [],
        newsData: [],
        cityName: '',
        areaId:''
    }
    //#region 轮播图
    async getSwiper() {
        const result = await httpGet(HomeAPI.swiper)
        if (result.status === 200) {
            this.setState({
                swiperData: result.body,
                isFinished: true
            })
        }
    }
    renderSwiper() {
        return this.state.swiperData.map(item => (
            <a
                key={item.id}
                href="http://www.czxy.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
                <img
                    src={`http://localhost:8080${item.imgSrc}`}
                    alt={item.alt}
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                    }}
                />
            </a>
        ))
    }
    //#endregion
    //#region nav列表
    renderNav() {
        return navList.map((item, index) => (
            <Flex.Item key={index} onClick={() => this.props.history.push(item.path)}>
                <img src={item.imgSrc} alt="" />
                <p>{item.title}</p>
            </Flex.Item>
        ))
    }
    //#endregion
    //#region 九宫格
    async getGroups() {
        const result = await httpGet(HomeAPI.group, { area: this.state.areaId });
        // console.log(result);
        if (result.status === 200) {
            this.setState({
                groupData: result.body
            })
        }
    }
    renderGroups() {
        return (
            <div className="group">
                <Flex className="group-title" justify="between">
                    <h3>租房小组</h3>
                    <span>更多</span>
                </Flex>
                <ul className="group-content">
                    {
                        this.state.groupData.map((item, index) => (
                            <li key={index}>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                                <div><img src={`http://localhost:8080${item.imgSrc}`} alt="" /></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    //#endregion
    //#region 资讯
    async getNews() {
        const result = await httpGet(HomeAPI.news, { area: this.state.areaId });
        // console.log(res);
        if (result.status === 200) {
            this.setState({
                newsData: result.body
            })
        }
    }

    renderNews() {
        return this.state.newsData.map(item => (
            <div key={item.id} className="news-item">
                <img className="news-item-img" src={`http://localhost:8080${item.imgSrc}`} alt="" />
                <div className="news-item-conent">
                    <p className="news-item-content-title">{item.title}</p>
                    <p className="news-item-content-tips">
                        <span>{item.from}</span>
                        <span>{item.date}</span>
                    </p>
                </div>
            </div>
        ))
    }
    //#endregion
    //#region 获取当前定位城市
    async getCityName() {
        const {label,value} = await getCurCity()
        // console.log(result);
        this.setState({
            cityName: label,
            areaId:value
        })
    }
    //#endregion
    componentDidMount() {
        this.getSwiper()
        this.getGroups()
        this.getNews()
        this.getCityName()
    }

    render() {
        return (
            <Odiv className="Home">
                <div className="swiper">
                    {/* 搜索框 start */}
                   
                    {/* 搜索框 end */}
                    {/* 轮播图 start */}
                    {
                        this.state.isFinished && <Carousel
                            // 自动轮播
                            autoplay={true}
                            // 循环播放
                            infinite
                        >{this.renderSwiper()}</Carousel>
                    }
                    {/* 轮播图 end */}
                </div>
                {/* nav列表 start */}
                <Flex className="nav">
                    {
                        this.renderNav()
                    }
                </Flex>
                {/* nav列表 end */}
                {/* 九宫格 start */}
                {this.renderGroups()}
                {/* 九宫格 end */}
                {/* 资讯 start */}
                <div className="news">
                    <h3>最新资讯</h3>
                    {this.renderNews()}
                </div>
                {/* 资讯 end */}
            </Odiv>
        )
    }
}
export default Home;