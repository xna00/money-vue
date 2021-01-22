<template>
  <nav>
    <ul>
      <li>
        <router-link
          to="/tags"
          :class="$route.path.includes('tag') ? 'router-link-active': ''"
        >
          <Icon name="tag" />
          标签
        </router-link>
      </li>
      <li>
        <router-link to="/money">
          <Icon name="money" />
          记账
        </router-link>
      </li>
      <li>
        <router-link to="/statistic">
          <Icon name="chart" />
          统计
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import Icon from "./Icon.vue";
</script>

<style lang="scss" scoped>
@import "@/helper.scss";

ul {
  display: flex;
  justify-content: space-around;

  > li {
    padding: 5px 0;

    > a {
      display: flex;
      flex-direction: column;
      align-items: center;

      > .icon {
        width: 24px;
        height: 24px;
      }

      &.router-link-active {
        color: $nav-active-color;

        > .icon {
          fill: $nav-active-color;
        }
      }
    }
  }
}
</style>