<template>
  <div class="sub-container">
    <div class="header-image">
      <img class="header-img" src="../assets/sub.png" alt="">
    </div>
    <div class="login-container">
      <div class="form-container">
        <form @submit="addSubscription">
          <div class="header">
            <h3> Subscription!</h3>
          </div>
          <div class="input-group">
            <label for="">Plans</label>
            <select v-model="planSelected">
              <option disabled>Please select Plan</option>
              <option v-for="(planItem, i) in planItems[0].select" :key="i" :value="planItem">
                {{ planItem }}
              </option>
            </select>
          </div>
          <div class="input-group">
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required v-model="email">
          </div>
          <div class="input-group">
            <label for="contact"><b>Contact</b></label>
            <input type="text" placeholder="Enter Contact" name="contact" required v-model="contact">
          </div>
          <div class="input-group">
            <label for="">Card Type</label>
            <select v-model="cardSelected">
              <option disabled>Please select card</option>
              <option v-for="(cardItem, i) in cardItems[0].select" :key="i" :value="cardItem">
                {{ cardItem }}
              </option>
            </select>
          </div>
          <div class="input-group">
            <label for="cardNumber"><b>Card Number</b></label>
            <input type="text" placeholder="Enter card number" name="cardNumber" required v-model="cardNumber">
          </div>
          <div class="input-group">
            <label for="cardName"><b>Card Holder Name</b></label>
            <input type="text" placeholder="Enter name" name="cardName" required v-model="cardName">
          </div>
          <Button type="first" text="Submit"></Button>
          <router-link :to="{ path: '/profile' }"><Button type="second" text="Cancel" /></router-link>
          <span class="psw"> <router-link :to="{ path: '/Email' }">
            </router-link> </span>
        </form>
      </div>
      <div class="login-image">
        <img class="image" :src="require('@/assets/aboutUs/loginImage.jpg')" alt="Placeholder image">
      </div>
    </div>
  </div>
</template>
<script>
import Button from '@/components/Button.vue';
export default {
  components: {
    Button,
  },
  methods: {
    async addSubscription(e) {
      e.preventDefault();
      let newSub = {
        email: this.email,
        cardName: this.cardName,
        cardNumber: this.cardNumber,
        contact: this.contact,
        planSelected: this.planSelected,
        cardSelected: this.cardSelected,
      }
      const dataUser = await fetch(`http://localhost:5001/users/${this.$store.state.loginDetails.id}`);
      let dataRes = await dataUser.json()
      console.log(dataRes)

      dataRes = {...dataRes, newSub}
      console.log(dataRes)
      const res = await fetch(`http://localhost:5001/users/${this.$store.state.loginDetails.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataRes),
      });
      const data = await res.json();
      console.log(data);
      alert("Subscribed Successfully!");
    }
  },
  data() {
    return {
      cardName: '',
      cardNumber: '',
      email: '',
      contact: '',
      planItems: [{ "select": ["3 Months", "6 Months", "12 Months"] }],
      planSelected: '',
      cardItems: [{ "select": ["Visa", "Master", "Platinum"] }],
      cardSelected: '',
      user: this.$store.state.loginDetails
    }
  },
};
</script>
<style lang="scss" scoped>
.sub-container {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
}

.login-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 100px;
  flex-wrap: nowrap;

  .form-container {
    border: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    box-shadow: 3px 5px 5px #00000021;
    border-radius: 15px;
    padding: 70px 0px 70px 0px;
    resize: vertical;
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    flex-direction: column;

    label {
      color: #000000;
      font-size: 17px;
      font-weight: 500;
    }

    input[type="text"],
    select {
      font-size: 18px;
      height: 50px;
      width: 500px;
      padding-left: 10px;
      padding-right: 10px;
      color: rgb(91, 91, 91);
      border: 1px solid #383838;
      border-radius: 4px;
      background: white;
      outline: none;
    }
  }



  .login-image {
    display: flex;
    justify-content: center;
  }

  .image {
    width: 95%;
  }
}
</style>