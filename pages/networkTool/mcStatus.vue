<template>
    <div style="margin-top: 1rem" class="container">
        <a-row>
            <a-col id="tittle">
                <h1>Minecraft服务器状态检测</h1>
            </a-col>
        </a-row>
        <a-card style="text-align: left" title="请在下面输入需要检测的服务器地址">
            <a-form layout="vertical"
                    size="large"
                    auto-label-width>
                <a-form-item field="beginLine" label="服务器地址"
                             label-col-flex="5rem"
                             label-col-style="margin-right: 4.5rem">
                    <a-input v-model="fullUrl" style="width: 100%;"/>
                    <template #extra>
                        <div>不可以检测局域网内服务器；请不要频繁请求或攻击它人服务器</div>
                    </template>
                </a-form-item>
            </a-form>
        </a-card>
        <a-row style="margin-top: 2rem">
            <a-col :span="24">
                <a-space style="text-align: center">
                    <a-descriptions
                            layout="'inline-vertical'"
                            align="'center'"
                            style="margin-top: 20px"
                            :data="data" :size="'large'"
                            title="远程服务器信息" :column="1"/>
                </a-space>
            </a-col>
        </a-row>
    </div>
</template>

<script setup>
import {reactive} from "vue";
// import {Modal} from "@arco-design/web-vue";

const handleClickInfo = () => {
    // Modal.info({
    //     title: '当前不可用',
    //     content: '因为本系统被攻击者用于恶意攻击他人MC服务器，并且造成本系统服务器大量欠费；服务器还在优化，敬请期待'
    // });
};

handleClickInfo();

let data = reactive([{
    label: '服务器名称',
    value: '---',
}, {
    label: '玩家数量',
    value: '0/0',
}, {
    label: '游戏版本',
    value: '--'
}, {
    label: '备注信息',
    value: '--',
}]);
</script>

<style scoped>

</style>