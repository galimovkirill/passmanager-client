<template>
  <div class="log">
    <div class="log-wrapper">
      <div class="title">Логи</div>
      <ul>
        <li>Алексей Иванов изменил запись 20.01.2020</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.log {
  .title {
    font-size: 2rem;
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      display: block;
      background-color: $c-gray-100;
      margin: 0.5rem 0 1rem 0;
    }
  }
  &-wrapper {
    background: $c-gray-50;
    border-radius: 4px;
    border: 1px solid $c-gray-100;
    padding: 1rem;
  }
}
</style>
