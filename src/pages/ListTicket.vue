<template>
  <header-vue />

  <div class="container__search">
    <div class="content__search">
      <input-search />
      <div class="container-menu" v-if="tickets.length > 0">
        <div class="menu-sort" @click="sort = 1">
          <div class="sort-title">Cheapest</div>
          <div class="sort-discript">
            from {{ tickets[0].price }} {{ currency }}
          </div>
          <div class="sort-select" v-if="sort == 1"></div>
        </div>
        <div class="menu-sort" @click="sort = 2">
          <div class="sort-title">Recommended</div>
          <div class="sort-discript">
            from {{ tickets[0].price }} {{ currency }}
          </div>
          <div class="sort-select" v-if="sort == 2"></div>
        </div>
        <div class="menu-sort" @click="sort = 3">
          <div class="sort-title">Fastest</div>
          <div class="sort-discript">
            from {{ tickets[0].price }} {{ currency }}
          </div>
          <div class="sort-select" v-if="sort == 3"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="main_container">
    <div class="container__list_ticket" v-if="tickets.length > 0">
      <div class="content__list_ticket">
        <div class="list__tickets">
          <ticket-vue
            v-for="(ticket, index) in tickets"
            :key="index"
            :price="ticket.price"
          >
            <template v-slot:best_price
              ><div
                class="good-price"
                v-if="index == 1 || index == 3 || index == 5"
              >
                Best price guarantee
              </div></template
            >
            <template v-slot:airline_1>{{ ticket.airline }}</template>
            <template v-slot:airline_2></template>
            <template v-slot:depart_time>{{
              ticket.departureTime.split(" ")[1]
            }}</template>
            <template v-slot:arrival_time>{{
              ticket.arrivalTime.split(" ")[1]
            }}</template>
            <template v-slot:depart_city
              >{{ ticket.departureTime.split(" ")[0] }},
              {{ ticket.departureAirport }}</template
            >
            <template v-slot:arrival_city
              >{{ ticket.arrivalTime.split(" ")[0] }},
              {{ ticket.arrivalAirport }}</template
            >
            <template v-slot:fly_time>{{ ticket.flightTime }}</template>
            <template v-slot:button
              ><button
                type="button"
                class="btn"
                @click="
                  this.$router.push({
                    name: 'Summary',
                    params: {
                      depar: this.$route.params.city_departure,
                      return: this.$route.params.city_arrival,
                      price: ticket.price,
                      airline_1: ticket.airline,
                      depart_time: ticket.departureTime.split(' ')[1],
                      arrival_time: ticket.arrivalTime.split(' ')[1],
                      depart_city:
                        ticket.departureTime.split(' ')[0] +
                        ' ' +
                        ticket.departureAirport,
                      arrival_city:
                        ticket.arrivalTime.split(' ')[0] +
                        ' ' +
                        ticket.arrivalAirport,
                      fly_time: ticket.flightTime,
                    },
                  })
                "
              >
                Buy for {{ currency }}{{ ticket.price }}
              </button></template
            >
            <template v-slot:line_1
              ><div
                class="line"
                :style="{
                  'background-color': color[Math.floor(Math.random() * 6)],
                }"
              ></div
            ></template>
            <template v-slot:line_3
              ><div
                class="line"
                :style="{
                  'background-color': color[Math.floor(Math.random() * 6)],
                }"
              ></div
            ></template>
          </ticket-vue>
        </div>
      </div>
    </div>
    <div class="wait__container" v-else>
      <div class="loading-line"></div>
      <div class="logo"><img src="../assets/img/logo.png" alt="" /></div>
      <div class="wait_direction">
        {{ this.$route.params.city_departure }} -
        {{ this.$route.params.city_arrival }}
      </div>
      <div class="time_flying">{{ timeFlying }}</div>
      <div class="wait__content">
        <div class="wait__tickets"></div>
        <div class="text-info-loading">Please wait just a little longer</div>

        <div class="text-info-cont">
          <div class="text-info-descr">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 101.6">
              <path
                class="cls-1"
                d="M4.67,67.27c-14.45-15.53,7.77-38.7,23.81-24C34.13,48.4,42.32,55.9,48,61L93.69,5.3c15.33-15.86,39.53,7.42,24.4,23.36L61.14,96.29a17,17,0,0,1-12.31,5.31h-.2a16.24,16.24,0,0,1-11-4.26c-9.49-8.8-23.09-21.71-32.91-30v0Z"
                fill="#23c256"
              />
            </svg>
            <span> Combining different flights into one smart ticket </span>
          </div>
          <div class="text-info-descr">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 101.6">
              <path
                class="cls-1"
                d="M4.67,67.27c-14.45-15.53,7.77-38.7,23.81-24C34.13,48.4,42.32,55.9,48,61L93.69,5.3c15.33-15.86,39.53,7.42,24.4,23.36L61.14,96.29a17,17,0,0,1-12.31,5.31h-.2a16.24,16.24,0,0,1-11-4.26c-9.49-8.8-23.09-21.71-32.91-30v0Z"
                fill="#23c256"
              />
            </svg>
            <span> Over 10,000 people fly with us every day </span>
          </div>
          <div class="text-info-descr">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 101.6">
              <path
                class="cls-1"
                d="M4.67,67.27c-14.45-15.53,7.77-38.7,23.81-24C34.13,48.4,42.32,55.9,48,61L93.69,5.3c15.33-15.86,39.53,7.42,24.4,23.36L61.14,96.29a17,17,0,0,1-12.31,5.31h-.2a16.24,16.24,0,0,1-11-4.26c-9.49-8.8-23.09-21.71-32.91-30v0Z"
                fill="#23c256"
              />
            </svg>
            <span> 24/7 online customer service </span>
          </div>
        </div>
      </div>
    </div>

    <settings-vue />
  </div>

  <footer-vue />
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import FooterVue from "@/components/Footer.vue";
import InputSearch from "@/components/InputSearch.vue";
import TicketVue from "@/components/Ticket.vue";
import { getTicket } from "@/plugins/requests.js";
import { currency } from "@/plugins/currency";
import SettingsVue from "@/components/Settings.vue";
import moment from "moment";

export default {
  components: {
    HeaderVue,
    InputSearch,
    TicketVue,
    FooterVue,
    SettingsVue,
  },
  data() {
    return {
      tickets: [],
      color: ["#ffb40c", "#2aabe8", "#203484", "#ce2633", "#b3d643", "#5c1b69"],
      currency: currency(),
      sort: 1,
      timeFlying: "",
    };
  },
  async mounted() {
    var date = moment(this.$route.params.time);
    this.timeFlying = date.format("dddd, MMMM DD");
    this.tickets = await getTicket(
      this.$route.params.departure,
      this.$route.params.arrival,
      this.$route.params.time,
      Number(this.$route.params.adult),
      Number(this.$route.params.child),
      Number(this.$route.params.infant),
      (this.$route.params.business = this.$route.params.business === "true"),
      localStorage.getItem("currency")
    );
    console.log(this.$route.params.business);
    if (this.tickets === false) {
      await this.$router.push({
        name: "Home",
      });
      location.reload();
    }
  },
};
</script>

<style scoped>
.good-price {
  font-size: 14px;
  line-height: 18px;
  display: block;
  padding: 3px 8px;
  border-radius: 8px;
  background: #def6e6;
  color: #23c256;
  font-weight: 600;
}
.time_flying {
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
}
.sort-select {
  height: 6px;
  background-color: #fc6100;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  position: absolute;
  width: 100%;
  bottom: 0;
}
.sort-title {
  font-size: 16px;
  color: #007acc;
  font-weight: 600;
}
.sort-discript {
  font-size: 14px;
  color: #808080;
}
.menu-sort {
  width: auto;
  margin-right: 30px;
  padding-bottom: 14px;
  padding-top: 14px;
  position: relative;
}
.container-menu {
  display: flex;
  max-width: 1178px;
  margin: 0 auto;
}
.text-info-loading {
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  margin-top: 50px;
}
.loading-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 3px;
  background: #38afff;
  animation-name: loading-line;
  animation-duration: 1.5s;
  animation-iteration-count: 500;
}
@keyframes loading-line {
  0% {
    left: -20%;
  }
  100% {
    left: 100%;
  }
}
.main_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
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
.wait_direction {
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.2px;
  font-weight: 600;
}
.logo > img {
  width: 132px;
  height: 24px;
  min-height: 24px;
  margin-top: 30px;
}
@keyframes wait {
  0% {
    top: 0;
  }
  100% {
    top: 30px;
  }
}
.wait__content {
  flex-grow: 2;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.wait__container {
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #ffffff;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 18px 30px;
  text-align: center;
}
.wait__tickets {
  position: relative;
  min-height: 150px;
  flex-basis: 260px;
  width: 100%;
  min-width: 280px;
  background: url("../assets/img/yoga.svg") no-repeat center;
  background-size: contain;
  animation-name: wait;
  animation-duration: 2s;
  animation-iteration-count: 500;
  animation-direction: alternate;
}
.line {
  height: 3px;
  border-radius: 1.5px;
}
.container__list_ticket {
  padding-top: 24px;
  width: 900px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
}

.content__list_ticket {
  width: 100%;
  flex-grow: 1;
  flex-grow: 1;
}

.list__tickets {
  outline: none;
  -webkit-transition: opacity 0.15s ease-out;
  transition: opacity 0.15s ease-out;
  opacity: 1;
}

.container__search {
  background-color: #ffffff;
  width: 100%;
  padding: 1px 0;
}

.content__search {
  margin: 0 18px;
}
@media screen and (max-width: 1199px) {
  .container__list_ticket {
    max-width: 882px;
    margin-left: auto;
    margin-right: auto;
  }
  .container__list_ticket {
    width: auto;
  }
}
@media screen and (min-width: 600px) and (max-width: 1199px) {
  .list__tickets {
    margin: 0 auto;
  }
}

@media screen and (max-width: 600px) {
  .container__list_ticket {
    margin: 0 10px;
  }
  .container-menu {
    justify-content: center;
  }

  .menu-sort {
    text-align: center;
  }
}

@media screen and (max-width: 800px) {
  .main_container {
    flex-direction: column;
    align-items: center;
  }
}

.text-info-cont {
  margin-top: 50px;
  font-size: 16px;
  color: #333333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.text-info-descr:first-child {
  margin-left: 0;
}

.text-info-descr {
  margin-left: 40px;
  max-width: 200px;
}

.text-info-descr svg {
  height: 16px;
  width: 16px;
}

@media screen and (max-width: 800px) {
  .text-info-cont {
    font-size: 15px;
  }
}
</style>
