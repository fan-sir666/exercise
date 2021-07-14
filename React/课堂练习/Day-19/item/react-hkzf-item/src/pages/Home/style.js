import styled from 'styled-components';
const Odiv = styled.div `
/* nav 列表 */
.nav {
  padding: 10px 0;
  text-align: center;
  img {
      width: 48px;
  }
  p {
    margin-top: 6px;
  }
}
/* 九宫格 */
.group {
  padding: 0 10px;
  background-color: #f6f5f6;
  .group-content {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      display: flex;
      justify-content: space-around;
      width: 48%;
      height: 80px;
      background-color: #fff;
      border-radius: 5px;
      margin-bottom: 10px;
      div {
        padding-top: 10px;
        p {
          margin-top: 8px;
        font-size: 12px;
        color: #999;
      }
      img {
        width: 55px;
      }
      }
     
    }
    li:nth-child(2n-1){
      margin-right: 6px;
    }
  }
}

/* 最新资讯 */
.news {
  padding: 10px;
  background-color: #fff;
  overflow: hidden;
  padding-bottom: 50px;
}

.news h3 {
  font-size: 15px;
}

.news .news-item {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
}

.news .news-item-conent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:0 10px;
}

.news-item-content-title {
  font-weight: bold;
}

.news-item-content-tips {
  display: flex;
  color: #999;
  justify-content: space-between;
}
.news img {
  width: 120px;
  height: 90px;
}
`
export default Odiv;