export interface Mappable {
    localtion: {
        lat: number;
        lng: number;
    };
    markerContent(): string
}
export class Map {
    private googleMap: google.maps.Map;
    constructor(divId: string) {
        // 创建地图
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
    // 在地图中标记位置
    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.localtion.lat,
                lng: mappable.localtion.lng,
            },
        });
        marker.addListener('click', () => {
            // 创建弹窗
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(this.googleMap, marker)
        })
    }
    // // 在地图中标记用户位置
    // addUserMarker(user: User) {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.localtion.lat,
    //             lng: user.localtion.lng,
    //         },
    //     });
    // }
    // // 在地图中标记公司位置
    // addCompanyMarker(company: Company) {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.localtion.lat,
    //             lng: company.localtion.lng,
    //         },
    //     });
    // }
}