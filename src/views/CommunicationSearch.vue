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
            <div>
                <div class="if alert-banner info mb-16">
                    <span>This is an info alert</span>
                    <button
                        class="if alert-banner-close-button"
                        aria-label="close alert"
                    >
                        <ids-icon ui-24 cross></ids-icon>
                    </button>
                </div>
                <div class="if alert-banner warning mb-16">
                    <div class="if flex-column gap-8">
                        <div class="if typography ui large weight-bold">
                            Warning title
                        </div>
                        <span>This is an warning alert</span>
                    </div>
                    <button
                        class="if alert-banner-close-button"
                        aria-label="close alert"
                    >
                        <ids-icon ui-24 cross></ids-icon>
                    </button>
                </div>
                <div class="if alert-banner error mb-16">
                    <div class="if flec-column gap-8">
                        <span>This is an error alert</span>
                        <a
                            class="if typography ui medium weight-medium flex-row align-items-center"
                            href="#"
                        >
                            <span>Link</span>
                            <ids-icon arrow-sm-right ui-24></ids-icon>
                        </a>
                    </div>
                    <button
                        class="if alert-banner-close-button"
                        aria-label="close alert"
                    >
                        <ids-icon ui-24 cross></ids-icon>
                    </button>
                </div>
                <div class="if alert-banner success mb-16">
                    <span>This is an success alert</span>
                    <button
                        class="if alert-banner-close-button"
                        aria-label="close alert"
                    >
                        <ids-icon ui-24 cross></ids-icon>
                    </button>
                </div>
            </div>

            <ul class="if p-0 m-0 gap-16 flex-column" style="list-style: none">
                <li v-for="key in results">
                    <a href="#" class="if card elevated">
                        <div class="if card-content flex-row gap-12">
                            <div class="if typography heading small">
                                Track my Claim 23.0001234
                            </div>

                            <ul class="communication-search-meta-list">
                                <li class="if flex-row gap-8">
                                    <ids-icon
                                        ui-16
                                        clock
                                        class="if typography quiet"
                                    ></ids-icon>
                                    <span class="if typography ui small quiet"
                                        >23.4.2023, 13:37</span
                                    >
                                </li>
                                <li class="if flex-row gap-8">
                                    <ids-icon
                                        ui-16
                                        user
                                        class="if typography quiet"
                                    ></ids-icon>
                                    <span class="if typography ui small quiet"
                                        >Claus Pederssen</span
                                    >
                                </li>
                                <li class="if flex-row gap-8">
                                    <ids-icon
                                        product-32
                                        patch
                                        class="if typography quiet size-16"
                                    ></ids-icon>
                                    <span class="if typography ui small quiet"
                                        >23.0001234</span
                                    >
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
