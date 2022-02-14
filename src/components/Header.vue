<template>
    <header class="header">
        <div class="container">
            <div class="content">
                <div class="logo" @click="$router.push({ name: 'Home' })">
                    <img src="../assets/img/logo.png" alt="" />
                </div>
                <a title="Kupibilet.ru" class="link dispaly" href="/">Flights</a>
                <a href="https://www.booking.com/" target="_blank" title="Hotels.Kupi.сom" rel="nofollow" class="link dispaly"
                    >Hotels</a
                >
            </div>
            <div class="content dispaly__content">
                <span class="lang unselectable" @click="dropdown = !dropdown">
                    <img :src="getCurency().icon" class="img_lang" />
                    EN, {{ getCurency().char_code }}
                </span>
                <div class="dropdown unselectable" v-if="dropdown" @focusout="test" tabindex="0">
                    <div class="drop__block">
                        <div class="drop__block_title">
                            <span class="drop__title">Language</span>
                        </div>
                        <div class="drop__list drop__active">
                            <span class="drop__item">English</span>
                            <span class="drop__code">EN</span>
                        </div>
                    </div>
                    <div class="drop__block left_line">
                        <div class="drop__block_title">
                            <span class="drop__title">Country and currency</span>
                        </div>
                        <div
                            class="drop__list"
                            v-for="(item, index) in list_currency"
                            :key="item.id"
                            :class="{ drop__active: index == currency }"
                            @click="selectCurrency(index)"
                        >
                            <span class="drop__item"><img :src="item.icon" class="img_lang" />{{ item.title }}</span>
                            <span class="drop__code">{{ item.code }}</span>
                        </div>
                    </div>
                </div>
                <a href="/" target="_blank" rel="nofollow" class="link">Help</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            dropdown: false,
            currency: localStorage.getItem("currency") || 2,
            list_currency: [
                {
                    id: 1,
                    title: "Ireland",
                    icon: require("../assets/img/ir.svg"),
                    code: "€, EUR",
                    char_code: "€",
                },
                {
                    id: 2,
                    title: "Netherlands",
                    icon: require("../assets/img/nt.svg"),
                    code: "€, EUR",
                    char_code: "€",
                },
                {
                    id: 3,
                    title: "United States",
                    icon: require("../assets/img/us.svg"),
                    code: "$, USD",
                    char_code: "$",
                },
                {
                    id: 4,
                    title: "Australia",
                    icon: require("../assets/img/au.svg"),
                    code: "$, AUD",
                    char_code: "$",
                },
                {
                    id: 5,
                    title: "Canada",
                    icon: require("../assets/img/ca.svg"),
                    code: "$, CAD",
                    char_code: "$",
                },
            ],
        };
    },
    methods: {
        selectCurrency(e) {
            this.currency = e;
            localStorage.setItem("currency", this.currency);
            this.dropdown = false;
        },
        getCurency() {
            return this.list_currency[this.currency];
        },
    },
    mounted() {
        if (!localStorage.getItem("currency")) localStorage.setItem("currency", 1);
    },
};
</script>

<style scoped>
.header {
    background: #202335;
    position: relative;
    z-index: 5;
}

.container {
    height: 48px;
    margin: 0 auto;
    max-width: 1178px;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content {
    display: flex;
    justify-content: center;
}

.logo > img {
    height: 24px;
    display: block;
    width: 132px;
    cursor: pointer;
}

.lang {
    transition: 0.15s ease-out;
    display: inline-flex;
    align-items: center;
    color: #007acc;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    transition-property: color;
}

.img_lang {
    margin-right: 5px;
    width: 24px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid #34363a;
    vertical-align: bottom;
    display: inline-block;
    margin-right: 8px;
}

.link {
    transition: 0.15s ease-out;
    display: inline-flex;
    align-items: center;
    color: #007acc;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    transition-property: color;
    margin-left: 18px;
}

.dispaly {
    display: block;
}

.dispaly__content {
    display: block;
}

.dropdown {
    position: absolute;
    display: flex;
    left: auto;
    top: 48px;
    right: 12px;
    background: #202335;
    color: #9f9bb8;
    box-shadow: 0px 8px 15px rgb(98 112 139 / 15%);
    border-radius: 0px 0px 8px 8px;
    z-index: 10;
    margin-bottom: 18px;
    padding: 0;
}

.drop__block {
    padding: 24px 24px 32px;
}

.left_line {
    border-left: 1px solid #34363a;
}

.drop__title {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.1px;
    margin: 0;
    margin-bottom: 12px;
}

.drop__block_title {
    margin-bottom: 12px;
}

.drop__list {
    cursor: pointer;
    padding: 6px 10px 8px;
    min-width: 235px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    border: 3px solid transparent;
}

.drop__item {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
}

.drop__code {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #808080;
}

.drop__active {
    border: 3px solid #0f99f5;
    padding: 6px 10px 8px;
    border-radius: 8px;
    min-width: 235px;
}

@media (min-width: 1250px) {
    .dropdown {
        right: 200px;
    }
}

@media (max-width: 1200px) {
    .dispaly {
        display: none;
    }
}

@media (max-width: 599px) {
    .dropdown {
        display: block;
    }
    .left_line {
        border-top: 1px solid #34363a;
    }
}

@media (max-width: 320px) {
    .container {
        padding: 0 8px;
    }
}

@media (max-width: 306px) {
    .dispaly__content {
        display: none;
    }
}
</style>
