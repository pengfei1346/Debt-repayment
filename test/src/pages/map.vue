<template>
  <div class="map-wrap ">
    <div id="myMap" class="imgMap"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return{
        map:null
      }
    },
    methods: {
      initMap(){
        var map = new BMap.Map('myMap');
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        var marker = new BMap.Marker(new BMap.Point(110.224003, 25.074537));
        map.addOverlay(marker);//标记点
        var top_right_navigation = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,
          type:BMAP_NAVIGATION_CONTROL_ZOOM,offset:new BMap.Size(20,60)});
        var label = new BMap.Label("你家",{offset:new BMap.Size(20,20)});
        marker.setLabel(label)//标注文本
        var geolocationControl = new BMap.GeolocationControl();
        map.addControl(geolocationControl);
        map.addControl(top_right_navigation);
      },
      getGeo() {

      }
    },
    created() {
      this.$nextTick(()=>{
        this.initMap();
      })
      // this.getGeo()
    }
  }
</script>

<style scoped>
  .map-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
  #myMap{
    height: 100%;
    width: 100%;
  }
</style>
