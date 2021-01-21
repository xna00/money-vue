<template>
  <nav>
    <ul>
      <li>
        <router-link to="/tag">
          <svg class="icon">
            <use xlink:href="#tag" />
          </svg>
          标签
        </router-link>
      </li>
      <li>
        <router-link to="/money">
          <svg class="icon">
            <use xlink:href="#money" />
          </svg>
          记账
        </router-link>
      </li>
      <li>
        <router-link to="/statistic">
          <svg class="icon">
            <use xlink:href="#chart" />
          </svg>
          统计
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
require("@/assets/icons/tag.svg");
require("@/assets/icons/money.svg");
require("@/assets/icons/chart.svg");
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