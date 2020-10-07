<template>
    <div>{{msg}}</div>
</template>
<script>
import {reactive,ref,isRef,toRefs,onMounted} from '@vue/composition-api'

export default {
    name:"svgIcon",
    setup(){
        const msg = ref("lkjhgfd");
        return{
            msg
        }
    }
}
</script>
<style lang="scss" scoped>

</style>