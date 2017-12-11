<template>
    <div class="firstpage">
        <!-- 大轮播图 -->
        <div class="carousel">
            <el-carousel height="400px" arrow="never">
                <el-carousel-item v-for="(item,index) in bannerArrimg" :key="index">
                     <img :src="IMAGE_PATH + item.pic"/> 
                    <!-- <h3> {{ item.pic }} </h3> -->
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 我们是做什么的 -->
        <div class="whattodo">
            
            <div class="upwhat">
                <img src="../../assets/whattodo.png"/>
            </div>
            <div class="downshow">
                
                <div class="downshow-list" v-for="(list,index) in lists" :key="index">
                    
                    <div><img :src="list.icon" /></div>
                    <h4 class="prodtitlename">{{ list.title || "----"}} </h4>
                    <div class="proddescribeone">{{ list.desc[0] || "----"}} </div>
                    <div class="proddescribetwo">{{ list.desc[1] || "----"}}</div> 
                </div>
            </div>
        </div>
        <!-- 产品展示假动画效果 -->
        <div class="productshow">
            <div class="productlogo">
                <img class="productimg" src="../../assets/productlogo.png"/>
            </div>
            <div class="productnav clearfix">
                <h4 v-bind:class="{ 'producttitle': isproductnav === index }" @click="isactivetitle(index)" v-for="(list,index) in productnavlist" :key="index"> 
                    {{list}} 
                </h4>
            </div>

            <div class="productlist">
                <template>
                    <el-carousel indicator-position="none" :interval="4000" arrow="always" height="250px">
                        <el-carousel-item v-for="item in 6" :key="item">
                           <!--  <h3>{{ item }}</h3> -->
                            <h3>one</h3>
                            <h3>two</h3>
                            <h3>three</h3>
                            <h3>four</h3>
                        </el-carousel-item>
                    </el-carousel>
                </template>
            </div>

            <div class="productbutton">
                <button>MORE</button>
            </div>

        </div>
        <!-- 关于我们 -->
        <div class="aboutours">
            <div class="aboutourslogo">
                <img class="" src="../../assets/aboutourslogo.png"/>
            </div>
            <div class="aboutoursimg clearfix" >
                <div class="aboutourslefttext" v-html="aboutourcontant">
                </div>
                <div class="aboutoursright">
                    <img src="../../assets/aboutoursimg.png"/> 
                </div>
               
            </div>  
        </div>
        <!-- 九马动态 -->
        <div class="newsjiuma">
            <div class="newsjiumalogo">
                <img class="newsjiumaimg" src="../../assets/newsjiumaimg.png"/>
            </div>

            <div class="newsjiumabutton">
                <button>MORE</button>
            </div>
            <div class="newsjiumaarticle clearfix">
                <div class="newsleftlogo">
                    <img src="../../assets/newsleftlogo.png"/>
                </div>
                <div class="newsrightlist">
                    <ul class="clearfix">
                        <li  v-for="(article,index) in articles" v-bind:key="index">
                            <div class="iconindex">
                                 <p class="iconindex">[{{ article.icon }}]</p>
                            </div>
                            <div class="titlename">
                                <a class=""> {{ article.title }} </a>
                                <p class="articlecontant"> {{ article.desc }} </p>
                            </div>                          
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                bannerArrimg:[],
                lists:[],
                isproductnav:0,
                productnavlist: ["所有产品","散装","礼盒"],
                articles : [],
                aboutourcontant : ""
            }
        },
        methods: {
            /* tab切换函数 */
            isactivetitle(index) {
                this.isproductnav = index;             
            },
            /* 轮播图 */
            banneractive() {          
             this.get("/data/home/banner/").then(res => {
                 //console.log(res.ban_list);
                 this.bannerArrimg = res.ban_list;                
             })
            },           
            /* 首页九马动态 */
            homejiumanews (){
                this.get("/data/home/jiuma_news/").then( res => { 
                    this.articles = res.news_list;
                    if( this.articles.length > 8){
                        this.articles = this.articles.slice(0, 8);
                    }
                    this.articles.forEach((ele,index) => {                       
                        ele.icon = "0" + (index + 1);
                    });
                });
            } ,
            /* 首页产品分类列表 */
            homeprodlist(){
                this.get("/data/home/prod_cate_list/").then(res => {
                   this.lists =  res.prod_cate_list;
                   if( this.lists.length > 6){
                        this.lists = this.lists.slice(0, 6);
                    }
                   /*   this.lists[0]["icon"] = null; 
                   this.lists[0]["title"] = null; */
                    this.lists.forEach( (ele,index) =>{
                        if( ele.icon == null){ 
                            ele.icon = './static/img/listdefined.png';
                        }else {
                           ele.icon = this.IMAGE_PATH + ele.icon ;
                        }
                    })
                  
                // console.log(this.lists);        
             })
            },
            //关于我们产品说明
            aboutourslist(){
                this.get("/data/home/about_us/").then(res => {
                    this.aboutourcontant = res.content;
                   // console.log(res);
                })
            },
            // 产品展示分类
            showproplist(){
                this.get("/data/home/prod_show/").then(res => {
                    
                    //console.log(res.prod_list);
                })
            }
        },
         created() {
                this.banneractive(),           
                this.homejiumanews(),
                this.homeprodlist(),
                this.aboutourslist(),
                this.showproplist()       
            }
        
    }
</script>

<style scoped lang='less'>
    .firstpage {
        /* 轮播图 */
        .carousel{
            .el-carousel__arrow{
                background-color:red;
            }
            .el-carousel__item img {
                width:100%;
                height:100%;
            }
            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }
            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
            .el-carousel__indicators{
               /*  padding: 0 ; */
                .el-carousel__indicator {
                    
                    /* padding: 0 ;
                    background-color:red; */
                }
                
            }
        }
        /* 我们是做什么的 */
        .whattodo{
            padding: 0 10% 30px 10%;
            .upwhat{
                margin: 50px 0;
                img{
                width:100%; 
                } 
            }
            .downshow{           
                justify-content:center;
                display:flex;
                .downshow-list{
                  flex:1;
                    img{
                        width:30%;
                        height:30%;
                    }
                    .prodtitlename{
                        overflow:hidden;
                    }
                    .proddescribeone,.proddescribetwo{
                        overflow:hidden;
                        font-size:12px;
                        color:#8C8C8C;
                    }
                }
            }           
        }
        /* 产片展示 */
        .productshow{
            background-color: #1F212E;
            /* height:500px; */
            padding: 50px 10% 20px 10%;
            .productlogo{
               text-align: left;
                /* .productimg{
               
                }  */           
            }
            .productnav{
                .producttitle{
                    color:#F0ED15;
                }             
                h4{   
                    padding: 20px;
                    float:left;               
                    font-weight:400;
                    color:#fff;
                }
            }
            .productlist{
                background-color: #fff;
                height:250px;
                .el-carousel__item h3 {
                    color: #475669;
                    font-size: 14px;
                    opacity: 0.75;
                    line-height: 200px;
                    margin: 0;
                }

                .el-carousel__item:nth-child(2n) {
                    background-color: #99a9bf;
                }

                .el-carousel__item:nth-child(2n+1) {
                    background-color: #d3dce6;
                }
            }
            .productbutton{
                margin-top:40px;
                button{
                    width:120px;
                    height:30px;
                    line-height:30px;
                    border-radius: 15px;
                    font-size:18px;
                    background-color: #CAB615;
                    color:#26272D;
                    border:none;
                    outline:none;
                    
                }             
            }
        }
        /* 关于我们 */
        .aboutours{  
            text-align: left;  
            padding: 50px 0 50px 10%;
            background-color: #FFFFFF;
            /* height: 500px; */
            /* .aboutourslogo{
                
            } */    
            .aboutoursimg{
                /* height:400px; */
                /* 这是关于文字样式的描述 */
                .aboutourslefttext{
                    padding-top:50px;                   
                    float:left;
                    width:40%;
                    height:100%;
                    p{
                        font-family:"Microsoft YaHei";
                        color:#8F8C8A;
                        font-size: 18px;
                        height: 40px;
                    }
                    /* background-color: pink; */
                }
                .aboutoursright{
                    float:left;
                    width:50%;
                    height:100%;
                   /*  background-color: red; */
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
            
        }
        /* 九马新闻 */
        .newsjiuma{          
            padding: 50px 10%;
            .newsjiumalogo{
                text-align: left;
            }

            .newsjiumabutton{
                text-align: right;
                
                button{
                    margin:20px 0;
                    width:120px;
                    height:30px;
                    line-height:30px;
                    border-radius: 15px;
                    font-size:18px;
                    background-color: #1F212E;
                    color:#fff;
                    border:none;
                    outline:none;
                    
                }
            }

            .newsjiumaarticle{
                height:430px;
                .newsleftlogo{
                    float:left;
                    width:20%;
                    height:400px;
                    background-color: red;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .newsrightlist{
                    float:left;
                    width:80%;
                    height:400px;
                    /* background-color: pink; */
                    ul{
                        text-align: left;
                        width:100%;
                        /* height:100%;  */
                        li{
                            box-sizing:border-box;
                            float:left;
                            width:50%;
                            height:90px;
                            padding:25px  0 25px 25px;
                             
                            .iconindex{       
                                float:left;                       
                               /*  display:inline-block;  */
                                font-size:40px;
                                width:80px;
                                line-height:36px;
                                color:#65696D;
                            }
                            .titlename{
                                /* float:left; */
                                padding-left: 80px;
                                width:100%;
                                box-sizing:border-box;
                                a{                                     
                                    font-size:16px;
                                    color:#454E55; 
                                    line-height:20px;
                                    display:block;

                                    overflow: hidden; 
                                    text-overflow: ellipsis; 
                                    white-space: nowrap; 
                                    width:90%;
                                    &:hover{
                                        color:#4EC1C5;
                                    }
                                }
                                p{
                                    font-size:14px;
                                    color:#B6B4B1;  
                                    line-height:20px;

                                    overflow: hidden; 
                                    text-overflow: ellipsis; 
                                    white-space: nowrap; 
                                    width:100%;
                                }
                                 /* height:100%; */
                            }
                        }
                    }
                }
            }
        }       
    }
</style>

<style  lang='less'>   
    .firstpage {       
        .carousel{
            .el-carousel__button {
                width:20px;
                height:20px;
                border-radius:10px;
            }
        }
        .productshow{
            .productlist{
                .el-carousel__arrow{
                    height: 86px;
                    border-radius:0px;
                    font-size:40px;

                }
                .el-carousel__arrow--left{
                    left:0px;
                }
                .el-carousel__arrow--right{
                    right:0px;
                }
                .el-carousel__item{
                    /* width:100%; */
                    /* text-align: left; */
                    line-height:250px;
                    h3{
                        
                        width:24.5%;
                        height:100%;
                        display:inline-block;
                    }
                }
            }
        }
    }
</style>
