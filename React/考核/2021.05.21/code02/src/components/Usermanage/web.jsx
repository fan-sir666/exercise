const WebVideo = (props)=>{
    // let params = new URLSearchParams(props.location.search)
    return(
        // <div>{params.get('name')} ---- {params.get('age')}</div>
        // 1.5 直接props获取渲染数据
        <div>{props.name} ---- {props.age}</div>
    )
}

export default WebVideo;