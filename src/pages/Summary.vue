<template>
  <header-vue />
  <pagenete step="1" />
  <div class="container__title">
    <div class="content__title">
      <h5 class="title">Trip Summary</h5>
      <div class="direction">
        <h2 class="first__direction">{{ this.$route.params.depar }}</h2>
        <span class="icon__direction"></span>
        <h2 class="first__direction">
          {{ this.$route.params.return }}
        </h2>
      </div>
    </div>
  </div>
  <div class="container__main">
    <form action="" class="form">
      <div class="container__info">
        <div class="info__title">
          <h4 class="info__title_text">Flight details</h4>
          <span class="flight_details__descr">
            Departure and arrival times are shown in local time
          </span>
        </div>
        <div class="info__content">
          <div class="info__forms">
            <ticket-vue>
              <template v-slot:airline_1>{{
                $route.params.airline_1
              }}</template>
              <template v-slot:airline_2></template>
              <template v-slot:depart_time>{{
                $route.params.depart_time
              }}</template>
              <template v-slot:arrival_time>{{
                $route.params.arrival_time
              }}</template>
              <template v-slot:depart_city>{{
                $route.params.depart_city
              }}</template>
              <template v-slot:arrival_city>{{
                $route.params.arrival_city
              }}</template>
              <template v-slot:button
                ><div>
                  <div class="title-details">Qatar Airways</div>
                  <div class="dis-details">Flight QR-338, Boeing777-200LR</div>
                </div></template
              >
              <template v-slot:fly_time>{{ $route.params.fly_time }}</template>
            </ticket-vue>
          </div>
        </div>
      </div>

      <div class="container__info">
        <div class="info__title">
          <h4 class="info__title_text">Select fare</h4>
        </div>
        <div class="fare__container">
          <div class="fare__direction">
            {{ this.$route.params.depar }}
            &mdash;
            {{ this.$route.params.return }}
          </div>
          <div class="fare__item">
            <div class="fare__item_title">Classic</div>
            <div class="fare__item_price">{{ currency }}{{ this.$route.params.price }}</div>
            <div class="fare__item-adv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 101.6"
              >
                <path
                  class="cls-1"
                  d="M4.67,67.27c-14.45-15.53,7.77-38.7,23.81-24C34.13,48.4,42.32,55.9,48,61L93.69,5.3c15.33-15.86,39.53,7.42,24.4,23.36L61.14,96.29a17,17,0,0,1-12.31,5.31h-.2a16.24,16.24,0,0,1-11-4.26c-9.49-8.8-23.09-21.71-32.91-30v0Z"
                  fill="#23c256"
                />
              </svg>
              <span> Carry-on luggage: 1 piece, total weight up to 7 kg </span>
            </div>
            <div class="fare__item-adv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 101.6"
              >
                <path
                  class="cls-1"
                  d="M4.67,67.27c-14.45-15.53,7.77-38.7,23.81-24C34.13,48.4,42.32,55.9,48,61L93.69,5.3c15.33-15.86,39.53,7.42,24.4,23.36L61.14,96.29a17,17,0,0,1-12.31,5.31h-.2a16.24,16.24,0,0,1-11-4.26c-9.49-8.8-23.09-21.71-32.91-30v0Z"
                  fill="#23c256"
                />
              </svg>
              <span> Checked luggage: 2 pieces, weight up to 23 kg </span>
            </div>
            <div class="fare__item-adv">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 512 512"
              >
                <g fill="#96A0B3">
                  <path
                    d="m176,224c-61.758,0-112,50.242-112,112s50.242,112 112,112 112-50.242 112-112-50.242-112-112-112zm0,192c-44.109,0-80-35.891-80-80s35.891-80 80-80 80,35.891 80,80-35.891,80-80,80z"
                  />
                  <path
                    d="m192,352v-48c0-8.836-7.164-16-16-16h-16c-8.836,0-16,7.164-16,16s7.164,16 16,16v32c-8.836,0-16,7.164-16,16s7.164,16 16,16h32c8.836,0 16-7.164 16-16s-7.164-16-16-16z"
                  />
                  <path
                    d="M319.867,0C224.523,0,128,27.477,128,80v86.823C54.238,187.788,0,255.609,0,336c0,97.047,78.953,176,176,176   c38.672,0,74.352-12.685,103.426-33.908C292.816,479.226,306.359,480,320,480c95.414,0,192-27.477,192-80V80   C512,27.477,415.344,0,319.867,0z M32,336c0-79.398,64.602-144,144-144s144,64.602,144,144s-64.602,144-144,144S32,415.398,32,336z    M480,400c0,19.109-63.813,48-160,48c-2.818,0-5.371-0.215-8.121-0.271c11.822-14.352,21.262-30.675,28.102-48.289   c54.863-2.231,107.734-13.47,140.02-33.425V400z M480,320c0,17.095-51.244,41.965-130.906,47.021   C350.898,356.932,352,346.6,352,336c0-5.804-0.32-11.534-0.871-17.195c50.795-3.225,98.785-14.192,128.871-32.789V320z M480,240   c0,17.386-53.023,42.789-135.02,47.236c-4.902-16.961-12.25-32.869-21.707-47.316c60.66-0.418,121.17-11.927,156.727-33.904V240z    M480,160c0,19.109-63.945,48-160.133,48c-8.367,0-16.383-0.296-24.227-0.713C264.203,178.047,222.219,160,176,160   c-5.344,0-10.607,0.333-15.832,0.802C160.145,160.539,160,160.26,160,160v-33.887C196.221,148.439,258.207,160,319.867,160   c61.772,0,123.869-11.57,160.133-33.914V160z M319.867,128C223.758,128,160,99.109,160,80s63.758-48,159.867-48   C416.133,32,480,60.891,480,80S416.133,128,319.867,128z"
                  />
                </g>
              </svg>
              <span> Change flights available for a fee </span>
            </div>
            <div class="fare__item-adv">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 512 512"
              >
                <g fill="#96A0B3">
                  <path
                    d="m176,224c-61.758,0-112,50.242-112,112s50.242,112 112,112 112-50.242 112-112-50.242-112-112-112zm0,192c-44.109,0-80-35.891-80-80s35.891-80 80-80 80,35.891 80,80-35.891,80-80,80z"
                  />
                  <path
                    d="m192,352v-48c0-8.836-7.164-16-16-16h-16c-8.836,0-16,7.164-16,16s7.164,16 16,16v32c-8.836,0-16,7.164-16,16s7.164,16 16,16h32c8.836,0 16-7.164 16-16s-7.164-16-16-16z"
                  />
                  <path
                    d="M319.867,0C224.523,0,128,27.477,128,80v86.823C54.238,187.788,0,255.609,0,336c0,97.047,78.953,176,176,176   c38.672,0,74.352-12.685,103.426-33.908C292.816,479.226,306.359,480,320,480c95.414,0,192-27.477,192-80V80   C512,27.477,415.344,0,319.867,0z M32,336c0-79.398,64.602-144,144-144s144,64.602,144,144s-64.602,144-144,144S32,415.398,32,336z    M480,400c0,19.109-63.813,48-160,48c-2.818,0-5.371-0.215-8.121-0.271c11.822-14.352,21.262-30.675,28.102-48.289   c54.863-2.231,107.734-13.47,140.02-33.425V400z M480,320c0,17.095-51.244,41.965-130.906,47.021   C350.898,356.932,352,346.6,352,336c0-5.804-0.32-11.534-0.871-17.195c50.795-3.225,98.785-14.192,128.871-32.789V320z M480,240   c0,17.386-53.023,42.789-135.02,47.236c-4.902-16.961-12.25-32.869-21.707-47.316c60.66-0.418,121.17-11.927,156.727-33.904V240z    M480,160c0,19.109-63.945,48-160.133,48c-8.367,0-16.383-0.296-24.227-0.713C264.203,178.047,222.219,160,176,160   c-5.344,0-10.607,0.333-15.832,0.802C160.145,160.539,160,160.26,160,160v-33.887C196.221,148.439,258.207,160,319.867,160   c61.772,0,123.869-11.57,160.133-33.914V160z M319.867,128C223.758,128,160,99.109,160,80s63.758-48,159.867-48   C416.133,32,480,60.891,480,80S416.133,128,319.867,128z"
                  />
                </g>
              </svg>
              <span> Refund available for a fee </span>
            </div>
            <button class="fare__item-btn">Selected</button>
          </div>

          <div class="fare__alert">
            <div class="fare__alert-title">
              Luggage can only be added in fares
            </div>
            <div class="fare__alert-descr">
              There is no option to add luggage on this flight. Please bear this
              in mind when selecting your fare
            </div>
          </div>
        </div>
      </div>

      <div class="container__info">
        <div class="info__title">
          <h4 class="info__title_text">Contact Information</h4>
        </div>
        <div class="info__content" style="border-top: none; margin-top: -20px">
          <span class="flight_details__descr">
            We will send your ticket by email, send notifications about flight
            changes or in case of other emergency situations
          </span>
          <div class="info__forms">
            <div class="info__input">
              <label for="null" class="info__label">Email</label>
              <div class="input__wrapper">
                <input
                  type="text"
                  placeholder="Email"
                  autocomplete="no"
                  class="input"
                  value=""
                />
              </div>
            </div>
            <div class="info__input p-10">
              <label for="null" class="info__label">Phone number</label>
              <div class="input__wrapper">
                <input
                  type="text"
                  placeholder="Phone number"
                  autocomplete="no"
                  class="input"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container__info">
        <div class="info__title">
          <h4 class="info__title_text">Passenger information</h4>
          <div class="info__descr">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 554.2 554.199"
            >
              <g fil>
                <path
                  d="M538.5,386.199L356.5,70.8c-16.4-28.4-46.7-45.9-79.501-45.9c-32.8,0-63.1,17.5-79.5,45.9L12.3,391.6
		c-16.4,28.4-16.4,63.4,0,91.8C28.7,511.8,59,529.3,91.8,529.3H462.2c0.101,0,0.2,0,0.2,0c50.7,0,91.8-41.101,91.8-91.8
		C554.2,418.5,548.4,400.8,538.5,386.199z M316.3,416.899c0,21.7-16.7,38.3-39.2,38.3s-39.2-16.6-39.2-38.3V416
		c0-21.601,16.7-38.301,39.2-38.301S316.3,394.3,316.3,416V416.899z M317.2,158.7L297.8,328.1c-1.3,12.2-9.4,19.8-20.7,19.8
		s-19.4-7.7-20.7-19.8L237,158.6c-1.3-13.1,5.801-23,18-23H299.1C311.3,135.7,318.5,145.6,317.2,158.7z"
                  fill="#FC6100"
                />
              </g>
            </svg>
            <span>
              The number of passengers for this airline can only be changed with
              a new search
            </span>
          </div>
        </div>
        <div class="info__content">
          <div class="info__forms">
            <div class="info__input">
              <label for="null" class="info__label">First name</label>
              <div class="input__wrapper">
                <input
                  type="text"
                  placeholder="John"
                  autocomplete="no"
                  class="input"
                  value=""
                />
              </div>
            </div>
            <div class="info__input p-10">
              <label for="null" class="info__label">Last name</label>
              <div class="input__wrapper">
                <input
                  type="text"
                  placeholder="Smith"
                  autocomplete="no"
                  class="input"
                  value=""
                />
              </div>
            </div>
          </div>
          <div class="info__forms">
            <div class="info__input">
              <label for="null" class="info__label">Date of birth</label>
              <div class="input__wrapper">
                <input
                  type="text"
                  placeholder="Day"
                  autocomplete="no"
                  class="input"
                  value=""
                />

                <input
                  type="text"
                  placeholder="Month"
                  autocomplete="no"
                  class="input"
                  value=""
                  style="margin-left: 10px; margin-right: 10px"
                />

                <input
                  type="text"
                  placeholder="Year"
                  autocomplete="no"
                  class="input"
                  value=""
                />
              </div>
            </div>
            <div class="info__input p-10">
              <label for="null" class="info__label">Sex</label>
              <div class="input__wrapper">
                <input
                  type="text"
                  placeholder="Male"
                  autocomplete="no"
                  class="input"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="confirm">
        <div class="confirm_prices">
          <div class="confirm_price">
            <h3 class="price_title">Total price:</h3>
            <div class="price">
              {{ currency }}{{ this.$route.params.price }}
            </div>
          </div>
          <button
            type="button"
            class="confirm_submit"
            @click="
              this.$router.push({
                name: 'Payment',
                params: {
                  depar: this.$route.params.depar,
                  return: this.$route.params.return,
                  price: this.$route.params.price,
                },
              })
            "
          >
            Go to payment
          </button>
        </div>
      </div>
    </form>
  </div>
  <footer-vue />
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import Pagenete from "@/components/Pagenete.vue";
import FooterVue from "@/components/Footer.vue";
import TicketVue from "@/components/Ticket.vue";
import { currency } from "@/plugins/currency";

export default {
  components: {
    HeaderVue,
    Pagenete,
    FooterVue,
    TicketVue,
  },
  data() {
    return {
      currency: currency(),
      color: ["#ffb40c", "#2aabe8", "#203484", "#ce2633", "#b3d643", "#5c1b69"],
    };
  },
};
</script>

<style scoped>
.title-details {
  font-size: 14px;
  line-height: 16px;
}
.dis-details {
  font-size: 14px;
  line-height: 16px;
  color: #808080;
}
.btn {
  width: 100%;
  background-color: #ff7d03;
  font-weight: 700;
  letter-spacing: -0.2px;
  padding: 9px 10px;
  font-family: inherit;
  border: none;
  outline: none;
  margin: 0;
  display: inline-block;
  color: #ffffff;
  font-size: 20px;
  line-height: 20px;
  transform: translateZ(0);
  border-radius: 8px;
  cursor: pointer;
}
.error {
  color: #e64926;
  font-size: 18px;
  text-align: center;
  margin-top: 15px;
}
.detalis_link {
  display: inline-flex;
  align-items: center;
  color: #007acc;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  transition-property: color;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
}
.detalis_text {
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  margin-right: 6px;
}
.confirm_detalis {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dde3eb;
  padding: 0 0 12px;
}
.price {
  color: #fc6100;
  font-size: 30px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.6px;
  margin: 0;
  margin-left: 16px;
}
.price_title {
  font-size: 30px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.6px;
  margin: 0;
}
.confirm_submit {
  font-family: inherit;
  border: none;
  outline: none;
  margin: 0;
  display: inline-block;
  color: #ffffff;
  background: #0f99f5;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  transform: translateZ(0);
  border-radius: 8px;
  padding: 10px;
  padding-right: 20px;
  padding-left: 12.5px;
  transition: 0.15s ease-out;
  transition-property: opacity, box-shadow;
}
.confirm_price {
  display: flex;
  align-self: center;
}
.confirm_prices {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.confirm {
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgb(98 112 139 / 10%);
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 32px;
}
.card_date {
  -webkit-box-flex: 1;
  flex-grow: 1;
}
.card_date_cvv {
  display: flex;
  margin-left: 17px;
  width: 50%;
}
.card_placeholder {
  flex: 1;
}
.card_data {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 20px;
}
.card_nember {
  flex: 1;
}
.title_card {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
  margin: 0;
}
.title_card_container {
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 20px;
}
.payment_card_content {
  width: 540px;
  padding: 25px 30px;
  border-radius: 8px;
  background: #f0f5fa;
  padding-bottom: 60px;
}
.payment_card_container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.payment_title {
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.4px;
  margin: 0;
  margin-bottom: 18px;
}
.payment_content {
  width: 100%;
}
.payment {
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgb(98 112 139 / 10%);
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 32px;
  margin-top: 12px;
  display: flex;
  align-items: center;
}
.form {
  width: 100%;
}
.input {
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  line-height: normal;
  border: none;
  min-height: 38px;
  font-family: inherit;
  opacity: 1;
  padding-left: 22px;
  padding-right: 11px;
  font-size: 16px;
  color: #333333;
  background-color: transparent;
  background-color: #fafbfc;
  border-radius: 8px;
  border: 1px solid #dde3eb;
  border-style: solid;
}
.input__wrapper {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  transition: 0.15s ease-out;
  transition-property: border-color;
  margin-right: 10px;
}
.info__label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
  user-select: none;
}
.info__forms {
  display: flex;
  margin-top: 12px;
  flex-wrap: wrap;
}
.info__content {
  border-top: 1px solid #dde3eb;
  padding: 32px;
  padding-top: 10px;
}
.container__main {
  width: 1176px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
}
.info__title_text {
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.4px;
  margin: 0;
}
.info__title {
  position: relative;
  padding: 32px;
}
.container__info {
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgb(98 112 139 / 10%);
  border-radius: 8px;
  margin-bottom: 24px;
  margin-top: 24px;
}
.container__title {
  width: 1176px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.content__title {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.title {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
  margin: 0;
  margin-bottom: 4px;
  display: block;
}
.direction {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.first__direction {
  font-size: 38px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: -1px;
  margin: 0;
}
.icon__direction {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMgMTJoMThtMCAwbC0zLTNtMyAzbC0zIDMiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==);
  display: inline-block;
  background-size: contain;
  margin-left: 19px;
  margin-right: 19px;
  width: 24px;
  height: 24px;
}
.direction__date {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #808080;
}
.flight_details__descr {
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #808080;
}
@media screen and (max-width: 1199px) {
  .container__title,
  .container__main {
    margin: 0;
    width: auto;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }
  .content__title {
    margin: 0;
    width: auto;
    flex-direction: column;
    padding: 0 18px;
  }
  .title {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.1px;
  }
  .first__direction {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.4px;
  }
  .payment {
    margin-top: 0;
    border-top: 0;
  }
}

@media screen and (max-width: 599px) {
  .container__info {
    margin-bottom: 16px;
  }
  .info__title {
    padding: 16px;
  }
  .info__forms {
    flex-direction: column;
  }
  .p-10 {
    padding-top: 10px;
  }
  .payment_card_content {
    width: calc(100% + 36px);
    padding: 30px 16px;
    margin: 0 -18px;
    border-radius: 0px;
    border-left: none;
    border-right: none;
  }
  .payment {
    padding: 16px;
  }
  .card_data {
    display: block;
  }
  .card_date_cvv {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }
  .card_date {
    flex-grow: 0;
    width: 100%;
  }
  .card_cvv {
    width: 100%;
  }
  .confirm_prices {
    display: block;
  }
  .confirm_price {
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-self: stretch;
    margin-bottom: 16px;
  }
  .price,
  .price_title {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.1px;
    margin: 0;
  }
  .confirm_submit {
    width: 100%;
  }
}

.fare__direction {
  margin-top: 10px;
  margin-bottom: 8px;
  padding-left: 5px;
  font-size: 18px;
  color: #808080;
}

.fare__container {
  margin-top: -20px;
  padding: 32px;
  padding-top: 0px;
}

.fare__item {
  padding: 16px 24px 22px;
  border-radius: 8px;
  border: 1px solid #ff9100;
  background: #fefdf9;
  max-width: 420px;
}

.fare__item_title {
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
}

.fare__item_price {
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.4px;
  font-weight: 600;
  margin-bottom: 13px;
}

.fare__item-adv {
  margin-left: 5px;
  margin-bottom: 5px;
}

.fare__item-adv svg {
  height: 16px;
  width: 16px;
}

.fare__item-adv span {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-left: 10px;
}

.fare__item-btn {
  margin-top: 12px;
  background: #fdf7e8;
  color: #808080;
  font-family: inherit;
  border: none;
  outline: none;
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  transform: translateZ(0);
  border-radius: 8px;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  transition: 0.15s ease-out;
  transition-property: opacity, box-shadow;
}

.fare__alert {
  margin: 25px 0 10px;
  padding: 12px 18px;
  background: #e5f5ff;
  border-radius: 8px;
}

.fare__alert-title {
  color: #333333;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  display: block;
  font-weight: 600;
}

.fare__alert-descr {
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}

.info__descr {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.info__descr svg {
  height: 18px;
  width: 18px;
}

.info__descr span {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-left: 6px;
}
</style>
