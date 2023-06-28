<template>
    <div class="service">
        <div class="bar"></div>
        <div class="service_header">
            <div class="title">
                Lĩnh vực
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'landing-service'
}
</script>

<style>
.bar{
    background: linear-gradient(90deg, rgb(34, 28, 135) 0%, rgb(26, 26, 162) 35%, rgba(0,212,255,1) 100%);
    width: 100%;
    height: 20px;
}
.service_header{
    background-color: gray;
    width: 100%;
    height: 500px;
}
</style>
