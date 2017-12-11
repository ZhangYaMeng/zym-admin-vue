<template>
    <div class="productshow">
        <div class="prodshowheadnav">
            <div class="productnav clearfix">
                <h4 v-bind:class="{ 'producttitle': isproductnav === index }" @click="isactivetitle(index,list.id)" v-for="(list,index) in productnavlist" :key="index"> 
                    {{list.name}} 
                </h4>
            </div>  
                <ul class="productcontant clearfix">
                    <li @click="showdetailpage(item.id)" v-for="(item,index) in productcontantlist">
                        <img :src=" item.img" alt="">
                        <h4>{{item.name}}</h4>
                    </li>
                </ul>
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                isproductnav:0,
                productnavlist: [],
                productcontantlist: []
            }
        },
        methods: {
            /* tab切换函数 */
            isactivetitle(index,id) {
                this.isproductnav = index;  
                this.getlistnav(id)
            //    / console.log(id) ;        
            },
            getlistnav(id){
                this.get("/data/product/product_list/"+id +"/").then(res => {
                //console.log("JJj",res)
                res.list.forEach( (ele,index) =>{
                        if( ele.img == null){ 
                            ele.img = './static/img/listdefined.png';
                        }else {
                           ele.img = this.IMAGE_PATH + ele.img ;
                        }
                    })
                this.productcontantlist = res.list; 
                console.log(this.productcontantlist);            
             })
            },
            showdetailpage(id){               
                this.bus.detailpageid = id;
                this.$router.push({path: '/home/detailpage'}); 
            }
        },
         mounted() {
            this.get("/data/product/product_cate_list/").then(res => {
                this.productnavlist = res.list;
            }).then(res =>{
                this.getlistnav(this.productnavlist[this.isproductnav]["id"]);
            });
        }   
    }
</script>

<style scoped lang='less'>
    .productshow{
        
        .prodshowheadnav{
            .productnav{
                background-color: #F2F2F2;
                
                padding: 0 5%;
                border-bottom: 1px solid #999;
                .producttitle{
                    //background-color: #ffffff;
                    color:#7EC318;
                    font-size:700;
                }             
                h4{   
                    color:#333;
                    margin: 20px;
                    float:right;               
                    font-weight:400;
                   
                }
            }
            .productcontant{
                margin: 0 5%;
                //background-color:pink;
                text-align: left;
                width:90%;
                li{
                    text-align: center;
                    display: inline-block;
                    width:23%;
                    padding: 10px;
                   // background-color: red;                 
                    img{ 
                         width: 250px;                      
                         height: 250px;                       
                    }
                    h4{
                        margin-top:15px;
                    }
                }
            }
        }
    }
</style>


