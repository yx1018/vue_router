<template>
	<div>
		<ul>
            <li>cccc</li>
            <li>cccc</li>
            <li>cccc</li>
            <li>cccc</li>
            <li>cccc</li>
            <li>cccc</li>
        </ul>
        <button @click="toPageUserNew">跳转</button>
	</div>
</template>

<script>
export default {
  methods: {
    toPageUserNew() {
      this.$router.push({ name: "IF_020002" });
    }
  }
};
</script>