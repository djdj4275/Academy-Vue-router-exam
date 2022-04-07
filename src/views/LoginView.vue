<template>
    <div>
        <p>
            아이디<input type="text" v-model="user"> <br>
            패스워드<input type="password"> <br>
            <button @click="loginUser">로그인</button>
            <button>취소</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data : ()=>({
        user : "",
    }),
    methods : {
        loginUser : function() {
            this.$emit("login-user", this.user);
            this.$router.push('/');
        }
    }
}
</script>