<template>
    <div style="margin-top: 1rem" class="container">
        <a-row>
            <a-col>
                <div>
                    <h1>Base64解码/编码</h1>
                </div>
                <div class="col-12 text-center">
                    <a-textarea v-model="inputContent" style="height: 10rem"
                                placeholder="输入(或粘贴)内容,并选择下列模式进行转化" allow-clear/>
                </div>
            </a-col>
        </a-row>
        <a-row>
            <a-col>
                <a-space style="margin: 15px 0px">
                    <a-switch v-model="WorkMode" size="large">
                        <template #checked>
                            Text->Base64
                        </template>
                        <template #unchecked>
                            Base64->Text
                        </template>
                    </a-switch>
                </a-space>
            </a-col>
        </a-row>
        <a-row>
            <a-col>
                <a-typography style="text-align: left;width: 100%">
                    <a-typography-title :heading="5">转码后信息如下：</a-typography-title>
                    <a-typography-paragraph style="word-break:break-all;"
                                            :ellipsis="{rows: 10, expandable: true,}" copyable>
                        {{ outputText }}
                    </a-typography-paragraph>
                </a-typography>
            </a-col>
        </a-row>
    </div>
</template>

<script setup>
import {dealWithText} from "~/untils/Base64Core.js"

useHead({
    title: "Base64文字互转-在线工具箱",
    meta: [{
        name: "description",
        content: "在线对文字的内容进行Base64转码，或者把Base64内容转回文字内容。",

    },
        {
            name: "keywords",
            content: "在线工具箱,Base64转码,Base64"
        },
    ]
})

let WorkMode = ref(true);
let inputContent = ref("HelloWorld");
// 计算结果
let outputText = computed(() => {
    return dealWithText(inputContent.value, WorkMode.value);
})
</script>

<style scoped>

</style>
