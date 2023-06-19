<template>
    <div style="margin-top: 1rem" class="container">
        <a-row>
            <a-col id="tittle">
                <h1>短链接生成</h1>
            </a-col>
        </a-row>
        <a-card style="text-align: left" title="请在下面输入需要缩短的长链接">
            <a-form layout="vertical"
                    size="large"
                    auto-label-width>
                <a-form-item field="beginLine" label="源地址"
                             label-col-flex="5rem"
                             label-col-style="margin-right: 4.5rem">
                    <a-input v-model="fullUrl" style="width: 100%;"/>
                    <template #extra>
                        <div>由后台生成的短链接，重定向到该源。</div>
                    </template>
                </a-form-item>
            </a-form>
            <a-form layout="inline"
                    label-align="right"
                    size="large">
                <a-form-item field="endLine">
                    <a-input v-model="endDate"/>
                    <template #label>
                        <span>内测码</span>
                    </template>
                    <template #extra>
                        <span @click="getAlphaCode"><u>没有内测吗？如何获取内测码？<icon-exclamation-circle-fill/></u></span>
                    </template>
                </a-form-item>
                <a-form-item field="endLine">
                    <a-input v-model="endDate"/>
                    <template #label>
                        <span>备注&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </template>
                    <template #extra>
                        <div>仅用于开发者维护使用（可选）。</div>
                    </template>
                </a-form-item>
                <a-form-item label="设置所属域名">
                    <a-radio-group type="button">
                        <a-radio value="curl.mintimate.cn">curl.mintimate.cn</a-radio>
                        <a-radio value="curl.mintimate.ml">curl.mintimate.ml</a-radio>
                    </a-radio-group>
                </a-form-item>
            </a-form>
            <a-row style="margin-top: 0.75rem">
                <a-col :span="24">
                    <a-button :disabled="disabledButton" @click="generateUrl()" type="primary" status="success"
                              size="large" long>{{ displayTextForButton }}
                    </a-button>
                </a-col>
            </a-row>
        </a-card>
        <a-row style="margin-top: 2rem">
            <a-col>
                <a-typography-text copyable
                                   style="word-break:break-all"
                                   :ellipsis="{rows: 8, expandable: true,}">
                    <span class="code">{{ shortUrl }}</span>
                </a-typography-text>
            </a-col>
        </a-row>
    </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import {Message} from "@arco-design/web-vue";
import {judgeUrl} from "~/untils/UrlUtil.js";

let shortUrl = ref("等待用户操作");
let verifyCode = ref("");
let remark = ref("");
let fullUrl = ref("");
let targetUrl = ref("");
let displayTextForButton = ref("生成短链接");
let disabledTimer = ref(0)
const disabledButton = computed(() => disabledTimer.value > 0)

watch(disabledTimer, (value) => {
    if (value <= 0) {
        displayTextForButton.value = '生成短链接'
    }
})
const getAlphaCode = () => {
    Message.warning("因为资源滥用，已经停止分发内测码。")
}
const generateUrl = () => {
    disabledTimer.value = 5
    displayTextForButton.value = '请再等待...'
    const intervalId = setInterval(() => {
        displayTextForButton.value = '请再等待...' + disabledTimer.value + 's'
        disabledTimer.value--
        if (disabledTimer.value < 0) {
            clearInterval(intervalId)
        }
    }, 1000)
    if (!judgeUrl(fullUrl.value)) {
        Message.warning("源地址校验失败，请检查")
    }
}
</script>

<style scoped>
.code {
    margin: 0 2px;
    color: var(--color-text-2);
    background-color: var(--color-neutral-2);
    border: 1px solid var(--color-neutral-3);
    border-radius: 2px;
    font-size: 2rem;
    padding: 6px;
}
</style>