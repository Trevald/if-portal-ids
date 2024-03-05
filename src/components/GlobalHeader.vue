<template>
  <div class="frontliner-header-sides frontliner-links-container if pt-64">
    <a href="/" class="frontliner-logo"></a>
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
        class="global-header-button drawer-button if p-16"
        :class="drawerButtonCSS"
      >
        <ids-icon ui-32 settings></ids-icon>
      </button>
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
      return this.drawerIsOpen ? "global-header-button--active" : "";
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

<style type="text/css">
:root {
  --global-header-topbar-height: 2.5rem;
  --global-header-sidebar-width: 3rem;
  --global-header-padding-left: var(--global-header-sidebar-width);
  --global-header-padding-right: 0;
}

@media screen and (min-width: 45rem) {
  :root {
    --global-header-sidebar-width: 4rem;
    --global-header-padding-right: var(--global-header-sidebar-width);
  }
}

.has-global-header {
  padding: var(--global-header-topbar-height) var(--global-header-padding-right)
    0 var(--global-header-padding-left);
}

.frontliner-top-bar {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--global-header-topbar-height);
  background-color: var(--system-palette-bg-default-500);
}

.header-breadcrumbs {
  flex-grow: 1;
  margin: 0;
  padding: 1rem 0px;
  list-style: none;
  justify-content: center;
}

.frontliner-header-sides {
  position: fixed;
  z-index: 12;
  left: 0px;
  top: 0px;

  display: flex;
  flex-direction: column;
  width: var(--global-header-sidebar-width);
  height: 100vh;

  background-color: var(--system-palette-bg-default-500);
}

.frontliner-drawer-container {
  display: none;
  left: auto;
  right: 0;
}

@media screen and (min-width: 45rem) {
  .frontliner-drawer-container {
    display: flex;
  }
}

.drawer-container-bottom {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0;
}

.global-header-button {
  appearance: none;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  height: 4rem;
  width: var(--global-header-sidebar-width);
  background: none;
}

.global-header-button svg {
  color: var(--system-text-default-default);
  transition: all 0.5s ease;
}

.global-header-button:hover svg {
  color: var(--system-action-hovered);
}

.drawer-button:hover svg {
  transform: rotate(30deg);
}

.global-header-button--active {
  background-color: var(--system-palette-bg-default-100);
}

.frontliner-logo {
  position: absolute;
  z-index: 12;
  top: 0;
  left: 0;

  width: var(--global-header-sidebar-width);
  height: var(--global-header-sidebar-width);

  display: block;

  border: none;
  box-shadow: none;

  background-image: url("data:image/svg+xml,%3Csvg width='128' height='128' viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M38.2222 8C30.3675 8 24 14.3675 24 22.2222C24 23.2041 24.7959 24 25.7778 24H72C85.2548 24 96 34.7452 96 48C96 61.2548 85.2548 72 72 72H57.7778C56.7959 72 56 72.7959 56 73.7778C56 81.6325 62.3675 88 70.2222 88H72C94.0914 88 112 70.0914 112 48C112 25.9086 94.0914 8 72 8H38.2222Z' fill='%230054F0'/%3E%3Cpath d='M38.2222 8C30.3675 8 24 14.3675 24 22.2222C24 23.2041 24.7959 24 25.7778 24H72C85.2548 24 96 34.7452 96 48C96 61.2548 85.2548 72 72 72H57.7778C56.7959 72 56 72.7959 56 73.7778C56 81.6325 62.3675 88 70.2222 88H72C94.0914 88 112 70.0914 112 48C112 25.9086 94.0914 8 72 8H38.2222Z' fill='url(%23paint0_linear_15_545)' style='mix-blend-mode:overlay'/%3E%3Cpath d='M40 40C31.1634 40 24 47.1634 24 56V118.222C24 119.204 24.7959 120 25.7778 120C33.6325 120 40 113.632 40 105.778V58C40 56.8954 40.8954 56 42 56H65.7778C73.6325 56 80 49.6325 80 41.7778C80 40.7959 79.2041 40 78.2222 40H40Z' fill='%230054F0'/%3E%3Cpath d='M40 40C31.1634 40 24 47.1634 24 56V118.222C24 119.204 24.7959 120 25.7778 120C33.6325 120 40 113.632 40 105.778V58C40 56.8954 40.8954 56 42 56H65.7778C73.6325 56 80 49.6325 80 41.7778C80 40.7959 79.2041 40 78.2222 40H40Z' fill='url(%23paint1_linear_15_545)' style='mix-blend-mode:overlay'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_15_545' x1='123' y1='25' x2='-7.5' y2='85.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.8'/%3E%3Cstop offset='1' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_15_545' x1='123' y1='25' x2='-7.5' y2='85.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='white' stop-opacity='0.8'/%3E%3Cstop offset='1' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
  background-position: 50% center;
  background-repeat: no-repeat;
  background-size: calc(var(--global-header-sidebar-width) / 2);

  transition: all 0.2s ease;
}

.frontliner-logo:hover {
  transform: scale(1.1);
}

:root.if.theme-dark .frontliner-logo {
  background-image: url("data:image/svg+xml,%3Csvg width='128' height='128' viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M38.2222 8C30.3675 8 24 14.3675 24 22.2222C24 23.2041 24.7959 24 25.7778 24H72C85.2548 24 96 34.7452 96 48C96 61.2548 85.2548 72 72 72H57.7778C56.7959 72 56 72.7959 56 73.7778C56 81.6325 62.3675 88 70.2222 88H72C94.0914 88 112 70.0914 112 48C112 25.9086 94.0914 8 72 8H38.2222Z' fill='%235A8AE2'/%3E%3Cpath d='M38.2222 8C30.3675 8 24 14.3675 24 22.2222C24 23.2041 24.7959 24 25.7778 24H72C85.2548 24 96 34.7452 96 48C96 61.2548 85.2548 72 72 72H57.7778C56.7959 72 56 72.7959 56 73.7778C56 81.6325 62.3675 88 70.2222 88H72C94.0914 88 112 70.0914 112 48C112 25.9086 94.0914 8 72 8H38.2222Z' /%3E%3Cpath d='M40 40C31.1634 40 24 47.1634 24 56V118.222C24 119.204 24.7959 120 25.7778 120C33.6325 120 40 113.632 40 105.778V58C40 56.8954 40.8954 56 42 56H65.7778C73.6325 56 80 49.6325 80 41.7778C80 40.7959 79.2041 40 78.2222 40H40Z' fill='%235A8AE2'/%3E%3Cpath d='M40 40C31.1634 40 24 47.1634 24 56V118.222C24 119.204 24.7959 120 25.7778 120C33.6325 120 40 113.632 40 105.778V58C40 56.8954 40.8954 56 42 56H65.7778C73.6325 56 80 49.6325 80 41.7778C80 40.7959 79.2041 40 78.2222 40H40Z' /%3E%3C/svg%3E%0A");
}

/*
   * Drawer
   */

.frontliner-header-drawer {
  position: fixed;
  z-index: 11;
  top: var(--global-header-topbar-height);
  right: var(--global-header-sidebar-width);

  width: 25rem;

  border: 0.0625rem solid transparent;

  opacity: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--global-header-topbar-height));
  overflow: hidden auto;

  box-shadow: rgba(0, 0, 0, 0.2) -20px 10px 20px;
  background-color: var(--system-palette-bg-default-100);

  transform: translateX(calc(100% + var(--global-header-sidebar-width)));
}

.frontliner-header-drawer--open {
  transform: translateX(0);
  opacity: 1;
}

.frontliner-drawer-header,
.frontliner-drawer-content {
  padding: 0px 1rem !important;
}
</style>
