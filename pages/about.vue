<template>
    <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae, labore atque est nobis qui quia corporis corrupti iste molestiae? Consequatur perspiciatis natus nulla ad ex modi sint totam culpa!</p>

    <div class="bg-gray-900 p-2 text-white">{{ data }}</div>
    </div>
</template>

<script setup>
    const {data} = await useFetch('/api/ninja');
    
    // const {data} = await useFetch('/api/ninja?name=mario',{
    //     method: 'post',
    //     body:{
    //         age:30,
    //     }
    // });
</script>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }

    p{
        margin: 20px 0;
    }
</style>