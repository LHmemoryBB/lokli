<template>
    <div class="login-page">
        <div class="content">
            <!-- 登陆页面 -->
            <div class="login-style" :style="{backgroundColor:isSignUser?'rgba(165, 42, 42, 0.3)':'white'}">
                <div class="button-style" v-if="isSignUser">
                    <button @click="isSignUser = false">已有账号,点此登录</button>
                </div>

                <div v-if="!isSignUser">
                    <h1>欢迎登录</h1>
                    <div class="form-style">
                        <el-form v-model="loginForm">
                            <el-form-item label="账号" placeholder="请输入账号">
                                <el-input v-model="loginForm.username" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" placeholder="请输入密码">
                                <el-input type="password" v-model="loginForm.password" style="width:240px"></el-input>
                            </el-form-item>
                            
                            <el-form-item label="">
                                <el-button type="primary">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

            </div>
            <!-- 注册页面 -->
            <div class="sign-style" :style="{backgroundColor:!isSignUser?'rgba(165, 42, 42, 0.3)':'white'}">
                <div class="button-style" v-if="!isSignUser">
                    <button @click="registerUser()">没有账号,点此注册</button>
                </div>
                <div v-if="isSignUser">
                    <h1>欢迎注册</h1>
                    <div class="form-style">
                        <el-form v-model="signInForm">
                            <el-form-item label="账号">
                                <el-input v-model="signInForm.username" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" >
                                <el-input type="password" v-model="signInForm.password" style="width:240px"  show-password></el-input>
                            </el-form-item>
                            
                            <el-form-item label="">
                                <el-button type="success">注册</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "loginPage",
    data() {
        return {
            loginForm: {},
            isSignUser: false,
            signInForm:{}
        }
    },
    mounted() {
        console.log(/^[A-Za-z0-9]+$/.test('123213123'));
    },
    methods: {
        registerUser() {
            this.isSignUser = true;
        }
    },
}
</script>

<style lang="less" scoped>
.login-page {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/img/login.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    /* flex布局 */
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */

    .content {
        width: 800px;
        height: 269px;
        background: rgba(255, 255, 255, 0.308);
        // border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .login-style {
            height: 100%;
            width: 50%;
            // background: rgba(0, 0, 255, 0.26);
            animation:fadenum 5s 1;



        }

        .sign-style {
            height: 100%;
            width: 50%;
            // background: rgba(255, 0, 0, 0.322);


        }
    }
}

h1 {
    text-align: center;
}

.form-style {
    display: flex;
    justify-content: center;
}

.button-style {
    height: 100%;
    display: flex;
    align-items: center;
    /* 水平居中把这个打开 */
    justify-content: center;

    button {
        cursor: pointer;
        font-size: 30px;
        background: white;
        border: none;
        padding: 10px;
        border-radius: 30px;

    }
}
@keyframes fadenum{
   0%{opacity: 0;}
   100%{opacity: 1;}
}

.login-page /deep/ .el-form-item__content {
    justify-content: flex-end;
}
</style>

