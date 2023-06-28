<template>
    <div id="content">
       <div class="item-block">
        <div class="item"  id="bg1">
            <a href="">
                <div>TRI ÂN KHÁCH HÀNG NHÂN DỊP TẾT QUÝ MÃO</div>
                <p>Với những gì trải qua của năm cũ, Năm mới lại đến chúc đồng nghiệp vừa sang, hạnh phúc thênh thang, ý chí vững vàng, niềm vui rộn ràng, tiền bạc lai láng, sức khỏe cường tráng, năm mới vẻ vang, giữ mãi an khang, giữ tràn lộc phúc, kính chúc kính chúc.</p>
                <span>Xem chi tiết</span>
            </a>
        </div>
        <div class="item" id="bg2">
            <a href="">
                <div>TRI ÂN KHÁCH HÀNG NHÂN DỊP TẾT QUÝ MÃO</div>
                <p>Với những gì trải qua của năm cũ, Năm mới lại đến chúc đồng nghiệp vừa sang, hạnh phúc thênh thang, ý chí vững vàng, niềm vui rộn ràng, tiền bạc lai láng, sức khỏe cường tráng, năm mới vẻ vang, giữ mãi an khang, giữ tràn lộc phúc, kính chúc kính chúc.</p>
                <span>Xem chi tiết</span>
            </a>
        </div>
        <div class="item" id="bg3">
        </div>
       </div>  
    </div>
</template>

<script>
export default{
    name: 'ContentComponent',
    data() {
        return {
            img1: "src/assets/content-bg1.jfif",
            img2: "src/assets/content-bg2.jfif",
            img3: "src/assets/content-bg3.jpg"
        }
    }
} 

</script>

<style>
#bg1{
    background: url('/src/assets/content-bg1.jfif') top center / cover;
    height: 500px;
    width: 25%;
    background-position: left;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
}

#bg2{
    box-sizing: border-box;
    background: url('/src/assets/content-bg2.jfif');
    width: 25%;
    height: 500px;
    background-position: center;
    background-size: cover;
    transition: all 0.4s ease-in-out;
}

#bg3{
    background: url('/src/assets/content-bg3.jpg') top center / cover;
    height: auto;
    width: 50%;
    background-position: left;
    overflow: hidden;
    background-size: cover;
    transition: all 0.4s ease-in-out;
}


#content .item-block{
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
}
.item{
    position: relative;
}
.item-block .item a {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: block;
    color: rgb(248, 234, 234);
    padding: 40px;
    font-size: 20px;
    line-height: 25px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.4s ease-in-out;
    
}


/* border */
/* border tren */
.item-block .item::before{
    position: absolute;
    content: "";
    background-color: rgb(255, 255, 255);
    height: 5px;
    width: 0px;
    left: 0;
    top: 0;
    z-index: 2;
    transition: all 0.4s ease-in-out;
}

.item-block .item:hover::before {
    position: absolute;
    content: "";
    background-color: rgb(255, 255, 255);
    height: 5px;
    width: 100%;
    left: 0;
    top: 10px;
}
/* border duoi */

/* border trai */
.item-block .item a::before {
    position: absolute;
    content: "";
    background-color: rgb(255, 255, 255);
    height: 0px;
    width: 5px;
    bottom: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
}
.item-block .item a:hover::before {
    position: absolute;
    content: "";
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: 5px;
    left: 0;
    bottom: 0;
}
/* border phai */
.item-block .item a::after {
    position: absolute;
    content: "";
    background-color: rgb(255, 255, 255);
    height: 0px;
    width: 5px;
    top: 0;
    right: 0;
    transition: all 0.5s ease-in-out;
}

.item-block .item a:hover::after {
    position: absolute;
    content: "";
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: 5px;
    top: 0;
    right: 8px;
    bottom: 0;
}

.item-block .item a p{
    padding: 20px 0;
    font-size: 14px;
    line-height: 23px;
    font-weight: 400;
    position: relative;
}

#bg1::after{
content:"";
background-color: rgba(13,39,85,0.7);
opacity: 50%;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: block;
opacity: 0.5;
}

#bg1:hover{
transform: scale(1.05);
}

#bg1:hover::after{
    opacity: 0.8;
}

#bg2::after{
content:"";
background-color: rgb(145, 133, 1);
opacity: 50%;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: block;
}

#bg2:hover{
transform: scale(1.05);
}

#bg2:hover::after{
    opacity: 0.8;
}

#bg3:hover{
transform: scale(1.05);
}

</style>