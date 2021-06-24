import React from 'react'
import Axios from 'axios'
import Odiv from './style'
import { Carousel, Flex } from 'antd-mobile'
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
        path: "/findhouse",
        imgSrc: nav1
    },
    {
        title: "合租",
        path: "/findhouse",
        imgSrc: nav2
    },
    {
        title: "地图找房",
        path: "/findhouse",
        imgSrc: nav3
    },
    {
        title: "去出租",
        path: "/findhouse",
        imgSrc: nav4
    }
]
//#endregion
class Home extends React.Component {
    state = {
        imgHeight: 176,
        swiperData: [],
        isFinished: false
    }
    //#endregion 发请求获取轮播图数据
    async getSwiper() {
        const result = await Axios.get('http://localhost:8080/home/swiper')
        // console.log(result);
        if (result.status === 200) {
            this.setState({
                swiperData: result.data.body,
                isFinished: true
            })
        }
    }
    //#region 
    componentDidMount() {
        this.getSwiper()
    }

    render() {
        return (
            <Odiv className="Home">
                {/* 轮播图 start */}
                {
                    this.state.isFinished &&
                    <Carousel
                        // 自动轮播
                        autoplay={true}
                        // 循环播放
                        infinite
                    >
                        {this.state.swiperData.map(item => (
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
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                }
                {/* 轮播图 end */}
                {/* nav列表 strt */}
                <Flex className="nav">
                    {
                        navList.map((item, index) => (
                            <Flex.Item key={index} onClick={() => this.props.history.push(item.path)}>
                                <img src={item.imgSrc} alt="" />
                                <p>{item.title}</p>
                            </Flex.Item>
                        ))
                    }
                </Flex>
                {/* nav列表 end */}
            </Odiv>
        )
    }
}
export default Home;