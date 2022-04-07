<template>
    <div class="page">
        <h3>{{$route.params.page}}페이지입니다</h3>
        <p>{{this.day.board[$route.params.page-1].memo}}</p>
    </div>
</template>

<script>
import datas from '@/assets/data.json'

export default {
    name: 'IdComponent',
    data : function() {
        return {
            day : datas,
        }
    }
}
</script>