<script setup>
import {NLayoutHeader, NImage, NButton} from "naive-ui"

import backgrand from '../assets/images/backgrand.png'
import logo from '../assets/images/logo.png'
import step1 from '../assets/images/step1.png'
import step2 from '../assets/images/step2.png'
import step3 from '../assets/images/step3.png'
import step4 from '../assets/images/step4.png'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'

import { useRouter } from 'vue-router'

const router = useRouter()

const goToRoute = (route) => {
    let queryParams = "";

    if (route === 'employers') {
        queryParams = 'EMPLOYERS REGISTRATION';
    } else if (route === 'candidates') {
        queryParams = 'CANDIDATES REGISTRATION';
    }

  router.push({
    path: `/${route}`,
    query: { title: queryParams }
  })
}

const scrollToBottom = () => {
window.scrollTo({
    top: document.body.scrollHeight, // 滚动到页面底部
    behavior: 'smooth' // 平滑滚动
});
};
</script>

<template>
    <n-layout-header id="header">
        <div class="header-content">
            <n-image :src="logo" height="50" object-fit="cover" preview-disabled />
            <n-button class="contact-button" :on-click="scrollToBottom">Contact Us</n-button>
        </div>
    </n-layout-header>

    <n-image :src="backgrand" width="100%" height="100%" object-fit="cover" preview-disabled/>
    <div style="display: flex; justify-content: space-between; align-items: center; margin: 5rem;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <n-image :src="step1" width="100%" object-fit="cover" preview-disabled />
        <span>Step 1: We learn your needs.</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <n-image :src="step2" width="100%" object-fit="cover" preview-disabled />
        <span>Step 2: We provide the necessary candidates.</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <n-image :src="step3" width="100%" object-fit="cover" preview-disabled />
        <span>Step 3: We select the perfect employee.</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <n-image :src="step4" width="100%" object-fit="cover" preview-disabled />
        <span>Step 4: You pay for our work.</span>
      </div>
    </div>


    <div class="threeimg">
      <div class="img-wrapper" @click="goToRoute('employers')">
        <n-image :src="img1" object-fit="cover" preview-disabled />
        <span>EMPLOYERS</span>
      </div>
      <div class="img-wrapper" @click="goToRoute('candidates')">
        <n-image :src="img2" object-fit="cover" preview-disabled />
        <span>CANDIDATES</span>
      </div>
      <div class="img-wrapper" @click="goToRoute('vacancies')">
        <n-image :src="img3" object-fit="cover" preview-disabled />
        <span>VACANCIES</span>
      </div>
    </div>


    <div class="contact">
        <div class="contact-info">
            <h2>Contact Us</h2>
            <p>
                London<br/>
                United Kingdom<br/><br/>
                
                info@graduzrecruitment.co.uk<br/><br/>

                +44(0)7510758245
            </p>
        </div>
        <form>
            <div class="form-row">
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
            </div>
            <div class="form-row">
                <input type="tel" placeholder="Phone"/>
                <input type="text" placeholder="Address"/>
            </div>
            <input type="text" placeholder="Subject"/>
            <button type="button">REGISTER</button>
        </form>
    </div>
</template>

<style scoped>
#header {
  background: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.contact-button {
  margin-left: 10px;  /* 给按钮加一点左边距 */
  max-width: 150px;  /* 限制按钮的最大宽度 */
  white-space: nowrap;  /* 防止按钮文本换行 */
  overflow: hidden;  /* 隐藏超出按钮宽度的文本 */
  text-overflow: ellipsis;  /* 如果文本过长，显示省略号 */
}





.threeimg {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 三等分宽度 */
  width: 100%;
}

.img-wrapper {
  position: relative;
  width: 100%;
}

.img-wrapper :deep(.n-image) {
  height: 100%;
  width: 100%;
}

.img-wrapper :deep(.n-image img) {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.img-wrapper span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 半透明的黑色背景，可以调整透明度和颜色 */
  color: white; /* 设置文字颜色为白色 */
  font-size: 1rem; /* 根据需要调整字体大小 */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box; /* 确保内边距不会影响布局 */
}


.contact {
    display: grid; /* 使用 grid 布局 */
    grid-template-columns: 5fr 7fr; /* 第一列占5个单位，第二列占7个单位 */
    gap: 20px; /* 设置列之间的间距 */
    align-items: center; /* 垂直居中对齐内容 */
    height: 60vh;
}

.contact-info {
    display: flex; /* 使用 flex 布局 */
    flex-direction: column; /* 垂直排列 */
    justify-content: center; /* 垂直居中 */
    align-items: center; /* 水平居中 */
    text-align: center; /* 确保文本居中对齐 */
}

.contact-info h2 {
    margin-bottom: 1rem; /* 给标题下方添加一些间距 */
}

.contact-info p {
    white-space: pre-line; /* 保留文本中的换行 */
    line-height: 1.5; /* 设置文本行高，提高可读性 */
    font-size: 1rem;
}

form {
    display: grid; /* 使用 grid 布局 */
    gap: 15px; /* 输入框和按钮之间的间距 */
    margin: 10rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 每行两个输入框，宽度相等 */
    gap: 1rem; /* 两个输入框之间的间距 */
}

form input {
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    color: black;
}

form input:focus {
    border-bottom: 2px solid #007bff; /* 聚焦时底部边框变蓝 */
}

button {
    background-color: black; /* 黑色背景 */
    color: white; /* 白色字体 */
    padding: 15px 30px; /* 设置按钮的内边距 */
    border: none; /* 去掉边框 */
    font-size: 1rem;
    cursor: pointer; /* 鼠标悬停时显示手指图标 */
    width: 100%; /* 按钮宽度填充父容器 */
    border-radius: 0; /* 确保按钮是方形的 */
}

button:hover {
    background-color: #333; /* 鼠标悬停时按钮颜色变暗 */
}

.img-wrapper {
  cursor: pointer; /* 添加鼠标手型指针 */
}
</style>