<template>
  <div class="sub-container">
    <div class="header-image">
      <img class="header-img" src="../assets/sub.png" alt="">
    </div>
    <div class="login-container">
      <div class="form-container">
        <form>
          <div class="header">
            <h3> Welcome to Bloggen!</h3>
          </div>
          <div class="input-group">
            <label for="">Plans</label>
            <select>
              <option>3 Month</option>
              <option>6 Month</option>
              <option>12 Month</option>
            </select>
          </div>
          <div class="input-group">
            <label for="psw"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="psw" required>
          </div>
          <div class="input-group">
            <label for="uname"><b>Contact</b></label>
            <input type="text" placeholder="Enter Contact" name="uname" required>
          </div>
          <div class="input-group">
            <label for="">Card Type</label>
            <select>
              <option>Visa</option>
              <option>Master</option>
              <option>Platinum</option>
            </select>
          </div>
          <div class="input-group">
            <label for="psw"><b>Card Number</b></label>
            <input type="text" placeholder="Enter card number" name="psw" required>
          </div>
          <div class="input-group">
            <label for="uname"><b>Card Holder Name</b></label>
            <input type="text" placeholder="Enter name" name="uname" required>
          </div>
          <Button type="first" text="Submit"></Button>
          <router-link :to="{ path: '/Registration' }"><Button type="second" text="Cancel" /></router-link>
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
  }
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