<template>
  <div>
    <div class="table-of-contents table-of-contents-color-page">
      <ul>
        <li><a href="#base-color-tokens">Core color pallete</a></li>
        <li><a href="#interactive-color-tokens">Interactive color pallete</a></li>
        <li><a href="#brand-color-tokens">Brand color pallete</a></li>
      </ul>
    </div>
    <h3 id="base-color-tokens">Core color pallete</h3>
    <b-table
      :striped="false"
      :fields="fields"
      :items="this.data.coreColors"
      head-variant="light"
      class="color-table"
    >
    <template v-slot:cell(token)="data">
      <code>{{ data.item.token }}</code>
    </template>
    <template v-slot:cell(usage)="data">
      {{ data.item.usage }}</br>
      {{ data.item.example }}
    </template>
      <template v-slot:cell(sample)="data">
        <b-img
          rounded="circle"
          blank
          :blank-color="data.item.hex"
          width="64"
          alt="Color"
          class="colorSwatch mx-auto d-block"
        ></b-img>
        <code>{{ data.item.hex }}</code>
      </template>
    </b-table>

    <h3 id="interactive-color-tokens">Interactive color pallete</h3>
     <b-table
      :fields="fields"
      :items="this.data.interactiveColors"
      head-variant="light"
      class="color-table"
    >
    <template v-slot:cell(token)="data">
      <code>{{ data.item.token }}</code>
    </template>
    <template v-slot:cell(usage)="data">
      {{ data.item.usage }}</br>
      {{ data.item.example }}
    </template>
      <template v-slot:cell(sample)="data">
        <b-img
          rounded="circle"
          blank
          :blank-color="data.item.hex"
          width="64"
          alt="Color"
          class="colorSwatch mx-auto d-block"
        ></b-img>
        <code>{{ data.item.hex }}</code>
      </template>
    </b-table>

    <h3 id="brand-color-tokens">Brand color pallete</h3>
     <b-table
      :fields="fields"
      :items="this.data.brandColors"
      head-variant="light"
      class="color-table"
    >
    <template v-slot:cell(token)="data">
      <code>{{ data.item.token }}</code>
    </template>
    <template v-slot:cell(usage)="data">
      {{ data.item.usage }}</br>
      {{ data.item.example }}
    </template>
      <template v-slot:cell(sample)="data">
        <b-img
          rounded="circle"
          blank
          :blank-color="data.item.hex"
          width="64"
          alt="Color"
          class="colorSwatch mx-auto d-block"
        ></b-img>
        <code>{{ data.item.hex }}</code>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {key: "token", label: "Token", tdClass: 'tokenColumn'},
        {key: "usage", label: "Usage", tdClass: 'usageColumn'},
        {key: "sample", label: "Sample", tdClass: 'sampleColumn'}
        ]
    };
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus">
.table-of-contents
  margin: 2rem 0 4rem

.color-table 
  margin-bottom 4rem

.colorSwatch
  margin 0 auto 8px auto

.tokenColumn
  width 24%

.usageColumn
  width 44%

.sampleColumn
  width 20%
  text-align center

tr 
  background #fff

tr:nth-child(2n) 
  background-color #fff

.table-of-contents.table-of-contents-color-page
  ul
    column-count 1
</style>
