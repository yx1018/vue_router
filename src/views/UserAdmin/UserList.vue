<template>
	<div>
		<ul>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
            <li>aaaa</li>
        </ul>
        <button @click="toPageUserNew">跳转</button>
	</div>
</template>

<script>
export default {
  methods: {
    toPageUserNew() {
      this.$router.push({ name: "IF_010002" });
    }
  }
};
</script>