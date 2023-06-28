<template>
    <div id="header">
        <ul id="navbar">
            <li>
                <a href="">Giới thiệu</a>
                <ul class="subnav">
                    <li><a href="">Công ty</a></li>
                    <li><a href="">Thành viên</a></li>
                </ul>
            </li>
            <li><a href="">Lĩnh vực hoạt động</a></li>
            <li><a href="">Dự án</a></li>
            <li>
                <a href="">Liên hệ</a>
                <ul class="subnav">
                    <li><a href="">Điện thoại</a></li>
                    <li><a href="">Email</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#header {
    height: 60px;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
}

#navbar {
    position: relative;
    text-align: left;
}

#navbar li {
    display: inline-block;
    line-height: 60px;
    position: relative;
}
#navbar > li:hover {
    
    background-color: rgba(255, 253, 253, 0.893);
    transition: 0.4s;
    transition-property: background-color;
    transition-timing-function: linear;
}

#navbar li:hover a{
    color: #333;
}

#navbar > li > a {
    color: white;
    text-transform: uppercase;
}

#navbar li a {
    padding: 8px 15px;
    text-decoration: none;
}

#navbar .subnav {
    /* display: none; */
    position: absolute;
    background-color: rgba(255, 253, 253, 0.893);
    
}

#navbar li:hover .subnav li{
    display: block;
}

#navbar .subnav li{
    display: none;
    white-space: nowrap;
    text-align: left;
    line-height: 35px;
    min-width: 140px;
}
#navbar .subnav a{
    color: #333;
}
#navbar .subnav li:hover {
    background-color: rgba(118, 84, 84, 0.449);
}

</style>

<script>
export default{
    name: "headerComponent"
}
</script>