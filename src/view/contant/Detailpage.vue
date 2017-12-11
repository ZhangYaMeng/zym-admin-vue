<template>
    <div class="detailpage">
        <!-- 展示的图片 -->
        <div class="detailimgup">
             <el-carousel height="500px">
                <el-carousel-item v-for="(item,index) in detailimglist" :key="index">
                    <img :src=" item" alt="">
                </el-carousel-item>
        </el-carousel>
           
        </div>
        <div class="detailtitle">
            <span class="headtitle">详细介绍</span><span class="headcontant">Detailed Introduction</span>
        </div>
        <div class="detailcontantdown">
            <div v-html="contant"></div>
        </div>
    </div>  
</template>

<script>
    export default {
        data() {
            return {
               detailimglist: [],
               contant : ""
            }
        },
        methods: {
            getdetailpage(id){
                this.get("/data/product/product_detail/"+id +"/").then(res => {
                   // console.log(res.imgs);
                   for(var i =0 ; i<res.imgs.length;i++){
                        if( res.imgs[i] == null){ 
                            res.imgs[i] = './static/img/listdefined.png';
                        }else {
                            res.imgs[i] = this.IMAGE_PATH + res.imgs[i] ;
                            //console.log(ele);
                        }

                   }
                    this.detailimglist = res.imgs;
                    this.contant = res.detail;
                    console.log(res.imgs);
                })
            }
        },
         mounted() {
            this.getdetailpage(this.bus.detailpageid);
             //console.log(this.bus.detailpageid)
         }   
    }
</script>

<style scoped lang='less'>
    .detailpage{
        padding: 0 5%;
        text-align: center;;
        .detailimgup{
            .el-carousel{
                width:100%;
            }
        }
        .detailtitle{
            width:100%;
            height:50px;
            line-height: 50px;
            font-size: 18px;
            .headtitle{
                font-weight: 700;
                color:#333;
            }
            .headcontant{
                margin-left: 20px;
                 font-weight: 700;
                color:#999;
            }
        }
        .detailcontantdown{

        }
    }
</style>


