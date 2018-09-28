<template>
  <div class="tester">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Enter text" v-model="string" v-on:keyup="checkPalindrome">
      </div>
      <p class="help" :class="{ 'is-palindrome': isPalindrome, 'is-not-palindrome': !isPalindrome }">
        {{string}} is <span v-if="!isPalindrome">not</span> a palindrome!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tester',
  data () {
    return {
      string: "Ara",
      isPalindrome: true,
    }
  },
  methods: {
    checkPalindrome() {
      this.$http.get('/api/'+this.string).then(() => {
        this.isPalindrome = true;
      }, () => {
        this.isPalindrome = false;
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.tester {
  .is-palindrome {
    color: green;
  }
  .is-not-palindrome {
    color: red;
  }
}
</style>
