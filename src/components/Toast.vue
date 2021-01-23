<template>
  <Teleport to="body">
    <transition name="btfly-toast-fade">
      <div
        v-if="visible"
        class="btfly-toast"
      >
        <slot />
      </div>
    </transition>
  </Teleport>
</template>
<script lang="ts">
import {onMounted, watch} from "vue";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    showTime: {
      type: Number,
      default: 3000
    }
  },
  setup(props: any, context: any) {
    onMounted(() => {
      setTimeout(() => {
        context.emit("update:visible", false);
      }, props.showTime);

      watch(props, () => {
        if (!props.visible) return;
        setTimeout(() => {
          context.emit("update:visible", false);
        }, props.showTime);
      });
    });
  }
};
</script>
<style lang="scss" scoped>
.btfly-toast-fade-enter-active {
  transition: all 0.3s ease-out;
}

.btfly-toast-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.btfly-toast-fade-enter-from,
.btfly-toast-fade-leave-to {
  opacity: 0;
}

.btfly-toast {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background: rgba(87, 83, 83, 0.3);
  border-radius: 8px;
  z-index: 102;
}
</style>