<template>
    <div class="about_main">
        <div class="video_left">
            <a href="">
                <div class="video_play">
                    <video autoplay loop muted playsinline src="@/assets/Video/rickroll.mp4"></video>
                </div>
            </a>
        </div>
        <div class="text_right">
            <div class="head_des">
                <a href="/about">
                    <span>
                        Giới thiệu
                    </span>
                </a>
            </div>
            <div class="s_head_des">
                <a href="/about">
                    <span>
                        Về chúng tôi
                    </span>
                </a>
            </div>
            <div class="s_content">
                "The Tell-Tale Heart" is a short story by Edgar Allan Poe, first published in 1843. The story is told from the perspective of an unnamed narrator who is convinced that he is not mad, despite his strange behavior. He is obsessively preoccupied with an old man's "vulture eye," which he finds so repulsive that he decides to kill the old man to get rid of it.
            </div>
                <a href="/about" class="arrow">
                    Xem chi tiết
                </a>
        </div>
    </div>
</template>

<script>
export default{
    name: 'DK'
}
</script>

<style>
.about_main{
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.video_left{
    position: relative;
    position: relative;
    flex: 0 0 50%;
    max-width: 50%;
    margin: auto;
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;
}
.video_play video{
    width: 100%;
    height: auto;
    margin: 30px 0px;
}

.text_right{
    position: relative;
    position: relative;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    flex-direction: column;
    justify-content: center;
    display: flex;
    margin: 0;
    padding: 40px;
    background: #fff;
}

.head_des{
    position: relative;
    margin: 0px 0 20px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
    padding: 0;
    font-weight: 700;
    font-size: 30px;
    
}

.head_des a{
    text-decoration: none;
    color: rgb(221, 47, 20);
    font-weight: 700;
}
.head_des a::before{
    position: absolute;
    content: "";
    padding: 0;
    margin: 0px;
    width: 35px;
    display: block;
    height: 6px;
    bottom: 6px;
    left: 160px;
    background-color: #ca140c;
}
.s_head_des a{
    font-size: 70px;
    font-weight: 700;
    color: rgb(97, 59, 59);
    text-decoration: none;
}
.s_content {
    position: relative;
    margin-top: 5px;
    padding: 10px;
    font-size: 20px;
}
.arrow {
    background-color: #0f3691;
    color: #fff !important;
    text-align: center;
    padding: 20px 10px;
    text-transform: uppercase;
    margin-top: 20px;
    font-size: 25px;
    position: relative;
    width: 300px;
    height: 70px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
}

.arrow:hover{
    background-color: #ec0d2f;
}
</style>