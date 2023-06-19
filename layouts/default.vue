<style scoped>
/** 图标设置 */
:deep(.arco-menu-icon) {
  margin-right: 5px !important;
}

:deep(.arco-menu-has-icon) {
  margin-right: 5px !important;
}

:deep(.arco-menu-horizontal .arco-menu-item) {
  padding: 0 8px;
}

:deep(.arco-menu-horizontal) {
  padding-left: 5px;
}

a {
  text-decoration: none;
}

.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 主要 */
.layout-header-menu-wrapper {
  flex-grow: 1;
}

@media (max-width: 1024px) {
  .layout-header-menu-wrapper-right {
    flex-grow: 1;
    display: none;
  }
}

@media (min-width: 1024px) {
  .layout-header-menu-wrapper-right {
    flex-grow: 1;
    display: block;
  }
}

/* 下拉菜单 */
.arco-trigger-content {
  :deep(.arco-trigger-menu) {
    max-height: 500px !important;
  }
}

.mobile-nav {
  display: revert;

  .button-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-1);
    font-size: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.1s;
  }

  /* button right */

  .button-trigger:nth-child(2) {
    right: 20%;
    background-color: rgb(var(--arcoblue-6));
  }

  .button-trigger:nth-child(3).button-trigger-active {
    background-color: var(--color-primary-light-4);
  }
}

@media screen and (min-width: 991px) {
  .mobile-nav {
    display: none;
  }

  :deep(.desktop-nav) {
    display: revert;
  }
}

@media screen and (max-width: 991px) {
  :deep(.desktop-nav) {
    display: none !important;
  }
}


</style>
<template>
  <a-layout>
    <a-layout-header class="layout-header">
      <div class="layout-header-menu-wrapper">
        <a-menu
            :show-collapse-button="true"
            mode="horizontal"
        >
          <a-menu-item @click="switchTheme" :key="0" :style="{ padding: 0, marginRight: '20px' }">
            <template v-if="isDarkMode" #icon>
              <IconMoon/>
            </template>
            <template v-else #icon>
              <IconSun/>
            </template>
            Mintimate
          </a-menu-item>
          <a-sub-menu :key="1">
            <template #icon>
              <icon-bug></icon-bug>
            </template>
            <template #title>网络工具</template>
            <NuxtLink to="/">
              <a-menu-item :key="1_0">IP查询</a-menu-item>
            </NuxtLink>
            <NuxtLink to="/gh">
              <a-menu-item :key="1_1">Github加速</a-menu-item>
            </NuxtLink>
          </a-sub-menu>
          <NuxtLink to="/processIMG">
            <a-menu-item :key="2">
              <template #icon>
                <icon-file-image/>
              </template>
              图片在线处理
            </a-menu-item>
          </NuxtLink>
          <a-sub-menu :key="3">
            <template #icon>
              <icon-bulb/>
            </template>
            <template #title>字符/计算工具</template>
            <a-dgroup title="字符">
              <NuxtLink to="/randomNumber">
                <a-menu-item :key="3_1">范围随机数排列</a-menu-item>
              </NuxtLink>
              <NuxtLink to="/statisticsChars">
                <a-menu-item :key="3_2">统计字数/字符</a-menu-item>
              </NuxtLink>
              <NuxtLink to="/textBase64">
                <a-menu-item :key="3_3">Base64编码互转</a-menu-item>
              </NuxtLink>
            </a-dgroup>
            <a-dgroup title="计算">
              <NuxtLink to="/calculateTheDate">
                <a-menu-item :key="3_4">日期计算</a-menu-item>
              </NuxtLink>
              <NuxtLink to="/generatePWD">
                <a-menu-item :key="3_5">强密码生成</a-menu-item>
              </NuxtLink>
            </a-dgroup>

          </a-sub-menu>
          <NuxtLink to="/mcstatus" >
            <a-menu-item :key="4">
              <template #icon>
                <icon-robot/>
              </template>
              MC服务检测
            </a-menu-item>
          </NuxtLink>
          <NuxtLink to="/mdv" >
            <a-menu-item :key="5">
              <template #icon>
                <icon-pen/>
              </template>
              Markdown渲染
            </a-menu-item>
          </NuxtLink>
          <a href="https://www.mintimate.cn" target="_blank">
            <a-menu-item :key="6">
              <template #icon>
                <icon-public/>
              </template>
              博客
            </a-menu-item>
          </a>
        </a-menu>
      </div>
      <div class="layout-header-menu-wrapper-right">
        <a-menu
            class="layout-header-menu"
            style="text-align: right"
            mode="horizontal"
        >
          <a-menu-item @click="openAiFaDian" style="margin-right: auto" :key="7">
            <template #icon>
              <icon-thumb-up-fill/>
            </template>
            赞助
          </a-menu-item>
          <a-menu-item style="margin-right: auto" :key="8">纯粹的在线工具</a-menu-item>
        </a-menu>
      </div>
    </a-layout-header>
    <a-layout-content class="footer">
      <router-view></router-view>
      <div style="padding-bottom: 60px;"></div>
      <div class="mobile-nav">
        <a-trigger :trigger="['click', 'hover']"
                   clickToClose
                   position="top"
                   v-model:popupVisible="popupVisible">
          <div :class="`button-trigger ${popupVisible ? 'button-trigger-active' : ''}`">
            <IconClose v-if="popupVisible"/>
            <IconMessage v-else/>
          </div>
          <template #content>
            <a-menu :style="{ marginBottom: '-4px' }"
                    mode="popButton"
                    :tooltipProps="{ position: 'left' }"
                    showCollapseButton>
              <a-sub-menu :key="1">
                <template #icon>
                  <icon-bug></icon-bug>
                </template>
                <template #title>网络工具</template>
                <NuxtLink to="/">
                  <a-menu-item :key="1_0">IP查询</a-menu-item>
                </NuxtLink>
                <NuxtLink to="/gh">
                  <a-menu-item :key="1_1">Github加速</a-menu-item>
                </NuxtLink>
              </a-sub-menu>
              <NuxtLink to="/processIMG">
                <a-menu-item :key="2">
                  <template #icon>
                    <icon-file-image/>
                  </template>
                  图片在线处理
                </a-menu-item>
              </NuxtLink>
              <a-sub-menu :key="3">
                <template #icon>
                  <icon-bulb/>
                </template>
                <template #title>字符/计算工具</template>
                <a-dgroup title="字符">
                  <NuxtLink to="/randomNumber">
                    <a-menu-item :key="3_1">范围随机数排列</a-menu-item>
                  </NuxtLink>
                  <NuxtLink to="/statisticsChars">
                    <a-menu-item :key="3_2">统计字数/字符</a-menu-item>
                  </NuxtLink>
                  <NuxtLink to="/textBase64">
                    <a-menu-item :key="3_3">Base64编码互转</a-menu-item>
                  </NuxtLink>
                </a-dgroup>
                <a-dgroup title="计算">
                  <NuxtLink to="/calculateTheDate">
                    <a-menu-item :key="3_4">日期计算</a-menu-item>
                  </NuxtLink>
                  <NuxtLink to="/generatePWD">
                    <a-menu-item :key="3_5">强密码生成</a-menu-item>
                  </NuxtLink>
                </a-dgroup>

              </a-sub-menu>
              <NuxtLink to="/mcstatus">
                <a-menu-item :key="4">
                  <template #icon>
                    <icon-robot/>
                  </template>
                  MC服务检测
                </a-menu-item>
              </NuxtLink>
              <NuxtLink to="/mdv">
                <a-menu-item :key="5">
                  <template #icon>
                    <icon-pen/>
                  </template>
                  Markdown渲染
                </a-menu-item>
              </NuxtLink>
            </a-menu>
          </template>
        </a-trigger>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import {ref,onMounted} from 'vue';
// import {Modal} from "@arco-design/web-vue";
let isDarkMode = ref(false);

onMounted(()=>{
  const theme = localStorage.getItem('arco-theme');
  isDarkMode.value = theme === 'dark';

  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  if (isDarkMode.value) {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.setAttribute('arco-theme', 'light');
  }

  darkThemeMq.addEventListener('change', handleDarkThemeChange);

})

const handleDarkThemeChange = (e) => {
  if (isDarkMode.value) {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.setAttribute('arco-theme', 'light');
  }
  localStorage.setItem('arco-theme', isDarkMode.value ? 'dark' : 'light');
};


const switchTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  handleDarkThemeChange()
};
/** 打开爱发电 */
const openAiFaDian = () => {
  // Modal.success({
  //   title: '十分感谢支持＼(◎◎)／',
  //   content: '十分感谢支持，支持的汽水、奶茶和咖啡☕️，将用于服务器的支出和改善网站体验(｡>ㅅ<｡)'
  // });
  window.open('https://afdian.net/a/mintimate', '_blank');
}

/** 打开手机端悬浮 */
let popupVisible = ref(false)
</script>


