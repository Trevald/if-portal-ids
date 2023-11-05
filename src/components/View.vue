<template>
  <div class="main">
    <!-- Search form -->
    <div class="search-form if p-16">
      <div class="if flex-column gap-8 mb-16">
        <label class="if typography ui small is-required" for="keywords"
          >Keywords</label
        >
        <input
          class="if input-field typography ui small"
          name="keywords"
          id="keywords"
          type="text"
          placeholder="e.g. Claim number, name, SSN"
        />
      </div>
      <button class="if button small filled">Search</button>
    </div>
    <!-- // Search form -->

    <!-- Result -->
    <div class="result overflow-y-scroll if p-16">
      <ul class="if p-0 m-0" style="list-style: none">
        <li>
          <a href="#" class="if card elevated mb-16" v-for="key in results">
            <div class="if card-content flex-row gap-12">
              <div class="if typography heading small">
                Track my Claim 23.0001234
              </div>

              <ul class="if flex-row flex-wrap gap-32" style="list-style: none">
                <li class="if flex-row gap-8" style="white-space: nowrap">
                  <ids-icon ui-16 clock class="if typography quiet"></ids-icon>
                  <span class="if typography ui small quiet"
                    >23.4.2023, 13:37</span
                  >
                </li>
                <li class="if flex-row gap-8" style="white-space: nowrap">
                  <ids-icon ui-16 user class="if typography quiet"></ids-icon>
                  <span class="if typography ui small quiet"
                    >Claus Pederssen</span
                  >
                </li>
                <li
                  class="if typography ui small quiet flex-row gap-8"
                  style="white-space: nowrap"
                >
                  <ids-icon product-32 patch class="if size-16"></ids-icon>
                  23.0001234
                </li>
              </ul>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- // Result -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>
