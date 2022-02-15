<template>
    <div class="container">
        <header>Checked luggage</header>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">With luggage</span>
            </label>
        </div>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">No checked luggage</span>
            </label>
        </div>

        <div class="divider"></div>

        <header>Stops</header>
        <div class="settings-item">
            <label class="custom-checkbox disabled">
                <input type="checkbox" disabled />
                <span class="settings-item-text">No stops</span>
            </label>
        </div>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">1 stop</span>
            </label>
        </div>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">2+ stop</span>
            </label>
        </div>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">Overnight transfers</span>
            </label>
        </div>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">Change of airport</span>
            </label>
        </div>

        <div class="divider"></div>

        <header>Stop duration</header>
        <div class="slider-text-container">
            <div>1 h</div>
            <div>1 d 1 h 50 min</div>
        </div>
        <div class="slider-container">
            <div class="slider-track"></div>
            <input type="range" min="0" max="1000" value="0" class="slider-1" @input="fillColorSlider()" />
            <input type="range" min="0" max="1000" value="1000" class="slider-2" @input="fillColorSlider()" />
        </div>

        <div class="divider"></div>

        <header>Carriers</header>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">All</span>
            </label>
        </div>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">Aegean Airlines</span>
            </label>
        </div>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">Pegasus Airlines</span>
            </label>
        </div>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">RyanAir</span>
            </label>
        </div>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">Sky Express</span>
            </label>
        </div>
        <div class="settings-item">
            <label class="custom-checkbox">
                <input type="checkbox" checked />
                <span class="settings-item-text">SkyUp</span>
            </label>
        </div>
        <div class="more">
            <span>More</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        fillColorSlider() {
            let sliderOne = document.getElementsByClassName("slider-1")[0];
            let sliderTwo = document.getElementsByClassName("slider-2")[0];
            let sliderTrack = document.getElementsByClassName("slider-track")[0];
            let sliderMaxValue = document.getElementsByClassName("slider-1")[0].max;
            let percent1 = (sliderOne.value / sliderMaxValue) * 100;
            let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
            sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
        },
    },
};
</script>

<style scoped>
.container {
    color: #fff;
    min-width: 250px;
    margin-left: 40px;
    margin-top: 26px;
    margin-bottom: 40px;
    margin-right: 20px;
}

header {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    margin-bottom: 13px;
}

.settings-item {
    margin-bottom: 8px;
}

.settings-item-text {
    cursor: pointer;
}

.divider {
    height: 1px;
    width: 100%;
    background: #cad3de;
    margin-top: 15px;
    margin-bottom: 15px;
}

.custom-checkbox > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.custom-checkbox > span {
    display: inline-flex;
    align-items: center;
    user-select: none;
}

.custom-checkbox > span::before {
    content: "";
    display: inline-block;
    width: 17px;
    height: 18px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 65% 65%;
}

.custom-checkbox > input:not(:disabled):not(:checked) + span:hover::before {
    border-color: #b3d7ff;
}

.custom-checkbox > input:not(:disabled):active + span::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
}

.custom-checkbox > input:focus + span::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-checkbox > input:focus:not(:checked) + span::before {
    border-color: #80bdff;
}

.custom-checkbox > input:checked + span::before {
    border-color: #0f99f5;
    background-color: #0f99f5;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.disabled span::before {
    border: 1px solid #c9ccd1;
    cursor: default;
}

.disabled span {
    color: #ababab;
    cursor: default;
}

.slider-container {
    position: relative;
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
}

.slider-text-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #ffffff;
    margin-top: 10px;
}

input[type="range"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    outline: none;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    background-color: transparent;
    pointer-events: none;
}
.slider-track {
    width: 100%;
    height: 5px;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    background-color: #0f99f5;
    border-radius: 5px;
}
input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 5px;
}
input[type="range"]::-moz-range-track {
    -moz-appearance: none;
    height: 5px;
}
input[type="range"]::-ms-track {
    appearance: none;
    height: 5px;
}
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: #96a0b3;
    cursor: pointer;
    margin-top: -9px;
    pointer-events: auto;
    border-radius: 50%;
}
input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #96a0b3;
    pointer-events: auto;
}
input[type="range"]::-ms-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #96a0b3;
    pointer-events: auto;
}
input[type="range"]:active::-webkit-slider-thumb {
    background-color: #ffffff;
    border: 3px solid #96a0b3;
}

.more span {
    color: #007acc;
    font-size: 14px;
    cursor: pointer;
}

.more span::after {
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    background-image: url("../assets/img/drop_down.svg");
    margin-top: 2px;
    margin-left: 5px;
}
</style>
