<template>
  <div class="frontliner-header-sides frontliner-links-container if pt-64">
    <div class="frontliner-logo"></div>
  </div>
  <div class="frontliner-top-bar">
    <ul
      class="header-breadcrumbs if typography paragraph medium position-relative flex-row"
    >
      <li>Search</li>
    </ul>
  </div>

  <div class="frontliner-header-sides frontliner-drawer-container if pt-64">
    <div class="drawer-container-bottom">
      <button
        @click="toggleDrawer"
        class="drawer-button drawer-button--settings if p-16"
        :class="drawerButtonCSS"
      ></button>
    </div>
  </div>

  <div class="frontliner-header-drawer if pt-32" :class="drawerCSS">
    <div class="frontliner-drawer-content">
      <!-- Business Area -->
      <div class="if mt-16 mb-24">
        <legend
          class="if typography heading xx-small"
          style="margin-bottom: 1rem"
        >
          Business Area
        </legend>

        <div class="if flex-row flex-wrap gap-16">
          <div class="if radio-button">
            <input
              type="radio"
              class="if radio-button-input"
              name="radios-ba"
              id="radio-button-types-radio-ba-commercial"
            />
            <label for="radio-button-types-radio-ba-commercial"
              >Commercial</label
            >
          </div>

          <div class="if radio-button">
            <input
              type="radio"
              class="if radio-button-input"
              name="radios-ba"
              id="radio-button-types-radio-ba-private"
              checked
            />
            <label for="radio-button-types-radio-ba-private">Private</label>
          </div>
        </div>
      </div>
      <!-- // Business Area -->

      <!-- Workgroup-->
      <div class="if mt-16 mb-24">
        <legend
          class="if typography heading xx-small"
          style="margin-bottom: 1rem"
        >
          <!--?lit$055067921$-->Workgroup
        </legend>

        <div class="if flex-row flex-wrap gap-16">
          <!--?lit$055067921$--><!---->
          <div class="if radio-button" v-for="(key, index) in workgroups">
            <input
              type="radio"
              class="if radio-button-input"
              name="radios-workgroup"
              :id="`radio-button-types-radio-workgroup-${index}`"
              :checked="index === 0"
            />
            <label :for="`radio-button-types-radio-workgroup-${index}`">{{
              key
            }}</label>
          </div>
        </div>
      </div>
      <!-- // Workgroup -->

      <!-- Country -->
      <div class="if mt-16 mb-24">
        <legend
          class="if typography heading xx-small"
          style="margin-bottom: 1rem"
        >
          <!--?lit$055067921$-->Country
        </legend>
        <div class="if flex-row flex-wrap gap-16">
          <!--?lit$055067921$--><!---->
          <div class="if radio-button" v-for="(key, index) in countries">
            <input
              type="radio"
              class="if radio-button-input"
              name="radios-country"
              :id="`radio-button-types-radio-country-${index}`"
              :checked="index === 0"
            />
            <label :for="`radio-button-types-radio-country-${index}`">{{
              key
            }}</label>
          </div>
        </div>
      </div>
      <!-- // Country -->

      <!-- Language -->
      <div class="if mt-16 mb-24 flex-column gap-16">
        <legend class="if typography heading xx-small">Language</legend>

        <div class="if checkbox">
          <input
            class="if checkbox-input"
            type="checkbox"
            id="english"
            name="english"
          />
          <label class="if typography ui medium" for="english"
            >Use English</label
          >
        </div>
      </div>
      <!-- // Language -->

      <!-- Theme -->
      <div class="if mt-16 mb-24 flex-column gap-16">
        <legend class="if typography heading xx-small">Theme</legend>

        <div class="if checkbox">
          <input
            class="if checkbox-input"
            type="checkbox"
            id="theme-dark"
            name="theme-dark"
            v-model="darkMode"
            @click="toggleDarkMode"
          />
          <label class="if typography ui medium" for="theme-dark"
            >Use Dark Mode</label
          >
        </div>
      </div>
      <!-- // Theme -->
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalHeader",

  data() {
    return {
      darkMode: false,
      drawerIsOpen: false,
      workgroups: [
        "Business center",
        "Large & Partner",
        "Broker",
        "Remote Sales",
        "Large & Partner Express",
        "Vertikal",
        "Tied Agents",
        "L&P Service Support",
        "Business Support",
      ],
      countries: ["Denmark", "Finland", "Norway", "Sweden"],
    };
  },
  computed: {
    drawerCSS() {
      return this.drawerIsOpen ? "frontliner-header-drawer--open" : "";
    },

    drawerButtonCSS() {
      return this.drawerIsOpen ? "drawer-button--active" : "";
    },
  },

  methods: {
    toggleDarkMode() {
      setTimeout(() => {
        const htmlClassList = document.querySelector("html").classList;
        htmlClassList.toggle("theme-dark", this.darkMode === true);
      }, 1);
    },
    toggleDrawer() {
      this.drawerIsOpen = !this.drawerIsOpen;
    },
  },
};
</script>

<style></style>
