<template>
    <RouterLink :to="`/movie/${movie.imdbID}`" class="movie" :style="{backgroundImage:`url(${movie.Poster})`}">
        <Loader v-if="imgLoading" :size="1.5" absolute/>
        <div class="info">
            <div class="year">
                {{movie.Year}}
            </div>
            <div class="title">
                {{movie.Title}}
            </div>
        </div>
    </RouterLink>
</template>

<script>
import Loader from "~/components/Loader"
export default {
    components:{
        Loader
    },
    props:{
        movie:{
            type:Object,
            default: ()=>({

            })
        }
    },
    data(){
        return{
            imgLoading: true
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        async init(){
            const poster = this.movie.Poster
            if(!poster || poster ==='N/A'){
                this.imgLoading = false
            }else{  
                await this.$loadImage(poster)
                this.imgLoading = false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.movie{
    $width:200px;
    width:$width;
    height:calc($width *3/2);
    margin:10px;
    border-radius: 4px;
    background-color:$gray-400;
    background-size:cover;
    overflow: hidden;
    position: relative;
    &:hover::after{
        content: "";
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        border:6px solid $primary;
    }
    .info{
        background-color:rgba($black, .3);
        width:100%;
        padding:14px;
        position:absolute;
        bottom:0;
        left:0;
        font-size:14px;
        text-align: center;
        backdrop-filter: blur(10px);
    }
    .year{
        color:$primary;
    }
    .title{
        color:$white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
